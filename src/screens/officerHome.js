export function renderOfficerHome() {
    return `
    <div class="screen has-bottom-nav">
      <!-- Hero -->
      <div class="hero-section officer">
        <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:16px;">
          <div>
            <p class="hero-greeting">Good Morning 🌅</p>
            <h1 class="hero-name" style="font-size:22px;">RI K. Palanisamy</h1>
            <p style="font-size:13px; opacity:0.85;">📍 Thoothukudi Division • Revenue Inspector</p>
          </div>
          <div class="avatar avatar-lg" style="background:rgba(255,255,255,0.2); font-size:30px;">🛡️</div>
        </div>
        <div style="display:flex; gap:10px;">
          <div style="flex:1; background:rgba(255,255,255,0.15); border-radius:12px; padding:12px; text-align:center;">
            <div style="font-size:24px; font-weight:800;">14</div>
            <div style="font-size:11px; opacity:0.85;">Pending</div>
          </div>
          <div style="flex:1; background:rgba(255,255,255,0.15); border-radius:12px; padding:12px; text-align:center;">
            <div style="font-size:24px; font-weight:800;">3</div>
            <div style="font-size:11px; opacity:0.85;">Field Visits</div>
          </div>
          <div style="flex:1; background:rgba(255,255,255,0.15); border-radius:12px; padding:12px; text-align:center;">
            <div style="font-size:24px; font-weight:800;">89%</div>
            <div style="font-size:11px; opacity:0.85;">Approval Rate</div>
          </div>
        </div>
      </div>

      <!-- Priority Alerts -->
      <div class="content-padding" style="padding-top:16px; padding-bottom:8px;">
        <div style="background:#ffebee; border-radius:var(--radius-md); padding:12px 16px; display:flex; gap:10px; align-items:center;">
          <span style="font-size:20px;">🚨</span>
          <div style="flex:1;">
            <p style="font-size:13px; font-weight:600; color:var(--error);">3 applications overdue by 5+ days</p>
            <p style="font-size:12px; color:var(--text-secondary);">Requires immediate action</p>
          </div>
          <span style="font-size:16px; color:var(--text-hint);" data-navigate="applications-queue">→</span>
        </div>
      </div>

      <!-- Today's Schedule -->
      <div class="section-header">
        <h2 class="section-title">Today's Field Visits</h2>
        <button class="section-action" data-navigate="field-inspection">View All →</button>
      </div>
      <div class="content-padding content-gap" style="padding-top:0;">
        <div class="card card-officer" style="display:flex; gap:14px; cursor:pointer;" data-navigate="field-inspection">
          <div class="avatar" style="background:var(--officer);">R</div>
          <div style="flex:1;">
            <h4 style="font-size:14px; font-weight:600;">Rajammal K. — PM-KISAN</h4>
            <p style="font-size:12px; color:var(--text-secondary);">📍 Keelakarai Village • 10:30 AM</p>
          </div>
          <span class="priority-tag priority-high">Urgent</span>
        </div>
        <div class="card card-officer" style="display:flex; gap:14px; cursor:pointer;" data-navigate="field-inspection">
          <div class="avatar" style="background:#1565c0;">S</div>
          <div style="flex:1;">
            <h4 style="font-size:14px; font-weight:600;">Selvam P. — PMAY Housing</h4>
            <p style="font-size:12px; color:var(--text-secondary);">📍 Ottapidaram Village • 2:00 PM</p>
          </div>
          <span class="priority-tag priority-medium">Medium</span>
        </div>
        <div class="card card-officer" style="display:flex; gap:14px; cursor:pointer;" data-navigate="field-inspection">
          <div class="avatar" style="background:var(--admin);">L</div>
          <div style="flex:1;">
            <h4 style="font-size:14px; font-weight:600;">Lakshmi N. — SHG Support</h4>
            <p style="font-size:12px; color:var(--text-secondary);">📍 Pudur Village • 4:00 PM</p>
          </div>
          <span class="priority-tag priority-low">Normal</span>
        </div>
      </div>

      <!-- Quick Actions -->
      <div class="section-header">
        <h2 class="section-title">Quick Actions</h2>
      </div>
      <div class="content-padding" style="padding-top:0;">
        <div class="grid-2" style="gap:12px;">
          <div class="card" style="text-align:center; cursor:pointer; padding:16px;" data-navigate="applications-queue">
            <div style="font-size:28px; margin-bottom:6px;">📋</div>
            <p style="font-size:13px; font-weight:600;">Applications</p>
            <p style="font-size:12px; color:var(--error); font-weight:600;">14 pending</p>
          </div>
          <div class="card" style="text-align:center; cursor:pointer; padding:16px;" data-navigate="village-map">
            <div style="font-size:28px; margin-bottom:6px;">🗺️</div>
            <p style="font-size:13px; font-weight:600;">Village Map</p>
            <p style="font-size:12px; color:var(--text-hint);">Coverage view</p>
          </div>
          <div class="card" style="text-align:center; cursor:pointer; padding:16px;" data-navigate="officer-analytics">
            <div style="font-size:28px; margin-bottom:6px;">📊</div>
            <p style="font-size:13px; font-weight:600;">Analytics</p>
            <p style="font-size:12px; color:var(--text-hint);">Performance</p>
          </div>
          <div class="card" style="text-align:center; cursor:pointer; padding:16px;" data-navigate="verification">
            <div style="font-size:28px; margin-bottom:6px;">✅</div>
            <p style="font-size:13px; font-weight:600;">Verify Now</p>
            <p style="font-size:12px; color:var(--officer); font-weight:600;">Start review</p>
          </div>
        </div>
      </div>

      <!-- Village Coverage -->
      <div class="section-header">
        <h2 class="section-title">Village Coverage Snapshot</h2>
        <button class="section-action" data-navigate="village-map">Details →</button>
      </div>
      <div class="content-padding" style="padding-top:0; padding-bottom:24px;">
        <div class="card">
          <div style="display:flex; justify-content:space-between; margin-bottom:12px;">
            <div>
              <p style="font-size:13px; color:var(--text-secondary);">Ottapidaram Block</p>
              <p style="font-size:20px; font-weight:800;">73% <span style="font-size:13px; color:var(--citizen); font-weight:500;">covered</span></p>
            </div>
            <div style="text-align:right;">
              <p style="font-size:13px; color:var(--text-secondary);">Households</p>
              <p style="font-size:20px; font-weight:800;">2,847</p>
            </div>
          </div>
          <div class="progress-bar" style="height:10px;">
            <div class="progress-bar-fill officer" style="width:73%; background:var(--officer);"></div>
          </div>
          <div style="display:flex; justify-content:space-between; margin-top:8px;">
            <span style="font-size:12px; color:var(--citizen);">✅ 2,078 covered</span>
            <span style="font-size:12px; color:var(--error);">❌ 769 uncovered</span>
          </div>
        </div>
      </div>

      <!-- Bottom Nav -->
      <nav class="bottom-nav">
        <button class="bottom-nav-item active" data-navigate="officer-home">
          <span class="nav-icon">🏠</span><span>Home</span>
        </button>
        <button class="bottom-nav-item" data-navigate="applications-queue">
          <span class="nav-icon">📋</span><span>Queue</span>
        </button>
        <button class="bottom-nav-item" data-navigate="field-inspection">
          <span class="nav-icon">📍</span><span>Field</span>
        </button>
        <button class="bottom-nav-item" data-navigate="village-map">
          <span class="nav-icon">🗺️</span><span>Map</span>
        </button>
        <button class="bottom-nav-item" data-navigate="officer-analytics">
          <span class="nav-icon">📊</span><span>Stats</span>
        </button>
      </nav>
    </div>
  `;
}
