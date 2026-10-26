(function () {
  "use strict";

  /* ---------- 小插圖 (每日) ---------- */
  var S = 'stroke="#3E3A39" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"';
  var ART = {
    plane: '<svg viewBox="0 0 72 72"><rect width="72" height="72" fill="#A8D3E6"/><path d="M8 58 q8-8 20-4 q10-10 22-2 q8-2 14 6 z" fill="#FFFCF6" ' + S + '/><g class="float"><g transform="translate(6 4) scale(.9)"><use href="#i-plane"/></g></g></svg>',
    castle: '<svg viewBox="0 0 72 72"><rect width="72" height="72" fill="#FFFCF6"/><g class="float"><rect x="18" y="40" width="36" height="12" fill="#FFFCF6" ' + S + '/><path d="M12 42 L22 32 H50 L60 42 Z" fill="#3E3A39" ' + S + '/><rect x="24" y="22" width="24" height="11" fill="#FFFCF6" ' + S + '/><path d="M18 24 L28 14 H44 L54 24 Z" fill="#3E3A39" ' + S + '/></g><path d="M14 52 Q20 60 10 70 H62 Q52 60 58 52 Z" fill="#F6D27A" ' + S + '/></svg>',
    aso: '<svg viewBox="0 0 72 72"><rect width="72" height="72" fill="#FFFCF6"/><path d="M4 60 L28 24 Q34 18 40 24 L68 60 Z" fill="#B9DAA5" ' + S + '/><g class="float"><circle cx="36" cy="12" r="5" fill="#FFFCF6" ' + S + '/><circle cx="44" cy="8" r="3.5" fill="#FFFCF6" ' + S + '/></g><path d="M0 60 H72 V72 H0 Z" fill="#F6D27A" ' + S + '/><circle cx="18" cy="64" r="2" fill="#3E3A39"/><circle cx="50" cy="66" r="2" fill="#3E3A39"/></svg>',
    train: '<svg viewBox="0 0 72 72"><rect width="72" height="72" fill="#A8D3E6"/><g class="float"><path d="M4 30 H48 Q66 30 70 46 H4 Z" fill="#FFFCF6" ' + S + '/><rect x="4" y="39" width="66" height="4" fill="#F2A497"/><rect x="10" y="33" width="8" height="5" rx="1.5" fill="#A8D3E6" stroke="#3E3A39" stroke-width="2"/><rect x="24" y="33" width="8" height="5" rx="1.5" fill="#A8D3E6" stroke="#3E3A39" stroke-width="2"/><path d="M50 33 Q58 33 62 38 H50 Z" fill="#A8D3E6" stroke="#3E3A39" stroke-width="2"/></g><path d="M0 54 H72" ' + S + '/><path d="M8 60 h8 M28 60 h8 M48 60 h8" ' + S + '/></svg>',
    plum: '<svg viewBox="0 0 72 72"><rect width="72" height="72" fill="#FFFCF6"/><path d="M14 66 V30 M58 66 V30 M8 28 Q36 20 64 28 L62 34 Q36 28 10 34 Z M12 42 H60" fill="#F2A497" ' + S + '/><g class="float"><use href="#i-blossom" x="26" y="40" width="20" height="20"/></g></svg>',
    sea: '<svg viewBox="0 0 72 72"><rect width="72" height="72" fill="#A8D3E6"/><g class="float"><path d="M14 36 Q30 18 48 36 Q30 54 14 36 Z M48 36 L60 26 V46 Z" fill="#F6D27A" ' + S + '/><circle cx="24" cy="33" r="2.5" fill="#3E3A39"/></g><path d="M0 60 q9-6 18 0 t18 0 t18 0 t18 0 V72 H0 Z" fill="#FFFCF6" ' + S + '/></svg>',
    bag: '<svg viewBox="0 0 72 72"><rect width="72" height="72" fill="#B9DAA5"/><g class="float"><rect x="18" y="24" width="36" height="38" rx="8" fill="#F2A497" ' + S + '/><path d="M28 24 V16 H44 V24 M18 40 H54" fill="none" ' + S + '/><circle cx="26" cy="64" r="3" fill="#3E3A39"/><circle cx="46" cy="64" r="3" fill="#3E3A39"/></g></svg>'
  };

  /* ---------- 交通標籤 ---------- */
  var MODE = {
    "飛機": "coral", "機場巴士": "yellow", "巴士": "yellow", "巡迴巴士": "yellow",
    "市電": "green", "新幹線": "blue", "西鐵電車": "blue", "JR": "blue",
    "船": "blue", "計程車": "coral", "步行": "paper", "地鐵": "green"
  };

  /* ---------- A 方案行程（資料：旅遊小當家 行程草稿 A 大眾運輸＋計程車） ---------- */
  var DAYS = [
    {
      id: "d1", date: "2/28", wd: "日", city: "熊本", title: "抵達熊本", art: "plane",
      items: [
        { time: "10:35", title: "抵達熊本機場 KMJ", modes: ["飛機"], detail: "JX846 抵達。入境、領行李，大約 11:30 出關。" },
        { time: "約 11:30", title: "機場利木津巴士到市區", modes: ["機場巴士"], detail: "到「通町筋」或「熊本桜町バスターミナル」。特別快速 40–45 分（3 號站牌）、一般班次 50–55 分（4 號站牌）。大人 1,400 円，兒童票價待確認。不用預約，先到先上。", alt: "行李太多：計程車到市區約 5,600–5,700 円／台，7 人加行李要兩台；大型計程車（9 人座）需先詢價。" },
        { time: "中午", title: "先到飯店寄放行李", modes: ["步行"], detail: "兩家候選飯店都在下通、新市街一帶，在通町筋或桜町下車都近。" },
        { time: "午餐", title: "サクラマチクマモト（桜町）", modes: ["步行"], detail: "就在巴士總站樓上，有美食街，最輕鬆。" },
        { time: "下午", title: "水前寺成趣園（選擇性）", modes: ["市電"], detail: "搭市電約 20 分。門票大人 500 円、6–15 歲 200 円。不想動就改逛下通商店街。" },
        { time: "晚餐", title: "下通、上通吃晚餐", modes: ["步行"], detail: "熊本拉麵（蒜油豚骨）、太平燕（冬粉湯麵，對小孩友善）、馬肉料理（給敢吃的大人）。" }
      ]
    },
    {
      id: "d2", date: "3/1", wd: "一", city: "熊本", title: "熊本城、城彩苑", art: "castle",
      alert: "2026/7/28 熊本地震後：熊本城照常開放，但部分石垣、通道受損；城彩苑「わくわく座」暫停開放（官方預計 12 月恢復）。出發前一週請再確認官網。",
      items: [
        { time: "09:00", title: "熊本城（開園就進）", must: true, modes: ["巡迴巴士", "計程車"], detail: "從桜町搭周遊巴士「しろめぐりん」約 10 分到二の丸停車場；或從城彩苑走約 15 分。7 人搭兩台計程車也很方便。門票：高中以上 800 円、國中小 300 円、學齡前免費；平日只能從南口進出。售票處可免費借電動輔助輪椅和嬰兒車。" },
        { time: "午餐", title: "桜の馬場 城彩苑「桜の小路」", modes: ["步行"], detail: "熊本小吃和伴手禮。熊本城おもてなし武將隊互動時間 11:00–12:00、14:30–15:30。" },
        { time: "下午", title: "回飯店休息", modes: ["巡迴巴士", "計程車"], detail: "給長輩和小朋友留空檔。" },
        { time: "傍晚", title: "鶴屋百貨、下通散步", modes: ["步行"], detail: "找くまモン相關商店。くまモンスクエア的地點和表演時間：待確認（出發前查官網）。" }
      ]
    },
    {
      id: "d3", date: "3/2", wd: "二", city: "熊本", title: "阿蘇草千里一日遊", art: "aso",
      alert: "阿蘇噴火警戒等級 2，中岳火口周邊禁止進入；管制期間巴士改在「草千里阿蘇火山博物館前」下車。阿蘇比市區冷，可能結冰。",
      items: [
        { time: "08:00", title: "熊本桜町出發", modes: ["巴士"], detail: "九州產交「草千里・阿蘇山上」日歸巴士套票，大人 7,200 円起（含やまびこ號、登山線巴士與あか牛漢堡排午餐）。小學生票價待確認；學齡前不佔位免費，午餐現場付。最晚出發前 5 天上網預約。時間為參考。" },
        { time: "上午", title: "阿蘇站前", modes: ["巴士"], detail: "轉往草千里。" },
        { time: "中午", title: "草千里：午餐＋自由時間", must: true, modes: ["巴士"], detail: "大草原上吃あか牛漢堡排，看情況騎馬。" },
        { time: "下午", title: "阿蘇站周邊", modes: ["巴士"], detail: "回程途中停留。" },
        { time: "約 18:00", title: "回到熊本桜町", modes: ["巴士"], detail: "整天約 10 小時，對長輩和幼兒有點長。", alt: "替代方案：不去阿蘇，改成輕鬆市區日（熊本市動植物園、熊本博物館或再去水前寺）；或包大型計程車，價格待確認。" }
      ]
    },
    {
      id: "d4", date: "3/3", wd: "三", city: "熊本 → 福岡", title: "新幹線到博多", art: "train",
      items: [
        { time: "上午", title: "退房，前往熊本站", modes: ["市電", "計程車"], detail: "從通町筋搭市電，帶大行李比較建議叫兩台計程車。", alt: "不想提行李：前一天請飯店櫃台用宅急便寄到福岡飯店，通常隔天送到，費用到櫃台問。" },
        { time: "32–48 分", title: "九州新幹線 熊本 → 博多", must: true, modes: ["新幹線"], detail: "みずほ最快 32 分，さくら 38–48 分。指定席大人 5,840 円、小孩 2,920 円；網路「九州ネット早特7」大人 3,900–4,800 円（7 天前訂、不能改）。三邊合計 160–250 cm 的行李要訂「特大荷物スペースつき座席」（不加價）。學齡前不佔位免費，每位大人可帶 2 位。" },
        { time: "下午", title: "福岡麵包超人博物館（博多 Riverain）", must: true, modes: [], detail: "1 歲以上 2,000–2,200 円（依日期浮動），0 歲免費。或改逛博多運河城。" },
        { time: "晚餐", title: "博多豚骨拉麵、牛腸鍋", modes: ["步行"], detail: "吃完散步到中洲屋台。" }
      ]
    },
    {
      id: "d5", date: "3/4", wd: "四", city: "福岡", title: "太宰府賞梅", art: "plum",
      items: [
        { time: "上午", title: "西鐵天神站 → 太宰府站", modes: ["西鐵電車"], detail: "單程 480 円，約 36 分（二日市轉車）。住博多的話先搭地鐵到天神，或從博多搭直達巴士。" },
        { time: "上午", title: "太宰府天滿宮賞梅", must: true, modes: ["步行"], detail: "出站走 5 分。梅花大約 2 月到 3 月上旬最漂亮，平日早點到人比較少。參道吃梅枝餅；境內有手扶梯通道連到九州國立博物館。" },
        { time: "下午", title: "回天神休息、逛天神地下街", modes: ["西鐵電車"], detail: "回飯店休息一下。" },
        { time: "晚上", title: "天神屋台、一蘭或水炊き", modes: ["步行"], detail: "水炊き是博多的雞肉火鍋，冷天最適合。" }
      ]
    },
    {
      id: "d6", date: "3/5", wd: "五", city: "福岡", title: "親子日（二選一）", art: "sea",
      items: [
        { time: "選項 1", title: "海之中道海洋世界", modes: ["JR", "船"], detail: "JR 博多 → 香椎轉香椎線到海ノ中道站約 35 分；或從博多碼頭（Bayside Place）搭船約 20 分。門票大人 2,500 円、國中小 1,200 円、3 歲到學齡前 700 円、65 歲以上 2,200 円、未滿 3 歲免費。全天室內，下雨或很冷也適合。" },
        { time: "選項 2・上午", title: "大濠公園", modes: ["計程車"], detail: "散步、去兒童遊樂區，隔壁舞鶴公園可能有早開的梅花。" },
        { time: "選項 2・下午", title: "福岡塔＋百道海濱", modes: ["計程車"], detail: "展望台大人 1,000 円、國中小 500 円、4 歲以上幼兒 200 円、3 歲以下免費。步行比較多，景點之間建議搭計程車。" }
      ]
    },
    {
      id: "d7", date: "3/6", wd: "六", city: "福岡 → 桃園", title: "購物、回程", art: "bag",
      items: [
        { time: "上午", title: "退房，行李寄放飯店櫃台", modes: ["步行"], detail: "" },
        { time: "白天", title: "天神、博多採買伴手禮", modes: ["地鐵", "步行"], detail: "明太子、博多通りもん、博多阪急、天神地下街。" },
        { time: "16:00", title: "回飯店拿行李", modes: [], detail: "預留塞車時間。" },
        { time: "17:00 前", title: "抵達福岡機場國際線航廈", must: true, modes: ["巴士", "計程車"], detail: "博多站筑紫口有西鐵直達巴士，大人 400 円（IC 卡或感應支付 380 円），約 15–20 分。行李多叫一台大型計程車或兩台一般計程車，從天神出發要多抓時間。" },
        { time: "19:10", title: "JX841 福岡 → 桃園", modes: ["飛機"], detail: "20:50 抵達桃園第一航廈。報到截止時間以星宇公告為準。" }
      ]
    }
  ];

  /* ---------- 待辦清單 ---------- */
  var TODOS = [
    { group: "要預訂", color: "coral", items: [
      { id: "hotel", text: "決定熊本、福岡各留哪間飯店，取消其他重複訂房", note: "最早的取消期限：東急ステイ じゃらん 線上 2026/12/3" },
      { id: "insurance", text: "旅平險（7 人）" },
      { id: "sim", text: "日本網卡或 eSIM" },
      { id: "aso", text: "阿蘇巴士套票", note: "最晚出發前 5 天預約" },
      { id: "shinkansen", text: "新幹線早特7（熊本 → 博多）", note: "乘車日前一個月 10:00 開賣、7 天前截止；大行李要訂特大荷物座位" },
      { id: "tickets", text: "麵包超人博物館、海洋世界門票（可先買線上票）" }
    ]},
    { group: "出發前確認", color: "blue", items: [
      { id: "age", text: "補上幼兒的實際年齡", note: "會影響車資和門票" },
      { id: "recheck", text: "出發前一週再看熊本城、阿蘇官網", note: "地震後開放狀況、噴火警戒等級" },
      { id: "kumamon", text: "查くまモンスクエア的地點和表演時間" },
      { id: "checkin", text: "確認星宇報到截止時間" },
      { id: "takkyubin", text: "（選擇性）3/2 晚上請熊本飯店宅急便寄行李到福岡" }
    ]},
    { group: "行李打包", color: "green", items: [
      { id: "passport", text: "護照 ×7、電子機票（訂位代號請看確認信）" },
      { id: "warm", text: "羽絨外套、手套、毛帽", note: "早晚可能接近 0°C，阿蘇更冷" },
      { id: "ic", text: "IC 卡或感應支付卡", note: "機場巴士刷卡比現金便宜" }
    ]}
  ];

  /* ---------- helpers ---------- */
  function $(s, el) { return (el || document).querySelector(s); }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  var store = {
    get: function (k, d) { try { var v = localStorage.getItem(k); return v === null ? d : JSON.parse(v); } catch (e) { return d; } },
    set: function (k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
  };
  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)");

  /* ---------- countdown ---------- */
  var DEPART = new Date("2027-02-28T07:30:00+08:00").getTime();
  function pad(n) { return n < 10 ? "0" + n : String(n); }
  function tick() {
    var diff = DEPART - Date.now();
    if (diff <= 0) {
      $("#cd-days").textContent = "0"; $("#cd-hours").textContent = "00"; $("#cd-mins").textContent = "00";
      $("#cd-done").hidden = false; return;
    }
    var m = Math.floor(diff / 60000);
    $("#cd-days").textContent = Math.floor(m / 1440);
    $("#cd-hours").textContent = pad(Math.floor((m % 1440) / 60));
    $("#cd-mins").textContent = pad(m % 60);
  }
  tick(); setInterval(tick, 1000 * 15);

  /* ---------- itinerary ---------- */
  var tabsEl = $("#day-tabs"), panel = $("#day-panel");
  tabsEl.innerHTML = DAYS.map(function (d, i) {
    return '<button class="tab" role="tab" id="tab-' + d.id + '" aria-controls="day-panel" aria-selected="false" tabindex="-1" data-i="' + i + '">' +
      '<small>週' + d.wd + '</small><b>' + d.date + '</b><small>' + esc(d.city.split(" ")[0]) + '</small></button>';
  }).join("");

  function renderDay(i, animate) {
    var d = DAYS[i];
    Array.prototype.forEach.call(tabsEl.children, function (b, j) {
      b.setAttribute("aria-selected", j === i ? "true" : "false");
      b.tabIndex = j === i ? 0 : -1;
    });
    panel.setAttribute("aria-labelledby", "tab-" + d.id);
    panel.innerHTML =
      '<div class="day__head"><div class="day__art" aria-hidden="true">' + ART[d.art] + '</div>' +
      '<div><h3 class="day__title">' + d.date + '（' + d.wd + '）' + esc(d.title) + '</h3>' +
      '<p class="day__meta">Day ' + (i + 1) + '・' + esc(d.city) + '</p></div></div>' +
      (d.alert ? '<p class="day__alert"><strong>注意：</strong>' + esc(d.alert) + '</p>' : '') +
      '<ol class="timeline">' + d.items.map(function (it) {
        return '<li class="tl' + (it.must ? ' tl--must' : '') + '"><span class="tl__dot" aria-hidden="true"></span>' +
          '<div class="tl__top"><span class="tl__time">' + esc(it.time) + '</span>' +
          (it.modes || []).map(function (m) { return '<span class="tag tag--' + (MODE[m] || "paper") + '">' + esc(m) + '</span>'; }).join("") +
          (it.must ? '<span class="must">必去</span>' : '') + '</div>' +
          '<h4 class="tl__title">' + esc(it.title) + '</h4>' +
          (it.detail ? '<p class="tl__detail">' + esc(it.detail) + '</p>' : '') +
          (it.alt ? '<p class="tl__alt">' + esc(it.alt) + '</p>' : '') + '</li>';
      }).join("") + '</ol>';
    if (animate && !(reduceMotion && reduceMotion.matches)) {
      panel.classList.remove("bounce"); void panel.offsetWidth; panel.classList.add("bounce");
    }
    store.set("trip-day", i);
  }
  tabsEl.addEventListener("click", function (e) {
    var b = e.target.closest(".tab"); if (!b) return;
    renderDay(+b.dataset.i, true);
    b.scrollIntoView({ block: "nearest", inline: "nearest", behavior: reduceMotion && reduceMotion.matches ? "auto" : "smooth" });
  });
  tabsEl.addEventListener("keydown", function (e) {
    var cur = +document.activeElement.dataset.i, n = DAYS.length, nx = null;
    if (e.key === "ArrowRight") nx = (cur + 1) % n;
    else if (e.key === "ArrowLeft") nx = (cur - 1 + n) % n;
    else if (e.key === "Home") nx = 0; else if (e.key === "End") nx = n - 1;
    if (nx === null || isNaN(cur)) return;
    e.preventDefault(); renderDay(nx, true); tabsEl.children[nx].focus();
  });
  var startDay = store.get("trip-day", 0);
  renderDay(startDay >= 0 && startDay < DAYS.length ? startDay : 0, false);

  /* ---------- todo ---------- */
  var checked = store.get("trip-todos", {});
  var CHECK = '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M2.5 8.5 L6.5 12 L13.5 4" fill="none" stroke="#3E3A39" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  $("#todo-groups").innerHTML = TODOS.map(function (g) {
    return '<div class="todo-group card"><h3><span class="dot dot--' + (g.color === "coral" ? "coral" : g.color) + '"></span>' + esc(g.group) + '</h3><ul>' +
      g.items.map(function (t) {
        return '<li class="todo-item"><label><input type="checkbox" data-id="' + t.id + '"' + (checked[t.id] ? " checked" : "") + '>' +
          '<span class="box">' + CHECK + '</span><span class="todo-text">' + esc(t.text) + (t.note ? '<small>' + esc(t.note) + '</small>' : '') + '</span></label></li>';
      }).join("") + '</ul></div>';
  }).join("");
  function progress() {
    var all = document.querySelectorAll("#todo-groups input"), done = 0;
    Array.prototype.forEach.call(all, function (c) { if (c.checked) done++; });
    $("#todo-progress").textContent = "已完成 " + done + " / " + all.length;
  }
  $("#todo-groups").addEventListener("change", function (e) {
    var c = e.target; if (!c.dataset.id) return;
    if (c.checked) checked[c.dataset.id] = true; else delete checked[c.dataset.id];
    store.set("trip-todos", checked); progress();
  });
  $("#todo-reset").addEventListener("click", function () {
    checked = {}; store.set("trip-todos", checked);
    Array.prototype.forEach.call(document.querySelectorAll("#todo-groups input"), function (c) { c.checked = false; });
    progress();
  });
  progress();

  /* ---------- nav active state ---------- */
  var links = document.querySelectorAll(".nav__list a");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        Array.prototype.forEach.call(links, function (a) { a.classList.toggle("is-active", a.getAttribute("href") === "#" + en.target.id); });
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    ["home", "flights", "itinerary", "todo", "stay"].forEach(function (id) { io.observe(document.getElementById(id)); });
  }
})();
