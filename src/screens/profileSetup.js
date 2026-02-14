import { t } from '../translations.js';

export function renderProfileSetup() {
  return `
    <div class="screen">
      <div class="top-bar citizen">
        <button class="top-bar-back" data-navigate="citizen-home">${t('common.back')}</button>
        <span class="top-bar-title">${t('profileSetup.title')}</span>
      </div>

      <!-- Step Progress -->
      <div style="padding:20px 0 16px;">
        <div class="step-progress">
          <div class="step-progress-item completed"><div class="step-dot">✓</div><span class="step-label">${t('profileSetup.personal')}</span></div>
          <div class="step-progress-item completed"><div class="step-dot">✓</div><span class="step-label">${t('profileSetup.family')}</span></div>
          <div class="step-progress-item completed"><div class="step-dot">✓</div><span class="step-label">${t('profileSetup.income')}</span></div>
          <div class="step-progress-item active"><div class="step-dot">4</div><span class="step-label">${t('profileSetup.land')}</span></div>
          <div class="step-progress-item"><div class="step-dot">5</div><span class="step-label">${t('profileSetup.bank')}</span></div>
        </div>
      </div>

      <div class="content-padding content-gap">
        <div>
          <h2 style="font-size:var(--fs-xl); font-weight:800; margin-bottom:4px;">🌾 ${t('profileSetup.landDetails')}</h2>
          <p style="font-size:var(--fs-sm); color:var(--text-secondary);">${t('profileSetup.landDetailsDesc')}</p>
        </div>

        <!-- Land Ownership -->
        <div class="input-group">
          <label class="input-label">${t('profileSetup.ownership')}</label>
          <div style="display:flex; flex-wrap:wrap; gap:8px;">
            <span class="chip active">${t('profileSetup.ownLand')}</span>
            <span class="chip">${t('profileSetup.leased')}</span>
            <span class="chip">${t('profileSetup.noLand')}</span>
          </div>
        </div>

        <!-- Land Type -->
        <div class="input-group">
          <label class="input-label">${t('profileSetup.landType')}</label>
          <div style="display:flex; flex-wrap:wrap; gap:8px;">
            <span class="chip active">${t('profileSetup.wetland')}</span>
            <span class="chip">${t('profileSetup.dryland')}</span>
            <span class="chip">${t('profileSetup.garden')}</span>
          </div>
        </div>

        <!-- Irrigation Source -->
        <div class="input-group">
          <label class="input-label">${t('profileSetup.irrigationSource')}</label>
          <div style="display:flex; flex-wrap:wrap; gap:8px;">
            <span class="chip active">${t('profileSetup.borewell')}</span>
            <span class="chip">${t('profileSetup.canal')}</span>
            <span class="chip">${t('profileSetup.rainfed')}</span>
          </div>
        </div>

        <!-- Inputs -->
        <div class="input-group">
          <label class="input-label">${t('profileSetup.landArea')}</label>
          <input class="input-field" value="3.5" type="number">
        </div>
        <div class="grid-2">
          <div class="input-group">
            <label class="input-label">${t('profileSetup.surveyNo')}</label>
            <input class="input-field" value="142/3A">
          </div>
          <div class="input-group">
            <label class="input-label">${t('profileSetup.pattaNo')}</label>
            <input class="input-field" value="TK-2847">
          </div>
        </div>

        <!-- Completed Sections -->
        <div style="margin-top:12px;">
          <p style="font-size:var(--fs-sm); font-weight:600; margin-bottom:8px;">${t('profileSetup.completedSections')}</p>
          <div style="display:flex; flex-direction:column; gap:6px;">
            <p style="font-size:var(--fs-sm); color:var(--text-secondary);">${t('profileSetup.personalDone')}</p>
            <p style="font-size:var(--fs-sm); color:var(--text-secondary);">${t('profileSetup.familyDone')}</p>
            <p style="font-size:var(--fs-sm); color:var(--text-secondary);">${t('profileSetup.incomeDone')}</p>
          </div>
        </div>

        <!-- Actions -->
        <div style="display:flex; gap:12px; margin-top:16px; padding-bottom:24px;">
          <button class="btn btn-outline" style="flex:1;" data-navigate="citizen-home">${t('common.previous')}</button>
          <button class="btn btn-primary" style="flex:2;" data-navigate="document-upload">${t('profileSetup.saveNext')}</button>
        </div>
      </div>
    </div>
  `;
}
