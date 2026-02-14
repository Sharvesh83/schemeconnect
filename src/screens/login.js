import { t, currentLang } from '../translations.js';
import { currentRole } from '../main.js';

export function renderLogin() {
  const isCitizen = currentRole === 'citizen';
  const roleTitle = currentRole === 'citizen' ? t('login.citizenTitle') : currentRole === 'officer' ? t('login.officerTitle') : t('login.adminTitle');
  const homeRoute = currentRole === 'citizen' ? 'citizen-home' : currentRole === 'officer' ? 'officer-home' : 'system-overview';

  return `
    <div class="screen" style="background:var(--surface);">
      <div class="top-bar ${currentRole}">
        <button class="top-bar-back" data-navigate="role-selection">${t('common.back')}</button>
        <span class="top-bar-title">${roleTitle}</span>
      </div>

      <div style="padding:32px 20px; text-align:center;">
        <div style="width:80px; height:80px; border-radius:50%; background:var(--bg); margin:0 auto 20px; display:flex; align-items:center; justify-content:center; font-size:36px;">👤</div>
        <h2 style="font-size:var(--fs-2xl); font-weight:800; margin-bottom:8px;">${t('login.welcome')}</h2>
        <p style="color:var(--text-secondary); font-size:var(--fs-sm);">${t('login.welcomeSub')}</p>
      </div>

      <div style="padding:0 20px;">
        ${isCitizen ? `
          <div class="input-group" style="margin-bottom:20px;">
            <label class="input-label">${t('login.mobile')}</label>
            <div style="display:flex; gap:8px;">
              <input class="input-field" style="width:70px; text-align:center;" value="+91" readonly>
              <input class="input-field" style="flex:1;" placeholder="98765 43210" type="tel">
            </div>
          </div>
          <button class="btn btn-primary btn-block btn-lg" data-navigate="${homeRoute}">📱 ${t('login.sendOtp')}</button>
          <div class="divider-or"><span>${t('login.or')}</span></div>
          <button class="btn btn-outline btn-block" data-navigate="${homeRoute}">🆔 ${t('login.aadhaar')}</button>

          <div style="margin-top:24px; padding:16px; background:var(--primary-surface); border-radius:var(--radius-md); display:flex; gap:12px; align-items:flex-start;">
            <span style="font-size:20px;">🔒</span>
            <p style="font-size:var(--fs-xs); color:var(--text-secondary); line-height:1.5;">${t('login.secureNote')}</p>
          </div>
        ` : `
          <div class="input-group" style="margin-bottom:16px;">
            <label class="input-label">${t('login.empId')}</label>
            <input class="input-field" placeholder="TN-RI-2024-0847" type="text">
          </div>
          <div class="input-group" style="margin-bottom:24px;">
            <label class="input-label">${t('login.password')}</label>
            <input class="input-field" placeholder="••••••••" type="password">
          </div>
          <button class="btn ${currentRole === 'officer' ? 'btn-officer' : 'btn-admin'} btn-block btn-lg" data-navigate="${homeRoute}">🔐 ${t('login.loginBtn')}</button>

          <div style="margin-top:24px; padding:16px; background:var(--officer-surface); border-radius:var(--radius-md); display:flex; gap:12px; align-items:flex-start;">
            <span style="font-size:20px;">⚠️</span>
            <p style="font-size:var(--fs-xs); color:var(--text-secondary); line-height:1.5;">${t('login.authNote')}</p>
          </div>
        `}
      </div>

      <!-- Language Toggle -->
      <div style="padding:32px 20px; text-align:center;">
        <div class="lang-toggle">
          <button class="lang-btn ${currentLang === 'en' ? 'active' : ''}" data-lang="en">${t('common.english')}</button>
          <button class="lang-btn ${currentLang === 'ta' ? 'active' : ''}" data-lang="ta">${t('common.tamil')}</button>
          <button class="lang-btn ${currentLang === 'hi' ? 'active' : ''}" data-lang="hi">${t('common.hindi')}</button>
        </div>
      </div>
    </div>
  `;
}
