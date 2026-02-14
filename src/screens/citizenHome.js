export function renderCitizenHome() {
    return `
    <div class="screen has-bottom-nav">
      <!-- Hero Section -->
      <div class="hero-section citizen">
        <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:20px;">
          <div>
            <p class="hero-greeting">Good Morning 🌅</p>
            <h1 class="hero-name">Murugan S.</h1>
            <p style="font-size:13px; opacity:0.8;">📍 Ottapidaram, Thoothukudi</p>
          </div>
          <div class="avatar avatar-lg" style="background:rgba(255,255,255,0.2); font-size:32px;">👨‍🌾</div>
        </div>

        <!-- Quick Action CTA -->
        <button class="btn btn-block" data-navigate="recommended-schemes" style="background:white; color:var(--citizen); font-weight:700; font-size:16px; padding:16px; border-radius:var(--radius-lg);">
          🎯 Check Eligible Schemes
          <span style="margin-left:auto; font-size:18px;">→</span>
        </button>
      </div>

      <!-- Stats Row -->
      <div style="padding:16px 20px 8px;">
        <div class="grid-3">
          <div class="stat-card" style="text-align:center;">
            <div class="stat-icon" style="background:var(--citizen-surface); margin:0 auto;">🏆</div>
            <div class="stat-value" style="color:var(--citizen); font-size:22px;">12</div>
            <div class="stat-label">Eligible</div>
          </div>
          <div class="stat-card" style="text-align:center;">
            <div class="stat-icon" style="background:#fff3e0; margin:0 auto;">📋</div>
            <div class="stat-value" style="color:var(--officer); font-size:22px;">3</div>
            <div class="stat-label">Applied</div>
          </div>
          <div class="stat-card" style="text-align:center;">
            <div class="stat-icon" style="background:var(--primary-surface); margin:0 auto;">✅</div>
            <div class="stat-value" style="color:var(--primary); font-size:22px;">2</div>
            <div class="stat-label">Approved</div>
          </div>
        </div>
      </div>

      <!-- My Applications -->
      <div class="section-header">
        <h2 class="section-title">My Applications</h2>
        <button class="section-action" data-navigate="application-tracker">View All →</button>
      </div>
      <div class="content-padding content-gap" style="padding-top:0;">
        <div class="card" style="display:flex; gap:14px; align-items:center; cursor:pointer;" data-navigate="application-tracker">
          <div style="width:44px; height:44px; border-radius:12px; background:var(--citizen-surface); display:flex; align-items:center; justify-content:center; font-size:20px;">🌾</div>
          <div style="flex:1;">
            <h4 style="font-size:14px; font-weight:600;">PM-KISAN Samman Nidhi</h4>
            <p style="font-size:12px; color:var(--text-secondary);">Applied on 28 Jan 2026</p>
          </div>
          <span class="badge badge-warning">⏳ Under Review</span>
        </div>
        <div class="card" style="display:flex; gap:14px; align-items:center; cursor:pointer;" data-navigate="application-tracker">
          <div style="width:44px; height:44px; border-radius:12px; background:#e3f2fd; display:flex; align-items:center; justify-content:center; font-size:20px;">🏠</div>
          <div style="flex:1;">
            <h4 style="font-size:14px; font-weight:600;">PMAY Housing Assistance</h4>
            <p style="font-size:12px; color:var(--text-secondary);">Applied on 15 Jan 2026</p>
          </div>
          <span class="badge badge-success">✅ Approved</span>
        </div>
        <div class="card" style="display:flex; gap:14px; align-items:center; cursor:pointer;" data-navigate="application-tracker">
          <div style="width:44px; height:44px; border-radius:12px; background:#fce4ec; display:flex; align-items:center; justify-content:center; font-size:20px;">📄</div>
          <div style="flex:1;">
            <h4 style="font-size:14px; font-weight:600;">Old Age Pension</h4>
            <p style="font-size:12px; color:var(--text-secondary);">Applied on 5 Jan 2026</p>
          </div>
          <span class="badge badge-error">📎 Docs Needed</span>
        </div>
      </div>

      <!-- Quick Links -->
      <div class="section-header">
        <h2 class="section-title">Quick Actions</h2>
      </div>
      <div class="content-padding" style="padding-top:0;">
        <div class="grid-2" style="gap:12px;">
          <div class="card" style="text-align:center; cursor:pointer; padding:16px;" data-navigate="profile-setup">
            <div style="font-size:28px; margin-bottom:8px;">👤</div>
            <p style="font-size:13px; font-weight:600;">My Profile</p>
            <p style="font-size:11px; color:var(--text-hint);">80% complete</p>
            <div class="progress-bar" style="margin-top:8px; height:4px;"><div class="progress-bar-fill" style="width:80%;"></div></div>
          </div>
          <div class="card" style="text-align:center; cursor:pointer; padding:16px;" data-navigate="document-upload">
            <div style="font-size:28px; margin-bottom:8px;">📁</div>
            <p style="font-size:13px; font-weight:600;">My Documents</p>
            <p style="font-size:11px; color:var(--text-hint);">4 of 5 uploaded</p>
            <div class="progress-bar" style="margin-top:8px; height:4px;"><div class="progress-bar-fill" style="width:80%;"></div></div>
          </div>
          <div class="card" style="text-align:center; cursor:pointer; padding:16px;" data-navigate="notifications">
            <div style="font-size:28px; margin-bottom:8px;">🔔</div>
            <p style="font-size:13px; font-weight:600;">Notifications</p>
            <p style="font-size:11px; color:var(--error); font-weight:600;">3 new</p>
          </div>
          <div class="card" style="text-align:center; cursor:pointer; padding:16px;">
            <div style="font-size:28px; margin-bottom:8px;">📍</div>
            <p style="font-size:13px; font-weight:600;">Help Centers</p>
            <p style="font-size:11px; color:var(--text-hint);">2 nearby</p>
          </div>
        </div>
      </div>

      <!-- Notifications Preview -->
      <div class="section-header">
        <h2 class="section-title">Recent Updates</h2>
        <button class="section-action" data-navigate="notifications">See All →</button>
      </div>
      <div class="content-padding content-gap" style="padding-top:0; padding-bottom:24px;">
        <div class="notification-card notification-unread">
          <div class="notification-icon" style="background:var(--citizen-surface);">🎉</div>
          <div class="notification-body">
            <h4>PMAY Application Approved!</h4>
            <p>Your housing assistance application has been approved. Benefit of ₹2,50,000 will be credited.</p>
            <span class="notification-time">2 hours ago</span>
          </div>
        </div>
        <div class="notification-card">
          <div class="notification-icon" style="background:#fff3e0;">📋</div>
          <div class="notification-body">
            <h4>New Scheme Available</h4>
            <p>You may be eligible for TN Uzhavar Pathukappu scheme. Check now!</p>
            <span class="notification-time">1 day ago</span>
          </div>
        </div>
      </div>

      <!-- Bottom Nav -->
      <nav class="bottom-nav">
        <button class="bottom-nav-item active" data-navigate="citizen-home">
          <span class="nav-icon">🏠</span>
          <span>Home</span>
        </button>
        <button class="bottom-nav-item" data-navigate="recommended-schemes">
          <span class="nav-icon">🔍</span>
          <span>Schemes</span>
        </button>
        <button class="bottom-nav-item" data-navigate="application-tracker">
          <span class="nav-icon">📋</span>
          <span>Track</span>
        </button>
        <button class="bottom-nav-item" data-navigate="notifications">
          <span class="nav-icon">🔔</span>
          <span>Alerts</span>
        </button>
        <button class="bottom-nav-item" data-navigate="profile-setup">
          <span class="nav-icon">👤</span>
          <span>Profile</span>
        </button>
      </nav>
    </div>
  `;
}
