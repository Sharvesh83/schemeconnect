import { t } from '../translations.js';

export function renderSchemeDetails() {
  return `
    <div class="screen">
      <div class="top-bar citizen">
        <button class="top-bar-back" data-navigate="recommended-schemes">${t('common.back')}</button>
        <span class="top-bar-title">${t('schemeDetails.title')}</span>
      </div>

      <!-- Scheme Header -->
      <div style="padding:20px; background:var(--citizen-surface);">
        <h2 style="font-size:var(--fs-xl); font-weight:800; margin-bottom:8px;">${t('recSchemes.pmKisan')}</h2>
        <div style="display:flex; gap:16px; margin-top:12px;">
          <div class="card" style="flex:1; text-align:center; padding:12px;">
            <p style="font-size:var(--fs-xs); color:var(--text-secondary);">${t('schemeDetails.annualBenefit')}</p>
            <p style="font-size:var(--fs-xl); font-weight:800; color:var(--citizen);">₹6,000</p>
          </div>
          <div class="card" style="flex:1; text-align:center; padding:12px;">
            <p style="font-size:var(--fs-xs); color:var(--text-secondary);">${t('schemeDetails.eligibility')}</p>
            <p style="font-size:var(--fs-xl); font-weight:800; color:var(--citizen);">95%</p>
          </div>
        </div>
      </div>

      <div class="content-padding content-gap">
        <!-- Benefits -->
        <div class="card">
          <h3 style="font-size:var(--fs-lg); font-weight:700; margin-bottom:12px;">${t('schemeDetails.benefits')}</h3>
          <div style="display:flex; flex-direction:column; gap:10px;">
            <div style="display:flex; gap:12px; align-items:center;">
              <span style="font-size:20px;">💵</span>
              <div><p style="font-weight:600;">${t('schemeDetails.installment')} 1 — ₹2,000</p><p style="font-size:var(--fs-xs); color:var(--text-secondary);">April–July</p></div>
            </div>
            <div style="display:flex; gap:12px; align-items:center;">
              <span style="font-size:20px;">💵</span>
              <div><p style="font-weight:600;">${t('schemeDetails.installment')} 2 — ₹2,000</p><p style="font-size:var(--fs-xs); color:var(--text-secondary);">August–November</p></div>
            </div>
            <div style="display:flex; gap:12px; align-items:center;">
              <span style="font-size:20px;">💵</span>
              <div><p style="font-weight:600;">${t('schemeDetails.installment')} 3 — ₹2,000</p><p style="font-size:var(--fs-xs); color:var(--text-secondary);">December–March</p></div>
            </div>
          </div>
        </div>

        <!-- Eligibility -->
        <div class="card">
          <h3 style="font-size:var(--fs-lg); font-weight:700; margin-bottom:12px;">${t('schemeDetails.eligCriteria')}</h3>
          <div style="display:flex; flex-direction:column; gap:10px;">
            <div class="checkbox-row"><span class="checkbox checked">✓</span><div><p style="font-weight:500;">Small/Marginal Farmer</p><p style="font-size:var(--fs-xs); color:var(--citizen);">${t('schemeDetails.matched')}</p></div></div>
            <div class="checkbox-row"><span class="checkbox checked">✓</span><div><p style="font-weight:500;">Land &lt; 5 Acres</p><p style="font-size:var(--fs-xs); color:var(--citizen);">${t('schemeDetails.matched')} — 3.5 acres</p></div></div>
            <div class="checkbox-row"><span class="checkbox checked">✓</span><div><p style="font-weight:500;">Valid Land Records</p><p style="font-size:var(--fs-xs); color:var(--citizen);">${t('schemeDetails.matched')}</p></div></div>
            <div class="checkbox-row"><span class="checkbox">✗</span><div><p style="font-weight:500;">Not an Institutional Farmer</p><p style="font-size:var(--fs-xs); color:var(--warning);">${t('schemeDetails.notMatched')}</p></div></div>
          </div>
        </div>

        <!-- Required Docs -->
        <div class="card">
          <h3 style="font-size:var(--fs-lg); font-weight:700; margin-bottom:12px;">${t('schemeDetails.requiredDocs')}</h3>
          <div style="display:flex; flex-direction:column; gap:8px;">
            <div style="display:flex; justify-content:space-between;"><span>${t('docUpload.aadhaar')}</span><span class="badge badge-success">${t('docUpload.uploaded')}</span></div>
            <div style="display:flex; justify-content:space-between;"><span>${t('docUpload.landPatta')}</span><span class="badge badge-success">${t('docUpload.uploaded')}</span></div>
            <div style="display:flex; justify-content:space-between;"><span>${t('docUpload.income')}</span><span class="badge badge-success">${t('docUpload.uploaded')}</span></div>
            <div style="display:flex; justify-content:space-between;"><span>Bank Passbook</span><span class="badge badge-warning">${t('docUpload.pending')}</span></div>
          </div>
        </div>

        <!-- Apply Button -->
        <button class="btn btn-primary btn-block btn-lg" style="margin-bottom:24px;" data-navigate="application-submit">${t('schemeDetails.applyBtn')}</button>
      </div>
    </div>
  `;
}
