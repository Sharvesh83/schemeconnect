import { t } from '../translations.js';

export function renderFieldInspection() {
  return `
    <div class="screen">
      <div class="top-bar officer">
        <button class="top-bar-back" data-navigate="officer-home">${t('common.back')}</button>
        <span class="top-bar-title">${t('fieldInspection.title')}</span>
        <span class="badge badge-error" style="animation:pulse 2s infinite;">${t('fieldInspection.live')}</span>
      </div>

      <!-- GPS Location -->
      <div style="padding:16px 20px;">
        <div class="card" style="background:linear-gradient(135deg, #e8f5e9, #c8e6c9); border:1px solid var(--citizen);">
          <div style="display:flex; gap:10px; align-items:center;">
            <span style="font-size:24px;">📍</span>
            <div>
              <p style="font-weight:700; font-size:var(--fs-sm);">${t('fieldInspection.currentLocation')}</p>
              <p style="font-size:var(--fs-xs); color:var(--text-secondary);">8.7642° N, 78.1348° E • Ottapidaram</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Applicant Info -->
      <div style="padding:0 20px;">
        <div class="card">
          <div style="display:flex; gap:12px; align-items:center;">
            <div class="avatar" style="background:var(--citizen);">MS</div>
            <div>
              <h4 style="font-weight:700;">Murugan Selvam</h4>
              <p style="font-size:var(--fs-xs); color:var(--text-secondary);">PM-KISAN • Survey No. 142/3A</p>
              <p style="font-size:var(--fs-xs); color:var(--text-hint);">3.5 acres — Wetland (Paddy)</p>
            </div>
          </div>
        </div>
      </div>

      <div class="content-padding content-gap">
        <!-- Photo Evidence -->
        <div>
          <h3 style="font-weight:700; margin-bottom:12px;">${t('fieldInspection.photoEvidence')}</h3>
          <div class="grid-3">
            <div class="doc-preview" style="height:100px; font-size:24px; cursor:pointer;">🌾</div>
            <div class="doc-preview" style="height:100px; font-size:24px; cursor:pointer;">🏡</div>
            <div class="doc-preview" style="height:100px; font-size:24px; cursor:pointer; border-style:dashed;">➕</div>
          </div>
        </div>

        <!-- Checklist -->
        <div class="card">
          <h3 style="font-weight:700; margin-bottom:12px;">${t('fieldInspection.checklist')}</h3>
          <div style="display:flex; flex-direction:column; gap:10px;">
            <div class="checkbox-row"><span class="checkbox checked">✓</span><span style="font-size:var(--fs-sm);">${t('fieldInspection.landVerified')}</span></div>
            <div class="checkbox-row"><span class="checkbox checked">✓</span><span style="font-size:var(--fs-sm);">${t('fieldInspection.identityConfirmed')}</span></div>
            <div class="checkbox-row"><span class="checkbox checked">✓</span><span style="font-size:var(--fs-sm);">${t('fieldInspection.cultivationObserved')}</span></div>
            <div class="checkbox-row"><span class="checkbox">  </span><span style="font-size:var(--fs-sm);">${t('fieldInspection.neighborVerify')}</span></div>
            <div class="checkbox-row"><span class="checkbox checked">✓</span><span style="font-size:var(--fs-sm);">${t('fieldInspection.gpsCapture')}</span></div>
          </div>
        </div>

        <!-- Field Notes -->
        <div>
          <h3 style="font-weight:700; margin-bottom:12px;">${t('fieldInspection.fieldNotes')}</h3>
          <textarea class="field-notes" placeholder="Add inspection observations...">Land boundary matches survey records. Active paddy cultivation observed on approximately 3 acres. Borewell irrigation functional. Property appears well-maintained.</textarea>
        </div>

        <button class="btn btn-officer btn-block btn-lg" style="margin-bottom:24px;" data-navigate="officer-home">${t('fieldInspection.completeVisit')}</button>
      </div>
    </div>
  `;
}
