// <openchat-prototype>
// Self-contained Kakao OpenChat invitation screen.
//   <script type="module" src="/prototypes/openchat/openchat.js"></script>
//   <openchat-prototype></openchat-prototype>

const ASSET_BASE = new URL('../shared/', import.meta.url).href;

const template = document.createElement('template');
template.innerHTML = /* html */ `
  <style>
    :host {
      --device-w: 405;
      --device-h: 864;
      --device-scale: 1;

      --oc-fg: #191919;
      --oc-muted: #767676;
      --oc-line: rgba(0, 0, 0, 0.06);
      --oc-yellow: #FEE500;
      --oc-accent: #ff6b3d;

      display: inline-block;
      width: calc(var(--device-w) * var(--device-scale) * 1px);
      height: calc(var(--device-h) * var(--device-scale) * 1px);
      position: relative;
      vertical-align: top;
      font-family: "Pretendard Variable", "Pretendard", "Inter", "Noto Sans KR", -apple-system, BlinkMacSystemFont, sans-serif;
      letter-spacing: -0.01em;
      color: var(--oc-fg);
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
      z-index: 4;
    }
    .screen {
      position: relative;
      width: 100%;
      height: 100%;
      border-radius: 50px;
      overflow: hidden;
      background: #fff;
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
      filter: invert(1) brightness(2);
    }
    .status-bar img { display: block; width: 100%; height: auto; }

    /* Top action bar */
    .topbar {
      position: absolute;
      top: 60px;
      left: 0;
      right: 0;
      height: 54px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 20px;
      z-index: 3;
      color: #fff;
    }
    .topbar-icons { display: inline-flex; align-items: center; gap: 18px; }
    .icon-btn {
      width: 28px;
      height: 28px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      font-size: 22px;
      line-height: 1;
    }
    .icon-btn svg { width: 22px; height: 22px; display: block; }

    /* Hero photo area (stylized — no actual photo asset) */
    .hero {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 440px;
      z-index: 1;
      overflow: hidden;
      background:
        radial-gradient(120% 80% at 70% 20%, #ffd84d 0%, #f5b800 30%, #d99000 60%, #6a4700 100%);
    }
    /* Silhouette of a runner — pure CSS placeholder for the photo */
    .hero::before {
      content: "";
      position: absolute;
      left: 50%;
      bottom: -10%;
      width: 75%;
      height: 95%;
      transform: translateX(-50%);
      background:
        radial-gradient(40% 35% at 50% 22%, #1a1a1a 0%, #1a1a1a 60%, transparent 70%),
        radial-gradient(55% 50% at 50% 60%, #2a2a2a 0%, #1a1a1a 55%, transparent 75%),
        radial-gradient(70% 40% at 50% 95%, #0d0d0d 0%, transparent 80%);
      filter: blur(0.3px);
    }
    .hero::after {
      content: "";
      position: absolute;
      inset: 0;
      background: linear-gradient(180deg, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0) 30%, rgba(0,0,0,0) 60%, rgba(0,0,0,0.25) 100%);
    }

    /* Floating chat info card */
    .info-card {
      position: absolute;
      top: 320px;
      left: 16px;
      right: 16px;
      background: rgba(255, 255, 255, 0.96);
      backdrop-filter: blur(10px);
      border-radius: 18px;
      padding: 16px 18px;
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
      display: flex;
      align-items: center;
      gap: 12px;
      z-index: 2;
    }
    .info-main { flex: 1; min-width: 0; }
    .info-tag {
      display: inline-block;
      font-size: 11px;
      font-weight: 600;
      color: var(--oc-muted);
      background: rgba(0, 0, 0, 0.05);
      padding: 3px 8px;
      border-radius: 6px;
      margin-bottom: 6px;
    }
    .info-title {
      margin: 0;
      font-size: 16px;
      font-weight: 700;
      color: var(--oc-fg);
      line-height: 1.3;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .info-meta {
      margin: 4px 0 0;
      font-size: 11px;
      color: var(--oc-muted);
      line-height: 1.4;
    }
    .info-fav {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2px;
      color: var(--oc-muted);
      font-size: 11px;
      flex-shrink: 0;
    }
    .info-fav .heart { font-size: 18px; color: #d1d1d1; line-height: 1; }

    /* Body section */
    .body {
      position: absolute;
      top: 440px;
      left: 0;
      right: 0;
      bottom: 90px;
      padding: 28px 20px 16px;
      overflow: hidden;
      background: #fff;
      z-index: 2;
    }
    .profile {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 12px;
    }
    .avatar {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      background: linear-gradient(135deg, #ff8a4d 0%, #e25507 100%);
      flex-shrink: 0;
    }
    .author { font-size: 14px; font-weight: 600; color: var(--oc-fg); }

    .desc {
      margin: 0 0 12px;
      font-size: 13px;
      line-height: 1.55;
      color: #424242;
      display: -webkit-box;
      -webkit-line-clamp: 6;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    .tags {
      font-size: 13px;
      line-height: 1.6;
      color: #0285ff;
      word-break: break-all;
    }

    /* Yellow CTA */
    .cta {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 76px;
      background: var(--oc-yellow);
      display: flex;
      align-items: flex-start;
      justify-content: center;
      padding-top: 14px;
      font-size: 16px;
      font-weight: 700;
      color: var(--oc-fg);
      z-index: 5;
    }
  </style>

  <div class="device">
    <div class="notch"></div>
    <div class="screen">
      <div class="status-bar">
        <img src="${ASSET_BASE}status-bar.svg" alt="" />
      </div>

      <div class="hero"></div>

      <div class="topbar">
        <span class="icon-btn" aria-label="닫기">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><line x1="6" y1="6" x2="18" y2="18"/><line x1="18" y1="6" x2="6" y2="18"/></svg>
        </span>
        <span class="topbar-icons">
          <span class="icon-btn" aria-label="QR">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="16" y="16" width="3" height="3"/></svg>
          </span>
          <span class="icon-btn" aria-label="공유">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 16V4"/><polyline points="7 9 12 4 17 9"/><path d="M5 20h14"/></svg>
          </span>
          <span class="icon-btn" aria-label="AI">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l1.6 5.4L19 9l-5.4 1.6L12 16l-1.6-5.4L5 9l5.4-1.6L12 2z"/></svg>
          </span>
        </span>
      </div>

      <div class="info-card">
        <div class="info-main">
          <span class="info-tag">엔터테인먼트</span>
          <p class="info-title">판교 러닝크루 함께 뛰어요</p>
          <p class="info-meta">그룹채팅 · 참여자 99/100 · 개설일 2024.4.25</p>
        </div>
        <div class="info-fav">
          <span class="heart">♡</span>
          <span>1</span>
        </div>
      </div>

      <div class="body">
        <div class="profile">
          <div class="avatar"></div>
          <span class="author">카롱이</span>
        </div>
        <p class="desc">매일매일 판교 운동친을 뛰는 사람 모임입니다. 혹시 혼자 뛰기 심심하시다면 저희와 함께 뛰어요! 매일매일 판교 운동친은 뛰는 사람 모임입니다 심심하시다면 저희와 함께 뛰어요 운동친을 뛰는 사람 모임입니다 심심하시다면 저희와 함께 뛰어요 함께 해요</p>
        <p class="tags">#러닝 #오운완 #오운친을가르는우사인볼트 #달리기 #함께뛰어요 #다이어트 #함께뛰어요 #다이어트</p>
      </div>

      <div class="cta">오픈채팅 참여하기</div>
    </div>
  </div>
`;

class OpenchatPrototype extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' }).appendChild(template.content.cloneNode(true));
  }
}

customElements.define('openchat-prototype', OpenchatPrototype);
