import { t } from '../translations.js';

export function renderSystemOverview() {
  return `
    <div class="screen">
      <div class="hero-section admin">
        <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:16px;">
          <div>
            <p style="font-size:var(--fs-xs); opacity:0.8;">${t('systemOverview.adminDash')}</p>
            <h1 class="hero-name">${t('systemOverview.district')}</h1>
          </div>
          <div class="avatar avatar-lg" style="background:rgba(255,255,255,0.2); font-size:32px;">🏛️</div>
        </div>
      </div>

      <!-- Stats -->
      <div style="padding:16px 20px 8px;">
        <div class="grid-3">
          <div class="stat-card" style="text-align:center; border-left:3px solid var(--admin);">
            <div class="stat-value" style="color:var(--admin);">12,847</div>
            <div class="stat-label">${t('systemOverview.beneficiaries')}</div>
          </div>
          <div class="stat-card" style="text-align:center; border-left:3px solid var(--info);">
            <div class="stat-value" style="color:var(--info);">8</div>
            <div class="stat-label">${t('systemOverview.activeSchemes')}</div>
          </div>
          <div class="stat-card" style="text-align:center; border-left:3px solid var(--warning);">
            <div class="stat-value" style="color:var(--warning);">234</div>
            <div class="stat-label">${t('systemOverview.pendingCount')}</div>
          </div>
        </div>
      </div>

      <!-- Quick Actions -->
      <div style="padding:8px 20px;">
        <div class="grid-2" style="gap:10px;">
          <div class="card" style="text-align:center; cursor:pointer; padding:14px;" data-navigate="scheme-management">
            <div style="font-size:24px; margin-bottom:6px;">📋</div>
            <p style="font-weight:600; font-size:var(--fs-sm);">${t('systemOverview.manageSchemes')}</p>
          </div>
          <div class="card" style="text-align:center; cursor:pointer; padding:14px;">
            <div style="font-size:24px; margin-bottom:6px;">👥</div>
            <p style="font-weight:600; font-size:var(--fs-sm);">${t('systemOverview.officers')}</p>
          </div>
          <div class="card" style="text-align:center; cursor:pointer; padding:14px;">
            <div style="font-size:24px; margin-bottom:6px;">📊</div>
            <p style="font-weight:600; font-size:var(--fs-sm);">${t('systemOverview.reports')}</p>
          </div>
          <div class="card" style="text-align:center; cursor:pointer; padding:14px;">
            <div style="font-size:24px; margin-bottom:6px;">🔔</div>
            <p style="font-weight:600; font-size:var(--fs-sm);">${t('systemOverview.alertsCard')}</p>
            <p style="font-size:var(--fs-xs); color:var(--error);">${t('systemOverview.critical')}</p>
          </div>
        </div>
      </div>

      <div class="content-padding content-gap">
        <!-- Fund Disbursement -->
        <div class="card">
          <h3 style="font-weight:700; margin-bottom:16px;">${t('systemOverview.fundDisburse')}</h3>
          <div style="display:flex; justify-content:space-between; margin-bottom:4px;">
            <span style="font-size:var(--fs-sm);">${t('systemOverview.totalAllocated')}: ₹48.5 Cr</span>
            <span style="font-size:var(--fs-sm); font-weight:700; color:var(--admin);">66% ${t('systemOverview.utilized')}</span>
          </div>
          <div class="progress-bar" style="height:12px;"><div class="progress-bar-fill" style="width:66%; background:var(--admin);"></div></div>
          <div style="display:flex; justify-content:space-between; margin-top:6px;">
            <span style="font-size:var(--fs-xs); color:var(--text-secondary);">${t('systemOverview.disbursedLabel')}: ₹32.0 Cr</span>
            <span style="font-size:var(--fs-xs); color:var(--text-hint);">${t('systemOverview.remaining')}: ₹16.5 Cr</span>
          </div>
        </div>

        <!-- Scheme Statistics -->
        <div class="card">
          <h3 style="font-weight:700; margin-bottom:12px;">${t('systemOverview.schemeStats')}</h3>
          <div style="display:flex; flex-direction:column; gap:10px;">
            <div><div style="display:flex; justify-content:space-between; margin-bottom:4px;"><span style="font-size:var(--fs-sm);">PM-KISAN</span><span style="font-size:var(--fs-sm); font-weight:700;">4,832</span></div><div class="progress-bar"><div class="progress-bar-fill" style="width:80%; background:var(--admin);"></div></div></div>
            <div><div style="display:flex; justify-content:space-between; margin-bottom:4px;"><span style="font-size:var(--fs-sm);">PMAY Housing</span><span style="font-size:var(--fs-sm); font-weight:700;">1,247</span></div><div class="progress-bar"><div class="progress-bar-fill" style="width:45%; background:var(--admin);"></div></div></div>
            <div><div style="display:flex; justify-content:space-between; margin-bottom:4px;"><span style="font-size:var(--fs-sm);">Old Age Pension</span><span style="font-size:var(--fs-sm); font-weight:700;">3,156</span></div><div class="progress-bar"><div class="progress-bar-fill" style="width:65%; background:var(--admin);"></div></div></div>
          </div>
        </div>

        <!-- Pending Approvals -->
        <div class="card">
          <h3 style="font-weight:700; margin-bottom:12px;">${t('systemOverview.pendingApprovals')}</h3>
          <div style="display:flex; flex-direction:column; gap:8px;">
            <div style="display:flex; justify-content:space-between; font-size:var(--fs-sm);"><span>${t('systemOverview.vaoLevel')}</span><span class="badge badge-warning">84</span></div>
            <div style="display:flex; justify-content:space-between; font-size:var(--fs-sm);"><span>${t('systemOverview.riLevel')}</span><span class="badge badge-orange">67</span></div>
            <div style="display:flex; justify-content:space-between; font-size:var(--fs-sm);"><span>${t('systemOverview.tahsildar')}</span><span class="badge badge-info">52</span></div>
            <div style="display:flex; justify-content:space-between; font-size:var(--fs-sm);"><span>${t('systemOverview.collector')}</span><span class="badge badge-error">31</span></div>
          </div>
        </div>

        <!-- System Health -->
        <div class="card" style="background:var(--admin-surface); border:1px solid var(--admin); margin-bottom:24px;">
          <h3 style="font-weight:700; margin-bottom:8px;">${t('systemOverview.systemHealth')}</h3>
          <div style="display:flex; gap:16px;">
            <div style="text-align:center; flex:1;"><p style="font-size:var(--fs-2xl); font-weight:800; color:var(--citizen);">🟢</p><p style="font-size:var(--fs-xs);">API</p></div>
            <div style="text-align:center; flex:1;"><p style="font-size:var(--fs-2xl); font-weight:800; color:var(--citizen);">🟢</p><p style="font-size:var(--fs-xs);">DB</p></div>
            <div style="text-align:center; flex:1;"><p style="font-size:var(--fs-2xl); font-weight:800; color:var(--warning);">🟡</p><p style="font-size:var(--fs-xs);">Aadhaar</p></div>
            <div style="text-align:center; flex:1;"><p style="font-size:var(--fs-2xl); font-weight:800; color:var(--citizen);">🟢</p><p style="font-size:var(--fs-xs);">Payment</p></div>
          </div>
          <p style="font-size:var(--fs-xs); color:var(--text-hint); text-align:center; margin-top:8px;">${t('systemOverview.lastSync')}</p>
        </div>
      </div>
    </div>
  `;
}
