(function () {
  "use strict";

  const subjects = {
    chinese: {
      name: "國語小高手",
      nameZhuyin: "ㄍㄨㄛˊ ㄩˇ ㄒㄧㄠˇ ㄍㄠ ㄕㄡˇ",
      description: "認識國字、部件和生活中的詞語。",
      descriptionZhuyin: "ㄖㄣˋ ㄕˋ ㄍㄨㄛˊ ㄗˋ、ㄅㄨˋ ㄐㄧㄢˋ ㄏㄜˊ ㄕㄥ ㄏㄨㄛˊ ㄓㄨㄥ ㄉㄜ˙ ㄘˊ ㄩˇ。",
      questions: [
        { category: "字形辨識", categoryZhuyin: "ㄗˋ ㄒㄧㄥˊ ㄅㄧㄢˋ ㄕˋ", prompt: "「休」這個字裡藏著哪兩個部件？", promptZhuyin: "ㄒㄧㄡ ㄓㄜˋ ㄍㄜ˙ ㄗˋ ㄌㄧˇ ㄘㄤˊ ㄓㄜ˙ ㄋㄚˇ ㄌㄧㄤˇ ㄍㄜ˙ ㄅㄨˋ ㄐㄧㄢˋ？", options: ["人和木", "口和鳥", "日和月"], optionZhuyin: ["ㄖㄣˊ ㄏㄜˊ ㄇㄨˋ", "ㄎㄡˇ ㄏㄜˊ ㄋㄧㄠˇ", "ㄖˋ ㄏㄜˊ ㄩㄝˋ"], answer: "人和木", explain: "「休」像一個人靠著樹木休息。", explainZhuyin: "ㄒㄧㄡ ㄒㄧㄤˋ ㄧˊ ㄍㄜ˙ ㄖㄣˊ ㄎㄠˋ ㄓㄜ˙ ㄕㄨˋ ㄇㄨˋ ㄒㄧㄡ ㄒㄧˊ。" },
        { category: "部件組合", categoryZhuyin: "ㄅㄨˋ ㄐㄧㄢˋ ㄗㄨˇ ㄏㄜˊ", prompt: "「日」和「月」合起來，可以組成哪個字？", promptZhuyin: "ㄖˋ ㄏㄜˊ ㄩㄝˋ ㄏㄜˊ ㄑㄧˇ ㄌㄞˊ，ㄎㄜˇ ㄧˇ ㄗㄨˇ ㄔㄥˊ ㄋㄚˇ ㄍㄜ˙ ㄗˋ？", options: ["明", "林", "好"], optionZhuyin: ["ㄇㄧㄥˊ", "ㄌㄧㄣˊ", "ㄏㄠˇ"], answer: "明", explain: "日和月都很明亮，所以合起來是「明」。", explainZhuyin: "ㄖˋ ㄏㄜˊ ㄩㄝˋ ㄉㄡ ㄏㄣˇ ㄇㄧㄥˊ ㄌㄧㄤˋ，ㄙㄨㄛˇ ㄧˇ ㄏㄜˊ ㄑㄧˇ ㄌㄞˊ ㄕˋ ㄇㄧㄥˊ。" },
        { category: "字形辨識", categoryZhuyin: "ㄗˋ ㄒㄧㄥˊ ㄅㄧㄢˋ ㄕˋ", prompt: "哪一個字有「口」這個部件？", promptZhuyin: "ㄋㄚˇ ㄧˊ ㄍㄜ˙ ㄗˋ ㄧㄡˇ ㄎㄡˇ ㄓㄜˋ ㄍㄜ˙ ㄅㄨˋ ㄐㄧㄢˋ？", options: ["吃", "休", "林"], optionZhuyin: ["ㄔ", "ㄒㄧㄡ", "ㄌㄧㄣˊ"], answer: "吃", explain: "「吃」有口字旁，和嘴巴有關。", explainZhuyin: "ㄔ ㄧㄡˇ ㄎㄡˇ ㄗˋ ㄆㄤˊ，ㄏㄜˊ ㄗㄨㄟˇ ㄅㄚ ㄧㄡˇ ㄍㄨㄢ。" },
        { category: "詞語理解", categoryZhuyin: "ㄘˊ ㄩˇ ㄌㄧˇ ㄐㄧㄝˇ", prompt: "哪一個詞語是形容天氣很好的？", promptZhuyin: "ㄋㄚˇ ㄧˊ ㄍㄜ˙ ㄘˊ ㄩˇ ㄕˋ ㄒㄧㄥˊ ㄖㄨㄥˊ ㄊㄧㄢ ㄑㄧˋ ㄏㄣˇ ㄏㄠˇ ㄉㄜ˙？", options: ["晴天", "雨衣", "書包"], optionZhuyin: ["ㄑㄧㄥˊ ㄊㄧㄢ", "ㄩˇ ㄧ", "ㄕㄨ ㄅㄠ"], answer: "晴天", explain: "有太陽、少下雨的好天氣叫晴天。", explainZhuyin: "ㄧㄡˇ ㄊㄞˋ ㄧㄤˊ、ㄕㄠˇ ㄒㄧㄚˋ ㄩˇ ㄉㄜ˙ ㄏㄠˇ ㄊㄧㄢ ㄑㄧˋ ㄐㄧㄠˋ ㄑㄧㄥˊ ㄊㄧㄢ。" },
        { category: "句子理解", categoryZhuyin: "ㄐㄩˋ ㄗ˙ ㄌㄧˇ ㄐㄧㄝˇ", prompt: "「小鳥在天空＿＿。」哪個詞語最適合？", promptZhuyin: "ㄒㄧㄠˇ ㄋㄧㄠˇ ㄗㄞˋ ㄊㄧㄢ ㄎㄨㄥ＿＿。ㄋㄚˇ ㄍㄜ˙ ㄘˊ ㄩˇ ㄗㄨㄟˋ ㄕˋ ㄏㄜˊ？", options: ["飛翔", "游泳", "種花"], optionZhuyin: ["ㄈㄟ ㄒㄧㄤˊ", "ㄧㄡˊ ㄩㄥˇ", "ㄓㄨㄥˋ ㄏㄨㄚ"], answer: "飛翔", explain: "小鳥會在天空飛翔。", explainZhuyin: "ㄒㄧㄠˇ ㄋㄧㄠˇ ㄏㄨㄟˋ ㄗㄞˋ ㄊㄧㄢ ㄎㄨㄥ ㄈㄟ ㄒㄧㄤˊ。" },
        { category: "字形辨識", categoryZhuyin: "ㄗˋ ㄒㄧㄥˊ ㄅㄧㄢˋ ㄕˋ", prompt: "哪一個字和「樹木」有關？", promptZhuyin: "ㄋㄚˇ ㄧˊ ㄍㄜ˙ ㄗˋ ㄏㄜˊ ㄕㄨˋ ㄇㄨˋ ㄧㄡˇ ㄍㄨㄢ？", options: ["森", "海", "石"], optionZhuyin: ["ㄙㄣ", "ㄏㄞˇ", "ㄕˊ"], answer: "森", explain: "「森」有三個木，代表很多樹木。", explainZhuyin: "ㄙㄣ ㄧㄡˇ ㄙㄢ ㄍㄜ˙ ㄇㄨˋ，ㄉㄞˋ ㄅㄧㄠˇ ㄏㄣˇ ㄉㄨㄛ ㄕㄨˋ ㄇㄨˋ。" },
        { category: "詞語理解", categoryZhuyin: "ㄘˊ ㄩˇ ㄌㄧˇ ㄐㄧㄝˇ", prompt: "「早上」的相反時間是什麼？", promptZhuyin: "ㄗㄠˇ ㄕㄤˋ ㄉㄜ˙ ㄒㄧㄤ ㄈㄢˇ ㄕˊ ㄐㄧㄢ ㄕˋ ㄕㄣˊ ㄇㄜ˙？", options: ["晚上", "昨天", "明天"], optionZhuyin: ["ㄨㄢˇ ㄕㄤˋ", "ㄗㄨㄛˊ ㄊㄧㄢ", "ㄇㄧㄥˊ ㄊㄧㄢ"], answer: "晚上", explain: "早上和晚上是一天中不同的時段。", explainZhuyin: "ㄗㄠˇ ㄕㄤˋ ㄏㄜˊ ㄨㄢˇ ㄕㄤˋ ㄕˋ ㄧˋ ㄊㄧㄢ ㄓㄨㄥ ㄅㄨˋ ㄊㄨㄥˊ ㄉㄜ˙ ㄕˊ ㄉㄨㄢˋ。" },
        { category: "句子理解", categoryZhuyin: "ㄐㄩˋ ㄗ˙ ㄌㄧˇ ㄐㄧㄝˇ", prompt: "「妹妹把水＿＿進杯子裡。」哪個字最適合？", promptZhuyin: "ㄇㄟˋ ㄇㄟ˙ ㄅㄚˇ ㄕㄨㄟˇ＿＿ㄐㄧㄣˋ ㄅㄟ ㄗ˙ ㄌㄧˇ。ㄋㄚˇ ㄍㄜ˙ ㄗˋ ㄗㄨㄟˋ ㄕˋ ㄏㄜˊ？", options: ["倒", "跑", "唱"], optionZhuyin: ["ㄉㄠˋ", "ㄆㄠˇ", "ㄔㄤˋ"], answer: "倒", explain: "把水倒進杯子裡，句子才通順。", explainZhuyin: "ㄅㄚˇ ㄕㄨㄟˇ ㄉㄠˋ ㄐㄧㄣˋ ㄅㄟ ㄗ˙ ㄌㄧˇ，ㄐㄩˋ ㄗ˙ ㄘㄞˊ ㄊㄨㄥ ㄕㄨㄣˋ。" }
      ]
    },
    math: {
      name: "數學探險家",
      nameZhuyin: "ㄕㄨˋ ㄒㄩㄝˊ ㄊㄢˋ ㄒㄧㄢˇ ㄐㄧㄚ",
      description: "一起數數、比較大小，動動腦解題。",
      descriptionZhuyin: "ㄧˋ ㄑㄧˇ ㄕㄨˇ ㄕㄨˇ、ㄅㄧˇ ㄐㄧㄠˋ ㄉㄚˋ ㄒㄧㄠˇ，ㄉㄨㄥˋ ㄉㄨㄥˋ ㄋㄠˇ ㄐㄧㄝˇ ㄊㄧˊ。",
      questions: [
        { category: "加法", categoryZhuyin: "ㄐㄧㄚ ㄈㄚˇ", prompt: "桌上有 7 顆草莓，又放上 5 顆，一共有幾顆？", promptZhuyin: "ㄓㄨㄛ ㄕㄤˋ ㄧㄡˇ ㄑㄧ ㄎㄜ ㄘㄠˇ ㄇㄟˊ，ㄧㄡˋ ㄈㄤˋ ㄕㄤˋ ㄨˇ ㄎㄜ，ㄧˊ ㄍㄨㄥˋ ㄧㄡˇ ㄐㄧˇ ㄎㄜ？", options: ["11 顆", "12 顆", "13 顆"], optionZhuyin: ["ㄕˊ ㄧ ㄎㄜ", "ㄕˊ ㄦˋ ㄎㄜ", "ㄕˊ ㄙㄢ ㄎㄜ"], answer: "12 顆", explain: "7 + 5 = 12。", explainZhuyin: "ㄑㄧ ㄐㄧㄚ ㄨˇ ㄉㄥˇ ㄩˊ ㄕˊ ㄦˋ。" },
        { category: "減法", categoryZhuyin: "ㄐㄧㄢˇ ㄈㄚˇ", prompt: "氣球有 15 個，飛走 4 個，還剩幾個？", promptZhuyin: "ㄑㄧˋ ㄑㄧㄡˊ ㄧㄡˇ ㄕˊ ㄨˇ ㄍㄜ˙，ㄈㄟ ㄗㄡˇ ㄙˋ ㄍㄜ˙，ㄏㄞˊ ㄕㄥˋ ㄐㄧˇ ㄍㄜ˙？", options: ["9 個", "11 個", "19 個"], optionZhuyin: ["ㄐㄧㄡˇ ㄍㄜ˙", "ㄕˊ ㄧ ㄍㄜ˙", "ㄕˊ ㄐㄧㄡˇ ㄍㄜ˙"], answer: "11 個", explain: "15 - 4 = 11。", explainZhuyin: "ㄕˊ ㄨˇ ㄐㄧㄢˇ ㄙˋ ㄉㄥˇ ㄩˊ ㄕˊ ㄧ。" },
        { category: "數的大小", categoryZhuyin: "ㄕㄨˋ ㄉㄜ˙ ㄉㄚˋ ㄒㄧㄠˇ", prompt: "哪個數字最大？", promptZhuyin: "ㄋㄚˇ ㄍㄜ˙ ㄕㄨˋ ㄗˋ ㄗㄨㄟˋ ㄉㄚˋ？", options: ["18", "16", "20"], optionZhuyin: ["ㄕˊ ㄅㄚ", "ㄕˊ ㄌㄧㄡˋ", "ㄦˋ ㄕˊ"], answer: "20", explain: "20 比 18 和 16 都大。", explainZhuyin: "ㄦˋ ㄕˊ ㄅㄧˇ ㄕˊ ㄅㄚ ㄏㄜˊ ㄕˊ ㄌㄧㄡˋ ㄉㄡ ㄉㄚˋ。" },
        { category: "數數", categoryZhuyin: "ㄕㄨˇ ㄕㄨˇ", prompt: "從 12 開始往後數 3 個數，會數到幾？", promptZhuyin: "ㄘㄨㄥˊ ㄕˊ ㄦˋ ㄎㄞ ㄕˇ ㄨㄤˇ ㄏㄡˋ ㄕㄨˇ ㄙㄢ ㄍㄜ˙ ㄕㄨˋ，ㄏㄨㄟˋ ㄕㄨˇ ㄉㄠˋ ㄐㄧˇ？", options: ["14", "15", "16"], optionZhuyin: ["ㄕˊ ㄙˋ", "ㄕˊ ㄨˇ", "ㄕˊ ㄌㄧㄡˋ"], answer: "15", explain: "12、13、14、15，往後數 3 次是 15。", explainZhuyin: "ㄕˊ ㄦˋ、ㄕˊ ㄙㄢ、ㄕˊ ㄙˋ、ㄕˊ ㄨˇ，ㄨㄤˇ ㄏㄡˋ ㄕㄨˇ ㄙㄢ ㄘˋ ㄕˋ ㄕˊ ㄨˇ。" },
        { category: "加法", categoryZhuyin: "ㄐㄧㄚ ㄈㄚˇ", prompt: "小兔有 8 根紅蘿蔔和 6 根白蘿蔔，總共有幾根？", promptZhuyin: "ㄒㄧㄠˇ ㄊㄨˋ ㄧㄡˇ ㄅㄚ ㄍㄣ ㄏㄨㄥˊ ㄌㄨㄛˊ ㄅㄛ˙ ㄏㄜˊ ㄌㄧㄡˋ ㄍㄣ ㄅㄞˊ ㄌㄨㄛˊ ㄅㄛ˙，ㄗㄨㄥˇ ㄍㄨㄥˋ ㄧㄡˇ ㄐㄧˇ ㄍㄣ？", options: ["13 根", "14 根", "15 根"], optionZhuyin: ["ㄕˊ ㄙㄢ ㄍㄣ", "ㄕˊ ㄙˋ ㄍㄣ", "ㄕˊ ㄨˇ ㄍㄣ"], answer: "14 根", explain: "8 + 6 = 14。", explainZhuyin: "ㄅㄚ ㄐㄧㄚ ㄌㄧㄡˋ ㄉㄥˇ ㄩˊ ㄕˊ ㄙˋ。" },
        { category: "減法", categoryZhuyin: "ㄐㄧㄢˇ ㄈㄚˇ", prompt: "書架上有 17 本書，借走 7 本，還有幾本？", promptZhuyin: "ㄕㄨ ㄐㄧㄚˋ ㄕㄤˋ ㄧㄡˇ ㄕˊ ㄑㄧ ㄅㄣˇ ㄕㄨ，ㄐㄧㄝˋ ㄗㄡˇ ㄑㄧ ㄅㄣˇ，ㄏㄞˊ ㄧㄡˇ ㄐㄧˇ ㄅㄣˇ？", options: ["10 本", "11 本", "12 本"], optionZhuyin: ["ㄕˊ ㄅㄣˇ", "ㄕˊ ㄧ ㄅㄣˇ", "ㄕˊ ㄦˋ ㄅㄣˇ"], answer: "10 本", explain: "17 - 7 = 10。", explainZhuyin: "ㄕˊ ㄑㄧ ㄐㄧㄢˇ ㄑㄧ ㄉㄥˇ ㄩˊ ㄕˊ。" },
        { category: "數的大小", categoryZhuyin: "ㄕㄨˋ ㄉㄜ˙ ㄉㄚˋ ㄒㄧㄠˇ", prompt: "哪個數字最接近 10？", promptZhuyin: "ㄋㄚˇ ㄍㄜ˙ ㄕㄨˋ ㄗˋ ㄗㄨㄟˋ ㄐㄧㄝ ㄐㄧㄣˋ ㄕˊ？", options: ["8", "15", "19"], optionZhuyin: ["ㄅㄚ", "ㄕˊ ㄨˇ", "ㄕˊ ㄐㄧㄡˇ"], answer: "8", explain: "8 和 10 相差 2，是這三個數中最近的。", explainZhuyin: "ㄅㄚ ㄏㄜˊ ㄕˊ ㄒㄧㄤ ㄔㄚ ㄦˋ，ㄕˋ ㄓㄜˋ ㄙㄢ ㄍㄜ˙ ㄕㄨˋ ㄓㄨㄥ ㄗㄨㄟˋ ㄐㄧㄣˋ ㄉㄜ˙。" },
        { category: "生活應用", categoryZhuyin: "ㄕㄥ ㄏㄨㄛˊ ㄧㄥˋ ㄩㄥˋ", prompt: "一隻手有 5 根手指，兩隻手有幾根？", promptZhuyin: "ㄧˋ ㄓ ㄕㄡˇ ㄧㄡˇ ㄨˇ ㄍㄣ ㄕㄡˇ ㄓˇ，ㄌㄧㄤˇ ㄓ ㄕㄡˇ ㄧㄡˇ ㄐㄧˇ ㄍㄣ？", options: ["8 根", "10 根", "12 根"], optionZhuyin: ["ㄅㄚ ㄍㄣ", "ㄕˊ ㄍㄣ", "ㄕˊ ㄦˋ ㄍㄣ"], answer: "10 根", explain: "5 + 5 = 10。", explainZhuyin: "ㄨˇ ㄐㄧㄚ ㄨˇ ㄉㄥˇ ㄩˊ ㄕˊ。" }
      ],
      challengeQuestions: [
        { category: "找規律", categoryZhuyin: "ㄓㄠˇ ㄍㄨㄟ ㄌㄩˋ", prompt: "數字排成 2、4、6、8，照這個規律，下一個數字是幾？", promptZhuyin: "ㄕㄨˋ ㄗˋ ㄆㄞˊ ㄔㄥˊ ㄦˋ、ㄙˋ、ㄌㄧㄡˋ、ㄅㄚ，ㄓㄠˋ ㄓㄜˋ ㄍㄜ˙ ㄍㄨㄟ ㄌㄩˋ，ㄒㄧㄚˋ ㄧˊ ㄍㄜ˙ ㄕㄨˋ ㄗˋ ㄕˋ ㄐㄧˇ？", options: ["9", "10", "12"], optionZhuyin: ["ㄐㄧㄡˇ", "ㄕˊ", "ㄕˊ ㄦˋ"], answer: "10", explain: "每次增加 2，所以 8 再加 2 是 10。", explainZhuyin: "ㄇㄟˇ ㄘˋ ㄗㄥ ㄐㄧㄚ ㄦˋ，ㄙㄨㄛˇ ㄧˇ ㄅㄚ ㄗㄞˋ ㄐㄧㄚ ㄦˋ ㄕˋ ㄕˊ。" },
        { category: "生活推理", categoryZhuyin: "ㄕㄥ ㄏㄨㄛˊ ㄊㄨㄟ ㄌㄧˇ", prompt: "小白兔排隊，前面有 2 隻，後面有 3 隻，隊伍裡一共有幾隻兔子？", promptZhuyin: "ㄒㄧㄠˇ ㄅㄞˊ ㄊㄨˋ ㄆㄞˊ ㄉㄨㄟˋ，ㄑㄧㄢˊ ㄇㄧㄢˋ ㄧㄡˇ ㄦˋ ㄓ，ㄏㄡˋ ㄇㄧㄢˋ ㄧㄡˇ ㄙㄢ ㄓ，ㄉㄨㄟˋ ㄨˇ ㄌㄧˇ ㄧˊ ㄍㄨㄥˋ ㄧㄡˇ ㄐㄧˇ ㄓ ㄊㄨˋ ㄗ˙？", options: ["5 隻", "6 隻", "7 隻"], optionZhuyin: ["ㄨˇ ㄓ", "ㄌㄧㄡˋ ㄓ", "ㄑㄧ ㄓ"], answer: "6 隻", explain: "前面 2 隻，加上小白兔自己 1 隻，再加後面 3 隻，共 6 隻。", explainZhuyin: "ㄑㄧㄢˊ ㄇㄧㄢˋ ㄦˋ ㄓ，ㄐㄧㄚ ㄕㄤˋ ㄒㄧㄠˇ ㄅㄞˊ ㄊㄨˋ ㄗˋ ㄐㄧˇ ㄧˋ ㄓ，ㄗㄞˋ ㄐㄧㄚ ㄏㄡˋ ㄇㄧㄢˋ ㄙㄢ ㄓ，ㄍㄨㄥˋ ㄌㄧㄡˋ ㄓ。" },
        { category: "比較推理", categoryZhuyin: "ㄅㄧˇ ㄐㄧㄠˋ ㄊㄨㄟ ㄌㄧˇ", prompt: "小花比小明高，小明比小華高，三個人之中誰最高？", promptZhuyin: "ㄒㄧㄠˇ ㄏㄨㄚ ㄅㄧˇ ㄒㄧㄠˇ ㄇㄧㄥˊ ㄍㄠ，ㄒㄧㄠˇ ㄇㄧㄥˊ ㄅㄧˇ ㄒㄧㄠˇ ㄏㄨㄚˊ ㄍㄠ，ㄙㄢ ㄍㄜ˙ ㄖㄣˊ ㄓ ㄓㄨㄥ ㄕㄟˊ ㄗㄨㄟˋ ㄍㄠ？", options: ["小花", "小明", "小華"], optionZhuyin: ["ㄒㄧㄠˇ ㄏㄨㄚ", "ㄒㄧㄠˇ ㄇㄧㄥˊ", "ㄒㄧㄠˇ ㄏㄨㄚˊ"], answer: "小花", explain: "小花比小明高，小明又比小華高，所以小花最高。", explainZhuyin: "ㄒㄧㄠˇ ㄏㄨㄚ ㄅㄧˇ ㄒㄧㄠˇ ㄇㄧㄥˊ ㄍㄠ，ㄒㄧㄠˇ ㄇㄧㄥˊ ㄧㄡˋ ㄅㄧˇ ㄒㄧㄠˇ ㄏㄨㄚˊ ㄍㄠ，ㄙㄨㄛˇ ㄧˇ ㄒㄧㄠˇ ㄏㄨㄚ ㄗㄨㄟˋ ㄍㄠ。" },
        { category: "數字組合", categoryZhuyin: "ㄕㄨˋ ㄗˋ ㄗㄨˇ ㄏㄜˊ", prompt: "用 1、3、5 三張數字卡，排出最大的兩位數，可以排成幾？", promptZhuyin: "ㄩㄥˋ ㄧ、ㄙㄢ、ㄨˇ ㄙㄢ ㄓㄤ ㄕㄨˋ ㄗˋ ㄎㄚˇ，ㄆㄞˊ ㄔㄨ ㄗㄨㄟˋ ㄉㄚˋ ㄉㄜ˙ ㄌㄧㄤˇ ㄨㄟˋ ㄕㄨˋ，ㄎㄜˇ ㄧˇ ㄆㄞˊ ㄔㄥˊ ㄐㄧˇ？", options: ["35", "51", "53"], optionZhuyin: ["ㄙㄢ ㄕˊ ㄨˇ", "ㄨˇ ㄕˊ ㄧ", "ㄨˇ ㄕˊ ㄙㄢ"], answer: "53", explain: "十位放最大的數字 5，個位放下一大的數字 3，得到 53。", explainZhuyin: "ㄕˊ ㄨㄟˋ ㄈㄤˋ ㄗㄨㄟˋ ㄉㄚˋ ㄉㄜ˙ ㄕㄨˋ ㄗˋ ㄨˇ，ㄍㄜˋ ㄨㄟˋ ㄈㄤˋ ㄒㄧㄚˋ ㄧˊ ㄉㄚˋ ㄉㄜ˙ ㄕㄨˋ ㄗˋ ㄙㄢ，ㄉㄜˊ ㄉㄠˋ ㄨˇ ㄕˊ ㄙㄢ。" },
        { category: "時間推理", categoryZhuyin: "ㄕˊ ㄐㄧㄢ ㄊㄨㄟ ㄌㄧˇ", prompt: "今天是星期二，過 3 天是星期幾？", promptZhuyin: "ㄐㄧㄣ ㄊㄧㄢ ㄕˋ ㄒㄧㄥ ㄑㄧˊ ㄦˋ，ㄍㄨㄛˋ ㄙㄢ ㄊㄧㄢ ㄕˋ ㄒㄧㄥ ㄑㄧˊ ㄐㄧˇ？", options: ["星期四", "星期五", "星期六"], optionZhuyin: ["ㄒㄧㄥ ㄑㄧˊ ㄙˋ", "ㄒㄧㄥ ㄑㄧˊ ㄨˇ", "ㄒㄧㄥ ㄑㄧˊ ㄌㄧㄡˋ"], answer: "星期五", explain: "星期二再過三天，依序是星期三、星期四、星期五。", explainZhuyin: "ㄒㄧㄥ ㄑㄧˊ ㄦˋ ㄗㄞˋ ㄍㄨㄛˋ ㄙㄢ ㄊㄧㄢ，ㄧ ㄒㄩˋ ㄕˋ ㄒㄧㄥ ㄑㄧˊ ㄙㄢ、ㄒㄧㄥ ㄑㄧˊ ㄙˋ、ㄒㄧㄥ ㄑㄧˊ ㄨˇ。" },
        { category: "生活推理", categoryZhuyin: "ㄕㄥ ㄏㄨㄛˊ ㄊㄨㄟ ㄌㄧˇ", prompt: "桌上有 3 個盤子，每個盤子放 2 顆橘子，一共有幾顆橘子？", promptZhuyin: "ㄓㄨㄛ ㄕㄤˋ ㄧㄡˇ ㄙㄢ ㄍㄜ˙ ㄆㄢˊ ㄗ˙，ㄇㄟˇ ㄍㄜ˙ ㄆㄢˊ ㄗ˙ ㄈㄤˋ ㄦˋ ㄎㄜ ㄐㄩˊ ㄗ˙，ㄧˊ ㄍㄨㄥˋ ㄧㄡˇ ㄐㄧˇ ㄎㄜ ㄐㄩˊ ㄗ˙？", options: ["5 顆", "6 顆", "8 顆"], optionZhuyin: ["ㄨˇ ㄎㄜ", "ㄌㄧㄡˋ ㄎㄜ", "ㄅㄚ ㄎㄜ"], answer: "6 顆", explain: "3 個 2 合起來是 2 + 2 + 2 = 6 顆。", explainZhuyin: "ㄙㄢ ㄍㄜ˙ ㄦˋ ㄏㄜˊ ㄑㄧˇ ㄌㄞˊ ㄕˋ ㄦˋ ㄐㄧㄚ ㄦˋ ㄐㄧㄚ ㄦˋ ㄉㄥˇ ㄩˊ ㄌㄧㄡˋ ㄎㄜ。" },
        { category: "圖形觀察", categoryZhuyin: "ㄊㄨˊ ㄒㄧㄥˊ ㄍㄨㄢ ㄔㄚˊ", prompt: "一個三角形有 3 個角，兩個三角形一共有幾個角？", promptZhuyin: "ㄧˊ ㄍㄜ˙ ㄙㄢ ㄐㄧㄠˇ ㄒㄧㄥˊ ㄧㄡˇ ㄙㄢ ㄍㄜ˙ ㄐㄧㄠˇ，ㄌㄧㄤˇ ㄍㄜ˙ ㄙㄢ ㄐㄧㄠˇ ㄒㄧㄥˊ ㄧˊ ㄍㄨㄥˋ ㄧㄡˇ ㄐㄧˇ ㄍㄜ˙ ㄐㄧㄠˇ？", options: ["5 個", "6 個", "8 個"], optionZhuyin: ["ㄨˇ ㄍㄜ˙", "ㄌㄧㄡˋ ㄍㄜ˙", "ㄅㄚ ㄍㄜ˙"], answer: "6 個", explain: "每個三角形有 3 個角，3 + 3 = 6 個角。", explainZhuyin: "ㄇㄟˇ ㄍㄜ˙ ㄙㄢ ㄐㄧㄠˇ ㄒㄧㄥˊ ㄧㄡˇ ㄙㄢ ㄍㄜ˙ ㄐㄧㄠˇ，ㄙㄢ ㄐㄧㄚ ㄙㄢ ㄉㄥˇ ㄩˊ ㄌㄧㄡˋ ㄍㄜ˙ ㄐㄧㄠˇ。" }
      ]
    },
    english: {
      name: "English 小達人",
      nameZhuyin: "ㄒㄧㄠˇ ㄉㄚˊ ㄖㄣˊ",
      description: "認識英文字母、顏色和常見單字。",
      descriptionZhuyin: "ㄖㄣˋ ㄕˋ ㄧㄥ ㄨㄣˊ ㄗˋ ㄇㄨˇ、ㄧㄢˊ ㄙㄜˋ ㄏㄜˊ ㄔㄤˊ ㄐㄧㄢˋ ㄉㄢ ㄗˋ。",
      questions: [
        { category: "字母認識", categoryZhuyin: "ㄗˋ ㄇㄨˇ ㄖㄣˋ ㄕˋ", prompt: "大寫字母 B 的小寫是哪一個？", promptZhuyin: "ㄉㄚˋ ㄒㄧㄝˇ ㄗˋ ㄇㄨˇ B ㄉㄜ˙ ㄒㄧㄠˇ ㄒㄧㄝˇ ㄕˋ ㄋㄚˇ ㄧˊ ㄍㄜ˙？", options: ["d", "b", "p"], optionZhuyin: ["", "", ""], answer: "b", explain: "大寫 B 的小寫是 b。", explainZhuyin: "ㄉㄚˋ ㄒㄧㄝˇ B ㄉㄜ˙ ㄒㄧㄠˇ ㄒㄧㄝˇ ㄕˋ b。" },
        { category: "字母順序", categoryZhuyin: "ㄗˋ ㄇㄨˇ ㄕㄨㄣˋ ㄒㄩˋ", prompt: "字母 A、B 之後接著是哪個字母？", promptZhuyin: "ㄗˋ ㄇㄨˇ A、B ㄓ ㄏㄡˋ ㄐㄧㄝ ㄓㄜ˙ ㄕˋ ㄋㄚˇ ㄍㄜ˙ ㄗˋ ㄇㄨˇ？", options: ["C", "D", "E"], optionZhuyin: ["", "", ""], answer: "C", explain: "英文字母順序是 A、B、C。", explainZhuyin: "ㄧㄥ ㄨㄣˊ ㄗˋ ㄇㄨˇ ㄕㄨㄣˋ ㄒㄩˋ ㄕˋ A、B、C。" },
        { category: "顏色單字", categoryZhuyin: "ㄧㄢˊ ㄙㄜˋ ㄉㄢ ㄗˋ", prompt: "「red」是什麼顏色？", promptZhuyin: "red ㄕˋ ㄕㄣˊ ㄇㄜ˙ ㄧㄢˊ ㄙㄜˋ？", options: ["紅色", "藍色", "綠色"], optionZhuyin: ["ㄏㄨㄥˊ ㄙㄜˋ", "ㄌㄢˊ ㄙㄜˋ", "ㄌㄩˋ ㄙㄜˋ"], answer: "紅色", explain: "red 是紅色。", explainZhuyin: "red ㄕˋ ㄏㄨㄥˊ ㄙㄜˋ。" },
        { category: "數字單字", categoryZhuyin: "ㄕㄨˋ ㄗˋ ㄉㄢ ㄗˋ", prompt: "「one」代表數字幾？", promptZhuyin: "one ㄉㄞˋ ㄅㄧㄠˇ ㄕㄨˋ ㄗˋ ㄐㄧˇ？", options: ["1", "2", "3"], optionZhuyin: ["ㄧ", "ㄦˋ", "ㄙㄢ"], answer: "1", explain: "one 是 1。", explainZhuyin: "one ㄕˋ ㄧ。" },
        { category: "動物單字", categoryZhuyin: "ㄉㄨㄥˋ ㄨˋ ㄉㄢ ㄗˋ", prompt: "「cat」是哪一種動物？", promptZhuyin: "cat ㄕˋ ㄋㄚˇ ㄧˋ ㄓㄨㄥˇ ㄉㄨㄥˋ ㄨˋ？", options: ["狗", "貓", "鳥"], optionZhuyin: ["ㄍㄡˇ", "ㄇㄠ", "ㄋㄧㄠˇ"], answer: "貓", explain: "cat 是貓咪。", explainZhuyin: "cat ㄕˋ ㄇㄠ ㄇㄧ。" },
        { category: "打招呼", categoryZhuyin: "ㄉㄚˇ ㄓㄠ ㄏㄨ", prompt: "早上見面時，可以說哪一句？", promptZhuyin: "ㄗㄠˇ ㄕㄤˋ ㄐㄧㄢˋ ㄇㄧㄢˋ ㄕˊ，ㄎㄜˇ ㄧˇ ㄕㄨㄛ ㄋㄚˇ ㄧˊ ㄐㄩˋ？", options: ["Good morning!", "Good night!", "Goodbye!"], optionZhuyin: ["", "", ""], answer: "Good morning!", explain: "Good morning 是早安。", explainZhuyin: "Good morning ㄕˋ ㄗㄠˇ ㄢ。" },
        { category: "教室單字", categoryZhuyin: "ㄐㄧㄠˋ ㄕˋ ㄉㄢ ㄗˋ", prompt: "「book」是什麼？", promptZhuyin: "book ㄕˋ ㄕㄣˊ ㄇㄜ˙？", options: ["書", "筆", "桌子"], optionZhuyin: ["ㄕㄨ", "ㄅㄧˇ", "ㄓㄨㄛ ㄗ˙"], answer: "書", explain: "book 是書本。", explainZhuyin: "book ㄕˋ ㄕㄨ ㄅㄣˇ。" },
        { category: "顏色單字", categoryZhuyin: "ㄧㄢˊ ㄙㄜˋ ㄉㄢ ㄗˋ", prompt: "天空常見的顏色是「＿＿」。", promptZhuyin: "ㄊㄧㄢ ㄎㄨㄥ ㄔㄤˊ ㄐㄧㄢˋ ㄉㄜ˙ ㄧㄢˊ ㄙㄜˋ ㄕˋ ㄕㄣˊ ㄇㄜ˙？", options: ["blue", "pink", "black"], optionZhuyin: ["", "", ""], answer: "blue", explain: "blue 是藍色。", explainZhuyin: "blue ㄕˋ ㄌㄢˊ ㄙㄜˋ。" }
      ]
    }
  };

  const tabs = Array.from(document.querySelectorAll(".subject-tab"));
  const panel = document.getElementById("subject-panel");
  const readyState = document.getElementById("ready-state");
  const questionState = document.getElementById("question-state");
  const resultState = document.getElementById("result-state");
  const subjectName = document.getElementById("subject-name");
  const subjectNameZhuyin = document.getElementById("subject-name-zhuyin");
  const subjectDescription = document.getElementById("subject-description");
  const subjectDescriptionZhuyin = document.getElementById("subject-description-zhuyin");
  const startButton = document.getElementById("start-button");
  const mathMode = document.getElementById("math-mode");
  const mathModeNote = document.getElementById("math-mode-note");
  const mathModeNoteZhuyin = document.getElementById("math-mode-note-zhuyin");
  const mathModeButtons = Array.from(document.querySelectorAll(".math-mode-button"));
  const answerList = document.getElementById("answer-list");
  const answerFeedback = document.getElementById("answer-feedback");
  const nextButton = document.getElementById("next-button");
  const missedBox = document.getElementById("missed-box");
  const missedList = document.getElementById("missed-list");
  const progressTrack = document.getElementById("progress-track");
  const progressFill = document.getElementById("progress-fill");
  const starCount = document.getElementById("star-count");
  let selectedSubject = "chinese";
  let selectedMathMode = "basic";
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
    subjectNameZhuyin.textContent = subjects[selectedSubject].nameZhuyin;
    subjectDescription.textContent = subjects[selectedSubject].description;
    subjectDescriptionZhuyin.textContent = subjects[selectedSubject].descriptionZhuyin;
    mathMode.hidden = selectedSubject !== "math";
    startButton.querySelector("small").textContent = "ㄎㄞ ㄕˇ ㄔㄨㄤˇ ㄍㄨㄢ";
    if (selectedSubject === "math") updateMathMode();
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
    const source = subject === "math" && selectedMathMode === "contest"
      ? subjects.math.challengeQuestions
      : subjects[subject].questions;
    const questions = source.slice();
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
    document.getElementById("round-label").textContent = `${questionIndex + 1} / ${round.length}`;
    const categoryLabel = document.getElementById("category-label");
    categoryLabel.replaceChildren();
    const categoryText = document.createElement("span");
    categoryText.textContent = question.category;
    const categoryPhonetic = document.createElement("span");
    categoryPhonetic.className = "zhuyin zhuyin--label";
    categoryPhonetic.textContent = question.categoryZhuyin;
    categoryLabel.append(categoryText, categoryPhonetic);
    document.getElementById("question-text").textContent = question.prompt;
    document.getElementById("question-zhuyin").textContent = question.promptZhuyin;
    progressTrack.setAttribute("aria-valuenow", String(questionIndex));
    progressFill.style.width = `${(questionIndex / round.length) * 100}%`;
    answerFeedback.replaceChildren();
    answerFeedback.className = "answer-feedback";
    nextButton.hidden = true;
    answerList.replaceChildren();
    question.options.forEach((option, optionIndex) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "answer-option";
      const optionText = document.createElement("span");
      optionText.textContent = option;
      button.append(optionText);
      if (question.optionZhuyin[optionIndex]) {
        const optionPhonetic = document.createElement("span");
        optionPhonetic.className = "zhuyin";
        optionPhonetic.textContent = question.optionZhuyin[optionIndex];
        button.append(optionPhonetic);
      }
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
      if (optionButton.querySelector("span").textContent === question.answer) optionButton.classList.add("is-correct");
    });
    if (isCorrect) {
      correctCount += 1;
      totalStars += 1;
      document.getElementById("star-total").textContent = String(totalStars);
    } else {
      button.classList.add("is-wrong");
      missedCategories.push({ category: question.category, zhuyin: question.categoryZhuyin });
      answerFeedback.classList.add("is-wrong");
    }
    renderFeedback(isCorrect, question);
    progressTrack.setAttribute("aria-valuenow", String(questionIndex + 1));
    progressFill.style.width = `${((questionIndex + 1) / round.length) * 100}%`;
    const finalQuestion = questionIndex === round.length - 1;
    document.getElementById("next-label").textContent = finalQuestion ? "看結果" : "下一題";
    document.getElementById("next-zhuyin").textContent = finalQuestion ? "ㄎㄢˋ ㄐㄧㄝˊ ㄍㄨㄛˇ" : "ㄒㄧㄚˋ ㄧˊ ㄊㄧˊ";
    nextButton.hidden = false;
    nextButton.focus();
  }

  function showResult() {
    questionState.hidden = true;
    resultState.hidden = false;
    document.getElementById("result-score").textContent = `${correctCount} / ${round.length} ⭐`;
    const perfect = correctCount === round.length;
    document.getElementById("result-message").textContent = perfect
      ? "太厲害了！今天的題目全部答對！"
      : "你很認真完成挑戰，休息一下也可以再玩一次。";
    document.getElementById("result-message-zhuyin").textContent = perfect
      ? "ㄊㄞˋ ㄌㄧˋ ㄏㄞˋ ㄌㄜ˙！ㄐㄧㄣ ㄊㄧㄢ ㄉㄜ˙ ㄊㄧˊ ㄇㄨˋ ㄑㄩㄢˊ ㄅㄨˋ ㄉㄚˊ ㄉㄨㄟˋ！"
      : "ㄋㄧˇ ㄏㄣˇ ㄖㄣˋ ㄓㄣ ㄨㄢˊ ㄔㄥˊ ㄊㄧㄠˇ ㄓㄢˋ，ㄒㄧㄡ ㄒㄧˊ ㄧˊ ㄒㄧㄚˋ ㄧㄝˇ ㄎㄜˇ ㄧˇ ㄗㄞˋ ㄨㄢˊ ㄧˊ ㄘˋ。";
    missedList.replaceChildren();
    const counts = missedCategories.reduce((totals, item) => {
      totals[item.category] = totals[item.category] || { count: 0, zhuyin: item.zhuyin };
      totals[item.category].count += 1;
      return totals;
    }, {});
    Object.entries(counts).forEach(([category, data]) => {
      const item = document.createElement("li");
      const label = document.createElement("span");
      label.textContent = `${category}${data.count > 1 ? `（${data.count} 題）` : ""}`;
      const phonetic = document.createElement("small");
      phonetic.className = "zhuyin";
      phonetic.textContent = data.zhuyin;
      item.append(label, phonetic);
      missedList.append(item);
    });
    missedBox.hidden = missedCategories.length === 0;
    document.getElementById("result-title").textContent = perfect ? "全對！星星送給你" : "闖關完成！";
    document.getElementById("result-title-zhuyin").textContent = perfect
      ? "ㄑㄩㄢˊ ㄉㄨㄟˋ！ㄒㄧㄥ ㄒㄧㄥ ㄙㄨㄥˋ ㄍㄟˇ ㄋㄧˇ"
      : "ㄔㄨㄤˇ ㄍㄨㄢ ㄨㄢˊ ㄔㄥˊ！";
    document.getElementById("retry-button").focus();
  }

  function renderFeedback(isCorrect, question) {
    const status = document.createElement("span");
    status.textContent = isCorrect ? "答對了！" : "再記一次：";
    const statusPhonetic = document.createElement("span");
    statusPhonetic.className = "zhuyin";
    statusPhonetic.textContent = isCorrect ? "ㄉㄚˊ ㄉㄨㄟˋ ㄌㄜ˙" : "ㄗㄞˋ ㄐㄧˋ ㄧˊ ㄘˋ";
    const explanation = document.createElement("span");
    explanation.textContent = question.explain;
    const explanationPhonetic = document.createElement("span");
    explanationPhonetic.className = "zhuyin";
    explanationPhonetic.textContent = question.explainZhuyin;
    answerFeedback.replaceChildren(status, statusPhonetic, explanation, explanationPhonetic);
  }

  function updateMathMode() {
    const contestMode = selectedMathMode === "contest";
    mathModeButtons.forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.mode === selectedMathMode));
    });
    mathModeNote.textContent = contestMode
      ? "原創競賽風格題，練習觀察和推理。"
      : "練習加減法、數字和生活題。";
    mathModeNote.append(mathModeNoteZhuyin);
    mathModeNoteZhuyin.textContent = contestMode
      ? "ㄩㄢˊ ㄔㄨㄤˋ ㄐㄧㄥˋ ㄙㄞˋ ㄈㄥ ㄍㄜˊ ㄊㄧˊ，ㄌㄧㄢˋ ㄒㄧˊ ㄍㄨㄢ ㄔㄚˊ ㄏㄜˊ ㄊㄨㄟ ㄌㄧˇ。"
      : "ㄌㄧㄢˋ ㄒㄧˊ ㄐㄧㄚ ㄐㄧㄢˇ ㄈㄚˇ、ㄕㄨˋ ㄗˋ ㄏㄜˊ ㄕㄥ ㄏㄨㄛˊ ㄊㄧˊ。";
  }

  mathModeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      selectedMathMode = button.dataset.mode;
      updateMathMode();
    });
  });

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
