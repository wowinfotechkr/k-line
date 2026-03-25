var langObj = {
  en: {
    LOADING_TEXT1: "We are preparing",
    LOADING_TEXT1_2: "a special experience just for you.",
    LOADING_TEXT2: "Please wait a moment.",
    LOADING_APP_BTN: "Start in the official app",
  },
  th: {
    LOADING_TEXT1: "เรากำลังเตรียมประสบการณ์พิเศษ",
    LOADING_TEXT1_2: "สำหรับคุณ",
    LOADING_TEXT2: "กรุณารอสักครู่",
    LOADING_APP_BTN: "เริ่มใช้งานทันทีในแอปอย่างเป็นทางการ",
  },
  ko: {
    LOADING_TEXT1: "당신을 위한 특별한 경험을",
    LOADING_TEXT1_2: "준비하고 있습니다.",
    LOADING_TEXT2: "잠시만 기다려주세요.",
    LOADING_APP_BTN: "공식 앱으로 바로 시작하기",
  },
};

function applyLanguage(lang) {
  const elements = document.querySelectorAll("[data-lang]");
  elements.forEach((el) => {
    const key = el.getAttribute("data-lang");
    const translation = langObj[lang]?.[key];
    if (translation !== undefined) {
      el.innerHTML = translation;
    }
  });
}

function getLangParam() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get("lang");
}

function getModeParam() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get("mode");
}

function getLang() {
  const supported = ["ko", "en", "th"];
  let lang = getLangParam();

  if (!supported.includes(lang)) {
    const browserLang = navigator.language.slice(0, 2);
    lang = supported.includes(browserLang) ? browserLang : "en";
  }

  return lang;
}

document.addEventListener("DOMContentLoaded", function () {
  const lang = getLang();
  const mode = getModeParam();

  applyLanguage(lang);
});