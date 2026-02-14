export function renderNotifications() {
    return `
    <div class="screen has-bottom-nav">
      <div class="top-bar citizen">
        <button class="top-bar-back" data-navigate="citizen-home">←</button>
        <span class="top-bar-title">Notifications</span>
        <span style="font-size:12px; background:rgba(255,255,255,0.2); padding:4px 10px; border-radius:20px;">3 new</span>
      </div>

      <!-- Tabs -->
      <div class="tab-bar">
        <button class="tab-item active">All</button>
        <button class="tab-item">Schemes</button>
        <button class="tab-item">Applications</button>
        <button class="tab-item">Alerts</button>
      </div>

      <div class="content-padding" style="padding-top:12px;">
        <p style="font-size:12px; color:var(--text-hint); margin-bottom:12px; font-weight:600;">TODAY</p>

        <div class="content-gap" style="gap:10px;">
          <div class="notification-card notification-unread">
            <div class="notification-icon" style="background:var(--citizen-surface);">🎉</div>
            <div class="notification-body">
              <h4>PMAY Application Approved!</h4>
              <p>Great news! Your housing assistance application (SC-2026-TK-00389) has been approved. Benefit of ₹2,50,000 will be credited to your bank account.</p>
              <span class="notification-time">2 hours ago</span>
            </div>
          </div>

          <div class="notification-card notification-unread">
            <div class="notification-icon" style="background:#fff3e0;">📋</div>
            <div class="notification-body">
              <h4>New PM-KISAN Installment</h4>
              <p>₹2,000 13th installment under PM-KISAN will be released by 15 Feb 2026. Ensure your bank account is Aadhaar-linked.</p>
              <span class="notification-time">5 hours ago</span>
            </div>
          </div>

          <div class="notification-card notification-unread">
            <div class="notification-icon" style="background:#ffebee;">⚠️</div>
            <div class="notification-body">
              <h4>Document Missing – Old Age Pension</h4>
              <p>Your Old Age Pension application requires a Community Certificate. Please upload it within 7 days to avoid rejection.</p>
              <span class="notification-time">8 hours ago</span>
            </div>
          </div>

          <p style="font-size:12px; color:var(--text-hint); margin:8px 0; font-weight:600;">YESTERDAY</p>

          <div class="notification-card">
            <div class="notification-icon" style="background:var(--primary-surface);">🔍</div>
            <div class="notification-body">
              <h4>New Scheme Available</h4>
              <p>You may be eligible for TN Uzhavar Pathukappu Thittam – crop insurance and fertilizer subsidy for registered farmers.</p>
              <span class="notification-time">1 day ago</span>
            </div>
          </div>

          <div class="notification-card">
            <div class="notification-icon" style="background:var(--citizen-surface);">👤</div>
            <div class="notification-body">
              <h4>Profile Verification Complete</h4>
              <p>Your beneficiary profile has been verified by VAO R. Karuppasamy, Ottapidaram village. You can now apply for more schemes.</p>
              <span class="notification-time">1 day ago</span>
            </div>
          </div>

          <p style="font-size:12px; color:var(--text-hint); margin:8px 0; font-weight:600;">THIS WEEK</p>

          <div class="notification-card">
            <div class="notification-icon" style="background:#e0f2f1;">📊</div>
            <div class="notification-body">
              <h4>Scheme Eligibility Updated</h4>
              <p>Based on your updated land records, you're now eligible for 3 additional schemes. Check recommended schemes.</p>
              <span class="notification-time">3 days ago</span>
            </div>
          </div>

          <div class="notification-card">
            <div class="notification-icon" style="background:#f3e5f5;">🏥</div>
            <div class="notification-body">
              <h4>Health Camp Announcement</h4>
              <p>Free health check-up camp at Ottapidaram PHC on 20 Feb 2026. Bring your Aadhaar card and ration card.</p>
              <span class="notification-time">4 days ago</span>
            </div>
          </div>

          <div class="notification-card">
            <div class="notification-icon" style="background:#fff3e0;">🏛️</div>
            <div class="notification-body">
              <h4>Revenue Office Visit Scheduled</h4>
              <p>Field inspection for PM-KISAN verification scheduled for your area on 10 Feb 2026 by RI Thoothukudi.</p>
              <span class="notification-time">5 days ago</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Nav -->
      <nav class="bottom-nav">
        <button class="bottom-nav-item" data-navigate="citizen-home">
          <span class="nav-icon">🏠</span><span>Home</span>
        </button>
        <button class="bottom-nav-item" data-navigate="recommended-schemes">
          <span class="nav-icon">🔍</span><span>Schemes</span>
        </button>
        <button class="bottom-nav-item" data-navigate="application-tracker">
          <span class="nav-icon">📋</span><span>Track</span>
        </button>
        <button class="bottom-nav-item active" data-navigate="notifications">
          <span class="nav-icon">🔔</span><span>Alerts</span>
        </button>
        <button class="bottom-nav-item" data-navigate="profile-setup">
          <span class="nav-icon">👤</span><span>Profile</span>
        </button>
      </nav>
    </div>
  `;
}
