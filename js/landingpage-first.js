var langObj = {
  en: {
    LOADING_TEXT1: "Connecting to K-Line",
    LOADING_TEXT1_2: "to explore Korean products.",
    LOADING_TEXT2: "Please wait a moment.",
    LOADING_APP_BTN: "Start in the official app",
  },
  th: {
    LOADING_TEXT1: "กำลังเชื่อมต่อกับ K-Line",
    LOADING_TEXT1_2: "เพื่อให้คุณได้พบกับสินค้าเกาหลี",
    LOADING_TEXT2: "กรุณารอสักครู่",
    LOADING_APP_BTN: "เริ่มใช้งานทันทีในแอปอย่างเป็นทางการ",
  },
  ko: {
    LOADING_TEXT1: "한국 상품을 만나볼 수 있는",
    LOADING_TEXT1_2: "K-Line에 연결 중입니다.",
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