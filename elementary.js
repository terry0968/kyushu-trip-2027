(function () {
  "use strict";

  const subjects = {
    chinese: {
      name: "國語小高手",
      description: "認識國字、部件和生活中的詞語。",
      questions: [
        { category: "字形辨識", prompt: "「休」這個字裡藏著哪兩個部件？", options: ["人和木", "口和鳥", "日和月"], answer: "人和木", explain: "「休」像一個人靠著樹木休息。" },
        { category: "部件組合", prompt: "「日」和「月」合起來，可以組成哪個字？", options: ["明", "林", "好"], answer: "明", explain: "日和月都很明亮，所以合起來是「明」。" },
        { category: "字形辨識", prompt: "哪一個字有「口」這個部件？", options: ["吃", "休", "林"], answer: "吃", explain: "「吃」有口字旁，和嘴巴有關。" },
        { category: "詞語理解", prompt: "哪一個詞語是形容天氣很好的？", options: ["晴天", "雨衣", "書包"], answer: "晴天", explain: "有太陽、少下雨的好天氣叫晴天。" },
        { category: "句子理解", prompt: "「小鳥在天空＿＿。」哪個詞語最適合？", options: ["飛翔", "游泳", "種花"], answer: "飛翔", explain: "小鳥會在天空飛翔。" },
        { category: "字形辨識", prompt: "哪一個字和「樹木」有關？", options: ["森", "海", "石"], answer: "森", explain: "「森」有三個木，代表很多樹木。" },
        { category: "詞語理解", prompt: "「早上」的相反時間是什麼？", options: ["晚上", "昨天", "明天"], answer: "晚上", explain: "早上和晚上是一天中不同的時段。" },
        { category: "句子理解", prompt: "「妹妹把水＿＿進杯子裡。」哪個字最適合？", options: ["倒", "跑", "唱"], answer: "倒", explain: "把水倒進杯子裡，句子才通順。" }
      ]
    },
    math: {
      name: "數學探險家",
      description: "一起數數、比較大小，動動腦解題。",
      questions: [
        { category: "加法", prompt: "桌上有 7 顆草莓，又放上 5 顆，一共有幾顆？", options: ["11 顆", "12 顆", "13 顆"], answer: "12 顆", explain: "7 + 5 = 12。" },
        { category: "減法", prompt: "氣球有 15 個，飛走 4 個，還剩幾個？", options: ["9 個", "11 個", "19 個"], answer: "11 個", explain: "15 - 4 = 11。" },
        { category: "數的大小", prompt: "哪個數字最大？", options: ["18", "16", "20"], answer: "20", explain: "20 比 18 和 16 都大。" },
        { category: "數數", prompt: "從 12 開始往後數 3 個數，會數到幾？", options: ["14", "15", "16"], answer: "15", explain: "12、13、14、15，往後數 3 次是 15。" },
        { category: "加法", prompt: "小兔有 8 根紅蘿蔔和 6 根白蘿蔔，總共有幾根？", options: ["13 根", "14 根", "15 根"], answer: "14 根", explain: "8 + 6 = 14。" },
        { category: "減法", prompt: "書架上有 17 本書，借走 7 本，還有幾本？", options: ["10 本", "11 本", "12 本"], answer: "10 本", explain: "17 - 7 = 10。" },
        { category: "數的大小", prompt: "哪個數字最接近 10？", options: ["8", "15", "19"], answer: "8", explain: "8 和 10 相差 2，是這三個數中最近的。" },
        { category: "生活應用", prompt: "一隻手有 5 根手指，兩隻手有幾根？", options: ["8 根", "10 根", "12 根"], answer: "10 根", explain: "5 + 5 = 10。" }
      ]
    },
    english: {
      name: "English 小達人",
      description: "認識英文字母、顏色和常見單字。",
      questions: [
        { category: "字母認識", prompt: "大寫字母 B 的小寫是哪一個？", options: ["d", "b", "p"], answer: "b", explain: "大寫 B 的小寫是 b。" },
        { category: "字母順序", prompt: "字母 A、B 之後接著是哪個字母？", options: ["C", "D", "E"], answer: "C", explain: "英文字母順序是 A、B、C。" },
        { category: "顏色單字", prompt: "「red」是什麼顏色？", options: ["紅色", "藍色", "綠色"], answer: "紅色", explain: "red 是紅色。" },
        { category: "數字單字", prompt: "「one」代表數字幾？", options: ["1", "2", "3"], answer: "1", explain: "one 是 1。" },
        { category: "動物單字", prompt: "「cat」是哪一種動物？", options: ["狗", "貓", "鳥"], answer: "貓", explain: "cat 是貓咪。" },
        { category: "打招呼", prompt: "早上見面時，可以說哪一句？", options: ["Good morning!", "Good night!", "Goodbye!"], answer: "Good morning!", explain: "Good morning 是早安。" },
        { category: "教室單字", prompt: "「book」是什麼？", options: ["書", "筆", "桌子"], answer: "書", explain: "book 是書本。" },
        { category: "顏色單字", prompt: "天空常見的顏色是「＿＿」。", options: ["blue", "pink", "black"], answer: "blue", explain: "blue 是藍色。" }
      ]
    }
  };

  const tabs = Array.from(document.querySelectorAll(".subject-tab"));
  const panel = document.getElementById("subject-panel");
  const readyState = document.getElementById("ready-state");
  const questionState = document.getElementById("question-state");
  const resultState = document.getElementById("result-state");
  const subjectName = document.getElementById("subject-name");
  const subjectDescription = document.getElementById("subject-description");
  const startButton = document.getElementById("start-button");
  const answerList = document.getElementById("answer-list");
  const answerFeedback = document.getElementById("answer-feedback");
  const nextButton = document.getElementById("next-button");
  const missedBox = document.getElementById("missed-box");
  const missedList = document.getElementById("missed-list");
  const progressTrack = document.getElementById("progress-track");
  const progressFill = document.getElementById("progress-fill");
  const starCount = document.getElementById("star-count");
  let selectedSubject = "chinese";
  let round = [];
  let questionIndex = 0;
  let correctCount = 0;
  let missedCategories = [];
  let answered = false;
  let totalStars = 0;

  function showReady() {
    readyState.hidden = false;
    questionState.hidden = true;
    resultState.hidden = true;
    panel.setAttribute("aria-labelledby", `tab-${selectedSubject}`);
    subjectName.textContent = subjects[selectedSubject].name;
    subjectDescription.textContent = subjects[selectedSubject].description;
  }

  function chooseSubject(subject, moveFocus) {
    selectedSubject = subject;
    tabs.forEach((tab) => {
      const active = tab.dataset.subject === subject;
      tab.setAttribute("aria-selected", String(active));
      tab.tabIndex = active ? 0 : -1;
    });
    showReady();
    if (moveFocus) document.getElementById(`tab-${subject}`).focus();
  }

  function shuffledQuestions(subject) {
    const questions = subjects[subject].questions.slice();
    for (let index = questions.length - 1; index > 0; index -= 1) {
      const randomIndex = Math.floor(Math.random() * (index + 1));
      [questions[index], questions[randomIndex]] = [questions[randomIndex], questions[index]];
    }
    return questions.slice(0, 5);
  }

  function startRound() {
    round = shuffledQuestions(selectedSubject);
    questionIndex = 0;
    correctCount = 0;
    missedCategories = [];
    readyState.hidden = true;
    resultState.hidden = true;
    questionState.hidden = false;
    renderQuestion();
  }

  function renderQuestion() {
    const question = round[questionIndex];
    answered = false;
    document.getElementById("round-label").textContent = `第 ${questionIndex + 1} 題 / 共 ${round.length} 題`;
    document.getElementById("category-label").textContent = question.category;
    document.getElementById("question-text").textContent = question.prompt;
    progressTrack.setAttribute("aria-valuenow", String(questionIndex));
    progressFill.style.width = `${(questionIndex / round.length) * 100}%`;
    answerFeedback.textContent = "";
    answerFeedback.className = "answer-feedback";
    nextButton.hidden = true;
    answerList.replaceChildren();
    question.options.forEach((option) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "answer-option";
      button.textContent = option;
      button.addEventListener("click", () => selectAnswer(button, option, question));
      answerList.append(button);
    });
  }

  function selectAnswer(button, answer, question) {
    if (answered) return;
    answered = true;
    const isCorrect = answer === question.answer;
    answerList.querySelectorAll("button").forEach((optionButton) => {
      optionButton.disabled = true;
      if (optionButton.textContent === question.answer) optionButton.classList.add("is-correct");
    });
    if (isCorrect) {
      correctCount += 1;
      totalStars += 1;
      starCount.textContent = `⭐ 累積答對 ${totalStars} 題`;
      answerFeedback.textContent = `答對了！${question.explain}`;
    } else {
      button.classList.add("is-wrong");
      missedCategories.push(question.category);
      answerFeedback.classList.add("is-wrong");
      answerFeedback.textContent = `再記一次：${question.explain}`;
    }
    progressTrack.setAttribute("aria-valuenow", String(questionIndex + 1));
    progressFill.style.width = `${((questionIndex + 1) / round.length) * 100}%`;
    nextButton.textContent = questionIndex === round.length - 1 ? "看闖關結果 →" : "下一題 →";
    nextButton.hidden = false;
    nextButton.focus();
  }

  function showResult() {
    questionState.hidden = true;
    resultState.hidden = false;
    document.getElementById("result-score").textContent = `答對 ${correctCount} 題 / 共 ${round.length} 題`;
    document.getElementById("result-message").textContent = correctCount === round.length
      ? "太厲害了！今天的題目全部答對！"
      : "你很認真完成挑戰，休息一下也可以再玩一次。";
    missedList.replaceChildren();
    const counts = missedCategories.reduce((totals, category) => {
      totals[category] = (totals[category] || 0) + 1;
      return totals;
    }, {});
    Object.entries(counts).forEach(([category, count]) => {
      const item = document.createElement("li");
      item.textContent = `${category}${count > 1 ? `（${count} 題）` : ""}`;
      missedList.append(item);
    });
    missedBox.hidden = missedCategories.length === 0;
    document.getElementById("result-title").textContent = correctCount === round.length ? "全對！星星送給你" : "闖關完成！";
    document.getElementById("retry-button").focus();
  }

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => chooseSubject(tab.dataset.subject, false));
    tab.addEventListener("keydown", (event) => {
      let nextIndex = index;
      if (event.key === "ArrowRight") nextIndex = (index + 1) % tabs.length;
      else if (event.key === "ArrowLeft") nextIndex = (index - 1 + tabs.length) % tabs.length;
      else if (event.key === "Home") nextIndex = 0;
      else if (event.key === "End") nextIndex = tabs.length - 1;
      else return;
      event.preventDefault();
      chooseSubject(tabs[nextIndex].dataset.subject, true);
    });
  });

  startButton.addEventListener("click", startRound);
  nextButton.addEventListener("click", () => {
    questionIndex += 1;
    if (questionIndex >= round.length) showResult();
    else renderQuestion();
  });
  document.getElementById("retry-button").addEventListener("click", startRound);
  showReady();
})();
