export function renderSchemeDetails() {
    return `
    <div class="screen has-bottom-nav">
      <div class="top-bar citizen">
        <button class="top-bar-back" data-navigate="recommended-schemes">←</button>
        <span class="top-bar-title">Scheme Details</span>
        <button class="top-bar-action">⤴️</button>
      </div>

      <!-- Scheme Header -->
      <div style="background:linear-gradient(135deg, var(--citizen-surface) 0%, #ffffff 100%); padding:20px;">
        <div style="display:flex; gap:6px; margin-bottom:10px;">
          <span class="badge badge-success">🌾 Agriculture</span>
          <span class="badge badge-info">Central Govt</span>
        </div>
        <h2 style="font-size:20px; font-weight:800; line-height:1.3; margin-bottom:6px;">PM-KISAN Samman Nidhi Yojana</h2>
        <p style="font-size:13px; color:var(--text-secondary);">பிரதம மந்திரி கிசான் யோஜனா</p>

        <div style="display:flex; gap:12px; margin-top:16px;">
          <div style="flex:1; background:white; border-radius:12px; padding:12px; text-align:center; box-shadow:var(--shadow-sm);">
            <div style="font-size:22px; font-weight:800; color:var(--citizen);">₹6,000</div>
            <div style="font-size:11px; color:var(--text-secondary);">Per Year</div>
          </div>
          <div style="flex:1; background:white; border-radius:12px; padding:12px; text-align:center; box-shadow:var(--shadow-sm);">
            <div style="font-size:22px; font-weight:800; color:var(--citizen);">95%</div>
            <div style="font-size:11px; color:var(--text-secondary);">Your Match</div>
          </div>
          <div style="flex:1; background:white; border-radius:12px; padding:12px; text-align:center; box-shadow:var(--shadow-sm);">
            <div style="font-size:22px; font-weight:800; color:var(--primary);">3</div>
            <div style="font-size:11px; color:var(--text-secondary);">Installments</div>
          </div>
        </div>
      </div>

      <div class="content-padding content-gap" style="padding-top:16px;">
        <!-- Benefits -->
        <div class="card">
          <h3 style="font-size:16px; font-weight:700; margin-bottom:12px;">💰 Benefits</h3>
          <div style="display:flex; flex-direction:column; gap:10px;">
            <div style="display:flex; gap:10px; align-items:flex-start;">
              <span style="color:var(--citizen); font-size:16px;">✓</span>
              <p style="font-size:14px; line-height:1.4;">₹6,000 per year deposited directly to bank account in 3 installments of ₹2,000 each</p>
            </div>
            <div style="display:flex; gap:10px; align-items:flex-start;">
              <span style="color:var(--citizen); font-size:16px;">✓</span>
              <p style="font-size:14px; line-height:1.4;">No intermediaries — Direct Benefit Transfer (DBT)</p>
            </div>
            <div style="display:flex; gap:10px; align-items:flex-start;">
              <span style="color:var(--citizen); font-size:16px;">✓</span>
              <p style="font-size:14px; line-height:1.4;">Life insurance cover under PMJJBY at ₹12/year premium</p>
            </div>
          </div>
        </div>

        <!-- Eligibility -->
        <div class="card">
          <h3 style="font-size:16px; font-weight:700; margin-bottom:12px;">📋 Eligibility Criteria</h3>
          <div style="display:flex; flex-direction:column; gap:10px;">
            <div style="display:flex; gap:10px; align-items:center;">
              <span class="badge badge-success" style="width:24px; height:24px; display:flex; align-items:center; justify-content:center; padding:0; border-radius:50%; font-size:11px;">✓</span>
              <p style="font-size:14px;">Small/marginal farmer with land up to 2 hectares</p>
            </div>
            <div style="display:flex; gap:10px; align-items:center;">
              <span class="badge badge-success" style="width:24px; height:24px; display:flex; align-items:center; justify-content:center; padding:0; border-radius:50%; font-size:11px;">✓</span>
              <p style="font-size:14px;">Annual family income below ₹2,00,000</p>
            </div>
            <div style="display:flex; gap:10px; align-items:center;">
              <span class="badge badge-success" style="width:24px; height:24px; display:flex; align-items:center; justify-content:center; padding:0; border-radius:50%; font-size:11px;">✓</span>
              <p style="font-size:14px;">Valid Aadhaar card linked to bank account</p>
            </div>
            <div style="display:flex; gap:10px; align-items:center;">
              <span class="badge badge-success" style="width:24px; height:24px; display:flex; align-items:center; justify-content:center; padding:0; border-radius:50%; font-size:11px;">✓</span>
              <p style="font-size:14px;">Owns cultivable land in rural India</p>
            </div>
          </div>
          <div style="background:var(--citizen-surface); border-radius:8px; padding:10px 14px; margin-top:12px;">
            <p style="font-size:13px; color:var(--citizen); font-weight:600;">✅ You meet all eligibility criteria!</p>
          </div>
        </div>

        <!-- Required Documents -->
        <div class="card">
          <h3 style="font-size:16px; font-weight:700; margin-bottom:12px;">📁 Required Documents</h3>
          <div style="display:flex; flex-direction:column; gap:8px;">
            <div style="display:flex; justify-content:space-between; align-items:center; padding:6px 0;">
              <span style="font-size:14px;">Aadhaar Card</span>
              <span class="badge badge-success">Uploaded ✓</span>
            </div>
            <div style="height:1px; background:var(--divider);"></div>
            <div style="display:flex; justify-content:space-between; align-items:center; padding:6px 0;">
              <span style="font-size:14px;">Land Ownership Proof</span>
              <span class="badge badge-success">Uploaded ✓</span>
            </div>
            <div style="height:1px; background:var(--divider);"></div>
            <div style="display:flex; justify-content:space-between; align-items:center; padding:6px 0;">
              <span style="font-size:14px;">Bank Passbook</span>
              <span class="badge badge-success">Uploaded ✓</span>
            </div>
            <div style="height:1px; background:var(--divider);"></div>
            <div style="display:flex; justify-content:space-between; align-items:center; padding:6px 0;">
              <span style="font-size:14px;">Income Certificate</span>
              <span class="badge badge-success">Uploaded ✓</span>
            </div>
          </div>
        </div>

        <button class="btn btn-primary btn-block btn-lg" data-navigate="application-submit">
          📝 Apply for This Scheme
        </button>

        <p style="text-align:center; font-size:12px; color:var(--text-hint); padding-bottom:12px;">Application will be reviewed by your local VAO within 15 days</p>
      </div>

      <!-- Bottom Nav -->
      <nav class="bottom-nav">
        <button class="bottom-nav-item" data-navigate="citizen-home">
          <span class="nav-icon">🏠</span><span>Home</span>
        </button>
        <button class="bottom-nav-item active" data-navigate="recommended-schemes">
          <span class="nav-icon">🔍</span><span>Schemes</span>
        </button>
        <button class="bottom-nav-item" data-navigate="application-tracker">
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
