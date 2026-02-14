import { t } from '../translations.js';

export function renderDocumentUpload() {
  return `
    <div class="screen">
      <div class="top-bar citizen">
        <button class="top-bar-back" data-navigate="profile-setup">${t('common.back')}</button>
        <span class="top-bar-title">${t('docUpload.title')}</span>
      </div>

      <div class="content-padding">
        <p style="font-size:var(--fs-sm); color:var(--text-secondary); margin-bottom:16px;">${t('docUpload.subtitle')}</p>

        <!-- Upload Progress -->
        <div style="display:flex; align-items:center; gap:12px; margin-bottom:20px;">
          <div class="progress-bar" style="flex:1;"><div class="progress-bar-fill" style="width:80%;"></div></div>
          <span style="font-size:var(--fs-sm); font-weight:700; color:var(--citizen);">4/5</span>
        </div>

        <div style="display:flex; flex-direction:column; gap:12px;">
          <div class="upload-card uploaded">
            <div class="upload-card-icon">✓</div>
            <div style="flex:1;">
              <h4 style="font-size:var(--fs-base); font-weight:600;">${t('docUpload.aadhaar')}</h4>
              <p class="upload-status" style="font-size:var(--fs-xs); color:var(--citizen);">${t('docUpload.uploaded')} • ${t('docUpload.verified')}</p>
            </div>
          </div>

          <div class="upload-card uploaded">
            <div class="upload-card-icon">✓</div>
            <div style="flex:1;">
              <h4 style="font-size:var(--fs-base); font-weight:600;">${t('docUpload.income')}</h4>
              <p class="upload-status" style="font-size:var(--fs-xs); color:var(--citizen);">${t('docUpload.uploaded')}</p>
            </div>
          </div>

          <div class="upload-card uploaded">
            <div class="upload-card-icon">✓</div>
            <div style="flex:1;">
              <h4 style="font-size:var(--fs-base); font-weight:600;">${t('docUpload.landPatta')}</h4>
              <p class="upload-status" style="font-size:var(--fs-xs); color:var(--citizen);">${t('docUpload.uploaded')}</p>
            </div>
          </div>

          <div class="upload-card uploaded">
            <div class="upload-card-icon">✓</div>
            <div style="flex:1;">
              <h4 style="font-size:var(--fs-base); font-weight:600;">${t('docUpload.ration')}</h4>
              <p class="upload-status" style="font-size:var(--fs-xs); color:var(--citizen);">${t('docUpload.uploaded')}</p>
            </div>
          </div>

          <div class="upload-card">
            <div class="upload-card-icon" style="color:var(--text-hint);">📄</div>
            <div style="flex:1;">
              <h4 style="font-size:var(--fs-base); font-weight:600;">${t('docUpload.community')}</h4>
              <p class="upload-status" style="font-size:var(--fs-xs); color:var(--text-hint);">${t('docUpload.pending')} — ${t('docUpload.tapUpload')}</p>
            </div>
          </div>
        </div>

        <!-- Tips -->
        <div class="card" style="margin-top:20px; background:var(--citizen-surface); border:1px solid var(--citizen);">
          <p style="font-weight:700; margin-bottom:8px;">${t('docUpload.tips')}</p>
          <div style="font-size:var(--fs-sm); color:var(--text-secondary); display:flex; flex-direction:column; gap:6px;">
            <p>${t('docUpload.tip1')}</p>
            <p>${t('docUpload.tip2')}</p>
            <p>${t('docUpload.tip3')}</p>
          </div>
        </div>

        <button class="btn btn-primary btn-block" style="margin-top:20px; margin-bottom:24px;" data-navigate="recommended-schemes">${t('docUpload.continueSchemes')}</button>
      </div>
    </div>
  `;
}
