import { t } from '../translations.js';

export function renderOfficerAnalytics() {
  return `
    <div class="screen has-bottom-nav">
      <div class="top-bar officer">
        <button class="top-bar-back" data-navigate="officer-home">${t('common.back')}</button>
        <span class="top-bar-title">${t('officerAnalytics.title')}</span>
      </div>

      <div class="content-padding content-gap">
        <!-- Today's Performance -->
        <div class="card">
          <h3 style="font-weight:700; margin-bottom:12px;">${t('officerAnalytics.todayPerf')}</h3>
          <div class="grid-2" style="gap:8px;">
            <div style="text-align:center; padding:12px; background:var(--primary-surface); border-radius:var(--radius-md);">
              <p style="font-size:var(--fs-2xl); font-weight:800; color:var(--primary);">8</p>
              <p style="font-size:var(--fs-xs); color:var(--text-secondary);">${t('officerAnalytics.processed')}</p>
            </div>
            <div style="text-align:center; padding:12px; background:var(--citizen-surface); border-radius:var(--radius-md);">
              <p style="font-size:var(--fs-2xl); font-weight:800; color:var(--citizen);">6</p>
              <p style="font-size:var(--fs-xs); color:var(--text-secondary);">${t('officerAnalytics.approvedStat')}</p>
            </div>
            <div style="text-align:center; padding:12px; background:#ffebee; border-radius:var(--radius-md);">
              <p style="font-size:var(--fs-2xl); font-weight:800; color:var(--error);">1</p>
              <p style="font-size:var(--fs-xs); color:var(--text-secondary);">${t('officerAnalytics.rejected')}</p>
            </div>
            <div style="text-align:center; padding:12px; background:#fff8e1; border-radius:var(--radius-md);">
              <p style="font-size:var(--fs-2xl); font-weight:800; color:var(--warning);">1</p>
              <p style="font-size:var(--fs-xs); color:var(--text-secondary);">${t('officerAnalytics.pendingStat')}</p>
            </div>
          </div>
        </div>

        <!-- Approval Rate -->
        <div class="card">
          <h3 style="font-weight:700; margin-bottom:16px;">${t('officerAnalytics.approvalRate')}</h3>
          <div style="display:flex; align-items:center; gap:24px;">
            <div class="donut-chart" style="background:conic-gradient(var(--citizen) 0deg 320deg, var(--error) 320deg 338deg, var(--divider) 338deg 360deg);">
              <span class="donut-chart-label">89%</span>
            </div>
            <div style="display:flex; flex-direction:column; gap:8px; font-size:var(--fs-sm);">
              <div style="display:flex; align-items:center; gap:8px;"><div style="width:10px; height:10px; border-radius:2px; background:var(--citizen);"></div>${t('officerAnalytics.approvedStat')} (89%)</div>
              <div style="display:flex; align-items:center; gap:8px;"><div style="width:10px; height:10px; border-radius:2px; background:var(--error);"></div>${t('officerAnalytics.rejected')} (5%)</div>
              <div style="display:flex; align-items:center; gap:8px;"><div style="width:10px; height:10px; border-radius:2px; background:var(--divider);"></div>${t('officerAnalytics.pendingStat')} (6%)</div>
            </div>
          </div>
        </div>

        <!-- Weekly Chart -->
        <div class="card">
          <h3 style="font-weight:700; margin-bottom:12px;">${t('officerAnalytics.weeklyChart')}</h3>
          <div class="bar-chart">
            <div class="bar-chart-item"><span class="bar-chart-value">12</span><div class="bar-chart-bar" style="height:60%; background:var(--officer);"></div><span class="bar-chart-label">Mon</span></div>
            <div class="bar-chart-item"><span class="bar-chart-value">8</span><div class="bar-chart-bar" style="height:40%; background:var(--officer);"></div><span class="bar-chart-label">Tue</span></div>
            <div class="bar-chart-item"><span class="bar-chart-value">15</span><div class="bar-chart-bar" style="height:75%; background:var(--officer);"></div><span class="bar-chart-label">Wed</span></div>
            <div class="bar-chart-item"><span class="bar-chart-value">10</span><div class="bar-chart-bar" style="height:50%; background:var(--officer);"></div><span class="bar-chart-label">Thu</span></div>
            <div class="bar-chart-item"><span class="bar-chart-value">20</span><div class="bar-chart-bar" style="height:100%; background:var(--officer-dark);"></div><span class="bar-chart-label">Fri</span></div>
          </div>
        </div>

        <!-- Scheme Breakdown -->
        <div class="card" style="margin-bottom:24px;">
          <h3 style="font-weight:700; margin-bottom:12px;">${t('officerAnalytics.schemeBreakdown')}</h3>
          <div style="display:flex; flex-direction:column; gap:10px;">
            <div>
              <div style="display:flex; justify-content:space-between; margin-bottom:4px;"><span style="font-size:var(--fs-sm);">PM-KISAN</span><span style="font-size:var(--fs-sm); font-weight:700;">45</span></div>
              <div class="progress-bar"><div class="progress-bar-fill officer" style="width:75%;"></div></div>
            </div>
            <div>
              <div style="display:flex; justify-content:space-between; margin-bottom:4px;"><span style="font-size:var(--fs-sm);">PMAY Housing</span><span style="font-size:var(--fs-sm); font-weight:700;">28</span></div>
              <div class="progress-bar"><div class="progress-bar-fill officer" style="width:47%;"></div></div>
            </div>
            <div>
              <div style="display:flex; justify-content:space-between; margin-bottom:4px;"><span style="font-size:var(--fs-sm);">Old Age Pension</span><span style="font-size:var(--fs-sm); font-weight:700;">18</span></div>
              <div class="progress-bar"><div class="progress-bar-fill officer" style="width:30%;"></div></div>
            </div>
          </div>
        </div>
      </div>

      <nav class="bottom-nav">
        <button class="bottom-nav-item" data-navigate="officer-home"><span class="nav-icon">🏠</span><span>${t('common.home')}</span></button>
        <button class="bottom-nav-item" data-navigate="applications-queue"><span class="nav-icon">📋</span><span>${t('common.queue')}</span></button>
        <button class="bottom-nav-item" data-navigate="field-inspection"><span class="nav-icon">📍</span><span>${t('common.field')}</span></button>
        <button class="bottom-nav-item" data-navigate="village-map"><span class="nav-icon">🗺️</span><span>${t('common.map')}</span></button>
        <button class="bottom-nav-item active" data-navigate="officer-analytics"><span class="nav-icon">📊</span><span>${t('common.stats')}</span></button>
      </nav>
    </div>
  `;
}
