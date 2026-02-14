export function renderSchemeManagement() {
    return `
    <div class="screen">
      <div class="top-bar admin">
        <button class="top-bar-back" data-navigate="system-overview">←</button>
        <span class="top-bar-title">Scheme Management</span>
        <button class="top-bar-action">➕</button>
      </div>

      <!-- Existing Schemes List -->
      <div class="section-header">
        <h2 class="section-title">Active Schemes (8)</h2>
        <button class="section-action" style="color:var(--admin);">+ Add New</button>
      </div>
      <div style="padding:0 20px 12px;">
        <div style="display:flex; flex-direction:column; gap:10px;">
          <div class="card" style="padding:14px 16px; border-left:4px solid var(--citizen);">
            <div style="display:flex; justify-content:space-between; align-items:start;">
              <div>
                <h4 style="font-size:14px; font-weight:600;">PM-KISAN Samman Nidhi</h4>
                <p style="font-size:12px; color:var(--text-secondary);">🌾 Agriculture • Central Govt</p>
              </div>
              <span class="badge badge-success">Active</span>
            </div>
            <div style="display:flex; gap:16px; margin-top:8px;">
              <span style="font-size:11px; color:var(--text-hint);">👥 2,450 beneficiaries</span>
              <span style="font-size:11px; color:var(--text-hint);">💰 ₹6,000/yr</span>
            </div>
          </div>
          <div class="card" style="padding:14px 16px; border-left:4px solid #2196f3;">
            <div style="display:flex; justify-content:space-between; align-items:start;">
              <div>
                <h4 style="font-size:14px; font-weight:600;">PMAY – Gramin Housing</h4>
                <p style="font-size:12px; color:var(--text-secondary);">🏠 Housing • Central Govt</p>
              </div>
              <span class="badge badge-success">Active</span>
            </div>
            <div style="display:flex; gap:16px; margin-top:8px;">
              <span style="font-size:11px; color:var(--text-hint);">👥 890 beneficiaries</span>
              <span style="font-size:11px; color:var(--text-hint);">💰 ₹2,50,000</span>
            </div>
          </div>
          <div class="card" style="padding:14px 16px; border-left:4px solid #ff9800;">
            <div style="display:flex; justify-content:space-between; align-items:start;">
              <div>
                <h4 style="font-size:14px; font-weight:600;">TN Old Age Pension</h4>
                <p style="font-size:12px; color:var(--text-secondary);">👵 Pension • State Govt</p>
              </div>
              <span class="badge badge-success">Active</span>
            </div>
            <div style="display:flex; gap:16px; margin-top:8px;">
              <span style="font-size:11px; color:var(--text-hint);">👥 1,230 beneficiaries</span>
              <span style="font-size:11px; color:var(--text-hint);">💰 ₹1,000/mo</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Add Scheme Form -->
      <div class="section-header">
        <h2 class="section-title">Add New Scheme</h2>
      </div>
      <div class="content-padding content-gap" style="padding-top:0; gap:16px;">
        <div class="card" style="padding:20px;">
          <div class="content-gap" style="gap:16px;">
            <div class="input-group">
              <label class="input-label">Scheme Name *</label>
              <input class="input-field" placeholder="Enter scheme name" value="TN Farmers' Drought Relief Fund" />
            </div>

            <div class="input-group">
              <label class="input-label">Category</label>
              <div style="display:flex; gap:8px; flex-wrap:wrap;">
                <span class="chip active">🌾 Agriculture</span>
                <span class="chip">🏠 Housing</span>
                <span class="chip">👵 Pension</span>
                <span class="chip">👩 Women</span>
                <span class="chip">📚 Education</span>
                <span class="chip">🏥 Health</span>
              </div>
            </div>

            <div class="input-group">
              <label class="input-label">Benefit Amount (₹)</label>
              <input class="input-field" placeholder="Amount" value="₹10,000 per affected farmer" />
            </div>

            <div class="input-group">
              <label class="input-label">Government Level</label>
              <div style="display:flex; gap:8px;">
                <span class="chip">Central</span>
                <span class="chip active">State</span>
                <span class="chip">District</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Eligibility Rules -->
        <div class="card" style="padding:20px;">
          <h4 style="font-size:15px; font-weight:700; margin-bottom:14px;">📋 Eligibility Rules</h4>
          <div class="content-gap" style="gap:14px;">
            <div class="input-group">
              <label class="input-label">Max Annual Income</label>
              <input class="input-field" value="₹2,00,000" />
            </div>
            <div class="input-group">
              <label class="input-label">Min Land Holding (Acres)</label>
              <input class="input-field" value="0.5" />
            </div>
            <div class="input-group">
              <label class="input-label">Max Land Holding (Acres)</label>
              <input class="input-field" value="5.0" />
            </div>
            <div class="input-group">
              <label class="input-label">Eligible Categories</label>
              <div style="display:flex; gap:8px; flex-wrap:wrap;">
                <span class="chip active">SC/ST</span>
                <span class="chip active">OBC</span>
                <span class="chip active">General</span>
                <span class="chip">Women Only</span>
                <span class="chip active">BPL</span>
              </div>
            </div>
            <div class="input-group">
              <label class="input-label">Age Range</label>
              <div style="display:flex; gap:8px;">
                <input class="input-field" value="18" style="width:80px;" />
                <span style="padding:14px 0; color:var(--text-hint);">to</span>
                <input class="input-field" value="65" style="width:80px;" />
                <span style="padding:14px 0; font-size:13px; color:var(--text-hint);">years</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Required Documents -->
        <div class="card" style="padding:20px;">
          <h4 style="font-size:15px; font-weight:700; margin-bottom:14px;">📁 Required Documents</h4>
          <div style="display:flex; flex-direction:column; gap:8px;">
            <div class="checkbox-row">
              <div class="checkbox checked">✓</div>
              <span style="font-size:14px;">Aadhaar Card</span>
            </div>
            <div class="checkbox-row">
              <div class="checkbox checked">✓</div>
              <span style="font-size:14px;">Income Certificate</span>
            </div>
            <div class="checkbox-row">
              <div class="checkbox checked">✓</div>
              <span style="font-size:14px;">Land Ownership Proof</span>
            </div>
            <div class="checkbox-row">
              <div class="checkbox checked">✓</div>
              <span style="font-size:14px;">Crop Damage Assessment Report</span>
            </div>
            <div class="checkbox-row">
              <div class="checkbox"></div>
              <span style="font-size:14px;">Community Certificate</span>
            </div>
            <div class="checkbox-row">
              <div class="checkbox"></div>
              <span style="font-size:14px;">Bank Passbook</span>
            </div>
          </div>
        </div>

        <button class="btn btn-admin btn-block btn-lg" data-navigate="system-overview">
          ✅ Create Scheme
        </button>
        <p style="text-align:center; font-size:12px; color:var(--text-hint); padding-bottom:24px;">Scheme will be reviewed by the District Collector before activation</p>
      </div>
    </div>
  `;
}
