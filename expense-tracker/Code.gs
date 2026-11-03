const EXPENSE_SHEET_ID_PROPERTY = "EXPENSE_SPREADSHEET_ID";
const EXPENSE_TIME_ZONE = "Asia/Taipei";
const EXPENSE_SHEET_NAME = "記帳明細";
const ESUN_RATE_URL = "https://www.esunbank.com/zh-tw/personal/deposit/rate/forex/foreign-exchange-rates";

function doGet() {
  return HtmlService.createHtmlOutputFromFile("Index")
    .setTitle("九州家族旅行記帳");
}

function setupExpenseTracker() {
  const spreadsheet = getExpenseSpreadsheet_();
  console.log("九州家族旅行試算表：" + spreadsheet.getUrl());
  console.log("請將此 Apps Script 部署為執行身分為「我」、存取權為「任何人」的網頁應用程式。");
  console.log("注意：任何取得部署網址的人都能查看及新增記帳資料。");
}

function authorizeExpenseTracker() {
  const rate = getEsunYenCashSellingRate_();
  console.log("已成功讀取玉山銀行日圓現金賣出匯率：" + rate.value);
}

function getExpenseDashboard() {
  const sheet = getExpenseSheet_();
  const lastRow = sheet.getLastRow();
  const rows = lastRow > 1
    ? sheet.getRange(2, 1, lastRow - 1, 7).getValues()
    : [];
  const totals = rows.reduce(function (sum, row) {
    sum.jpy += Number(row[2]) || 0;
    sum.twd += Number(row[3]) || 0;
    return sum;
  }, { jpy: 0, twd: 0 });

  const recent = rows.slice(-30).reverse().map(function (row) {
    return {
      time: formatExpenseDate_(row[0]),
      item: String(row[1]),
      jpy: Number(row[2]) || 0,
      twd: Number(row[3]) || 0,
      rate: Number(row[4]) || 0,
      source: String(row[5] || "")
    };
  });

  return {
    rate: getEsunYenCashSellingRate_(),
    totals: totals,
    entries: recent,
    spreadsheetUrl: getExpenseSpreadsheet_().getUrl()
  };
}

function saveExpense(input) {
  if (!input || typeof input.item !== "string") {
    throw new Error("請輸入購買品名。");
  }
  const item = input.item.trim();
  if (!item || item.length > 120) {
    throw new Error("購買品名需為 1 到 120 個字元。");
  }

  const amount = Number(input.amount);
  if (!Number.isFinite(amount) || amount <= 0 || amount > 100000000) {
    throw new Error("金額須為大於 0 的有效數字。");
  }
  if (input.currency !== "JPY" && input.currency !== "TWD") {
    throw new Error("幣別無效，請重新選擇輸入欄位。");
  }

  const rate = getEsunYenCashSellingRate_();
  const jpy = input.currency === "JPY" ? amount : Math.round(amount / rate.value);
  const twd = input.currency === "TWD" ? amount : Math.round(amount * rate.value);
  const sheet = getExpenseSheet_();
  sheet.appendRow([
    new Date(),
    item,
    jpy,
    twd,
    rate.value,
    "玉山銀行 JPY 現金匯率賣出",
    rate.retrievedAt
  ]);
  return {
    item: item,
    jpy: jpy,
    twd: twd,
    rate: rate.value,
    source: rate.source
  };
}

function getExpenseSpreadsheet_() {
  const properties = PropertiesService.getScriptProperties();
  const existingId = properties.getProperty(EXPENSE_SHEET_ID_PROPERTY);
  if (existingId) {
    return SpreadsheetApp.openById(existingId);
  }

  const spreadsheet = SpreadsheetApp.create("九州家族旅行");
  spreadsheet.setSpreadsheetTimeZone(EXPENSE_TIME_ZONE);
  properties.setProperty(EXPENSE_SHEET_ID_PROPERTY, spreadsheet.getId());
  const sheet = spreadsheet.getSheets()[0];
  sheet.setName(EXPENSE_SHEET_NAME);
  sheet.appendRow([
    "購買時間",
    "購買品名",
    "日幣金額（JPY）",
    "台幣金額（TWD）",
    "匯率（TWD/JPY）",
    "匯率來源及種類",
    "匯率讀取時間"
  ]);
  sheet.setFrozenRows(1);
  sheet.getRange(1, 1, 1, 7)
    .setFontWeight("bold")
    .setBackground("#F6D27A");
  sheet.getRange("A:A").setNumberFormat("yyyy-mm-dd hh:mm:ss");
  sheet.getRange("C:E").setNumberFormat("#,##0.####");
  sheet.autoResizeColumns(1, 7);
  return spreadsheet;
}

function getExpenseSheet_() {
  const spreadsheet = getExpenseSpreadsheet_();
  const sheet = spreadsheet.getSheetByName(EXPENSE_SHEET_NAME);
  if (!sheet) {
    throw new Error("找不到記帳明細工作表，請檢查九州家族旅行試算表。");
  }
  sheet.getRange(1, 5, 1, 2).setValues([[
    "匯率（TWD/JPY）",
    "匯率來源及種類"
  ]]);
  return sheet;
}

function getEsunYenCashSellingRate_() {
  const response = UrlFetchApp.fetch(ESUN_RATE_URL, {
    followRedirects: true,
    muteHttpExceptions: true,
    headers: { "User-Agent": "Mozilla/5.0" }
  });
  if (response.getResponseCode() !== 200) {
    throw new Error("無法讀取玉山銀行牌告匯率（HTTP " +
      response.getResponseCode() + "），請稍後重試或查看玉山銀行網站。");
  }

  const html = response.getContentText("UTF-8");
  if (/Challenge Validation|id=["']sec-cpt-if["']|challenge=["']/i.test(html)) {
    throw new Error("玉山銀行網站目前回傳防護驗證頁，Apps Script 無法取得牌告匯率；未新增記帳資料。");
  }

  const scripts = html.match(
    /<script\b(?=[^>]*\btype=["']application\/ld\+json["'])[^>]*>[\s\S]*?<\/script>/gi
  ) || [];
  for (let index = 0; index < scripts.length; index += 1) {
    const jsonText = scripts[index]
      .replace(/^<script\b[^>]*>/i, "")
      .replace(/<\/script>$/i, "");
    const structuredData = JSON.parse(jsonText);
    const rates = structuredData.mainEntity &&
      structuredData.mainEntity.itemListElement;
    if (!Array.isArray(rates)) {
      continue;
    }

    const yenCashSellingRate = rates.find(function (rate) {
      return rate.currency === "JPY" &&
        rate.name === "日圓 現金匯率 銀行賣出" &&
        rate.currentExchangeRate;
    });
    const value = yenCashSellingRate
      ? Number(yenCashSellingRate.currentExchangeRate.price)
      : NaN;
    if (Number.isFinite(value) && value > 0) {
      return {
        value: value,
        source: "玉山銀行日圓現金賣出匯率",
        retrievedAt: formatExpenseDate_(
          yenCashSellingRate.currentExchangeRate.validFrom || new Date()
        )
      };
    }
  }

  throw new Error("玉山銀行匯率頁面未包含日圓現金賣出匯率；未新增記帳資料。");
}

function formatExpenseDate_(value) {
  const date = value instanceof Date ? value : new Date(value);
  if (Number.isNaN(date.getTime())) {
    return String(value || "");
  }
  return Utilities.formatDate(date, EXPENSE_TIME_ZONE, "yyyy-MM-dd HH:mm:ss");
}
