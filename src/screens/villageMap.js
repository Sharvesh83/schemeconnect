import { t } from '../translations.js';

export function renderVillageMap() {
  return `
    <div class="screen has-bottom-nav">
      <div class="top-bar officer">
        <button class="top-bar-back" data-navigate="officer-home">${t('common.back')}</button>
        <span class="top-bar-title">${t('villageMap.title')}</span>
      </div>

      <!-- Map -->
      <div style="padding:16px 20px;">
        <div class="map-container">
          <div class="map-dot covered" style="top:30%; left:25%;"></div>
          <div class="map-dot covered" style="top:45%; left:55%;"></div>
          <div class="map-dot partial" style="top:20%; left:70%;"></div>
          <div class="map-dot covered" style="top:60%; left:35%;"></div>
          <div class="map-dot uncovered" style="top:75%; left:65%;"></div>
          <div class="map-dot partial" style="top:40%; left:80%;"></div>
          <div class="map-dot covered" style="top:55%; left:15%;"></div>
        </div>

        <div class="map-legend" style="margin-top:12px;">
          <div class="map-legend-item"><div class="map-legend-dot" style="background:var(--citizen);"></div>${t('villageMap.covered')}</div>
          <div class="map-legend-item"><div class="map-legend-dot" style="background:var(--warning);"></div>${t('villageMap.partial')}</div>
          <div class="map-legend-item"><div class="map-legend-dot" style="background:var(--error);"></div>${t('villageMap.uncovered')}</div>
        </div>
      </div>

      <!-- Village Stats -->
      <div class="section-header">
        <span class="section-title">${t('villageMap.coverageByVillage')}</span>
      </div>
      <div style="padding:0 20px; display:flex; flex-direction:column; gap:12px; padding-bottom:24px;">
        <div class="card">
          <div style="display:flex; justify-content:space-between; margin-bottom:6px;">
            <span style="font-weight:600;">Ottapidaram</span>
            <span style="font-size:var(--fs-sm); font-weight:700; color:var(--citizen);">85%</span>
          </div>
          <div class="progress-bar"><div class="progress-bar-fill officer" style="width:85%;"></div></div>
          <p style="font-size:var(--fs-xs); color:var(--text-hint); margin-top:4px;">340 ${t('villageMap.households')} • 52 ${t('villageMap.remaining')}</p>
        </div>
        <div class="card">
          <div style="display:flex; justify-content:space-between; margin-bottom:6px;">
            <span style="font-weight:600;">Pudur</span>
            <span style="font-size:var(--fs-sm); font-weight:700; color:var(--citizen);">78%</span>
          </div>
          <div class="progress-bar"><div class="progress-bar-fill officer" style="width:78%;"></div></div>
          <p style="font-size:var(--fs-xs); color:var(--text-hint); margin-top:4px;">280 ${t('villageMap.households')} • 62 ${t('villageMap.remaining')}</p>
        </div>
        <div class="card">
          <div style="display:flex; justify-content:space-between; margin-bottom:6px;">
            <span style="font-weight:600;">Kayalpattinam</span>
            <span style="font-size:var(--fs-sm); font-weight:700; color:var(--warning);">62%</span>
          </div>
          <div class="progress-bar"><div class="progress-bar-fill officer" style="width:62%;"></div></div>
          <p style="font-size:var(--fs-xs); color:var(--text-hint); margin-top:4px;">520 ${t('villageMap.households')} • 198 ${t('villageMap.remaining')}</p>
        </div>
        <div class="card">
          <div style="display:flex; justify-content:space-between; margin-bottom:6px;">
            <span style="font-weight:600;">Vilathikulam</span>
            <span style="font-size:var(--fs-sm); font-weight:700; color:var(--error);">45%</span>
          </div>
          <div class="progress-bar"><div class="progress-bar-fill officer" style="width:45%;"></div></div>
          <p style="font-size:var(--fs-xs); color:var(--text-hint); margin-top:4px;">410 ${t('villageMap.households')} • 226 ${t('villageMap.remaining')}</p>
        </div>

        <!-- Summary -->
        <div class="card" style="background:var(--officer-surface); border:1px solid var(--officer);">
          <div style="display:flex; justify-content:space-around; text-align:center;">
            <div>
              <p style="font-size:var(--fs-2xl); font-weight:800; color:var(--officer);">2,847</p>
              <p style="font-size:var(--fs-xs); color:var(--text-secondary);">${t('villageMap.totalHouseholds')}</p>
            </div>
            <div>
              <p style="font-size:var(--fs-2xl); font-weight:800; color:var(--citizen);">2,078</p>
              <p style="font-size:var(--fs-xs); color:var(--text-secondary);">${t('villageMap.beneficiaries')}</p>
            </div>
          </div>
        </div>
      </div>

      <nav class="bottom-nav">
        <button class="bottom-nav-item" data-navigate="officer-home"><span class="nav-icon">🏠</span><span>${t('common.home')}</span></button>
        <button class="bottom-nav-item" data-navigate="applications-queue"><span class="nav-icon">📋</span><span>${t('common.queue')}</span></button>
        <button class="bottom-nav-item" data-navigate="field-inspection"><span class="nav-icon">📍</span><span>${t('common.field')}</span></button>
        <button class="bottom-nav-item active" data-navigate="village-map"><span class="nav-icon">🗺️</span><span>${t('common.map')}</span></button>
        <button class="bottom-nav-item" data-navigate="officer-analytics"><span class="nav-icon">📊</span><span>${t('common.stats')}</span></button>
      </nav>
    </div>
  `;
}
