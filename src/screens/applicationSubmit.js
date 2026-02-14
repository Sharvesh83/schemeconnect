import { t } from '../translations.js';

export function renderApplicationSubmit() {
  return `
    <div class="screen">
      <div class="top-bar citizen">
        <button class="top-bar-back" data-navigate="scheme-details">${t('common.back')}</button>
        <span class="top-bar-title">${t('appSubmit.title')}</span>
      </div>

      <div style="padding:16px 20px 8px;">
        <p style="font-size:var(--fs-sm); color:var(--text-secondary);">${t('appSubmit.subtitle')}</p>
        <h3 style="font-size:var(--fs-lg); font-weight:700; margin-top:8px;">${t('recSchemes.pmKisan')}</h3>
      </div>

      <div class="content-padding content-gap">
        <!-- Personal Info -->
        <div class="card">
          <div style="display:flex; justify-content:space-between; margin-bottom:12px;">
            <h4 style="font-weight:700;">${t('appSubmit.personalInfo')}</h4>
            <span class="section-action">${t('appSubmit.edit')}</span>
          </div>
          <div style="display:flex; flex-direction:column; gap:8px; font-size:var(--fs-sm);">
            <div style="display:flex; justify-content:space-between;"><span style="color:var(--text-secondary);">${t('appSubmit.name')}</span><span style="font-weight:600;">Murugan Selvam</span></div>
            <div style="display:flex; justify-content:space-between;"><span style="color:var(--text-secondary);">${t('appSubmit.fatherName')}</span><span style="font-weight:600;">Selvam K.</span></div>
            <div style="display:flex; justify-content:space-between;"><span style="color:var(--text-secondary);">${t('appSubmit.aadhaar')}</span><span style="font-weight:600;">XXXX XXXX 4532</span></div>
            <div style="display:flex; justify-content:space-between;"><span style="color:var(--text-secondary);">${t('appSubmit.mobile')}</span><span style="font-weight:600;">+91 98765 43210</span></div>
          </div>
        </div>

        <!-- Address -->
        <div class="card">
          <div style="display:flex; justify-content:space-between; margin-bottom:12px;">
            <h4 style="font-weight:700;">${t('appSubmit.address')}</h4>
            <span class="section-action">${t('appSubmit.edit')}</span>
          </div>
          <div style="display:flex; flex-direction:column; gap:8px; font-size:var(--fs-sm);">
            <div style="display:flex; justify-content:space-between;"><span style="color:var(--text-secondary);">${t('appSubmit.village')}</span><span style="font-weight:600;">Ottapidaram</span></div>
            <div style="display:flex; justify-content:space-between;"><span style="color:var(--text-secondary);">${t('appSubmit.block')}</span><span style="font-weight:600;">Ottapidaram</span></div>
            <div style="display:flex; justify-content:space-between;"><span style="color:var(--text-secondary);">${t('appSubmit.district')}</span><span style="font-weight:600;">Thoothukudi</span></div>
            <div style="display:flex; justify-content:space-between;"><span style="color:var(--text-secondary);">${t('appSubmit.pincode')}</span><span style="font-weight:600;">628501</span></div>
          </div>
        </div>

        <!-- Land Details -->
        <div class="card">
          <div style="display:flex; justify-content:space-between; margin-bottom:12px;">
            <h4 style="font-weight:700;">${t('appSubmit.landDetails')}</h4>
            <span class="section-action">${t('appSubmit.edit')}</span>
          </div>
          <div style="display:flex; flex-direction:column; gap:8px; font-size:var(--fs-sm);">
            <div style="display:flex; justify-content:space-between;"><span style="color:var(--text-secondary);">${t('appSubmit.totalLand')}</span><span style="font-weight:600;">3.5 acres</span></div>
            <div style="display:flex; justify-content:space-between;"><span style="color:var(--text-secondary);">${t('appSubmit.surveyNo')}</span><span style="font-weight:600;">142/3A</span></div>
            <div style="display:flex; justify-content:space-between;"><span style="color:var(--text-secondary);">${t('appSubmit.cropType')}</span><span style="font-weight:600;">Paddy, Millets</span></div>
          </div>
        </div>

        <!-- Bank Account -->
        <div class="card">
          <div style="display:flex; justify-content:space-between; margin-bottom:12px;">
            <h4 style="font-weight:700;">${t('appSubmit.bankAccount')}</h4>
            <span class="section-action">${t('appSubmit.edit')}</span>
          </div>
          <div style="display:flex; flex-direction:column; gap:8px; font-size:var(--fs-sm);">
            <div style="display:flex; justify-content:space-between;"><span style="color:var(--text-secondary);">${t('appSubmit.bank')}</span><span style="font-weight:600;">Indian Bank</span></div>
            <div style="display:flex; justify-content:space-between;"><span style="color:var(--text-secondary);">${t('appSubmit.account')}</span><span style="font-weight:600;">XXXX XXXX 7834</span></div>
            <div style="display:flex; justify-content:space-between;"><span style="color:var(--text-secondary);">${t('appSubmit.ifsc')}</span><span style="font-weight:600;">IDIB000O547</span></div>
          </div>
        </div>

        <!-- Attached Documents -->
        <div class="card">
          <h4 style="font-weight:700; margin-bottom:12px;">${t('appSubmit.attachedDocs')}</h4>
          <div style="display:flex; flex-direction:column; gap:6px; font-size:var(--fs-sm);">
            <p>📎 ${t('docUpload.aadhaar')} <span class="badge badge-success">${t('docUpload.verified')}</span></p>
            <p>📎 ${t('docUpload.landPatta')} <span class="badge badge-success">${t('docUpload.verified')}</span></p>
            <p>📎 ${t('docUpload.income')} <span class="badge badge-success">${t('docUpload.verified')}</span></p>
            <p>📎 ${t('docUpload.ration')} <span class="badge badge-success">${t('docUpload.verified')}</span></p>
          </div>
        </div>

        <!-- Declaration -->
        <div class="card" style="border:2px solid var(--citizen);">
          <h4 style="font-weight:700; margin-bottom:8px;">${t('appSubmit.declaration')}</h4>
          <div class="checkbox-row">
            <span class="checkbox"></span>
            <p style="font-size:var(--fs-sm); color:var(--text-secondary); line-height:1.5;">${t('appSubmit.declarationText')}</p>
          </div>
        </div>

        <button class="btn btn-primary btn-block btn-lg" style="margin-bottom:24px;" data-navigate="application-tracker">${t('appSubmit.submitApp')}</button>
      </div>
    </div>
  `;
}
