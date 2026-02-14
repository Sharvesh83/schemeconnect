import { t } from '../translations.js';

export function renderRecommendedSchemes() {
  return `
    <div class="screen has-bottom-nav">
      <div class="top-bar citizen">
        <button class="top-bar-back" data-navigate="citizen-home">${t('common.back')}</button>
        <span class="top-bar-title">${t('recSchemes.title')}</span>
      </div>

      <div style="padding:16px 20px 8px;">
        <p style="font-size:var(--fs-sm); color:var(--text-secondary);">🎯 ${t('recSchemes.eligible')}</p>
      </div>

      <!-- Filter Chips -->
      <div style="padding:8px 20px; display:flex; gap:8px; overflow-x:auto;">
        <span class="chip active">${t('recSchemes.all')}</span>
        <span class="chip">${t('recSchemes.agriculture')}</span>
        <span class="chip">${t('recSchemes.housing')}</span>
        <span class="chip">${t('recSchemes.pension')}</span>
        <span class="chip">${t('recSchemes.women')}</span>
        <span class="chip">${t('recSchemes.education')}</span>
      </div>

      <!-- Scheme Cards -->
      <div style="padding:12px 20px; display:flex; flex-direction:column; gap:16px; padding-bottom:24px;">
        <!-- PM KISAN - Featured -->
        <div class="scheme-card featured" data-navigate="scheme-details">
          <div class="score-circle score-high">95%</div>
          <div class="scheme-info">
            <h3>${t('recSchemes.pmKisan')}</h3>
            <p class="scheme-benefit">${t('recSchemes.pmKisanBenefit')}</p>
            <p>${t('recSchemes.pmKisanDesc')}</p>
            <div style="display:flex; gap:8px; margin-top:12px;">
              <button class="btn btn-primary btn-sm" data-navigate="application-submit">${t('common.apply')}</button>
              <button class="btn btn-outline btn-sm" data-navigate="scheme-details">${t('common.viewDetails')}</button>
            </div>
          </div>
        </div>

        <!-- PMAY -->
        <div class="scheme-card" data-navigate="scheme-details">
          <div class="score-circle score-high">88%</div>
          <div class="scheme-info">
            <h3>${t('recSchemes.pmay')}</h3>
            <p class="scheme-benefit">${t('recSchemes.pmayBenefit')}</p>
            <div style="margin-top:8px;">
              <button class="btn btn-primary btn-sm" data-navigate="application-submit">${t('common.apply')}</button>
            </div>
          </div>
        </div>

        <!-- Old Age Pension -->
        <div class="scheme-card" data-navigate="scheme-details">
          <div class="score-circle score-medium">72%</div>
          <div class="scheme-info">
            <h3>${t('recSchemes.oldAge')}</h3>
            <p class="scheme-benefit">${t('recSchemes.oldAgeBenefit')}</p>
            <div style="margin-top:8px;">
              <button class="btn btn-primary btn-sm" data-navigate="application-submit">${t('common.apply')}</button>
            </div>
          </div>
        </div>

        <!-- Mahalir Thittam -->
        <div class="scheme-card" data-navigate="scheme-details">
          <div class="score-circle score-medium">68%</div>
          <div class="scheme-info">
            <h3>${t('recSchemes.mahalir')}</h3>
            <p class="scheme-benefit">${t('recSchemes.mahalirBenefit')}</p>
            <div style="margin-top:8px;">
              <button class="btn btn-primary btn-sm" data-navigate="application-submit">${t('common.apply')}</button>
            </div>
          </div>
        </div>

        <!-- Uzhavar -->
        <div class="scheme-card" data-navigate="scheme-details">
          <div class="score-circle score-medium">65%</div>
          <div class="scheme-info">
            <h3>${t('recSchemes.uzhavar')}</h3>
            <p class="scheme-benefit">${t('recSchemes.uzhavarBenefit')}</p>
            <div style="margin-top:8px;">
              <button class="btn btn-primary btn-sm" data-navigate="application-submit">${t('common.apply')}</button>
            </div>
          </div>
        </div>

        <!-- Scholarship -->
        <div class="scheme-card" data-navigate="scheme-details">
          <div class="score-circle score-low">45%</div>
          <div class="scheme-info">
            <h3>${t('recSchemes.scholarship')}</h3>
            <p class="scheme-benefit">${t('recSchemes.scholarshipBenefit')}</p>
            <div style="margin-top:8px;">
              <button class="btn btn-outline btn-sm" data-navigate="scheme-details">${t('common.viewDetails')}</button>
            </div>
          </div>
        </div>
      </div>

      <nav class="bottom-nav">
        <button class="bottom-nav-item" data-navigate="citizen-home"><span class="nav-icon">🏠</span><span>${t('common.home')}</span></button>
        <button class="bottom-nav-item active" data-navigate="recommended-schemes"><span class="nav-icon">📋</span><span>${t('common.schemes')}</span></button>
        <button class="bottom-nav-item" data-navigate="application-tracker"><span class="nav-icon">📍</span><span>${t('common.track')}</span></button>
        <button class="bottom-nav-item" data-navigate="notifications"><span class="nav-icon">🔔</span><span>${t('common.alerts')}</span></button>
        <button class="bottom-nav-item" data-navigate="profile-setup"><span class="nav-icon">👤</span><span>${t('common.profile')}</span></button>
      </nav>
    </div>
  `;
}
