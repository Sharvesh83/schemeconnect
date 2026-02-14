export function renderApplicationTracker() {
    return `
    <div class="screen has-bottom-nav">
      <div class="top-bar citizen">
        <button class="top-bar-back" data-navigate="citizen-home">←</button>
        <span class="top-bar-title">Application Status</span>
      </div>

      <!-- Application Card -->
      <div class="content-padding" style="padding-top:20px;">
        <div class="card card-highlight" style="margin-bottom:20px;">
          <div style="display:flex; gap:14px; align-items:center; margin-bottom:14px;">
            <div style="width:48px; height:48px; border-radius:12px; background:var(--citizen); display:flex; align-items:center; justify-content:center; font-size:24px; color:white;">🌾</div>
            <div style="flex:1;">
              <h3 style="font-size:16px; font-weight:700;">PM-KISAN Samman Nidhi</h3>
              <p style="font-size:13px; color:var(--text-secondary);">App ID: SC-2026-TK-00472</p>
            </div>
            <span class="badge badge-warning">⏳ In Progress</span>
          </div>
          <div style="display:flex; gap:12px;">
            <div style="flex:1; text-align:center; padding:8px; background:white; border-radius:8px;">
              <p style="font-size:11px; color:var(--text-hint);">Applied On</p>
              <p style="font-size:13px; font-weight:600;">28 Jan 2026</p>
            </div>
            <div style="flex:1; text-align:center; padding:8px; background:white; border-radius:8px;">
              <p style="font-size:11px; color:var(--text-hint);">Expected By</p>
              <p style="font-size:13px; font-weight:600;">15 Mar 2026</p>
            </div>
            <div style="flex:1; text-align:center; padding:8px; background:white; border-radius:8px;">
              <p style="font-size:11px; color:var(--text-hint);">Benefit</p>
              <p style="font-size:13px; font-weight:600; color:var(--citizen);">₹6,000/yr</p>
            </div>
          </div>
        </div>

        <!-- Timeline -->
        <h3 style="font-size:16px; font-weight:700; margin-bottom:20px;">📍 Application Timeline</h3>

        <div class="timeline" style="margin-bottom:24px;">
          <div class="timeline-item">
            <div class="timeline-dot completed">✓</div>
            <div class="timeline-content">
              <h4>Application Submitted</h4>
              <p>Your application was received and registered successfully.</p>
              <span class="timeline-date">28 Jan 2026, 10:30 AM</span>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-dot completed">✓</div>
            <div class="timeline-content">
              <h4>Documents Verified</h4>
              <p>All uploaded documents have been verified by the system.</p>
              <span class="timeline-date">30 Jan 2026, 2:15 PM</span>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-dot completed">✓</div>
            <div class="timeline-content">
              <h4>VAO Verification</h4>
              <p>Village Administrative Officer R. Karuppasamy verified your details.</p>
              <span class="timeline-date">3 Feb 2026, 11:00 AM</span>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-dot current">⏳</div>
            <div class="timeline-content">
              <h4 style="color:var(--warning);">Revenue Inspector Review</h4>
              <p>Your application is being reviewed by RI Thoothukudi Division.</p>
              <span class="timeline-date">Assigned: 5 Feb 2026</span>
              <div style="background:#fff8e1; border-radius:8px; padding:8px 12px; margin-top:8px;">
                <p style="font-size:12px; color:#f57f17;">⏱️ Estimated: 5-7 working days</p>
              </div>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-dot pending">5</div>
            <div class="timeline-content">
              <h4>Tahsildar Approval</h4>
              <p style="color:var(--text-hint);">Final approval by District Tahsildar</p>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-dot pending">6</div>
            <div class="timeline-content">
              <h4>Benefit Disbursed</h4>
              <p style="color:var(--text-hint);">₹2,000 first installment via DBT to your bank</p>
            </div>
          </div>
        </div>

        <!-- Other Applications -->
        <h3 style="font-size:16px; font-weight:700; margin-bottom:12px;">Other Applications</h3>

        <div class="content-gap" style="padding-bottom:24px;">
          <div class="card" style="display:flex; gap:14px; align-items:center;">
            <div style="width:44px; height:44px; border-radius:12px; background:#e3f2fd; display:flex; align-items:center; justify-content:center; font-size:20px;">🏠</div>
            <div style="flex:1;">
              <h4 style="font-size:14px; font-weight:600;">PMAY Housing Assistance</h4>
              <p style="font-size:12px; color:var(--text-secondary);">15 Jan 2026</p>
            </div>
            <span class="badge badge-success">✅ Approved</span>
          </div>

          <div class="card" style="display:flex; gap:14px; align-items:center;">
            <div style="width:44px; height:44px; border-radius:12px; background:#fce4ec; display:flex; align-items:center; justify-content:center; font-size:20px;">👵</div>
            <div style="flex:1;">
              <h4 style="font-size:14px; font-weight:600;">Old Age Pension</h4>
              <p style="font-size:12px; color:var(--text-secondary);">5 Jan 2026</p>
            </div>
            <span class="badge badge-error">📎 Docs Needed</span>
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
        <button class="bottom-nav-item active" data-navigate="application-tracker">
          <span class="nav-icon">📋</span><span>Track</span>
        </button>
        <button class="bottom-nav-item" data-navigate="notifications">
          <span class="nav-icon">🔔</span><span>Alerts</span>
        </button>
        <button class="bottom-nav-item" data-navigate="profile-setup">
          <span class="nav-icon">👤</span><span>Profile</span>
        </button>
      </nav>
    </div>
  `;
}
