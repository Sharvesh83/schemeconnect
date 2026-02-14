import { t } from '../translations.js';

export function renderOfficerHome() {
  return `
    <div class="screen has-bottom-nav">
      <div class="hero-section officer">
        <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:20px;">
          <div>
            <p class="hero-greeting">${t('officerHome.greeting')}</p>
            <h1 class="hero-name">${t('officerHome.name')}</h1>
            <p style="font-size:13px; opacity:0.8;">${t('officerHome.location')}</p>
          </div>
          <div class="avatar avatar-lg" style="background:rgba(255,255,255,0.2); font-size:32px;">👨‍💼</div>
        </div>
      </div>

      <!-- Stats -->
      <div style="padding:16px 20px 8px;">
        <div class="grid-3">
          <div class="stat-card" style="text-align:center; border-left:3px solid var(--officer);">
            <div class="stat-value" style="color:var(--officer);">14</div>
            <div class="stat-label">${t('officerHome.pending')}</div>
          </div>
          <div class="stat-card" style="text-align:center; border-left:3px solid var(--info);">
            <div class="stat-value" style="color:var(--info);">3</div>
            <div class="stat-label">${t('officerHome.fieldVisits')}</div>
          </div>
          <div class="stat-card" style="text-align:center; border-left:3px solid var(--citizen);">
            <div class="stat-value" style="color:var(--citizen);">89%</div>
            <div class="stat-label">${t('officerHome.approvalRate')}</div>
          </div>
        </div>
      </div>

      <!-- Alert -->
      <div style="padding:8px 20px;">
        <div class="card" style="background:#fff3e0; border:1px solid var(--officer-light); padding:14px;">
          <div style="display:flex; gap:10px; align-items:center;">
            <span style="font-size:24px;">⚠️</span>
            <div>
              <p style="font-weight:700; font-size:var(--fs-sm); color:var(--officer-dark);">${t('officerHome.overdueAlert')}</p>
              <p style="font-size:var(--fs-xs); color:var(--text-secondary);">${t('officerHome.immediateAction')}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Today's Field Visits -->
      <div class="section-header">
        <span class="section-title">${t('officerHome.todayVisits')}</span>
        <span class="section-action" data-navigate="field-inspection">${t('officerHome.viewAll')}</span>
      </div>
      <div style="padding:0 20px; display:flex; flex-direction:column; gap:10px;">
        <div class="card card-officer" style="cursor:pointer;" data-navigate="field-inspection">
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <div>
              <h4 style="font-weight:700;">Murugan S. — Ottapidaram</h4>
              <p style="font-size:var(--fs-xs); color:var(--text-secondary);">PM-KISAN • 10:00 AM</p>
            </div>
            <span class="priority-tag priority-high">Urgent</span>
          </div>
        </div>
        <div class="card card-officer" style="cursor:pointer;" data-navigate="field-inspection">
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <div>
              <h4 style="font-weight:700;">Lakshmi K. — Pudur</h4>
              <p style="font-size:var(--fs-xs); color:var(--text-secondary);">PMAY Housing • 2:00 PM</p>
            </div>
            <span class="priority-tag priority-medium">Medium</span>
          </div>
        </div>
        <div class="card card-officer" style="cursor:pointer;" data-navigate="field-inspection">
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <div>
              <h4 style="font-weight:700;">Raman P. — Kayalpattinam</h4>
              <p style="font-size:var(--fs-xs); color:var(--text-secondary);">Old Age Pension • 4:00 PM</p>
            </div>
            <span class="priority-tag priority-low">Normal</span>
          </div>
        </div>
      </div>

      <!-- Quick Actions -->
      <div class="section-header">
        <span class="section-title">${t('officerHome.quickActions')}</span>
      </div>
      <div style="padding:0 20px;">
        <div class="grid-2">
          <div class="card" style="text-align:center; cursor:pointer; padding:16px;" data-navigate="applications-queue">
            <div style="font-size:28px; margin-bottom:8px;">📋</div>
            <p style="font-weight:600; font-size:var(--fs-sm);">${t('officerHome.applications')}</p>
            <p style="font-size:var(--fs-xs); color:var(--text-secondary);">${t('officerHome.pendingCount')}</p>
          </div>
          <div class="card" style="text-align:center; cursor:pointer; padding:16px;" data-navigate="village-map">
            <div style="font-size:28px; margin-bottom:8px;">🗺️</div>
            <p style="font-weight:600; font-size:var(--fs-sm);">${t('officerHome.villageMap')}</p>
            <p style="font-size:var(--fs-xs); color:var(--text-secondary);">${t('officerHome.coverageView')}</p>
          </div>
          <div class="card" style="text-align:center; cursor:pointer; padding:16px;" data-navigate="officer-analytics">
            <div style="font-size:28px; margin-bottom:8px;">📊</div>
            <p style="font-weight:600; font-size:var(--fs-sm);">${t('officerHome.analytics')}</p>
            <p style="font-size:var(--fs-xs); color:var(--text-secondary);">${t('officerHome.performance')}</p>
          </div>
          <div class="card" style="text-align:center; cursor:pointer; padding:16px;" data-navigate="verification">
            <div style="font-size:28px; margin-bottom:8px;">✅</div>
            <p style="font-weight:600; font-size:var(--fs-sm);">${t('officerHome.verifyNow')}</p>
            <p style="font-size:var(--fs-xs); color:var(--text-secondary);">${t('officerHome.startReview')}</p>
          </div>
        </div>
      </div>

      <!-- Village Coverage -->
      <div class="section-header">
        <span class="section-title">${t('officerHome.villageCoverage')}</span>
        <span class="section-action" data-navigate="village-map">${t('officerHome.details')}</span>
      </div>
      <div style="padding:0 20px 24px;">
        <div class="card">
          <div style="display:flex; justify-content:space-between; margin-bottom:8px;">
            <span style="font-size:var(--fs-sm); font-weight:600;">${t('officerHome.households')}</span>
            <span style="font-size:var(--fs-sm); font-weight:700; color:var(--citizen);">73% ${t('officerHome.covered')}</span>
          </div>
          <div class="progress-bar"><div class="progress-bar-fill officer" style="width:73%;"></div></div>
          <div style="display:flex; justify-content:space-between; margin-top:8px;">
            <span style="font-size:var(--fs-xs); color:var(--text-secondary);">${t('officerHome.coveredCount')}</span>
            <span style="font-size:var(--fs-xs); color:var(--text-hint);">${t('officerHome.uncoveredCount')}</span>
          </div>
        </div>
      </div>

      <nav class="bottom-nav">
        <button class="bottom-nav-item active" data-navigate="officer-home"><span class="nav-icon">🏠</span><span>${t('common.home')}</span></button>
        <button class="bottom-nav-item" data-navigate="applications-queue"><span class="nav-icon">📋</span><span>${t('common.queue')}</span></button>
        <button class="bottom-nav-item" data-navigate="field-inspection"><span class="nav-icon">📍</span><span>${t('common.field')}</span></button>
        <button class="bottom-nav-item" data-navigate="village-map"><span class="nav-icon">🗺️</span><span>${t('common.map')}</span></button>
        <button class="bottom-nav-item" data-navigate="officer-analytics"><span class="nav-icon">📊</span><span>${t('common.stats')}</span></button>
      </nav>
    </div>
  `;
}
