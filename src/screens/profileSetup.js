export function renderProfileSetup() {
    return `
    <div class="screen has-bottom-nav">
      <div class="top-bar citizen">
        <button class="top-bar-back" data-navigate="citizen-home">←</button>
        <span class="top-bar-title">Beneficiary Profile</span>
        <span style="font-size:13px; opacity:0.8;">80%</span>
      </div>

      <!-- Step Progress -->
      <div style="background:white; padding:20px 0 16px;">
        <div class="step-progress">
          <div class="step-progress-item completed">
            <div class="step-dot">✓</div>
            <span class="step-label">Personal</span>
          </div>
          <div class="step-progress-item completed">
            <div class="step-dot">✓</div>
            <span class="step-label">Family</span>
          </div>
          <div class="step-progress-item completed">
            <div class="step-dot">✓</div>
            <span class="step-label">Income</span>
          </div>
          <div class="step-progress-item active">
            <div class="step-dot">4</div>
            <span class="step-label">Land</span>
          </div>
          <div class="step-progress-item">
            <div class="step-dot">5</div>
            <span class="step-label">Work</span>
          </div>
        </div>
        <div class="progress-bar" style="margin:16px 20px 0;">
          <div class="progress-bar-fill" style="width:80%;"></div>
        </div>
      </div>

      <!-- Current Step: Land Details -->
      <div class="content-padding" style="padding-top:20px;">
        <h3 style="font-size:18px; font-weight:700; margin-bottom:4px;">Land & Property Details</h3>
        <p style="font-size:13px; color:var(--text-secondary); margin-bottom:20px;">நில விவரங்கள் – Step 4 of 5</p>

        <div class="content-gap" style="gap:18px;">
          <div class="input-group">
            <label class="input-label">Land Ownership / நில உரிமை</label>
            <div style="display:flex; gap:8px; flex-wrap:wrap;">
              <span class="chip active">🏡 Own Land</span>
              <span class="chip">🏘️ Leased</span>
              <span class="chip">❌ No Land</span>
            </div>
          </div>

          <div class="input-group">
            <label class="input-label">Total Land Area (Acres)</label>
            <input class="input-field" value="2.5" />
          </div>

          <div class="input-group">
            <label class="input-label">Survey Number / சர்வே எண்</label>
            <input class="input-field" value="142/3A, Ottapidaram Village" />
          </div>

          <div class="input-group">
            <label class="input-label">Land Type / நில வகை</label>
            <div style="display:flex; gap:8px; flex-wrap:wrap;">
              <span class="chip active">🌾 Agricultural</span>
              <span class="chip">🏗️ Residential</span>
              <span class="chip">🏪 Commercial</span>
            </div>
          </div>

          <div class="input-group">
            <label class="input-label">Irrigation Source</label>
            <div style="display:flex; gap:8px; flex-wrap:wrap;">
              <span class="chip active">💧 Borewell</span>
              <span class="chip">🌊 Canal</span>
              <span class="chip">🌧️ Rain-fed</span>
            </div>
          </div>

          <div class="input-group">
            <label class="input-label">Patta Number</label>
            <input class="input-field" value="TN-TK-OTP-2019-00348" />
          </div>
        </div>
      </div>

      <!-- Summary of completed steps -->
      <div class="section-header" style="margin-top:8px;">
        <h3 class="section-title" style="font-size:15px;">Completed Sections</h3>
      </div>
      <div class="content-padding content-gap" style="padding-top:0;">
        <div class="card" style="padding:14px 16px; display:flex; align-items:center; gap:12px;">
          <span class="badge badge-success" style="font-size:14px;">✓</span>
          <div style="flex:1;">
            <h4 style="font-size:14px;">Personal Details</h4>
            <p style="font-size:12px; color:var(--text-hint);">Murugan S. • Male • DOB: 15/06/1978</p>
          </div>
        </div>
        <div class="card" style="padding:14px 16px; display:flex; align-items:center; gap:12px;">
          <span class="badge badge-success" style="font-size:14px;">✓</span>
          <div style="flex:1;">
            <h4 style="font-size:14px;">Family Details</h4>
            <p style="font-size:12px; color:var(--text-hint);">4 members • BPL • Ration Card: TNPDS-348271</p>
          </div>
        </div>
        <div class="card" style="padding:14px 16px; display:flex; align-items:center; gap:12px;">
          <span class="badge badge-success" style="font-size:14px;">✓</span>
          <div style="flex:1;">
            <h4 style="font-size:14px;">Income Details</h4>
            <p style="font-size:12px; color:var(--text-hint);">Annual: ₹1,80,000 • Below poverty line</p>
          </div>
        </div>
      </div>

      <!-- Action Buttons -->
      <div class="content-padding" style="padding-bottom:24px; display:flex; gap:12px;">
        <button class="btn btn-outline" style="flex:1;">← Previous</button>
        <button class="btn btn-primary" style="flex:2;" data-navigate="document-upload">Save & Next →</button>
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
        <button class="bottom-nav-item" data-navigate="notifications">
          <span class="nav-icon">🔔</span><span>Alerts</span>
        </button>
        <button class="bottom-nav-item active" data-navigate="profile-setup">
          <span class="nav-icon">👤</span><span>Profile</span>
        </button>
      </nav>
    </div>
  `;
}
