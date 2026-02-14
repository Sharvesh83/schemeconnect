export function renderVerification() {
    return `
    <div class="screen has-bottom-nav">
      <div class="top-bar officer">
        <button class="top-bar-back" data-navigate="applications-queue">←</button>
        <span class="top-bar-title">Verify Application</span>
      </div>

      <!-- Applicant Summary -->
      <div style="background:var(--officer-surface); padding:20px;">
        <div style="display:flex; gap:14px; align-items:center; margin-bottom:14px;">
          <div class="avatar avatar-lg" style="background:var(--officer);">M</div>
          <div style="flex:1;">
            <h3 style="font-size:18px; font-weight:700;">Murugan Selvam</h3>
            <p style="font-size:13px; color:var(--text-secondary);">📍 Ottapidaram Village, Thoothukudi</p>
            <p style="font-size:12px; color:var(--text-hint);">Aadhaar: XXXX XXXX 4523 • Age: 47</p>
          </div>
        </div>
        <div style="display:flex; gap:8px;">
          <span class="badge badge-info">🌾 PM-KISAN</span>
          <span class="badge badge-warning">⏳ Pending 17 days</span>
          <span class="priority-tag priority-high">Overdue</span>
        </div>
      </div>

      <div class="content-padding content-gap" style="padding-top:16px;">
        <!-- Application Summary -->
        <div class="card">
          <h4 style="font-size:15px; font-weight:700; margin-bottom:12px;">📋 Application Summary</h4>
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px;">
            <div>
              <p style="font-size:11px; color:var(--text-hint);">Scheme</p>
              <p style="font-size:14px; font-weight:500;">PM-KISAN Samman Nidhi</p>
            </div>
            <div>
              <p style="font-size:11px; color:var(--text-hint);">App ID</p>
              <p style="font-size:14px; font-weight:500;">SC-2026-TK-00472</p>
            </div>
            <div>
              <p style="font-size:11px; color:var(--text-hint);">Land Area</p>
              <p style="font-size:14px; font-weight:500;">2.5 Acres</p>
            </div>
            <div>
              <p style="font-size:11px; color:var(--text-hint);">Annual Income</p>
              <p style="font-size:14px; font-weight:500;">₹1,80,000</p>
            </div>
            <div>
              <p style="font-size:11px; color:var(--text-hint);">Family Members</p>
              <p style="font-size:14px; font-weight:500;">4</p>
            </div>
            <div>
              <p style="font-size:11px; color:var(--text-hint);">Benefit Amount</p>
              <p style="font-size:14px; font-weight:600; color:var(--citizen);">₹6,000/year</p>
            </div>
          </div>
        </div>

        <!-- Document Preview -->
        <div class="card">
          <h4 style="font-size:15px; font-weight:700; margin-bottom:12px;">📁 Document Verification</h4>
          <div style="display:flex; gap:10px; overflow-x:auto; padding-bottom:8px;">
            <div style="min-width:130px;">
              <div class="doc-preview" style="height:100px; font-size:28px; margin-bottom:6px;">🆔</div>
              <p style="font-size:12px; font-weight:500; text-align:center;">Aadhaar Card</p>
              <p style="font-size:11px; color:var(--citizen); text-align:center;">✓ Verified</p>
            </div>
            <div style="min-width:130px;">
              <div class="doc-preview" style="height:100px; font-size:28px; margin-bottom:6px;">🏡</div>
              <p style="font-size:12px; font-weight:500; text-align:center;">Land Patta</p>
              <p style="font-size:11px; color:var(--warning); text-align:center;">⏳ Pending</p>
            </div>
            <div style="min-width:130px;">
              <div class="doc-preview" style="height:100px; font-size:28px; margin-bottom:6px;">💰</div>
              <p style="font-size:12px; font-weight:500; text-align:center;">Income Cert</p>
              <p style="font-size:11px; color:var(--citizen); text-align:center;">✓ Verified</p>
            </div>
            <div style="min-width:130px;">
              <div class="doc-preview" style="height:100px; font-size:28px; margin-bottom:6px;">🏦</div>
              <p style="font-size:12px; font-weight:500; text-align:center;">Bank Proof</p>
              <p style="font-size:11px; color:var(--citizen); text-align:center;">✓ Verified</p>
            </div>
          </div>
        </div>

        <!-- Eligibility Check -->
        <div class="card">
          <h4 style="font-size:15px; font-weight:700; margin-bottom:12px;">✅ Eligibility Check</h4>
          <div style="display:flex; flex-direction:column; gap:8px;">
            <div style="display:flex; align-items:center; gap:10px;">
              <span style="color:var(--citizen);">✅</span>
              <span style="font-size:14px;">Small/marginal farmer (2.5 acres < 5 acres)</span>
            </div>
            <div style="display:flex; align-items:center; gap:10px;">
              <span style="color:var(--citizen);">✅</span>
              <span style="font-size:14px;">Income below ₹2,00,000/year</span>
            </div>
            <div style="display:flex; align-items:center; gap:10px;">
              <span style="color:var(--citizen);">✅</span>
              <span style="font-size:14px;">Valid Aadhaar linked to bank</span>
            </div>
            <div style="display:flex; align-items:center; gap:10px;">
              <span style="color:var(--citizen);">✅</span>
              <span style="font-size:14px;">Owns cultivable agricultural land</span>
            </div>
          </div>
          <div style="background:var(--citizen-surface); border-radius:8px; padding:10px 14px; margin-top:12px;">
            <p style="font-size:13px; color:var(--citizen); font-weight:600;">Score: 95% — All criteria met</p>
          </div>
        </div>

        <!-- Field Notes -->
        <div class="card">
          <h4 style="font-size:15px; font-weight:700; margin-bottom:12px;">📝 Officer Notes</h4>
          <textarea class="field-notes" placeholder="Add your verification notes here...">Land records verified with taluk office. Patta number matches records. Farmer actively cultivating paddy and groundnut. Family resides at the registered address. Recommend approval.</textarea>
        </div>

        <!-- Action Buttons -->
        <div style="display:flex; flex-direction:column; gap:10px; padding-bottom:24px;">
          <button class="btn btn-primary btn-block btn-lg" style="background:var(--citizen);" data-navigate="applications-queue">
            ✅ Approve Application
          </button>
          <div style="display:flex; gap:10px;">
            <button class="btn btn-outline btn-block" style="border-color:var(--warning); color:var(--warning);" data-navigate="applications-queue">
              📎 Request Docs
            </button>
            <button class="btn btn-danger btn-block" data-navigate="applications-queue">
              ❌ Reject
            </button>
          </div>
        </div>
      </div>

      <!-- Bottom Nav -->
      <nav class="bottom-nav">
        <button class="bottom-nav-item" data-navigate="officer-home">
          <span class="nav-icon">🏠</span><span>Home</span>
        </button>
        <button class="bottom-nav-item active" data-navigate="applications-queue">
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
