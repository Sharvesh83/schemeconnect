import { t, currentLang } from '../translations.js';

export function renderRoleSelection() {
  return `
    <div class="screen" style="background:var(--surface);">
      <!-- Header -->
      <div style="background:linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%); padding:48px 24px 32px; text-align:center; color:white; border-radius:0 0 24px 24px;">
        <div style="font-size:48px; margin-bottom:16px;">🏛️</div>
        <h1 style="font-size:var(--fs-2xl); font-weight:800;">${t('role.title')}</h1>
        <p style="font-size:var(--fs-sm); opacity:0.8; margin-top:8px;">${t('role.subtitle')}</p>
      </div>

      <!-- Role Cards -->
      <div style="padding:24px 20px; display:flex; flex-direction:column; gap:16px;">
        <div class="role-card" data-role="citizen" data-navigate="login">
          <div class="role-card-icon" style="background:var(--citizen-surface);">👤</div>
          <div class="role-card-body">
            <h3>${t('role.citizen')}</h3>
            <p>${t('role.citizenDesc')}</p>
          </div>
          <span style="color:var(--text-hint); font-size:20px;">›</span>
        </div>

        <div class="role-card" data-role="officer" data-navigate="login">
          <div class="role-card-icon" style="background:var(--officer-surface);">🛡️</div>
          <div class="role-card-body">
            <h3>${t('role.officer')}</h3>
            <p>${t('role.officerDesc')}</p>
          </div>
          <span style="color:var(--text-hint); font-size:20px;">›</span>
        </div>

        <div class="role-card" data-role="admin" data-navigate="login">
          <div class="role-card-icon" style="background:var(--admin-surface);">⚙️</div>
          <div class="role-card-body">
            <h3>${t('role.admin')}</h3>
            <p>${t('role.adminDesc')}</p>
          </div>
          <span style="color:var(--text-hint); font-size:20px;">›</span>
        </div>
      </div>

      <!-- Language Toggle -->
      <div style="padding:24px 20px; text-align:center;">
        <div class="lang-toggle">
          <button class="lang-btn ${currentLang === 'en' ? 'active' : ''}" data-lang="en">${t('common.english')}</button>
          <button class="lang-btn ${currentLang === 'ta' ? 'active' : ''}" data-lang="ta">${t('common.tamil')}</button>
          <button class="lang-btn ${currentLang === 'hi' ? 'active' : ''}" data-lang="hi">${t('common.hindi')}</button>
        </div>
        <p style="font-size:var(--fs-xs); color:var(--text-hint); margin-top:16px;">${t('common.poweredBy')}</p>
      </div>
    </div>
  `;
}
