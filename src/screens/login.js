import { currentRole } from '../main.js';

export function renderLogin() {
    const isCitizen = currentRole === 'citizen';
    const homeRoute = currentRole === 'citizen' ? 'citizen-home' : currentRole === 'officer' ? 'officer-home' : 'system-overview';

    if (isCitizen) {
        return `
      <div class="screen" style="background:white;">
        <div class="top-bar" style="background:var(--citizen);">
          <button class="top-bar-back" data-navigate="role-selection">←</button>
          <span class="top-bar-title">Citizen Login</span>
        </div>

        <div style="padding:32px 24px; text-align:center;">
          <div style="width:80px; height:80px; margin:0 auto 16px; border-radius:50%; background:var(--citizen-surface); display:flex; align-items:center; justify-content:center; font-size:36px;">👤</div>
          <h2 style="font-size:22px; font-weight:700; margin-bottom:4px;">Welcome Back!</h2>
          <p style="font-size:14px; color:var(--text-secondary);">Login to access your schemes</p>
        </div>

        <div class="content-padding content-gap" style="gap:20px;">
          <div class="input-group">
            <label class="input-label">Mobile Number / மொபைல் எண்</label>
            <div style="display:flex; gap:8px;">
              <div style="padding:14px 12px; background:var(--bg); border-radius:var(--radius-md); font-weight:600; color:var(--text-secondary); border:2px solid var(--border);">+91</div>
              <input class="input-field" placeholder="Enter 10-digit mobile number" value="98765 43210" style="flex:1;" />
            </div>
          </div>

          <button class="btn btn-primary btn-block btn-lg" data-navigate="${homeRoute}">
            📱 Send OTP
          </button>

          <div class="divider-or">OR</div>

          <button class="btn btn-outline btn-block" data-navigate="${homeRoute}" style="border-color:var(--primary); color:var(--primary);">
            🆔 Login with Aadhaar
          </button>

          <div style="background:var(--primary-surface); border-radius:var(--radius-md); padding:14px 16px; display:flex; gap:10px; align-items:center;">
            <span style="font-size:20px;">🔒</span>
            <p style="font-size:12px; color:var(--primary); line-height:1.4;">Your data is secured with end-to-end encryption and follows DPDP Act 2023 guidelines.</p>
          </div>
        </div>

        <div style="padding:24px; text-align:center;">
          <div class="lang-toggle">
            <button class="lang-btn active">English</button>
            <button class="lang-btn">தமிழ்</button>
            <button class="lang-btn">हिंदी</button>
          </div>
        </div>
      </div>
    `;
    }

    // Officer / Admin login
    const roleLabel = currentRole === 'officer' ? 'Revenue Officer' : 'Admin';
    const roleIcon = currentRole === 'officer' ? '🛡️' : '⚙️';
    const barClass = currentRole === 'officer' ? 'officer' : 'admin';

    return `
    <div class="screen" style="background:white;">
      <div class="top-bar ${barClass}">
        <button class="top-bar-back" data-navigate="role-selection">←</button>
        <span class="top-bar-title">${roleLabel} Login</span>
      </div>

      <div style="padding:32px 24px; text-align:center;">
        <div style="width:80px; height:80px; margin:0 auto 16px; border-radius:50%; background:${currentRole === 'officer' ? 'var(--officer-surface)' : 'var(--admin-surface)'}; display:flex; align-items:center; justify-content:center; font-size:36px;">${roleIcon}</div>
        <h2 style="font-size:22px; font-weight:700; margin-bottom:4px;">${roleLabel} Portal</h2>
        <p style="font-size:14px; color:var(--text-secondary);">Secure government access</p>
      </div>

      <div class="content-padding content-gap" style="gap:20px;">
        <div class="input-group">
          <label class="input-label">Employee ID / அரசு ஊழியர் எண்</label>
          <input class="input-field" placeholder="Enter Employee ID" value="TN-RO-2024-0847" />
        </div>

        <div class="input-group">
          <label class="input-label">Password / கடவுச்சொல்</label>
          <input class="input-field" type="password" placeholder="Enter password" value="••••••••" />
        </div>

        <button class="btn ${currentRole === 'officer' ? 'btn-officer' : 'btn-admin'} btn-block btn-lg" data-navigate="${homeRoute}">
          🔐 Login to Dashboard
        </button>

        <p style="text-align:center; font-size:13px; color:var(--primary); cursor:pointer;">Forgot Password?</p>

        <div style="background:${currentRole === 'officer' ? 'var(--officer-surface)' : 'var(--admin-surface)'}; border-radius:var(--radius-md); padding:14px 16px; display:flex; gap:10px; align-items:center;">
          <span style="font-size:20px;">🏛️</span>
          <p style="font-size:12px; color:var(--text-secondary); line-height:1.4;">Authorized access only. All activities are monitored and logged as per IT Act 2000.</p>
        </div>
      </div>

      <div style="padding:24px; text-align:center;">
        <div class="lang-toggle">
          <button class="lang-btn active">English</button>
          <button class="lang-btn">தமிழ்</button>
        </div>
      </div>
    </div>
  `;
}
