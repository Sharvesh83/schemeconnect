import { t, currentLang } from '../translations.js';

export function renderSplash() {
  return `
    <div class="splash-screen">
      <div style="font-size:64px; margin-bottom:24px;">🏛️</div>
      <h1 style="font-size:var(--fs-4xl); font-weight:800; letter-spacing:-0.5px;">${t('splash.title')}</h1>
      <p style="font-size:var(--fs-base); opacity:0.7; margin-top:8px; margin-bottom:48px;">${t('splash.tagline')}</p>
      <div style="width:200px; height:4px; background:rgba(255,255,255,0.2); border-radius:4px; overflow:hidden;">
        <div style="width:0%; height:100%; background:white; border-radius:4px; animation: loadBar 2.5s ease forwards;"></div>
      </div>
      <p style="font-size:var(--fs-xs); opacity:0.5; margin-top:16px;">${t('splash.loading')}</p>
      <p style="position:absolute; bottom:40px; font-size:var(--fs-xs); opacity:0.4;">${t('splash.govText')}</p>
      <style>
        @keyframes loadBar { 0%{width:0%} 100%{width:100%} }
      </style>
    </div>
  `;
}
