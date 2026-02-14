import { t } from '../translations.js';

export function renderSchemeManagement() {
  return `
    <div class="screen">
      <div class="top-bar admin">
        <button class="top-bar-back" data-navigate="system-overview">${t('common.back')}</button>
        <span class="top-bar-title">${t('schemeManagement.title')}</span>
      </div>

      <div class="content-padding content-gap">
        <!-- Active Schemes -->
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <h3 style="font-weight:700;">${t('schemeManagement.activeSchemes')}</h3>
          <span class="badge badge-info">${t('schemeManagement.addNew')}</span>
        </div>

        <div style="display:flex; flex-direction:column; gap:10px;">
          <div class="card" style="padding:14px; border-left:4px solid var(--citizen);">
            <div style="display:flex; justify-content:space-between;"><h4 style="font-weight:600;">PM-KISAN</h4><span class="badge badge-success">Active</span></div>
            <p style="font-size:var(--fs-xs); color:var(--text-secondary);">₹6,000/year • 4,832 beneficiaries</p>
          </div>
          <div class="card" style="padding:14px; border-left:4px solid var(--info);">
            <div style="display:flex; justify-content:space-between;"><h4 style="font-weight:600;">PMAY Gramin</h4><span class="badge badge-success">Active</span></div>
            <p style="font-size:var(--fs-xs); color:var(--text-secondary);">₹2,50,000 • 1,247 beneficiaries</p>
          </div>
          <div class="card" style="padding:14px; border-left:4px solid var(--warning);">
            <div style="display:flex; justify-content:space-between;"><h4 style="font-weight:600;">Old Age Pension</h4><span class="badge badge-success">Active</span></div>
            <p style="font-size:var(--fs-xs); color:var(--text-secondary);">₹1,000/month • 3,156 beneficiaries</p>
          </div>
        </div>

        <!-- Add New Scheme Form -->
        <div class="card" style="border:2px solid var(--admin); margin-top:8px;">
          <h3 style="font-weight:700; margin-bottom:16px;">${t('schemeManagement.addNewScheme')}</h3>
          <div style="display:flex; flex-direction:column; gap:14px;">
            <div class="input-group">
              <label class="input-label">${t('schemeManagement.schemeName')}</label>
              <input class="input-field" placeholder="Enter scheme name">
            </div>
            <div class="input-group">
              <label class="input-label">${t('schemeManagement.category')}</label>
              <div style="display:flex; flex-wrap:wrap; gap:8px;">
                <span class="chip active">${t('recSchemes.agriculture')}</span>
                <span class="chip">${t('recSchemes.housing')}</span>
                <span class="chip">${t('recSchemes.pension')}</span>
                <span class="chip">${t('recSchemes.women')}</span>
                <span class="chip">${t('recSchemes.education')}</span>
              </div>
            </div>
            <div class="grid-2">
              <div class="input-group">
                <label class="input-label">${t('schemeManagement.benefitAmount')}</label>
                <input class="input-field" type="number" placeholder="₹">
              </div>
              <div class="input-group">
                <label class="input-label">${t('schemeManagement.govLevel')}</label>
                <div style="display:flex; flex-wrap:wrap; gap:6px;">
                  <span class="chip active">${t('schemeManagement.central')}</span>
                  <span class="chip">${t('schemeManagement.state')}</span>
                  <span class="chip">${t('schemeManagement.district')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Eligibility Rules -->
        <div class="card">
          <h3 style="font-weight:700; margin-bottom:12px;">${t('schemeManagement.eligRules')}</h3>
          <div style="display:flex; flex-direction:column; gap:12px;">
            <div class="input-group">
              <label class="input-label">${t('schemeManagement.maxIncome')}</label>
              <input class="input-field" value="₹2,50,000">
            </div>
            <div class="grid-2">
              <div class="input-group">
                <label class="input-label">${t('schemeManagement.minLand')}</label>
                <input class="input-field" value="0.5">
              </div>
              <div class="input-group">
                <label class="input-label">${t('schemeManagement.maxLand')}</label>
                <input class="input-field" value="5.0">
              </div>
            </div>
            <div class="input-group">
              <label class="input-label">${t('schemeManagement.ageRange')}</label>
              <div style="display:flex; gap:8px; align-items:center;">
                <input class="input-field" style="width:80px;" value="18">
                <span>—</span>
                <input class="input-field" style="width:80px;" value="65">
                <span style="font-size:var(--fs-sm); color:var(--text-secondary);">${t('schemeManagement.years')}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Required Docs -->
        <div class="card">
          <h3 style="font-weight:700; margin-bottom:12px;">${t('schemeManagement.requiredDocs')}</h3>
          <div style="display:flex; flex-direction:column; gap:8px;">
            <div class="checkbox-row"><span class="checkbox checked">✓</span><span>${t('docUpload.aadhaar')}</span></div>
            <div class="checkbox-row"><span class="checkbox checked">✓</span><span>${t('docUpload.income')}</span></div>
            <div class="checkbox-row"><span class="checkbox checked">✓</span><span>${t('docUpload.landPatta')}</span></div>
            <div class="checkbox-row"><span class="checkbox">  </span><span>${t('docUpload.ration')}</span></div>
            <div class="checkbox-row"><span class="checkbox">  </span><span>${t('docUpload.community')}</span></div>
          </div>
        </div>

        <button class="btn btn-admin btn-block btn-lg" data-navigate="system-overview">${t('schemeManagement.createScheme')}</button>
        <p style="font-size:var(--fs-xs); color:var(--text-hint); text-align:center; margin-bottom:24px;">${t('schemeManagement.reviewNote')}</p>
      </div>
    </div>
  `;
}
