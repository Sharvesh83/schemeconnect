import { t } from '../translations.js';

export function renderVerification() {
  return `
    <div class="screen">
      <div class="top-bar officer">
        <button class="top-bar-back" data-navigate="applications-queue">${t('common.back')}</button>
        <span class="top-bar-title">${t('verification.title')}</span>
      </div>

      <div class="content-padding content-gap">
        <!-- Application Summary -->
        <div class="card">
          <h3 style="font-weight:700; margin-bottom:12px;">${t('verification.appSummary')}</h3>
          <div style="display:flex; gap:12px; align-items:center; margin-bottom:12px;">
            <div class="avatar" style="background:var(--citizen); font-size:18px;">MS</div>
            <div>
              <h4 style="font-weight:700;">Murugan Selvam</h4>
              <p style="font-size:var(--fs-xs); color:var(--text-secondary);">Ottapidaram • PM-KISAN</p>
              <p style="font-size:var(--fs-xs); color:var(--text-hint);">ID: TK-2026-00847</p>
            </div>
          </div>
          <div style="display:flex; flex-direction:column; gap:6px; font-size:var(--fs-sm);">
            <div style="display:flex; justify-content:space-between;"><span style="color:var(--text-secondary);">${t('appSubmit.totalLand')}</span><span style="font-weight:600;">3.5 acres</span></div>
            <div style="display:flex; justify-content:space-between;"><span style="color:var(--text-secondary);">${t('appSubmit.cropType')}</span><span style="font-weight:600;">Paddy, Millets</span></div>
            <div style="display:flex; justify-content:space-between;"><span style="color:var(--text-secondary);">${t('tracker.benefit')}</span><span style="font-weight:600;">₹6,000/year</span></div>
          </div>
        </div>

        <!-- Document Verification -->
        <div class="card">
          <h3 style="font-weight:700; margin-bottom:12px;">${t('verification.docVerification')}</h3>
          <div style="display:flex; flex-direction:column; gap:12px;">
            <div>
              <div style="display:flex; justify-content:space-between; margin-bottom:6px;">
                <span style="font-weight:600;">${t('docUpload.aadhaar')}</span>
                <span class="badge badge-success">${t('docUpload.verified')}</span>
              </div>
              <div class="doc-preview">📄</div>
            </div>
            <div>
              <div style="display:flex; justify-content:space-between; margin-bottom:6px;">
                <span style="font-weight:600;">${t('docUpload.landPatta')}</span>
                <span class="badge badge-success">${t('docUpload.verified')}</span>
              </div>
              <div class="doc-preview">📄</div>
            </div>
            <div>
              <div style="display:flex; justify-content:space-between; margin-bottom:6px;">
                <span style="font-weight:600;">${t('docUpload.income')}</span>
                <span class="badge badge-warning">${t('docUpload.pending')}</span>
              </div>
              <div class="doc-preview">📄</div>
            </div>
          </div>
        </div>

        <!-- Eligibility Check -->
        <div class="card">
          <div style="display:flex; justify-content:space-between; margin-bottom:12px;">
            <h3 style="font-weight:700;">${t('verification.eligCheck')}</h3>
            <span class="badge badge-success">${t('verification.score')}: 95%</span>
          </div>
          <div style="display:flex; flex-direction:column; gap:8px;">
            <div class="checkbox-row"><span class="checkbox checked">✓</span><span>Small/Marginal Farmer (< 5 acres)</span></div>
            <div class="checkbox-row"><span class="checkbox checked">✓</span><span>Resident of Tamil Nadu</span></div>
            <div class="checkbox-row"><span class="checkbox checked">✓</span><span>Valid land records attached</span></div>
            <div class="checkbox-row"><span class="checkbox checked">✓</span><span>Bank account linked for DBT</span></div>
            <div class="checkbox-row"><span class="checkbox checked">✓</span><span>Not an institutional farmer</span></div>
          </div>
          <p style="font-size:var(--fs-xs); color:var(--citizen); margin-top:8px;">✅ ${t('verification.allCriteriaMet')}</p>
        </div>

        <!-- Officer Notes -->
        <div class="card">
          <h3 style="font-weight:700; margin-bottom:12px;">${t('verification.officerNotes')}</h3>
          <textarea class="field-notes" placeholder="Add verification notes...">Field visit completed on 22 Jan 2026. Land ownership confirmed. Cultivation activity observed — paddy crop in progress. Neighbor verification done with village elder Karuppan.</textarea>
        </div>

        <!-- Actions -->
        <div style="display:flex; flex-direction:column; gap:10px; padding-bottom:24px;">
          <button class="btn btn-primary btn-block btn-lg" data-navigate="applications-queue">${t('verification.approve')}</button>
          <div style="display:flex; gap:10px;">
            <button class="btn btn-outline btn-block" data-navigate="applications-queue">${t('verification.requestDocs')}</button>
            <button class="btn btn-danger btn-block" data-navigate="applications-queue">${t('verification.reject')}</button>
          </div>
        </div>
      </div>
    </div>
  `;
}
