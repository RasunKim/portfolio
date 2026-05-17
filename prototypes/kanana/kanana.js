// <kanana-prototype screen="...">
// One project, multiple screens.
//
// Pick an explicit screen:
//   <kanana-prototype screen="ai-search"></kanana-prototype>
//
// OR omit the attribute to use the "featured" screen chosen in the preview page:
//   <kanana-prototype></kanana-prototype>
//
// The featured key is stored in localStorage under "kanana:featured" so picking
// a screen in /prototypes/kanana/ propagates to anywhere else that uses the
// attribute-less tag (e.g. the main portfolio page).
//
// Add a new screen by appending a key to the SCREENS map below.

export const STORAGE_KEY = 'kanana:featured';
export const DEFAULT_SCREEN = 'ai-search';

const SCREENS = {
  'ai-search': /* html */ `
    <div class="hero"></div>
    <div class="card">
      <p class="title">관련된 질문</p>
      <p class="item">영화에 반복되는 상징물 별 의미 정리</p>
      <p class="item">작가가 전달하려는 메시지</p>
    </div>
    <div class="input">
      <span>무엇이든 물어보세요</span>
      <span class="mic">●</span>
    </div>
  `,

  ask: /* html */ `
    <div class="ask-top">
      <p class="ask-greeting">안녕하세요, Laseon님</p>
      <p class="ask-sub">오늘은 무엇이 궁금하세요?</p>
    </div>
    <div class="chips">
      <span class="chip">✨ 글쓰기</span>
      <span class="chip">📅 일정 정리</span>
      <span class="chip">🧠 아이디어</span>
      <span class="chip">🔍 검색</span>
    </div>
    <div class="card alt">
      <p class="title">최근 대화</p>
      <p class="item">데이터 시각화 트렌드</p>
      <p class="item">새로운 디자인 시스템 구성</p>
      <p class="item">앱 온보딩 케이스 모음</p>
    </div>
    <div class="input">
      <span>Kanana에게 물어보세요</span>
      <span class="mic">●</span>
    </div>
  `,

  results: /* html */ `
    <div class="results-header">
      <span class="back">‹</span>
      <span class="query">상하이 여행 일정 짜줘</span>
    </div>
    <div class="answer">
      <p class="answer-meta">Kanana의 추천</p>
      <p class="answer-line">3박 4일이면 와이탄 야경 → 디즈니랜드 → 예원 → 신톈디 코스가 무난해요.</p>
    </div>
    <div class="card">
      <p class="title">관련 자료</p>
      <p class="item">상하이 4일 코스 가이드</p>
      <p class="item">현지인이 추천한 야경 포인트</p>
      <p class="item">교통 패스 비교</p>
    </div>
    <div class="input">
      <span>이어서 물어보기</span>
      <span class="mic">●</span>
    </div>
  `,

  chatroom: /* html */ `
    <div class="cr-topbar">
      <img src="/prototypes/kanana/gnb-chatroom.svg" alt="Chatroom" />
    </div>
    <div class="cr-dim"></div>
    <span class="cr-handle"></span>
    <div class="cr-sheet">
      <div class="cr-section">
        <p class="cr-h1">오늘 날씨</p>
        <p class="cr-summary-label"><span class="cr-summary-icon">✦</span> 요약</p>
        <p class="cr-body">2025년 10월 16일 경기도 성남시 분당구의 날씨는 맑을 것으로 예상됩니다. 현재 기온은 22도입니다.</p>
      </div>
      <hr class="cr-divider" />

      <div class="cr-section">
        <p class="cr-date">3월 12일, 목요일</p>
      </div>

      <div class="cr-weather-card">
        <div class="cr-w-bottom-grad"></div>
        <p class="cr-w-loc">백현동<span class="cr-w-loc-dim"></span></p>
        <div class="cr-w-temp-wrap">
          <div class="cr-w-temp-dim"></div>
          <img class="cr-w-icon" src="/prototypes/shared/weather/day_01.png" alt="맑음" />
          <span class="cr-w-temp">11<span class="cr-w-deg">°</span></span>
        </div>
        <p class="cr-w-cond">구름많음</p>
        <p class="cr-w-range">최고 17°&nbsp;&nbsp;최저 10°</p>

        <ul class="cr-w-hours">
          <li><span class="cr-w-time">지금</span><img class="cr-w-em" src="/prototypes/shared/weather/day_02.png" alt="" /><span class="cr-w-th">11°</span></li>
          <li><span class="cr-w-time">16시</span><img class="cr-w-em" src="/prototypes/shared/weather/snow_02.png" alt="" /><span class="cr-w-th">10°</span></li>
          <li><span class="cr-w-time">17시</span><img class="cr-w-em" src="/prototypes/shared/weather/day_03.png" alt="" /><span class="cr-w-th">10°</span></li>
          <li><span class="cr-w-time">18시</span><img class="cr-w-em" src="/prototypes/shared/weather/lightning.png" alt="" /><span class="cr-w-th">10°</span></li>
          <li><span class="cr-w-time">19시</span><img class="cr-w-em" src="/prototypes/shared/weather/night_08.png" alt="" /><span class="cr-w-th">10°</span></li>
          <li><span class="cr-w-time">20시</span><img class="cr-w-em" src="/prototypes/shared/weather/rainy_03.png" alt="" /><span class="cr-w-th">10°</span></li>
        </ul>

        <ul class="cr-w-details">
          <li>강수량 <strong>200mm</strong></li>
          <li>체감온도 <strong>8°</strong></li>
          <li>습도 <strong>27%</strong></li>
          <li>미세 <strong>매우나쁨</strong></li>
          <li>초미세 <strong>매우나쁨</strong></li>
        </ul>
      </div>

      <div class="cr-source">
        <img class="cr-source-favicon" src="/prototypes/shared/favicons/케이웨더.png" alt="" />
        <span class="cr-source-name">케이웨더</span>
        <span class="cr-source-meta">2025.10.16 9:30 기준 · 경기도 성남시 분당구 백현동</span>
      </div>

      <div class="cr-section">
        <p class="cr-h2">판교 날씨 (2025년 10월 21일)</p>
        <p class="cr-body">판교(경기 성남시 기준) 오늘 날씨는 한파 영향으로 쌀쌀하고 흐린 날씨를 보이고 있어요. 기온이 급격히 떨어져 일교차가 큰 편입니다.</p>
      </div>

      <div class="cr-section">
        <p class="cr-h2">배경</p>
        <ul class="cr-bullets">
          <li>한화 이글스는 2025시즌 정규리그 2위를 차지하며 플레이오프에 직행했습니다.</li>
          <li>삼성 라이온즈는 와일드카드 결정전과 준플레이오프를 거쳐 플레이오프에 진출했습니다.</li>
          <li>정규시즌 상대 전적은 8승 8패로 팽팽했습니다.</li>
        </ul>
      </div>

      <div class="cr-disclaimer">
        <p>AI가 생성한 내용으로 검색 시점에 따라 답변이 달라질 수 있어요. 중요한 정보는 한번 더 확인해 주세요.<br/><span class="cr-link">더 알아보기</span></p>
      </div>

      <div class="cr-feedback">
        <span class="cr-fb-btn"><img src="/prototypes/shared/feedback-up.svg" alt="좋아요" /></span>
        <span class="cr-fb-btn"><img src="/prototypes/shared/feedback-down.svg" alt="별로예요" /></span>
        <span class="cr-source-pill">
          <span class="cr-stack">
            <img class="cr-stack-dot" src="/prototypes/shared/favicons/네이버.png" alt="" />
            <img class="cr-stack-dot" src="/prototypes/shared/favicons/Daum.png" alt="" />
            <img class="cr-stack-dot" src="/prototypes/shared/favicons/다음.png" alt="" />
          </span>
          출처
        </span>
      </div>
      <hr class="cr-divider" />

      <div class="cr-section">
        <p class="cr-h2">관련된 질문</p>
        <div class="cr-query">
          <span>영화에 반복되는 상징물 별 의미 정리</span>
          <span class="cr-query-arrow">＋</span>
        </div>
        <hr class="cr-divider thin" />
        <div class="cr-query">
          <span>작가가 전달하려는 메시지</span>
          <span class="cr-query-arrow">＋</span>
        </div>
        <hr class="cr-divider thin" />
        <div class="cr-query">
          <span>영화에 반복되는 상징물 별 의미 정리</span>
          <span class="cr-query-arrow">＋</span>
        </div>
      </div>
    </div>

    <div class="cr-bottom-bar">
      <div class="cr-search">
        <img class="cr-search-icon" src="/prototypes/kanana/logo.svg" alt="Kanana" />
        <span class="cr-search-placeholder">오늘 날씨 알려줘</span>
      </div>
      <span class="cr-share"><img src="/prototypes/shared/share.svg" alt="공유" /></span>
    </div>
  `,
};

const baseStyles = /* css */ `
  :host {
    /* iPhone 15 Pro: 393x852 screen + 6px bezel = 405x864 device shell.
       Default scale = 1 (native size). Consumers override --device-scale
       (e.g. set --device-scale: 0.5 to shrink for portfolio card thumbnails). */
    --device-w: 405;
    --device-h: 864;
    --device-scale: 1;

    --ka-bg: #1a1a1a;
    --ka-bg-soft: #2a2a2a;
    --ka-fg: #ffffff;
    --ka-muted: rgba(255, 255, 255, 0.55);
    --ka-line: rgba(255, 255, 255, 0.08);
    --ka-blue: #0285ff;

    display: inline-block;
    width: calc(var(--device-w) * var(--device-scale) * 1px);
    height: calc(var(--device-h) * var(--device-scale) * 1px);
    position: relative;
    vertical-align: top;
    font-family: "Pretendard Variable", "Pretendard", "Inter", "Noto Sans KR", -apple-system, BlinkMacSystemFont, sans-serif;
    letter-spacing: -0.01em;
  }

  .device {
    position: absolute;
    top: 0;
    left: 0;
    width: calc(var(--device-w) * 1px);
    height: calc(var(--device-h) * 1px);
    transform: scale(var(--device-scale));
    transform-origin: top left;
    background: #0d0d0d;
    border-radius: 55px;
    padding: 6px;
    box-shadow: 0 24px 60px rgba(0, 0, 0, 0.22);
    box-sizing: border-box;
  }
  .notch {
    position: absolute;
    top: 14px;
    left: 50%;
    transform: translateX(-50%);
    width: 125px;
    height: 36px;
    background: #0d0d0d;
    border-radius: 20px;
    z-index: 2;
  }
  .screen {
    width: 100%;
    height: 100%;
    border-radius: 50px;
    overflow: hidden;
    background: linear-gradient(180deg, var(--ka-bg) 0%, var(--ka-bg-soft) 100%);
    color: var(--ka-fg);
    position: relative;
    padding: 62px 22px 22px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    box-sizing: border-box;
  }
  .status-bar {
    position: absolute;
    top: 6px;
    left: 6px;
    right: 6px;
    height: 54px;
    z-index: 6;
    pointer-events: none;
    display: flex;
    align-items: center;
  }
  .status-bar img {
    display: block;
    width: 100%;
    height: auto;
  }
  /* Light variant inverts the status bar to white (for dark backgrounds) */
  .status-bar.light img { filter: invert(1) brightness(2); }

  .hero {
    flex: 1;
    border-radius: 30px;
    background:
      radial-gradient(circle at 30% 30%, rgba(255, 158, 108, 0.6), transparent 60%),
      radial-gradient(circle at 70% 60%, rgba(2, 133, 255, 0.5), transparent 65%),
      linear-gradient(135deg, #3a2820 0%, #1a1a1a 100%);
    margin-top: 10px;
    position: relative;
  }
  .hero::after {
    content: "";
    position: absolute;
    inset: 30% 30%;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.15), transparent 70%);
  }

  .card {
    background: rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(8px);
    border-radius: 22px;
    padding: 16px 20px;
    font-size: 16px;
  }
  .card.alt { background: rgba(255, 255, 255, 0.05); }
  .title { font-size: 14px; color: var(--ka-muted); margin: 0 0 10px; font-weight: 500; }
  .item {
    margin: 6px 0;
    padding: 10px 13px;
    background: rgba(255, 255, 255, 0.08);
    border-radius: 13px;
    font-size: 16px;
  }

  .input {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: rgba(255, 255, 255, 0.12);
    border-radius: 30px;
    padding: 13px 20px;
    font-size: 16px;
    color: var(--ka-muted);
    margin-top: auto;
  }
  .mic {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: var(--ka-blue);
    color: #fff;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 13px;
  }

  /* ask screen */
  .ask-top { margin-top: 6px; }
  .ask-greeting { font-size: 23px; font-weight: 700; margin: 0; }
  .ask-sub { font-size: 18px; color: var(--ka-muted); margin: 7px 0 0; }
  .chips { display: flex; flex-wrap: wrap; gap: 10px; }
  .chip {
    font-size: 16px;
    padding: 10px 16px;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.08);
    border: 1px solid var(--ka-line);
  }

  /* results screen */
  .results-header {
    display: flex;
    align-items: center;
    gap: 13px;
    font-size: 18px;
    font-weight: 600;
  }
  .back {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.1);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 23px;
  }
  .query { color: var(--ka-muted); font-weight: 500; }
  .answer {
    background: rgba(2, 133, 255, 0.12);
    border: 1px solid rgba(2, 133, 255, 0.25);
    border-radius: 22px;
    padding: 20px;
  }
  .answer-meta { margin: 0 0 10px; font-size: 14px; color: var(--ka-blue); font-weight: 700; }
  .answer-line { margin: 0; font-size: 18px; line-height: 1.4; }

  /* === chatroom screen === */
  .screen[data-screen="chatroom"] {
    background: #abc1d1;
    color: #191919;
    padding: 0;
    gap: 0;
    overflow: hidden;
  }
  .cr-dim {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 2;
    pointer-events: none;
  }
  .cr-topbar {
    position: absolute;
    top: 60px;
    left: 6px;
    right: 6px;
    height: 46px;
    z-index: 1;
    pointer-events: none;
  }
  .cr-topbar img {
    display: block;
    width: 100%;
    height: auto;
  }
  .cr-sheet {
    position: absolute;
    top: 110px;
    left: 0;
    right: 0;
    bottom: 0;
    background: #fff;
    border-radius: 18px 18px 0 0;
    padding: 20px 22px 110px;
    overflow-y: auto;
    overscroll-behavior: contain;
    z-index: 3;
  }
  .cr-sheet > * { margin-bottom: 16px; }
  .cr-sheet > *:last-child { margin-bottom: 0; }
  .cr-sheet::-webkit-scrollbar { width: 0; }
  .cr-handle {
    position: absolute;
    top: 120px;
    left: 50%;
    transform: translateX(-50%);
    width: 40px;
    height: 4px;
    background: #949494;
    border-radius: 4px;
    z-index: 4;
    pointer-events: none;
  }
  .cr-section { padding: 6px 2px; }
  .cr-h1 { font-size: 22px; font-weight: 700; margin: 0 0 12px; }
  .cr-h2 { font-size: 19px; font-weight: 600; margin: 0 0 10px; }
  .cr-summary-label {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 16px;
    font-weight: 600;
    margin: 0 0 10px;
    color: #191919;
  }
  .cr-summary-icon { color: #ff4e7b; font-size: 18px; }
  .cr-body {
    font-size: 14px;
    line-height: 1.6;
    margin: 0;
    color: #191919;
  }
  .cr-divider {
    border: 0;
    border-top: 1px solid rgba(0, 0, 0, 0.08);
    margin: 10px 0;
  }
  .cr-divider.thin { margin: 6px 0; }

  /* Weather card — per the design guide (KakaoTalk_Photo_2026-05-17-16-08-06/07) */
  .cr-weather-card {
    background: linear-gradient(180deg, #0077E9 0%, #278FF4 35%, #4FA4F8 100%);
    border-radius: 20px;
    padding: 52px 20px 20px;
    color: #fff;
    text-align: center;
    position: relative;
    overflow: hidden;
  }
  /* Dark vignette gradient at the bottom of the card */
  .cr-w-bottom-grad {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 130px;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.22) 100%);
    pointer-events: none;
    z-index: 0;
  }
  .cr-weather-card > :not(.cr-w-bottom-grad) { position: relative; z-index: 1; }

  /* Location */
  .cr-w-loc {
    margin: 0;
    font-size: 18px;
    font-weight: 500;
    color: #fff;
    text-shadow: 0 0.5px 2px rgba(0, 0, 0, 0.10);
    max-width: calc(100% - 40px);
    margin: 0 auto;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  /* Temperature row (icon + 19°) with blur dim behind */
  .cr-w-temp-wrap {
    margin-top: 10px;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    z-index: 1;
  }
  .cr-w-temp-dim {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 62px;
    background: rgba(0, 0, 0, 0.10);
    filter: blur(40px);
    z-index: -1;
    pointer-events: none;
  }
  .cr-w-icon {
    width: 52px;
    height: 52px;
    object-fit: contain;
    flex-shrink: 0;
  }
  .cr-w-temp {
    font-size: 52px;
    font-weight: 300;
    letter-spacing: -0.04em;
    line-height: 1;
    color: #fff;
    text-shadow: 0 0.5px 2px rgba(0, 0, 0, 0.08);
  }
  .cr-w-deg {
    font-size: 42px;
    font-weight: 400;
    margin-left: 1px;
  }

  /* Condition + range */
  .cr-w-cond {
    margin: 14px 0 0;
    font-size: 16px;
    font-weight: 500;
    color: #fff;
    text-shadow: 0 0.5px 2px rgba(0, 0, 0, 0.10);
  }
  .cr-w-range {
    margin: 5px 0 0;
    font-size: 16px;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.5);
  }

  /* Hourly forecast */
  .cr-w-hours {
    list-style: none;
    padding: 0;
    margin: 48px 0 0;
    display: flex;
    justify-content: space-between;
  }
  .cr-w-hours li {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
    color: #fff;
  }
  .cr-w-time {
    font-size: 13px;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.9);
    text-shadow: 0 0.1px 4px rgba(0, 0, 0, 0.25);
  }
  .cr-w-em { width: 30px; height: 30px; object-fit: contain; }
  .cr-w-th {
    font-size: 16px;
    font-weight: 500;
    text-shadow: 0 0.1px 4px rgba(0, 0, 0, 0.25);
  }

  /* Bottom info row — overflows horizontally; trailing items get clipped by the card. */
  .cr-w-details {
    list-style: none;
    margin: 14px -20px 0;
    padding: 10px 20px 0;
    display: flex;
    align-items: center;
    gap: 14px;
    overflow: hidden;
    white-space: nowrap;
    border-top: 1px solid rgba(255, 255, 255, 0.20);
  }
  .cr-w-details li {
    flex: 0 0 auto;
    font-size: 12px;
    color: rgba(255, 255, 255, 0.85);
    text-shadow: 0 0.1px 4px rgba(0, 0, 0, 0.25);
  }
  .cr-w-details strong { color: #fff; font-weight: 600; margin-left: 3px; }

  /* Source */
  .cr-source {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 2px;
    font-size: 13px;
    color: #767676;
    flex-wrap: wrap;
  }
  .cr-source-favicon {
    width: 19px;
    height: 19px;
    border-radius: 50%;
    border: 1px solid rgba(0, 0, 0, 0.06);
    flex-shrink: 0;
    object-fit: cover;
    background: #fff;
  }
  .cr-source-name { color: #424242; font-weight: 500; }
  .cr-source-meta { font-size: 12px; }

  /* Bullets */
  .cr-bullets {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 6px;
  }
  .cr-bullets li {
    position: relative;
    padding-left: 16px;
    font-size: 15px;
    line-height: 1.55;
    color: #191919;
  }
  .cr-bullets li::before {
    content: "•";
    position: absolute;
    left: 0;
    top: 0;
    color: #191919;
  }

  /* Disclaimer */
  .cr-disclaimer {
    padding: 10px 6px;
    font-size: 12px;
    line-height: 1.5;
    color: #767676;
  }
  .cr-disclaimer p { margin: 0; }
  .cr-link { text-decoration: underline; }

  /* Section date header */
  .cr-date { font-size: 17px; font-weight: 700; margin: 0; color: #191919; }

  /* Feedback */
  .cr-feedback {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 2px;
    gap: 10px;
  }
  .cr-fb-btn {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border: 1px solid rgba(0, 0, 0, 0.08);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: #fff;
  }
  .cr-fb-btn img { width: 20px; height: 20px; display: block; }
  .cr-feedback .cr-fb-btn + .cr-fb-btn { margin-right: auto; margin-left: 8px; }
  .cr-source-pill {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    height: 36px;
    padding: 0 16px;
    border-radius: 32px;
    border: 1px solid rgba(0, 0, 0, 0.08);
    font-size: 14px;
    font-weight: 600;
    color: #696969;
    background: #fff;
  }
  .cr-stack { display: inline-flex; }
  .cr-stack-dot {
    width: 19px;
    height: 19px;
    border-radius: 50%;
    border: 1.5px solid #fff;
    object-fit: cover;
    background: #fff;
  }
  .cr-stack-dot + .cr-stack-dot { margin-left: -6px; }

  /* Related queries */
  .cr-query {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    padding: 10px 2px;
    font-size: 16px;
    color: #424242;
    font-weight: 500;
    line-height: 1.4;
  }
  .cr-query-arrow {
    width: 22px;
    height: 22px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: #949494;
    font-size: 20px;
    flex-shrink: 0;
  }

  /* Bottom search bar */
  .cr-bottom-bar {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100px;
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 0 22px 24px;
    background: linear-gradient(180deg, rgba(247, 247, 247, 0) 0%, rgba(247, 247, 247, 0.88) 87%);
    backdrop-filter: blur(2px);
    z-index: 5;
  }
  .cr-search {
    flex: 1;
    height: 48px;
    border-radius: 26px;
    background: rgba(255, 255, 255, 0.85);
    border: 1px solid #fff;
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 0 18px;
  }
  .cr-search-icon {
    width: 26px;
    height: 26px;
    display: block;
    flex-shrink: 0;
  }
  .cr-search-placeholder {
    font-size: 16px;
    color: #191919;
  }
  .cr-share {
    width: 48px;
    height: 48px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.15)) drop-shadow(0 1px 3px rgba(0, 0, 0, 0.10));
  }
  .cr-share img { width: 48px; height: 48px; display: block; }
`;

// Sync channels for featured-screen changes:
//   - same tab: custom `kanana:featured-change` event on window
//   - cross tab (same origin): native `storage` event + BroadcastChannel
//   - back/forward cache or tab return: `pageshow` + `visibilitychange`
const FEATURED_EVENT = 'kanana:featured-change';
const BROADCAST_NAME = 'kanana-featured';
let _channel = null;
try { _channel = new BroadcastChannel(BROADCAST_NAME); } catch {}

export function getFeatured() {
  try { return localStorage.getItem(STORAGE_KEY) || DEFAULT_SCREEN; }
  catch { return DEFAULT_SCREEN; }
}

export function setFeatured(key) {
  if (!SCREENS[key]) return;
  try { localStorage.setItem(STORAGE_KEY, key); } catch {}
  window.dispatchEvent(new CustomEvent(FEATURED_EVENT, { detail: key }));
  try { _channel?.postMessage(key); } catch {}
}

class KananaPrototype extends HTMLElement {
  static get observedAttributes() { return ['screen']; }
  static get screenKeys() { return Object.keys(SCREENS); }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._lastRendered = null;
    this._rerenderIfFeatured = () => {
      if (this.hasAttribute('screen')) return;
      if (this.currentScreen !== this._lastRendered) this.render();
    };
    this._onFeaturedChange = () => this._rerenderIfFeatured();
    this._onStorage = (e) => { if (e.key === STORAGE_KEY) this._rerenderIfFeatured(); };
    this._onBroadcast = () => this._rerenderIfFeatured();
    this._onVisibility = () => {
      if (document.visibilityState === 'visible') this._rerenderIfFeatured();
    };
    this._onPageshow = () => this._rerenderIfFeatured();
  }

  connectedCallback() {
    this.render();
    window.addEventListener(FEATURED_EVENT, this._onFeaturedChange);
    window.addEventListener('storage', this._onStorage);
    _channel?.addEventListener('message', this._onBroadcast);
    document.addEventListener('visibilitychange', this._onVisibility);
    window.addEventListener('pageshow', this._onPageshow);
  }
  disconnectedCallback() {
    window.removeEventListener(FEATURED_EVENT, this._onFeaturedChange);
    window.removeEventListener('storage', this._onStorage);
    _channel?.removeEventListener('message', this._onBroadcast);
    document.removeEventListener('visibilitychange', this._onVisibility);
    window.removeEventListener('pageshow', this._onPageshow);
  }
  attributeChangedCallback() { this.render(); }

  get currentScreen() {
    return this.getAttribute('screen') || getFeatured();
  }

  render() {
    const screen = SCREENS[this.currentScreen] ? this.currentScreen : DEFAULT_SCREEN;
    this._lastRendered = screen;
    const body = SCREENS[screen];
    // Dark-background screens use the inverted (white) status bar.
    const darkBg = screen === 'ai-search' || screen === 'ask' || screen === 'results';
    this.shadowRoot.innerHTML = `
      <style>${baseStyles}</style>
      <div class="device">
        <div class="notch"></div>
        <div class="screen" data-screen="${screen}">
          <div class="status-bar ${darkBg ? 'light' : ''}">
            <img src="/prototypes/shared/status-bar.svg" alt="" />
          </div>
          ${body}
        </div>
      </div>
    `;
  }
}

customElements.define('kanana-prototype', KananaPrototype);
