// <kweather-prototype>
// Self-contained KWeather phone mockup. Drop into any page:
//   <script type="module" src="/prototypes/kweather/kweather.js"></script>
//   <kweather-prototype></kweather-prototype>

const ASSET_BASE = new URL('../shared/', import.meta.url).href;

const template = document.createElement('template');
template.innerHTML = /* html */ `
  <style>
    :host {
      --device-w: 405;
      --device-h: 864;
      --device-scale: 1;

      --kw-blue: #0285ff;
      --kw-fg: #191919;
      --kw-muted: #8f8f8f;
      --kw-muted-2: #b2b2b2;
      --kw-line: #0000000f;
      --kw-orange: #e25507;
      --kw-warn: #f0a500;

      display: inline-block;
      width: calc(var(--device-w) * var(--device-scale) * 1px);
      height: calc(var(--device-h) * var(--device-scale) * 1px);
      position: relative;
      vertical-align: top;
      font-family: "Pretendard Variable", "Pretendard", "Inter", "Noto Sans KR", -apple-system, BlinkMacSystemFont, sans-serif;
      letter-spacing: -0.01em;
      color: var(--kw-fg);
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
      box-shadow: 0 24px 60px rgba(0, 0, 0, 0.18);
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
      background: linear-gradient(180deg, #e9f3ff 0%, #fafcff 60%, #ffffff 100%);
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
      z-index: 3;
      pointer-events: none;
    }
    .status-bar img { display: block; width: 100%; height: auto; }

    .top { text-align: left; }
    .brand { font-size: 18px; color: var(--kw-blue); font-weight: 700; margin: 0; }
    .time { font-size: 14px; color: var(--kw-muted); margin: 4px 0 0; }
    .region { font-size: 14px; color: var(--kw-muted-2); margin: 2px 0 0; }

    .temp { text-align: center; margin-top: 8px; }
    .loc { font-size: 22px; color: var(--kw-fg); font-weight: 600; margin: 0; }
    .deg {
      font-size: 110px;
      font-weight: 200;
      margin: 6px 0 4px;
      line-height: 1;
      letter-spacing: -0.04em;
    }
    .deg sup { font-size: 60px; font-weight: 200; vertical-align: super; top: -14px; position: relative; }
    .meta { font-size: 16px; margin: 2px 0; color: var(--kw-fg); }
    .meta.dim { color: var(--kw-muted); }

    .hours {
      list-style: none;
      padding: 14px 6px;
      margin: 8px 0 0;
      display: flex;
      justify-content: space-between;
      background: rgba(2, 133, 255, 0.06);
      border-radius: 20px;
    }
    .hours li {
      display: flex;
      flex-direction: column;
      gap: 6px;
      align-items: center;
      font-size: 15px;
      color: var(--kw-fg);
      font-weight: 600;
    }
    .hours li span:first-child { color: var(--kw-muted); font-weight: 500; }

    .air {
      display: flex;
      justify-content: space-around;
      background: #fff;
      border-radius: 20px;
      padding: 12px;
      border: 1px solid var(--kw-line);
    }
    .air > div { display: flex; flex-direction: column; align-items: center; gap: 4px; font-size: 15px; }
    .air-label { color: var(--kw-muted); font-weight: 500; }
    .air-tag { font-weight: 700; }
    .air-tag.bad { color: var(--kw-orange); }
    .air-tag.warn { color: var(--kw-warn); }

    .ai {
      margin-top: auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: #fff;
      border: 1px solid var(--kw-line);
      border-radius: 26px;
      padding: 14px 20px;
      font-size: 16px;
      color: var(--kw-muted);
    }
    .send {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background: var(--kw-blue);
      color: #fff;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-size: 16px;
      font-weight: 700;
    }
  </style>

  <div class="device">
    <div class="notch"></div>
    <div class="screen">
      <div class="status-bar">
        <img src="${ASSET_BASE}status-bar.svg" alt="" />
      </div>

      <div class="top">
        <p class="brand">케이웨더</p>
        <p class="time">2025.10.16 9:30 기준</p>
        <p class="region">경기도 성남시 분당구 백현동</p>
      </div>

      <div class="temp">
        <p class="loc">백현동</p>
        <p class="deg"><span>11</span><sup>°</sup></p>
        <p class="meta">최고 17° 최저 10°</p>
        <p class="meta dim">맑음, 어제와 같음</p>
      </div>

      <ul class="hours">
        <li><span>지금</span><span>11°</span></li>
        <li><span>16시</span><span>10°</span></li>
        <li><span>17시</span><span>10°</span></li>
        <li><span>18시</span><span>9°</span></li>
        <li><span>19시</span><span>9°</span></li>
      </ul>

      <div class="air">
        <div><span class="air-label">미세</span><span class="air-tag bad">매우나쁨</span></div>
        <div><span class="air-label">초미세</span><span class="air-tag warn">나쁨</span></div>
      </div>

      <div class="ai">
        <span>일주일 날씨 정보 찾아줘</span>
        <span class="send">↑</span>
      </div>
    </div>
  </div>
`;

class KweatherPrototype extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' }).appendChild(template.content.cloneNode(true));
  }
}

customElements.define('kweather-prototype', KweatherPrototype);
