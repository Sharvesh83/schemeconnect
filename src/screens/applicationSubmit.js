export function renderApplicationSubmit() {
    return `
    <div class="screen has-bottom-nav">
      <div class="top-bar citizen">
        <button class="top-bar-back" data-navigate="scheme-details">←</button>
        <span class="top-bar-title">Submit Application</span>
      </div>

      <div class="content-padding" style="padding-top:20px;">
        <div style="background:var(--citizen-surface); border-radius:var(--radius-lg); padding:16px; display:flex; gap:14px; align-items:center; margin-bottom:20px;">
          <div style="width:48px; height:48px; border-radius:12px; background:var(--citizen); display:flex; align-items:center; justify-content:center; font-size:24px; color:white;">🌾</div>
          <div>
            <h3 style="font-size:16px; font-weight:700;">PM-KISAN Samman Nidhi</h3>
            <p style="font-size:13px; color:var(--citizen);">₹6,000/year • 95% match</p>
          </div>
        </div>

        <h3 style="font-size:16px; font-weight:700; margin-bottom:16px;">Pre-filled Application</h3>

        <div class="content-gap" style="gap:16px;">
          <!-- Personal Info -->
          <div class="card" style="padding:16px;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
              <h4 style="font-size:14px; font-weight:600; color:var(--text-secondary);">👤 Personal Information</h4>
              <span style="font-size:12px; color:var(--primary); cursor:pointer;">Edit</span>
            </div>
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:8px;">
              <div>
                <p style="font-size:11px; color:var(--text-hint);">Full Name</p>
                <p style="font-size:14px; font-weight:500;">Murugan Selvam</p>
              </div>
              <div>
                <p style="font-size:11px; color:var(--text-hint);">Aadhaar No.</p>
                <p style="font-size:14px; font-weight:500;">XXXX XXXX 4523</p>
              </div>
              <div>
                <p style="font-size:11px; color:var(--text-hint);">Mobile</p>
                <p style="font-size:14px; font-weight:500;">+91 98765 43210</p>
              </div>
              <div>
                <p style="font-size:11px; color:var(--text-hint);">Age / Gender</p>
                <p style="font-size:14px; font-weight:500;">47 / Male</p>
              </div>
            </div>
          </div>

          <!-- Address -->
          <div class="card" style="padding:16px;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
              <h4 style="font-size:14px; font-weight:600; color:var(--text-secondary);">📍 Address</h4>
              <span style="font-size:12px; color:var(--primary); cursor:pointer;">Edit</span>
            </div>
            <p style="font-size:14px; line-height:1.5;">2/45, Mela Theru, Ottapidaram Village,<br>Thoothukudi District, Tamil Nadu - 628401</p>
          </div>

          <!-- Land Details -->
          <div class="card" style="padding:16px;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
              <h4 style="font-size:14px; font-weight:600; color:var(--text-secondary);">🌾 Land Details</h4>
              <span style="font-size:12px; color:var(--primary); cursor:pointer;">Edit</span>
            </div>
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:8px;">
              <div>
                <p style="font-size:11px; color:var(--text-hint);">Survey No.</p>
                <p style="font-size:14px; font-weight:500;">142/3A</p>
              </div>
              <div>
                <p style="font-size:11px; color:var(--text-hint);">Area</p>
                <p style="font-size:14px; font-weight:500;">2.5 Acres</p>
              </div>
              <div>
                <p style="font-size:11px; color:var(--text-hint);">Patta No.</p>
                <p style="font-size:14px; font-weight:500;">TN-TK-OTP-00348</p>
              </div>
              <div>
                <p style="font-size:11px; color:var(--text-hint);">Type</p>
                <p style="font-size:14px; font-weight:500;">Agricultural</p>
              </div>
            </div>
          </div>

          <!-- Bank Details -->
          <div class="card" style="padding:16px;">
            <h4 style="font-size:14px; font-weight:600; color:var(--text-secondary); margin-bottom:10px;">🏦 Bank Account (DBT)</h4>
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:8px;">
              <div>
                <p style="font-size:11px; color:var(--text-hint);">Bank</p>
                <p style="font-size:14px; font-weight:500;">Indian Bank</p>
              </div>
              <div>
                <p style="font-size:11px; color:var(--text-hint);">Account No.</p>
                <p style="font-size:14px; font-weight:500;">XXXXX 7891</p>
              </div>
              <div>
                <p style="font-size:11px; color:var(--text-hint);">IFSC</p>
                <p style="font-size:14px; font-weight:500;">IDIB000O458</p>
              </div>
              <div>
                <p style="font-size:11px; color:var(--text-hint);">Branch</p>
                <p style="font-size:14px; font-weight:500;">Ottapidaram</p>
              </div>
            </div>
          </div>

          <!-- Attached Documents -->
          <div class="card" style="padding:16px;">
            <h4 style="font-size:14px; font-weight:600; color:var(--text-secondary); margin-bottom:10px;">📎 Attached Documents</h4>
            <div style="display:flex; flex-direction:column; gap:8px;">
              <div style="display:flex; align-items:center; gap:10px; padding:6px 0;">
                <span style="font-size:16px;">✅</span>
                <span style="font-size:14px; flex:1;">Aadhaar Card</span>
                <span style="font-size:12px; color:var(--text-hint);">1.2 MB</span>
              </div>
              <div style="display:flex; align-items:center; gap:10px; padding:6px 0;">
                <span style="font-size:16px;">✅</span>
                <span style="font-size:14px; flex:1;">Land Patta</span>
                <span style="font-size:12px; color:var(--text-hint);">2.1 MB</span>
              </div>
              <div style="display:flex; align-items:center; gap:10px; padding:6px 0;">
                <span style="font-size:16px;">✅</span>
                <span style="font-size:14px; flex:1;">Income Certificate</span>
                <span style="font-size:12px; color:var(--text-hint);">842 KB</span>
              </div>
              <div style="display:flex; align-items:center; gap:10px; padding:6px 0;">
                <span style="font-size:16px;">✅</span>
                <span style="font-size:14px; flex:1;">Bank Passbook</span>
                <span style="font-size:12px; color:var(--text-hint);">654 KB</span>
              </div>
            </div>
          </div>

          <!-- Declaration -->
          <div style="background:#fff8e1; border-radius:var(--radius-md); padding:14px 16px; border: 1px solid #ffe082;">
            <div class="checkbox-row">
              <div class="checkbox checked">✓</div>
              <p style="font-size:13px; color:var(--text); line-height:1.5;">
                I hereby declare that all the information provided is true and correct. I understand that providing false information may result in rejection and legal action under IPC Section 420.
              </p>
            </div>
          </div>

          <button class="btn btn-primary btn-block btn-lg" data-navigate="application-tracker">
            ✅ Submit Application
          </button>

          <p style="text-align:center; font-size:12px; color:var(--text-hint); padding-bottom:16px;">
            By submitting, you agree to the terms and conditions of the scheme
          </p>
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
