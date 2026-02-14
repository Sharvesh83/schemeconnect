export function renderRoleSelection() {
    return `
    <div class="screen" style="background:var(--bg);">
      <div style="background: linear-gradient(135deg, #0d47a1 0%, #1a237e 100%); padding: 40px 24px 32px; color:white; text-align:center;">
        <div style="width:64px; height:64px; margin:0 auto 12px; border-radius:50%; background:rgba(255,255,255,0.12); display:flex; align-items:center; justify-content:center; font-size:28px;">🏛️</div>
        <h1 style="font-size:22px; font-weight:800; margin-bottom:4px;">SchemeConnect</h1>
        <p style="font-size:13px; opacity:0.8;">Select your role to continue</p>
      </div>

      <div class="content-padding content-gap" style="padding-top:24px;">
        <div class="role-card" data-role="citizen" data-navigate="login" style="border-color: #c8e6c9;">
          <div class="role-card-icon" style="background:var(--citizen-surface); color:var(--citizen);">👤</div>
          <div class="role-card-body">
            <h3>Citizen <span style="font-weight:400; font-size:13px; color:var(--text-hint);">/ குடிமகன்</span></h3>
            <p>Find schemes, apply & track benefits</p>
          </div>
          <span style="color:var(--text-hint); font-size:20px;">›</span>
        </div>

        <div class="role-card" data-role="officer" data-navigate="login" style="border-color: #ffccbc;">
          <div class="role-card-icon" style="background:var(--officer-surface); color:var(--officer);">🛡️</div>
          <div class="role-card-body">
            <h3>Revenue Officer <span style="font-weight:400; font-size:13px; color:var(--text-hint);">/ அதிகாரி</span></h3>
            <p>Verify, inspect & approve applications</p>
          </div>
          <span style="color:var(--text-hint); font-size:20px;">›</span>
        </div>

        <div class="role-card" data-role="admin" data-navigate="login" style="border-color: #b2dfdb;">
          <div class="role-card-icon" style="background:var(--admin-surface); color:var(--admin);">⚙️</div>
          <div class="role-card-body">
            <h3>Admin</h3>
            <p>Manage schemes & monitor system</p>
          </div>
          <span style="color:var(--text-hint); font-size:20px;">›</span>
        </div>
      </div>

      <div style="padding:24px; text-align:center;">
        <div class="lang-toggle">
          <button class="lang-btn active">English</button>
          <button class="lang-btn">தமிழ்</button>
          <button class="lang-btn">हिंदी</button>
        </div>
        <p style="font-size:11px; color:var(--text-hint); margin-top:16px;">Powered by Digital India 🇮🇳</p>
      </div>
    </div>
  `;
}
