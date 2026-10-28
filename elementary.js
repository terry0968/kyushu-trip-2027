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

  const courseData = {
    chinese: [
      {
        title: "注音拼讀與聲調",
        titleZhuyin: "ㄓㄨˋ ㄧㄣˋ ㄆㄧㄣ ㄉㄨˊ ㄩˇ ㄕㄥ ㄉㄧㄠˋ",
        teaching: "把聲符和韻符合在一起，就能拼出音節；聲調符號會讓讀音不一樣。",
        teachingZhuyin: "ㄅㄚˇ ㄕㄥ ㄈㄨˊ ㄏㄜˊ ㄩㄣˋ ㄈㄨˊ ㄏㄜˊ ㄗㄞˋ ㄧˋ ㄑㄧˇ，ㄐㄧㄡˋ ㄋㄥˊ ㄆㄧㄣ ㄔㄨ ㄧㄣ ㄐㄧㄝˊ；ㄕㄥ ㄉㄧㄠˋ ㄈㄨˊ ㄏㄨㄟˋ ㄖㄤˋ ㄉㄨˊ ㄧㄣ ㄅㄨˋ ㄧˊ ㄧㄤˋ。",
        example: "例子：ㄇ＋ㄚ＝ㄇㄚ；ㄇㄚ、ㄇㄚˊ、ㄇㄚˇ、ㄇㄚˋ，聲調不同。",
        exampleZhuyin: "ㄌㄧˋ ㄗ˙：ㄕㄥ ㄉㄧㄠˋ ㄅㄨˋ ㄊㄨㄥˊ。",
        questions: [
          { category: "注音拼讀", categoryZhuyin: "ㄓㄨˋ ㄧㄣˋ ㄆㄧㄣ ㄉㄨˊ", prompt: "ㄇ 和 ㄚ 合起來，讀成哪個音節？", promptZhuyin: "ㄏㄜˊ ㄑㄧˇ ㄌㄞˊ，ㄉㄨˊ ㄔㄥˊ ㄋㄚˇ ㄍㄜ˙ ㄧㄣ ㄐㄧㄝˊ？", options: ["ㄇㄚ", "ㄅㄚ", "ㄇㄛ"], optionZhuyin: ["", "", ""], answer: "ㄇㄚ", explain: "ㄇ 和 ㄚ 合起來讀作 ㄇㄚ。", explainZhuyin: "ㄇ ㄏㄜˊ ㄚ ㄏㄜˊ ㄑㄧˇ ㄌㄞˊ ㄉㄨˊ ㄗㄨㄛˋ ㄇㄚ。" },
          { category: "注音拼讀", categoryZhuyin: "ㄓㄨˋ ㄧㄣˋ ㄆㄧㄣ ㄉㄨˊ", prompt: "「ㄇㄚˇ」的聲調符號是哪一個？", promptZhuyin: "ㄉㄜ˙ ㄕㄥ ㄉㄧㄠˋ ㄈㄨˊ ㄏㄠˋ ㄕˋ ㄋㄚˇ ㄧˊ ㄍㄜ˙？", options: ["ˇ", "ˊ", "ˋ"], optionZhuyin: ["", "", ""], answer: "ˇ", explain: "ㄇㄚˇ 上面的 ˇ 是第三聲符號。", explainZhuyin: "ㄇㄚˇ ㄕㄤˋ ㄇㄧㄢˋ ㄉㄜ˙ ˇ ㄕˋ ㄉㄧˋ ㄙㄢ ㄕㄥ ㄈㄨˊ ㄏㄠˋ。" },
          { category: "注音拼讀", categoryZhuyin: "ㄓㄨˋ ㄧㄣˋ ㄆㄧㄣ ㄉㄨˊ", prompt: "「ㄅㄚˋ」要先讀哪個聲符？", promptZhuyin: "ㄧㄠˋ ㄒㄧㄢ ㄉㄨˊ ㄋㄚˇ ㄍㄜ˙ ㄕㄥ ㄈㄨˊ？", options: ["ㄅ", "ㄇ", "ㄉ"], optionZhuyin: ["", "", ""], answer: "ㄅ", explain: "拼讀時先看到聲符 ㄅ，再接韻符和聲調。", explainZhuyin: "ㄆㄧㄣ ㄉㄨˊ ㄕˊ ㄒㄧㄢ ㄎㄢˋ ㄉㄠˋ ㄕㄥ ㄈㄨˊ ㄅ，ㄗㄞˋ ㄐㄧㄝ ㄩㄣˋ ㄈㄨˊ ㄏㄜˊ ㄕㄥ ㄉㄧㄠˋ。" }
        ]
      },
      {
        title: "認識國字和部件",
        titleZhuyin: "ㄖㄣˋ ㄕˋ ㄍㄨㄛˊ ㄗˋ ㄏㄜˊ ㄅㄨˋ ㄐㄧㄢˋ",
        teaching: "國字由筆畫和部件組成。看看字裡有哪些熟悉的部分，可以幫助我們認字。",
        teachingZhuyin: "ㄍㄨㄛˊ ㄗˋ ㄧㄡˊ ㄅㄧˇ ㄏㄨㄚˋ ㄏㄜˊ ㄅㄨˋ ㄐㄧㄢˋ ㄗㄨˇ ㄔㄥˊ。ㄎㄢˋ ㄎㄢˋ ㄗˋ ㄌㄧˇ ㄧㄡˇ ㄋㄚˇ ㄒㄧㄝ ㄕㄨˊ ㄒㄧˊ ㄉㄜ˙ ㄅㄨˋ ㄈㄣ˙，ㄎㄜˇ ㄧˇ ㄅㄤ ㄓㄨˋ ㄨㄛˇ ㄇㄣ˙ ㄖㄣˋ ㄗˋ。",
        example: "例子：「休」有「人」和「木」；「明」有「日」和「月」。",
        exampleZhuyin: "ㄌㄧˋ ㄗ˙：「ㄒㄧㄡ」ㄧㄡˇ「ㄖㄣˊ」ㄏㄜˊ「ㄇㄨˋ」；「ㄇㄧㄥˊ」ㄧㄡˇ「ㄖˋ」ㄏㄜˊ「ㄩㄝˋ」。",
        questions: [subjects.chinese.questions[0], subjects.chinese.questions[1], subjects.chinese.questions[2]]
      },
      {
        title: "詞語和短句理解",
        titleZhuyin: "ㄘˊ ㄩˇ ㄏㄜˊ ㄉㄨㄢˇ ㄐㄩˋ ㄌㄧˇ ㄐㄧㄝˇ",
        teaching: "讀短句時，先找出熟悉的詞語，再想想前後意思，選出最合適的答案。",
        teachingZhuyin: "ㄉㄨˊ ㄉㄨㄢˇ ㄐㄩˋ ㄕˊ，ㄒㄧㄢ ㄓㄠˇ ㄔㄨ ㄕㄨˊ ㄒㄧˊ ㄉㄜ˙ ㄘˊ ㄩˇ，ㄗㄞˋ ㄒㄧㄤˇ ㄒㄧㄤˇ ㄑㄧㄢˊ ㄏㄡˋ ㄧˋ ㄙ˙，ㄒㄩㄢˇ ㄔㄨ ㄗㄨㄟˋ ㄕˋ ㄏㄜˊ ㄉㄜ˙ ㄉㄚˊ ㄢˋ。",
        example: "例子：「小鳥在天空飛翔。」這句話讀起來通順。",
        exampleZhuyin: "ㄌㄧˋ ㄗ˙：「ㄒㄧㄠˇ ㄋㄧㄠˇ ㄗㄞˋ ㄊㄧㄢ ㄎㄨㄥ ㄈㄟ ㄒㄧㄤˊ。」ㄓㄜˋ ㄐㄩˋ ㄏㄨㄚˋ ㄉㄨˊ ㄑㄧˇ ㄌㄞˊ ㄊㄨㄥ ㄕㄨㄣˋ。",
        questions: [subjects.chinese.questions[3], subjects.chinese.questions[4], subjects.chinese.questions[6]]
      },
      {
        title: "部件組字",
        titleZhuyin: "ㄅㄨˋ ㄐㄧㄢˋ ㄗㄨˇ ㄗˋ",
        teaching: "有些國字是由熟悉的部件組合而成。找到部件，就能幫助我們記住字形。",
        teachingZhuyin: "ㄧㄡˇ ㄒㄧㄝ ㄍㄨㄛˊ ㄗˋ ㄕˋ ㄧㄡˊ ㄕㄨˊ ㄒㄧˊ ㄉㄜ˙ ㄅㄨˋ ㄐㄧㄢˋ ㄗㄨˇ ㄏㄜˊ ㄦˊ ㄔㄥˊ。ㄓㄠˇ ㄉㄠˋ ㄅㄨˋ ㄐㄧㄢˋ，ㄐㄧㄡˋ ㄋㄥˊ ㄅㄤ ㄓㄨˋ ㄨㄛˇ ㄇㄣ˙ ㄐㄧˋ ㄓㄨˋ ㄗˋ ㄒㄧㄥˊ。",
        example: "例子：「木」加「木」可以組成「林」。",
        exampleZhuyin: "ㄌㄧˋ ㄗ˙：「ㄇㄨˋ」ㄐㄧㄚ「ㄇㄨˋ」ㄎㄜˇ ㄧˇ ㄗㄨˇ ㄔㄥˊ「ㄌㄧㄣˊ」。",
        questions: [
          { category: "部件組字", categoryZhuyin: "ㄅㄨˋ ㄐㄧㄢˋ ㄗㄨˇ ㄗˋ", prompt: "哪個字有「女」這個部件？", promptZhuyin: "ㄋㄚˇ ㄍㄜ˙ ㄗˋ ㄧㄡˇ ㄋㄩˇ ㄓㄜˋ ㄍㄜ˙ ㄅㄨˋ ㄐㄧㄢˋ？", options: ["好", "明", "河"], optionZhuyin: ["ㄏㄠˇ", "ㄇㄧㄥˊ", "ㄏㄜˊ"], answer: "好", explain: "「好」有「女」和「子」兩個部件。", explainZhuyin: "ㄏㄠˇ ㄧㄡˇ ㄋㄩˇ ㄏㄜˊ ㄗˇ ㄌㄧㄤˇ ㄍㄜ˙ ㄅㄨˋ ㄐㄧㄢˋ。" },
          { category: "部件組字", categoryZhuyin: "ㄅㄨˋ ㄐㄧㄢˋ ㄗㄨˇ ㄗˋ", prompt: "「木」和「木」合起來，可以組成哪個字？", promptZhuyin: "ㄇㄨˋ ㄏㄜˊ ㄇㄨˋ ㄏㄜˊ ㄑㄧˇ ㄌㄞˊ，ㄎㄜˇ ㄧˇ ㄗㄨˇ ㄔㄥˊ ㄋㄚˇ ㄍㄜ˙ ㄗˋ？", options: ["林", "休", "日"], optionZhuyin: ["ㄌㄧㄣˊ", "ㄒㄧㄡ", "ㄖˋ"], answer: "林", explain: "兩個「木」合起來是「林」。", explainZhuyin: "ㄌㄧㄤˇ ㄍㄜ˙ ㄇㄨˋ ㄏㄜˊ ㄑㄧˇ ㄌㄞˊ ㄕˋ ㄌㄧㄣˊ。" },
          { category: "部件組字", categoryZhuyin: "ㄅㄨˋ ㄐㄧㄢˋ ㄗㄨˇ ㄗˋ", prompt: "「明」是由哪兩個部件組成的？", promptZhuyin: "ㄕˋ ㄧㄡˊ ㄋㄚˇ ㄌㄧㄤˇ ㄍㄜ˙ ㄅㄨˋ ㄐㄧㄢˋ ㄗㄨˇ ㄔㄥˊ ㄉㄜ˙？", options: ["日和月", "口和木", "女和子"], optionZhuyin: ["ㄖˋ ㄏㄜˊ ㄩㄝˋ", "ㄎㄡˇ ㄏㄜˊ ㄇㄨˋ", "ㄋㄩˇ ㄏㄜˊ ㄗˇ"], answer: "日和月", explain: "「明」由「日」和「月」組成。", explainZhuyin: "ㄇㄧㄥˊ ㄧㄡˊ ㄖˋ ㄏㄜˊ ㄩㄝˋ ㄗㄨˇ ㄔㄥˊ。" }
        ]
      },
      {
        title: "認識標點符號",
        titleZhuyin: "ㄖㄣˋ ㄕˋ ㄅㄧㄠ ㄉㄧㄢˇ ㄈㄨˊ ㄏㄠˋ",
        teaching: "問問題時句尾用問號；說完一句話可以用句號；句子中間停一下可以用逗號。",
        teachingZhuyin: "ㄨㄣˋ ㄨㄣˋ ㄊㄧˊ ㄕˊ ㄐㄩˋ ㄨㄟˇ ㄩㄥˋ ㄨㄣˋ ㄏㄠˋ；ㄕㄨㄛ ㄨㄢˊ ㄧˊ ㄐㄩˋ ㄏㄨㄚˋ ㄎㄜˇ ㄧˇ ㄩㄥˋ ㄐㄩˋ ㄏㄠˋ；ㄐㄩˋ ㄗ˙ ㄓㄨㄥ ㄐㄧㄢ ㄊㄧㄥˊ ㄧˊ ㄒㄧㄚˋ ㄎㄜˇ ㄧˇ ㄩㄥˋ ㄉㄡˋ ㄏㄠˋ。",
        example: "例子：你叫什麼名字？我叫小美。",
        exampleZhuyin: "ㄌㄧˋ ㄗ˙：ㄋㄧˇ ㄐㄧㄠˋ ㄕㄣˊ ㄇㄜ˙ ㄇㄧㄥˊ ㄗˋ？ㄨㄛˇ ㄐㄧㄠˋ ㄒㄧㄠˇ ㄇㄟˇ。",
        questions: [
          { category: "標點符號", categoryZhuyin: "ㄅㄧㄠ ㄉㄧㄢˇ ㄈㄨˊ ㄏㄠˋ", prompt: "「你叫什麼名字＿＿」句尾應該放哪個標點？", promptZhuyin: "ㄋㄧˇ ㄐㄧㄠˋ ㄕㄣˊ ㄇㄜ˙ ㄇㄧㄥˊ ㄗˋ，ㄐㄩˋ ㄨㄟˇ ㄧㄥ ㄍㄞ ㄈㄤˋ ㄋㄚˇ ㄍㄜ˙ ㄅㄧㄠ ㄉㄧㄢˇ？", options: ["？", "，", "。"], optionZhuyin: ["", "", ""], answer: "？", explain: "這句是在問問題，句尾用問號。", explainZhuyin: "ㄓㄜˋ ㄐㄩˋ ㄕˋ ㄗㄞˋ ㄨㄣˋ ㄨㄣˋ ㄊㄧˊ，ㄐㄩˋ ㄨㄟˇ ㄩㄥˋ ㄨㄣˋ ㄏㄠˋ。" },
          { category: "標點符號", categoryZhuyin: "ㄅㄧㄠ ㄉㄧㄢˇ ㄈㄨˊ ㄏㄠˋ", prompt: "「我喜歡看書＿＿」句尾用哪個符號？", promptZhuyin: "ㄐㄩˋ ㄨㄟˇ ㄩㄥˋ ㄋㄚˇ ㄍㄜ˙ ㄈㄨˊ ㄏㄠˋ？", options: ["。", "？", "，"], optionZhuyin: ["", "", ""], answer: "。", explain: "這是在說一件事，句尾用句號。", explainZhuyin: "ㄓㄜˋ ㄕˋ ㄗㄞˋ ㄕㄨㄛ ㄧˊ ㄐㄧㄢˋ ㄕˋ，ㄐㄩˋ ㄨㄟˇ ㄩㄥˋ ㄐㄩˋ ㄏㄠˋ。" },
          { category: "標點符號", categoryZhuyin: "ㄅㄧㄠ ㄉㄧㄢˇ ㄈㄨˊ ㄏㄠˋ", prompt: "「我帶了鉛筆＿＿橡皮擦。」中間停一下，用哪個符號？", promptZhuyin: "ㄓㄨㄥ ㄐㄧㄢ ㄊㄧㄥˊ ㄧˊ ㄒㄧㄚˋ，ㄩㄥˋ ㄋㄚˇ ㄍㄜ˙ ㄈㄨˊ ㄏㄠˋ？", options: ["，", "？", "。"], optionZhuyin: ["", "", ""], answer: "，", explain: "逗號可以表示句子中間短暫停頓。", explainZhuyin: "ㄉㄡˋ ㄏㄠˋ ㄎㄜˇ ㄧˇ ㄅㄧㄠˇ ㄕˋ ㄐㄩˋ ㄗ˙ ㄓㄨㄥ ㄐㄧㄢ ㄉㄨㄢˇ ㄓㄢˋ ㄊㄧㄥˊ ㄉㄨㄣˋ。" }
        ]
      },
      {
        title: "生活短文閱讀",
        titleZhuyin: "ㄕㄥ ㄏㄨㄛˊ ㄉㄨㄢˇ ㄨㄣˊ ㄩㄝˋ ㄉㄨˊ",
        teaching: "讀一小段話時，可以先找出人、地方和做的事情，再回答問題。",
        teachingZhuyin: "ㄉㄨˊ ㄧˋ ㄒㄧㄠˇ ㄉㄨㄢˋ ㄏㄨㄚˋ ㄕˊ，ㄎㄜˇ ㄧˇ ㄒㄧㄢ ㄓㄠˇ ㄔㄨ ㄖㄣˊ、ㄉㄧˋ ㄈㄤ ㄏㄜˊ ㄗㄨㄛˋ ㄉㄜ˙ ㄕˋ ㄑㄧㄥˊ，ㄗㄞˋ ㄏㄨㄟˊ ㄉㄚˊ ㄨㄣˋ ㄊㄧˊ。",
        example: "例子：「小貓在窗邊睡覺。」小貓在窗邊。",
        exampleZhuyin: "ㄌㄧˋ ㄗ˙：「ㄒㄧㄠˇ ㄇㄠ ㄗㄞˋ ㄔㄨㄤ ㄅㄧㄢ ㄕㄨㄟˋ ㄐㄧㄠˋ。」ㄒㄧㄠˇ ㄇㄠ ㄗㄞˋ ㄔㄨㄤ ㄅㄧㄢ。",
        questions: [
          { category: "閱讀理解", categoryZhuyin: "ㄩㄝˋ ㄉㄨˊ ㄌㄧˇ ㄐㄧㄝˇ", prompt: "「小貓在窗邊睡覺。」小貓在哪裡？", promptZhuyin: "ㄒㄧㄠˇ ㄇㄠ ㄗㄞˋ ㄔㄨㄤ ㄅㄧㄢ ㄕㄨㄟˋ ㄐㄧㄠˋ。ㄒㄧㄠˇ ㄇㄠ ㄗㄞˋ ㄋㄚˇ ㄌㄧˇ？", options: ["窗邊", "操場", "水裡"], optionZhuyin: ["ㄔㄨㄤ ㄅㄧㄢ", "ㄘㄠ ㄔㄤˇ", "ㄕㄨㄟˇ ㄌㄧˇ"], answer: "窗邊", explain: "句子說小貓在窗邊睡覺。", explainZhuyin: "ㄐㄩˋ ㄗ˙ ㄕㄨㄛ ㄒㄧㄠˇ ㄇㄠ ㄗㄞˋ ㄔㄨㄤ ㄅㄧㄢ ㄕㄨㄟˋ ㄐㄧㄠˋ。" },
          { category: "閱讀理解", categoryZhuyin: "ㄩㄝˋ ㄉㄨˊ ㄌㄧˇ ㄐㄧㄝˇ", prompt: "「雨停了，天空出現彩虹。」雨後出現了什麼？", promptZhuyin: "ㄩˇ ㄏㄡˋ ㄔㄨ ㄒㄧㄢˋ ㄌㄜ˙ ㄕㄣˊ ㄇㄜ˙？", options: ["彩虹", "雪花", "月亮"], optionZhuyin: ["ㄘㄞˇ ㄏㄨㄥˊ", "ㄒㄩㄝˇ ㄏㄨㄚ", "ㄩㄝˋ ㄌㄧㄤˋ"], answer: "彩虹", explain: "短文說雨停後天空出現彩虹。", explainZhuyin: "ㄉㄨㄢˇ ㄨㄣˊ ㄕㄨㄛ ㄩˇ ㄊㄧㄥˊ ㄏㄡˋ ㄊㄧㄢ ㄎㄨㄥ ㄔㄨ ㄒㄧㄢˋ ㄘㄞˇ ㄏㄨㄥˊ。" },
          { category: "閱讀理解", categoryZhuyin: "ㄩㄝˋ ㄉㄨˊ ㄌㄧˇ ㄐㄧㄝˇ", prompt: "「小明把書放進書包。」小明放了什麼？", promptZhuyin: "ㄒㄧㄠˇ ㄇㄧㄥˊ ㄈㄤˋ ㄌㄜ˙ ㄕㄣˊ ㄇㄜ˙？", options: ["書", "水壺", "雨傘"], optionZhuyin: ["ㄕㄨ", "ㄕㄨㄟˇ ㄏㄨˊ", "ㄩˇ ㄙㄢˇ"], answer: "書", explain: "句子說小明把書放進書包。", explainZhuyin: "ㄐㄩˋ ㄗ˙ ㄕㄨㄛ ㄒㄧㄠˇ ㄇㄧㄥˊ ㄅㄚˇ ㄕㄨ ㄈㄤˋ ㄐㄧㄣˋ ㄕㄨ ㄅㄠ。" }
        ]
      }
    ],
    math: [
      {
        title: "數到 10",
        titleZhuyin: "ㄕㄨˇ ㄉㄠˋ ㄕˊ",
        teaching: "從 1 開始依序數數；數到一群物品的最後一個數，就是物品的總數。",
        teachingZhuyin: "ㄘㄨㄥˊ ㄧ ㄎㄞ ㄕˇ ㄧ ㄒㄩˋ ㄕㄨˇ ㄕㄨˇ；ㄕㄨˇ ㄉㄠˋ ㄧˋ ㄑㄩㄣˊ ㄨˋ ㄆㄧㄣˇ ㄉㄜ˙ ㄗㄨㄟˋ ㄏㄡˋ ㄧˊ ㄍㄜ˙ ㄕㄨˋ，ㄐㄧㄡˋ ㄕˋ ㄨˋ ㄆㄧㄣˇ ㄉㄜ˙ ㄗㄨㄥˇ ㄕㄨˋ。",
        example: "例子：🍓🍓🍓🍓🍓🍓，一共有 6 顆草莓。",
        exampleZhuyin: "ㄌㄧˋ ㄗ˙：ㄧˋ ㄍㄨㄥˋ ㄧㄡˇ ㄌㄧㄡˋ ㄎㄜ ㄘㄠˇ ㄇㄟˊ。",
        questions: [
          { category: "數到 10", categoryZhuyin: "ㄕㄨˇ ㄉㄠˋ ㄕˊ", prompt: "從 1 開始數：1、2、3、＿＿。", promptZhuyin: "ㄘㄨㄥˊ ㄧ ㄎㄞ ㄕˇ ㄕㄨˇ，ㄒㄧㄚˋ ㄧˊ ㄍㄜ˙ ㄕˋ ㄕㄣˊ ㄇㄜ˙？", options: ["4", "5", "6"], optionZhuyin: ["ㄙˋ", "ㄨˇ", "ㄌㄧㄡˋ"], answer: "4", explain: "3 後面接著 4。", explainZhuyin: "ㄙㄢ ㄏㄡˋ ㄇㄧㄢˋ ㄐㄧㄝ ㄓㄜ˙ ㄙˋ。" },
          { category: "數到 10", categoryZhuyin: "ㄕㄨˇ ㄉㄠˋ ㄕˊ", prompt: "有 5 顆積木，再放 1 顆，現在有幾顆？", promptZhuyin: "ㄧㄡˇ ㄨˇ ㄎㄜ ㄐㄧ ㄇㄨˋ，ㄗㄞˋ ㄈㄤˋ ㄧ ㄎㄜ，ㄒㄧㄢˋ ㄗㄞˋ ㄧㄡˇ ㄐㄧˇ ㄎㄜ？", options: ["5", "6", "7"], optionZhuyin: ["ㄨˇ", "ㄌㄧㄡˋ", "ㄑㄧ"], answer: "6", explain: "5 再多 1 顆就是 6 顆。", explainZhuyin: "ㄨˇ ㄗㄞˋ ㄉㄨㄛ ㄧ ㄎㄜ ㄐㄧㄡˋ ㄕˋ ㄌㄧㄡˋ ㄎㄜ。" },
          { category: "數到 10", categoryZhuyin: "ㄕㄨˇ ㄉㄠˋ ㄕˊ", prompt: "哪個數字在 8 的後面？", promptZhuyin: "ㄋㄚˇ ㄍㄜ˙ ㄕㄨˋ ㄗˋ ㄗㄞˋ ㄅㄚ ㄉㄜ˙ ㄏㄡˋ ㄇㄧㄢˋ？", options: ["7", "9", "10"], optionZhuyin: ["ㄑㄧ", "ㄐㄧㄡˇ", "ㄕˊ"], answer: "9", explain: "數數時 8 後面是 9。", explainZhuyin: "ㄕㄨˇ ㄕㄨˇ ㄕˊ ㄅㄚ ㄏㄡˋ ㄇㄧㄢˋ ㄕˋ ㄐㄧㄡˇ。" }
        ]
      },
      {
        title: "順序和比較",
        titleZhuyin: "ㄕㄨㄣˋ ㄒㄩˋ ㄏㄜˊ ㄅㄧˇ ㄐㄧㄠˋ",
        teaching: "數字有先後順序，也能比較大小。數數往後，數字會變大；往前，數字會變小。",
        teachingZhuyin: "ㄕㄨˋ ㄗˋ ㄧㄡˇ ㄒㄧㄢ ㄏㄡˋ ㄕㄨㄣˋ ㄒㄩˋ，ㄧㄝˇ ㄋㄥˊ ㄅㄧˇ ㄐㄧㄠˋ ㄉㄚˋ ㄒㄧㄠˇ。ㄕㄨˇ ㄕㄨˇ ㄨㄤˇ ㄏㄡˋ，ㄕㄨˋ ㄗˋ ㄏㄨㄟˋ ㄅㄧㄢˋ ㄉㄚˋ；ㄨㄤˇ ㄑㄧㄢˊ，ㄕㄨˋ ㄗˋ ㄏㄨㄟˋ ㄅㄧㄢˋ ㄒㄧㄠˇ。",
        example: "例子：8、9、10；9 比 8 大。",
        exampleZhuyin: "ㄌㄧˋ ㄗ˙：ㄅㄚ、ㄐㄧㄡˇ、ㄕˊ；ㄐㄧㄡˇ ㄅㄧˇ ㄅㄚ ㄉㄚˋ。",
        questions: [subjects.math.questions[2], subjects.math.questions[3], subjects.math.questions[7]]
      },
      {
        title: "加法和減法",
        titleZhuyin: "ㄐㄧㄚ ㄈㄚˇ ㄏㄜˊ ㄐㄧㄢˇ ㄈㄚˇ",
        teaching: "合在一起用加法；拿走一些用減法。可以用數數或畫圖檢查答案。",
        teachingZhuyin: "ㄏㄜˊ ㄗㄞˋ ㄧˋ ㄑㄧˇ ㄩㄥˋ ㄐㄧㄚ ㄈㄚˇ；ㄋㄚˊ ㄗㄡˇ ㄧˋ ㄒㄧㄝ ㄩㄥˋ ㄐㄧㄢˇ ㄈㄚˇ。ㄎㄜˇ ㄧˇ ㄩㄥˋ ㄕㄨˇ ㄕㄨˇ ㄏㄨㄛˋ ㄏㄨㄚˋ ㄊㄨˊ ㄐㄧㄢˇ ㄔㄚˊ ㄉㄚˊ ㄢˋ。",
        example: "例子：3 + 2 = 5；5 - 2 = 3。",
        exampleZhuyin: "ㄌㄧˋ ㄗ˙：ㄙㄢ ㄐㄧㄚ ㄦˋ ㄉㄥˇ ㄩˊ ㄨˇ；ㄨˇ ㄐㄧㄢˇ ㄦˋ ㄉㄥˇ ㄩˊ ㄙㄢ。",
        questions: [subjects.math.questions[0], subjects.math.questions[1], subjects.math.questions[4]]
      },
      {
        title: "數的分與合",
        titleZhuyin: "ㄕㄨˋ ㄉㄜ˙ ㄈㄣ ㄩˇ ㄏㄜˊ",
        teaching: "一個數可以分成兩部分；把兩部分合起來，會得到原來的數。",
        teachingZhuyin: "ㄧˊ ㄍㄜ˙ ㄕㄨˋ ㄎㄜˇ ㄧˇ ㄈㄣ ㄔㄥˊ ㄌㄧㄤˇ ㄅㄨˋ ㄈㄣ˙；ㄅㄚˇ ㄌㄧㄤˇ ㄅㄨˋ ㄈㄣ˙ ㄏㄜˊ ㄑㄧˇ ㄌㄞˊ，ㄏㄨㄟˋ ㄉㄜˊ ㄉㄠˋ ㄩㄢˊ ㄌㄞˊ ㄉㄜ˙ ㄕㄨˋ。",
        example: "例子：5 可以分成 2 和 3；2 + 3 = 5。",
        exampleZhuyin: "ㄌㄧˋ ㄗ˙：ㄨˇ ㄎㄜˇ ㄧˇ ㄈㄣ ㄔㄥˊ ㄦˋ ㄏㄜˊ ㄙㄢ；ㄦˋ ㄐㄧㄚ ㄙㄢ ㄉㄥˇ ㄩˊ ㄨˇ。",
        questions: [
          { category: "數的分與合", categoryZhuyin: "ㄕㄨˋ ㄉㄜ˙ ㄈㄣ ㄩˇ ㄏㄜˊ", prompt: "4 可以分成 1 和幾？", promptZhuyin: "ㄎㄜˇ ㄧˇ ㄈㄣ ㄔㄥˊ ㄧ ㄏㄜˊ ㄐㄧˇ？", options: ["2", "3", "4"], optionZhuyin: ["ㄦˋ", "ㄙㄢ", "ㄙˋ"], answer: "3", explain: "1 和 3 合起來是 4。", explainZhuyin: "ㄧ ㄏㄜˊ ㄙㄢ ㄏㄜˊ ㄑㄧˇ ㄌㄞˊ ㄕˋ ㄙˋ。" },
          { category: "數的分與合", categoryZhuyin: "ㄕㄨˋ ㄉㄜ˙ ㄈㄣ ㄩˇ ㄏㄜˊ", prompt: "2 和 3 合起來是幾？", promptZhuyin: "ㄏㄜˊ ㄑㄧˇ ㄌㄞˊ ㄕˋ ㄐㄧˇ？", options: ["4", "5", "6"], optionZhuyin: ["ㄙˋ", "ㄨˇ", "ㄌㄧㄡˋ"], answer: "5", explain: "2 + 3 = 5。", explainZhuyin: "ㄦˋ ㄐㄧㄚ ㄙㄢ ㄉㄥˇ ㄩˊ ㄨˇ。" },
          { category: "數的分與合", categoryZhuyin: "ㄕㄨˋ ㄉㄜ˙ ㄈㄣ ㄩˇ ㄏㄜˊ", prompt: "7 可以分成 5 和幾？", promptZhuyin: "ㄎㄜˇ ㄧˇ ㄈㄣ ㄔㄥˊ ㄨˇ ㄏㄜˊ ㄐㄧˇ？", options: ["1", "2", "3"], optionZhuyin: ["ㄧ", "ㄦˋ", "ㄙㄢ"], answer: "2", explain: "5 和 2 合起來是 7。", explainZhuyin: "ㄨˇ ㄏㄜˊ ㄦˋ ㄏㄜˊ ㄑㄧˇ ㄌㄞˊ ㄕˋ ㄑㄧ。" }
        ]
      },
      {
        title: "數到 30",
        titleZhuyin: "ㄕㄨˇ ㄉㄠˋ ㄙㄢ ㄕˊ",
        teaching: "十個一合起來是十。數到二十以後，繼續依照順序往後數。",
        teachingZhuyin: "ㄕˊ ㄍㄜ˙ ㄧ ㄏㄜˊ ㄑㄧˇ ㄌㄞˊ ㄕˋ ㄕˊ。ㄕㄨˇ ㄉㄠˋ ㄦˋ ㄕˊ ㄧˇ ㄏㄡˋ，ㄐㄧˋ ㄒㄩˋ ㄧ ㄓㄠˋ ㄕㄨㄣˋ ㄒㄩˋ ㄨㄤˇ ㄏㄡˋ ㄕㄨˇ。",
        example: "例子：20、21、22、23。",
        exampleZhuyin: "ㄌㄧˋ ㄗ˙：ㄦˋ ㄕˊ、ㄦˋ ㄕˊ ㄧ、ㄦˋ ㄕˊ ㄦˋ、ㄦˋ ㄕˊ ㄙㄢ。",
        questions: [
          { category: "數到 30", categoryZhuyin: "ㄕㄨˇ ㄉㄠˋ ㄙㄢ ㄕˊ", prompt: "11、12、13、＿＿。下一個數是幾？", promptZhuyin: "ㄒㄧㄚˋ ㄧˊ ㄍㄜ˙ ㄕㄨˋ ㄕˋ ㄐㄧˇ？", options: ["14", "15", "16"], optionZhuyin: ["ㄕˊ ㄙˋ", "ㄕˊ ㄨˇ", "ㄕˊ ㄌㄧㄡˋ"], answer: "14", explain: "13 後面接著 14。", explainZhuyin: "ㄕˊ ㄙㄢ ㄏㄡˋ ㄇㄧㄢˋ ㄐㄧㄝ ㄓㄜ˙ ㄕˊ ㄙˋ。" },
          { category: "數到 30", categoryZhuyin: "ㄕㄨˇ ㄉㄠˋ ㄙㄢ ㄕˊ", prompt: "哪個數字比 18 大？", promptZhuyin: "ㄋㄚˇ ㄍㄜ˙ ㄕㄨˋ ㄗˋ ㄅㄧˇ ㄕˊ ㄅㄚ ㄉㄚˋ？", options: ["17", "19", "16"], optionZhuyin: ["ㄕˊ ㄑㄧ", "ㄕˊ ㄐㄧㄡˇ", "ㄕˊ ㄌㄧㄡˋ"], answer: "19", explain: "19 比 18 多 1。", explainZhuyin: "ㄕˊ ㄐㄧㄡˇ ㄅㄧˇ ㄕˊ ㄅㄚ ㄉㄨㄛ ㄧ。" },
          { category: "數到 30", categoryZhuyin: "ㄕㄨˇ ㄉㄠˋ ㄙㄢ ㄕˊ", prompt: "從 20 往後數：20、21、22、＿＿。", promptZhuyin: "ㄒㄧㄚˋ ㄧˊ ㄍㄜ˙ ㄕˋ ㄐㄧˇ？", options: ["22", "23", "24"], optionZhuyin: ["ㄦˋ ㄕˊ ㄦˋ", "ㄦˋ ㄕˊ ㄙㄢ", "ㄦˋ ㄕˊ ㄙˋ"], answer: "23", explain: "22 後面是 23。", explainZhuyin: "ㄦˋ ㄕˊ ㄦˋ ㄏㄡˋ ㄇㄧㄢˋ ㄕˋ ㄦˋ ㄕˊ ㄙㄢ。" }
        ]
      },
      {
        title: "形狀和長短",
        titleZhuyin: "ㄒㄧㄥˊ ㄓㄨㄤˋ ㄏㄜˊ ㄔㄤˊ ㄉㄨㄢˇ",
        teaching: "常見圖形有不同的邊和角；比較長短時，可以把兩個物品的一端對齊。",
        teachingZhuyin: "ㄔㄤˊ ㄐㄧㄢˋ ㄊㄨˊ ㄒㄧㄥˊ ㄧㄡˇ ㄅㄨˋ ㄊㄨㄥˊ ㄉㄜ˙ ㄅㄧㄢ ㄏㄜˊ ㄐㄧㄠˇ；ㄅㄧˇ ㄐㄧㄠˋ ㄔㄤˊ ㄉㄨㄢˇ ㄕˊ，ㄎㄜˇ ㄧˇ ㄅㄚˇ ㄌㄧㄤˇ ㄍㄜ˙ ㄨˋ ㄆㄧㄣˇ ㄉㄜ˙ ㄧˋ ㄉㄨㄢ ㄉㄨㄟˋ ㄑㄧˊ。",
        example: "例子：三角形有 3 個角；正方形有 4 條邊。",
        exampleZhuyin: "ㄌㄧˋ ㄗ˙：ㄙㄢ ㄐㄧㄠˇ ㄒㄧㄥˊ ㄧㄡˇ ㄙㄢ ㄍㄜ˙ ㄐㄧㄠˇ；ㄓㄥˋ ㄈㄤ ㄒㄧㄥˊ ㄧㄡˇ ㄙˋ ㄊㄧㄠˊ ㄅㄧㄢ。",
        questions: [
          { category: "形狀", categoryZhuyin: "ㄒㄧㄥˊ ㄓㄨㄤˋ", prompt: "哪個圖形有 3 個角？", promptZhuyin: "ㄋㄚˇ ㄍㄜ˙ ㄊㄨˊ ㄒㄧㄥˊ ㄧㄡˇ ㄙㄢ ㄍㄜ˙ ㄐㄧㄠˇ？", options: ["三角形", "正方形", "圓形"], optionZhuyin: ["ㄙㄢ ㄐㄧㄠˇ ㄒㄧㄥˊ", "ㄓㄥˋ ㄈㄤ ㄒㄧㄥˊ", "ㄩㄢˊ ㄒㄧㄥˊ"], answer: "三角形", explain: "三角形有 3 個角。", explainZhuyin: "ㄙㄢ ㄐㄧㄠˇ ㄒㄧㄥˊ ㄧㄡˇ ㄙㄢ ㄍㄜ˙ ㄐㄧㄠˇ。" },
          { category: "形狀", categoryZhuyin: "ㄒㄧㄥˊ ㄓㄨㄤˋ", prompt: "正方形有幾條邊？", promptZhuyin: "ㄧㄡˇ ㄐㄧˇ ㄊㄧㄠˊ ㄅㄧㄢ？", options: ["3", "4", "5"], optionZhuyin: ["ㄙㄢ", "ㄙˋ", "ㄨˇ"], answer: "4", explain: "正方形有 4 條一樣長的邊。", explainZhuyin: "ㄓㄥˋ ㄈㄤ ㄒㄧㄥˊ ㄧㄡˇ ㄙˋ ㄊㄧㄠˊ ㄧˊ ㄧㄤˋ ㄔㄤˊ ㄉㄜ˙ ㄅㄧㄢ。" },
          { category: "長短比較", categoryZhuyin: "ㄔㄤˊ ㄉㄨㄢˇ ㄅㄧˇ ㄐㄧㄠˋ", prompt: "鉛筆長 12 公分，橡皮擦長 8 公分，哪個比較長？", promptZhuyin: "ㄑㄧㄢ ㄅㄧˇ ㄔㄤˊ ㄕˊ ㄦˋ ㄍㄨㄥ ㄈㄣ，ㄒㄧㄤˋ ㄆㄧˊ ㄘㄚ ㄔㄤˊ ㄅㄚ ㄍㄨㄥ ㄈㄣ，ㄋㄚˇ ㄍㄜ˙ ㄅㄧˇ ㄐㄧㄠˋ ㄔㄤˊ？", options: ["鉛筆", "橡皮擦", "一樣長"], optionZhuyin: ["ㄑㄧㄢ ㄅㄧˇ", "ㄒㄧㄤˋ ㄆㄧˊ ㄘㄚ", "ㄧˊ ㄧㄤˋ ㄔㄤˊ"], answer: "鉛筆", explain: "12 公分比 8 公分長，所以鉛筆比較長。", explainZhuyin: "ㄕˊ ㄦˋ ㄍㄨㄥ ㄈㄣ ㄅㄧˇ ㄅㄚ ㄍㄨㄥ ㄈㄣ ㄔㄤˊ，ㄙㄨㄛˇ ㄧˇ ㄑㄧㄢ ㄅㄧˇ ㄅㄧˇ ㄐㄧㄠˋ ㄔㄤˊ。" }
        ]
      }
    ],
    english: [
      {
        title: "英文字母和數字",
        titleZhuyin: "ㄧㄥ ㄨㄣˊ ㄗˋ ㄇㄨˇ ㄏㄜˊ ㄕㄨˋ ㄗˋ",
        teaching: "英文字母有大寫和小寫；學會字母順序，也可以認識簡單的數字單字。",
        teachingZhuyin: "ㄧㄥ ㄨㄣˊ ㄗˋ ㄇㄨˇ ㄧㄡˇ ㄉㄚˋ ㄒㄧㄝˇ ㄏㄜˊ ㄒㄧㄠˇ ㄒㄧㄝˇ；ㄒㄩㄝˊ ㄏㄨㄟˋ ㄗˋ ㄇㄨˇ ㄕㄨㄣˋ ㄒㄩˋ，ㄧㄝˇ ㄎㄜˇ ㄧˇ ㄖㄣˋ ㄕˋ ㄐㄧㄢˇ ㄉㄢ ㄉㄜ˙ ㄕㄨˋ ㄗˋ ㄉㄢ ㄗˋ。",
        example: "例子：B 的小寫是 b；one 代表數字 1。",
        exampleZhuyin: "ㄌㄧˋ ㄗ˙：B ㄉㄜ˙ ㄒㄧㄠˇ ㄒㄧㄝˇ ㄕˋ b；one ㄉㄞˋ ㄅㄧㄠˇ ㄕㄨˋ ㄗˋ ㄧ。",
        questions: [subjects.english.questions[0], subjects.english.questions[1], subjects.english.questions[3]]
      },
      {
        title: "打招呼和簡單回應",
        titleZhuyin: "ㄉㄚˇ ㄓㄠ ㄏㄨ ㄏㄜˊ ㄐㄧㄢˇ ㄉㄢ ㄏㄨㄟˊ ㄧㄥˋ",
        teaching: "見面時可以說 Hello；早上說 Good morning；要離開時可以說 Goodbye。",
        teachingZhuyin: "ㄐㄧㄢˋ ㄇㄧㄢˋ ㄕˊ ㄎㄜˇ ㄧˇ ㄕㄨㄛ Hello；ㄗㄠˇ ㄕㄤˋ ㄕㄨㄛ Good morning；ㄧㄠˋ ㄌㄧˊ ㄎㄞ ㄕˊ ㄎㄜˇ ㄧˇ ㄕㄨㄛ Goodbye。",
        example: "例子：A：Hello!　B：Hello!",
        exampleZhuyin: "ㄌㄧˋ ㄗ˙：ㄐㄧㄚˇ：Hello！ㄧˇ：Hello！",
        questions: [
          subjects.english.questions[5],
          { category: "打招呼", categoryZhuyin: "ㄉㄚˇ ㄓㄠ ㄏㄨ", prompt: "朋友要回家時，哪一句適合說再見？", promptZhuyin: "ㄆㄥˊ ㄧㄡˇ ㄧㄠˋ ㄏㄨㄟˊ ㄐㄧㄚ ㄕˊ，ㄋㄚˇ ㄧˊ ㄐㄩˋ ㄕˋ ㄏㄜˊ ㄕㄨㄛ ㄗㄞˋ ㄐㄧㄢˋ？", options: ["Goodbye!", "Good morning!", "Hello!"], optionZhuyin: ["", "", ""], answer: "Goodbye!", explain: "Goodbye 是道別時說的再見。", explainZhuyin: "Goodbye ㄕˋ ㄉㄠˋ ㄅㄧㄝˊ ㄕˊ ㄕㄨㄛ ㄉㄜ˙ ㄗㄞˋ ㄐㄧㄢˋ。" },
          { category: "打招呼", categoryZhuyin: "ㄉㄚˇ ㄓㄠ ㄏㄨ", prompt: "早上遇見老師，可以說什麼？", promptZhuyin: "ㄗㄠˇ ㄕㄤˋ ㄩˋ ㄐㄧㄢˋ ㄌㄠˇ ㄕ，ㄎㄜˇ ㄧˇ ㄕㄨㄛ ㄕㄣˊ ㄇㄜ˙？", options: ["Good night!", "Good morning!", "Goodbye!"], optionZhuyin: ["", "", ""], answer: "Good morning!", explain: "早上見面時，可以說 Good morning。", explainZhuyin: "ㄗㄠˇ ㄕㄤˋ ㄐㄧㄢˋ ㄇㄧㄢˋ ㄕˊ，ㄎㄜˇ ㄧˇ ㄕㄨㄛ Good morning。" }
        ]
      },
      {
        title: "教室用品單字",
        titleZhuyin: "ㄐㄧㄠˋ ㄕˋ ㄩㄥˋ ㄆㄧㄣˇ ㄉㄢ ㄗˋ",
        teaching: "認識教室裡常見物品的英文名稱，例如 book、pencil 和 eraser。",
        teachingZhuyin: "ㄖㄣˋ ㄕˋ ㄐㄧㄠˋ ㄕˋ ㄌㄧˇ ㄔㄤˊ ㄐㄧㄢˋ ㄨˋ ㄆㄧㄣˇ ㄉㄜ˙ ㄧㄥ ㄨㄣˊ ㄇㄧㄥˊ ㄔㄥ，ㄌㄧˋ ㄖㄨˊ book、pencil ㄏㄜˊ eraser。",
        example: "例子：book 是書；pencil 是鉛筆。",
        exampleZhuyin: "ㄌㄧˋ ㄗ˙：book ㄕˋ ㄕㄨ；pencil ㄕˋ ㄑㄧㄢ ㄅㄧˇ。",
        questions: [
          subjects.english.questions[6],
          { category: "教室單字", categoryZhuyin: "ㄐㄧㄠˋ ㄕˋ ㄉㄢ ㄗˋ", prompt: "「pencil」是什麼？", promptZhuyin: "pencil ㄕˋ ㄕㄣˊ ㄇㄜ˙？", options: ["鉛筆", "書本", "橡皮擦"], optionZhuyin: ["ㄑㄧㄢ ㄅㄧˇ", "ㄕㄨ ㄅㄣˇ", "ㄒㄧㄤˋ ㄆㄧˊ ㄘㄚ"], answer: "鉛筆", explain: "pencil 是鉛筆。", explainZhuyin: "pencil ㄕˋ ㄑㄧㄢ ㄅㄧˇ。" },
          { category: "教室單字", categoryZhuyin: "ㄐㄧㄠˋ ㄕˋ ㄉㄢ ㄗˋ", prompt: "「eraser」是什麼？", promptZhuyin: "eraser ㄕˋ ㄕㄣˊ ㄇㄜ˙？", options: ["橡皮擦", "桌子", "書包"], optionZhuyin: ["ㄒㄧㄤˋ ㄆㄧˊ ㄘㄚ", "ㄓㄨㄛ ㄗ˙", "ㄕㄨ ㄅㄠ"], answer: "橡皮擦", explain: "eraser 是橡皮擦。", explainZhuyin: "eraser ㄕˋ ㄒㄧㄤˋ ㄆㄧˊ ㄘㄚ。" }
        ]
      },
      {
        title: "顏色單字",
        titleZhuyin: "ㄧㄢˊ ㄙㄜˋ ㄉㄢ ㄗˋ",
        teaching: "用顏色單字描述看到的東西：red 是紅色、blue 是藍色、green 是綠色。",
        teachingZhuyin: "ㄩㄥˋ ㄧㄢˊ ㄙㄜˋ ㄉㄢ ㄗˋ ㄇㄧㄠˊ ㄕㄨˋ ㄎㄢˋ ㄉㄠˋ ㄉㄜ˙ ㄉㄨㄥ ㄒㄧ：red ㄕˋ ㄏㄨㄥˊ ㄙㄜˋ、blue ㄕˋ ㄌㄢˊ ㄙㄜˋ、green ㄕˋ ㄌㄩˋ ㄙㄜˋ。",
        example: "例子：The sky is blue.",
        exampleZhuyin: "ㄌㄧˋ ㄗ˙：The sky is blue。",
        questions: [
          subjects.english.questions[2],
          subjects.english.questions[7],
          { category: "顏色單字", categoryZhuyin: "ㄧㄢˊ ㄙㄜˋ ㄉㄢ ㄗˋ", prompt: "「green」是什麼顏色？", promptZhuyin: "green ㄕˋ ㄕㄣˊ ㄇㄜ˙ ㄧㄢˊ ㄙㄜˋ？", options: ["綠色", "紅色", "藍色"], optionZhuyin: ["ㄌㄩˋ ㄙㄜˋ", "ㄏㄨㄥˊ ㄙㄜˋ", "ㄌㄢˊ ㄙㄜˋ"], answer: "綠色", explain: "green 是綠色。", explainZhuyin: "green ㄕˋ ㄌㄩˋ ㄙㄜˋ。" }
        ]
      },
      {
        title: "動物單字",
        titleZhuyin: "ㄉㄨㄥˋ ㄨˋ ㄉㄢ ㄗˋ",
        teaching: "看到熟悉的動物時，可以練習說出牠的英文名字。",
        teachingZhuyin: "ㄎㄢˋ ㄉㄠˋ ㄕㄨˊ ㄒㄧˊ ㄉㄜ˙ ㄉㄨㄥˋ ㄨˋ ㄕˊ，ㄎㄜˇ ㄧˇ ㄌㄧㄢˋ ㄒㄧˊ ㄕㄨㄛ ㄔㄨ ㄊㄚ ㄉㄜ˙ ㄧㄥ ㄨㄣˊ ㄇㄧㄥˊ ㄗˋ。",
        example: "例子：cat 是貓；dog 是狗。",
        exampleZhuyin: "ㄌㄧˋ ㄗ˙：cat ㄕˋ ㄇㄠ；dog ㄕˋ ㄍㄡˇ。",
        questions: [
          subjects.english.questions[4],
          { category: "動物單字", categoryZhuyin: "ㄉㄨㄥˋ ㄨˋ ㄉㄢ ㄗˋ", prompt: "「dog」是哪一種動物？", promptZhuyin: "dog ㄕˋ ㄋㄚˇ ㄧˋ ㄓㄨㄥˇ ㄉㄨㄥˋ ㄨˋ？", options: ["狗", "貓", "鳥"], optionZhuyin: ["ㄍㄡˇ", "ㄇㄠ", "ㄋㄧㄠˇ"], answer: "狗", explain: "dog 是狗。", explainZhuyin: "dog ㄕˋ ㄍㄡˇ。" },
          { category: "動物單字", categoryZhuyin: "ㄉㄨㄥˋ ㄨˋ ㄉㄢ ㄗˋ", prompt: "「bird」是哪一種動物？", promptZhuyin: "bird ㄕˋ ㄋㄚˇ ㄧˋ ㄓㄨㄥˇ ㄉㄨㄥˋ ㄨˋ？", options: ["鳥", "魚", "兔子"], optionZhuyin: ["ㄋㄧㄠˇ", "ㄩˊ", "ㄊㄨˋ ㄗ˙"], answer: "鳥", explain: "bird 是鳥。", explainZhuyin: "bird ㄕˋ ㄋㄧㄠˇ。" }
        ]
      },
      {
        title: "數字單字",
        titleZhuyin: "ㄕㄨˋ ㄗˋ ㄉㄢ ㄗˋ",
        teaching: "認識英文數字單字，並把單字和數字配對。",
        teachingZhuyin: "ㄖㄣˋ ㄕˋ ㄧㄥ ㄨㄣˊ ㄕㄨˋ ㄗˋ ㄉㄢ ㄗˋ，ㄅㄧㄥˋ ㄅㄚˇ ㄉㄢ ㄗˋ ㄏㄜˊ ㄕㄨˋ ㄗˋ ㄆㄟˋ ㄉㄨㄟˋ。",
        example: "例子：one 是 1；two 是 2；three 是 3。",
        exampleZhuyin: "ㄌㄧˋ ㄗ˙：one ㄕˋ ㄧ；two ㄕˋ ㄦˋ；three ㄕˋ ㄙㄢ。",
        questions: [
          subjects.english.questions[3],
          { category: "數字單字", categoryZhuyin: "ㄕㄨˋ ㄗˋ ㄉㄢ ㄗˋ", prompt: "「two」代表數字幾？", promptZhuyin: "two ㄉㄞˋ ㄅㄧㄠˇ ㄕㄨˋ ㄗˋ ㄐㄧˇ？", options: ["1", "2", "3"], optionZhuyin: ["ㄧ", "ㄦˋ", "ㄙㄢ"], answer: "2", explain: "two 是 2。", explainZhuyin: "two ㄕˋ ㄦˋ。" },
          { category: "數字單字", categoryZhuyin: "ㄕㄨˋ ㄗˋ ㄉㄢ ㄗˋ", prompt: "「three」代表數字幾？", promptZhuyin: "three ㄉㄞˋ ㄅㄧㄠˇ ㄕㄨˋ ㄗˋ ㄐㄧˇ？", options: ["2", "3", "4"], optionZhuyin: ["ㄦˋ", "ㄙㄢ", "ㄙˋ"], answer: "3", explain: "three 是 3。", explainZhuyin: "three ㄕˋ ㄙㄢ。" }
        ]
      }
    ]
  };

  const tabs = Array.from(document.querySelectorAll(".subject-tab"));
  const panel = document.getElementById("subject-panel");
  const readyState = document.getElementById("ready-state");
  const lessonState = document.getElementById("lesson-state");
  const questionState = document.getElementById("question-state");
  const resultState = document.getElementById("result-state");
  const subjectName = document.getElementById("subject-name");
  const subjectNameZhuyin = document.getElementById("subject-name-zhuyin");
  const subjectDescription = document.getElementById("subject-description");
  const subjectDescriptionZhuyin = document.getElementById("subject-description-zhuyin");
  const lessonList = document.getElementById("lesson-list");
  const courseProgressLabel = document.getElementById("course-progress");
  const progressNotice = document.getElementById("progress-notice");
  const mathMode = document.getElementById("math-mode");
  const mathModeNote = document.getElementById("math-mode-note");
  const mathModeNoteZhuyin = document.getElementById("math-mode-note-zhuyin");
  const mathModeButtons = Array.from(document.querySelectorAll(".math-mode-button"));
  const challengeStartButton = document.getElementById("challenge-start-button");
  const answerList = document.getElementById("answer-list");
  const answerFeedback = document.getElementById("answer-feedback");
  const nextButton = document.getElementById("next-button");
  const missedBox = document.getElementById("missed-box");
  const missedList = document.getElementById("missed-list");
  const progressTrack = document.getElementById("progress-track");
  const progressFill = document.getElementById("progress-fill");
  const retryButton = document.getElementById("retry-button");
  const courseReturnButton = document.getElementById("course-return-button");
  let selectedLessonIndex = 0;
  let selectedSubject = "chinese";
  let selectedMathMode = "basic";
  let isChallengeRound = false;
  let round = [];
  let questionIndex = 0;
  let correctCount = 0;
  let missedCategories = [];
  let answered = false;
  let totalStars = 0;

  function createEmptyProgress() {
    return Object.fromEntries(
      Object.entries(courseData).map(([subject, lessons]) => [subject, lessons.map(() => false)])
    );
  }

  let courseProgress = createEmptyProgress();
  try {
    const storedProgress = localStorage.getItem("elementary-course-progress-v1");
    if (storedProgress) {
      const parsedProgress = JSON.parse(storedProgress);
      if (!parsedProgress || typeof parsedProgress !== "object") throw new Error("進度資料格式錯誤");
      courseProgress = Object.fromEntries(
        Object.entries(courseData).map(([subject, lessons]) => [
          subject,
          lessons.map((_, index) => parsedProgress[subject]?.[index] === true)
        ])
      );
    }
  } catch (error) {
    console.error("讀取課程進度失敗：", error);
    progressNotice.textContent = "目前無法讀取已儲存的進度；本次仍可正常練習。";
  }

  function saveProgress() {
    try {
      localStorage.setItem("elementary-course-progress-v1", JSON.stringify(courseProgress));
      progressNotice.textContent = "學習進度已保存在這台裝置。";
    } catch (error) {
      console.error("儲存課程進度失敗：", error);
      progressNotice.textContent = "無法儲存進度；請確認瀏覽器允許儲存網站資料。";
    }
  }

  function renderCourseList() {
    const lessons = courseData[selectedSubject];
    const completedCount = courseProgress[selectedSubject].filter(Boolean).length;
    courseProgressLabel.textContent = `已完成 ${completedCount} / ${lessons.length} 課`;
    lessonList.replaceChildren();

    lessons.forEach((lesson, index) => {
      const completed = courseProgress[selectedSubject][index];
      const locked = index > 0 && !courseProgress[selectedSubject][index - 1];
      const button = document.createElement("button");
      button.type = "button";
      button.className = "lesson-card";
      button.classList.toggle("is-complete", completed);
      button.classList.toggle("is-locked", locked);
      button.disabled = locked;
      button.setAttribute("aria-label", `第 ${index + 1} 課：${lesson.title}${locked ? "，尚未解鎖" : ""}`);

      const number = document.createElement("span");
      number.className = "lesson-card__number";
      number.textContent = `第 ${index + 1} 課`;
      const title = document.createElement("span");
      title.className = "lesson-card__title";
      renderAnnotatedText(title, lesson.title, lesson.titleZhuyin);
      const status = document.createElement("span");
      status.className = "lesson-card__status";
      status.textContent = completed ? "已完成 ✓" : locked ? "完成前一課後解鎖" : "開始學習 →";
      button.append(number, title, status);
      button.addEventListener("click", () => openLesson(index));
      lessonList.append(button);
    });
  }

  function showReady() {
    readyState.hidden = false;
    lessonState.hidden = true;
    questionState.hidden = true;
    resultState.hidden = true;
    panel.setAttribute("aria-labelledby", `tab-${selectedSubject}`);
    renderAnnotatedText(subjectName, subjects[selectedSubject].name, subjects[selectedSubject].nameZhuyin);
    renderAnnotatedText(subjectDescription, subjects[selectedSubject].description, subjects[selectedSubject].descriptionZhuyin);
    subjectNameZhuyin.hidden = true;
    subjectDescriptionZhuyin.hidden = true;
    mathMode.hidden = selectedSubject !== "math";
    renderCourseList();
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

  function shuffleQuestions(source, count) {
    const questions = source.slice();
    for (let index = questions.length - 1; index > 0; index -= 1) {
      const randomIndex = Math.floor(Math.random() * (index + 1));
      [questions[index], questions[randomIndex]] = [questions[randomIndex], questions[index]];
    }
    return questions.slice(0, count);
  }

  function openLesson(index) {
    selectedLessonIndex = index;
    const lesson = courseData[selectedSubject][index];
    const ordinal = ["一", "二", "三", "四", "五", "六"][index];
    const ordinalZhuyin = ["ㄧ", "ㄦˋ", "ㄙㄢ", "ㄙˋ", "ㄨˇ", "ㄌㄧㄡˋ"][index];
    readyState.hidden = true;
    lessonState.hidden = false;
    questionState.hidden = true;
    resultState.hidden = true;
    renderAnnotatedText(document.getElementById("lesson-kicker"), `第${ordinal}課・小課堂`, `ㄉㄧˋ ${ordinalZhuyin} ㄎㄜˋ ㄒㄧㄠˇ ㄎㄜˋ ㄊㄤˊ`);
    renderAnnotatedText(document.getElementById("lesson-title"), lesson.title, lesson.titleZhuyin);
    renderAnnotatedText(document.getElementById("lesson-teaching"), lesson.teaching, lesson.teachingZhuyin);
    renderAnnotatedText(document.getElementById("lesson-example"), lesson.example, lesson.exampleZhuyin);
    document.getElementById("start-lesson-button").focus();
  }

  function startLessonQuiz() {
    isChallengeRound = false;
    round = shuffleQuestions(courseData[selectedSubject][selectedLessonIndex].questions, 3);
    questionIndex = 0;
    correctCount = 0;
    missedCategories = [];
    lessonState.hidden = true;
    readyState.hidden = true;
    resultState.hidden = true;
    questionState.hidden = false;
    renderQuestion();
  }

  function startChallengeRound() {
    isChallengeRound = true;
    const source = selectedMathMode === "contest"
      ? subjects.math.challengeQuestions
      : subjects.math.questions;
    round = shuffleQuestions(source, 5);
    questionIndex = 0;
    correctCount = 0;
    missedCategories = [];
    lessonState.hidden = true;
    readyState.hidden = true;
    resultState.hidden = true;
    questionState.hidden = false;
    renderQuestion();
  }

  function renderAnnotatedText(element, text, reading) {
    const syllables = reading.match(/[ㄅ-ㄩ˙ˊˇˋ]+/g) || [];
    let syllableIndex = 0;
    const fragment = document.createDocumentFragment();
    const characters = Array.from(text);

    for (let index = 0; index < characters.length; index += 1) {
      const character = characters[index];
      let readingCount = 0;
      if (/[\u3400-\u9fff]/u.test(character)) {
        readingCount = 1;
      } else if (/\d/u.test(character)) {
        let end = index + 1;
        while (end < characters.length && /\d/u.test(characters[end])) end += 1;
        const number = Number(characters.slice(index, end).join(""));
        readingCount = number >= 11 && number <= 19 ? 2 : number > 19 && number % 10 !== 0 ? 3 : number >= 20 ? 2 : 1;
        const numberCharacters = characters.slice(index, end);
        const annotation = syllables.slice(syllableIndex, syllableIndex + readingCount);
        syllableIndex += annotation.length;
        const numberNode = createAnnotatedCharacter(numberCharacters.join(""), annotation);
        fragment.append(numberNode);
        index = end - 1;
        continue;
      }

      if (!readingCount) {
        fragment.append(document.createTextNode(character));
        continue;
      }
      const annotation = syllables[syllableIndex] ? [syllables[syllableIndex]] : [];
      syllableIndex += annotation.length;
      fragment.append(createAnnotatedCharacter(character, annotation));
    }

    element.replaceChildren(fragment);
  }

  function createAnnotatedCharacter(character, reading) {
    if (!reading.length) return document.createTextNode(character);
    const wrapper = document.createElement("span");
    wrapper.className = "annotated-char";
    const text = document.createElement("span");
    text.className = "annotated-char__text";
    text.textContent = character;
    const phonetic = document.createElement("span");
    phonetic.className = "annotated-char__reading";
    phonetic.textContent = reading.join("");
    wrapper.append(text, phonetic);
    return wrapper;
  }

  function renderQuestion() {
    const question = round[questionIndex];
    answered = false;
    document.getElementById("round-label").textContent = `${questionIndex + 1} / ${round.length}`;
    const categoryLabel = document.getElementById("category-label");
    renderAnnotatedText(categoryLabel, question.category, question.categoryZhuyin);
    renderAnnotatedText(document.getElementById("question-text"), question.prompt, question.promptZhuyin);
    progressTrack.setAttribute("aria-valuemax", String(round.length));
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
      button.dataset.answer = option;
      renderAnnotatedText(button, option, question.optionZhuyin[optionIndex]);
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
      if (optionButton.dataset.answer === question.answer) optionButton.classList.add("is-correct");
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
    const passed = !isChallengeRound && correctCount >= Math.ceil(round.length * 2 / 3);
    if (passed) {
      courseProgress[selectedSubject][selectedLessonIndex] = true;
      saveProgress();
    }
    const title = isChallengeRound ? "加碼挑戰完成！" : passed ? "本課通過！" : "再練習一次吧！";
    const titleZhuyin = isChallengeRound
      ? "ㄐㄧㄚ ㄇㄚˇ ㄊㄧㄠˇ ㄓㄢˋ ㄨㄢˊ ㄔㄥˊ"
      : passed ? "ㄅㄣˇ ㄎㄜˋ ㄊㄨㄥ ㄍㄨㄛˋ" : "ㄗㄞˋ ㄌㄧㄢˋ ㄒㄧˊ ㄧˊ ㄘˋ ㄅㄚ";
    const message = isChallengeRound
      ? "你完成了加碼練習！課程進度不會受到影響。"
      : passed
        ? "太棒了！已記住這一課，可以回課程列表繼續下一課。"
        : "答對兩題就能通過本課，回去複習後再試一次。";
    const messageZhuyin = isChallengeRound
      ? "ㄋㄧˇ ㄨㄢˊ ㄔㄥˊ ㄌㄜ˙ ㄐㄧㄚ ㄇㄚˇ ㄌㄧㄢˋ ㄒㄧˊ！ㄎㄜˋ ㄔㄥˊ ㄐㄧㄣˋ ㄉㄨˋ ㄅㄨˋ ㄏㄨㄟˋ ㄕㄡˋ ㄉㄠˋ ㄧㄥˇ ㄒㄧㄤˇ。"
      : passed
        ? "ㄊㄞˋ ㄅㄤˋ ㄌㄜ˙！ㄧˇ ㄐㄧˋ ㄓㄨˋ ㄓㄜˋ ㄧˋ ㄎㄜˋ，ㄎㄜˇ ㄧˇ ㄏㄨㄟˊ ㄎㄜˋ ㄔㄥˊ ㄌㄧㄝˋ ㄅㄧㄠˇ ㄐㄧˋ ㄒㄩˋ ㄒㄧㄚˋ ㄧˋ ㄎㄜˋ。"
        : "ㄉㄚˊ ㄉㄨㄟˋ ㄌㄧㄤˇ ㄊㄧˊ ㄐㄧㄡˋ ㄋㄥˊ ㄊㄨㄥ ㄍㄨㄛˋ ㄅㄣˇ ㄎㄜˋ，ㄏㄨㄟˊ ㄑㄩˋ ㄈㄨˋ ㄒㄧˊ ㄏㄡˋ ㄗㄞˋ ㄕˋ ㄧˊ ㄘˋ。";
    renderAnnotatedText(
      document.getElementById("result-message"),
      message,
      messageZhuyin
    );
    missedList.replaceChildren();
    const counts = missedCategories.reduce((totals, item) => {
      totals[item.category] = totals[item.category] || { count: 0, zhuyin: item.zhuyin };
      totals[item.category].count += 1;
      return totals;
    }, {});
    Object.entries(counts).forEach(([category, data]) => {
      const item = document.createElement("li");
      const label = document.createElement("span");
      renderAnnotatedText(label, `${category}${data.count > 1 ? `（${data.count} 題）` : ""}`, data.zhuyin);
      item.append(label);
      missedList.append(item);
    });
    missedBox.hidden = missedCategories.length === 0;
    const resultTitle = document.getElementById("result-title");
    renderAnnotatedText(resultTitle, title, titleZhuyin);
    retryButton.querySelector("span").textContent = isChallengeRound ? "再玩一次" : "再做一次小測";
    retryButton.querySelector(".zhuyin").textContent = isChallengeRound ? "ㄗㄞˋ ㄨㄢˊ ㄧˊ ㄘˋ" : "ㄗㄞˋ ㄗㄨㄛˋ ㄧˊ ㄘˋ ㄒㄧㄠˇ ㄘㄜˋ";
    document.getElementById("result-title-zhuyin").hidden = true;
    document.getElementById("result-message-zhuyin").hidden = true;
    courseReturnButton.hidden = isChallengeRound;
    retryButton.focus();
  }

  function renderFeedback(isCorrect, question) {
    const status = document.createElement("span");
    renderAnnotatedText(
      status,
      isCorrect ? "答對了！" : "再記一次：",
      isCorrect ? "ㄉㄚˊ ㄉㄨㄟˋ ㄌㄜ˙" : "ㄗㄞˋ ㄐㄧˋ ㄧˊ ㄘˋ"
    );
    const explanation = document.createElement("span");
    renderAnnotatedText(explanation, question.explain, question.explainZhuyin);
    answerFeedback.replaceChildren(status, explanation);
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

  document.getElementById("lesson-back-button").addEventListener("click", showReady);
  document.getElementById("start-lesson-button").addEventListener("click", startLessonQuiz);
  challengeStartButton.addEventListener("click", startChallengeRound);
  nextButton.addEventListener("click", () => {
    questionIndex += 1;
    if (questionIndex >= round.length) showResult();
    else renderQuestion();
  });
  retryButton.addEventListener("click", () => {
    if (isChallengeRound) startChallengeRound();
    else startLessonQuiz();
  });
  courseReturnButton.addEventListener("click", showReady);
  showReady();
})();
