export function renderSystemOverview() {
    return `
    <div class="screen">
      <div class="top-bar admin">
        <button class="top-bar-back" data-navigate="role-selection">←</button>
        <span class="top-bar-title">System Overview</span>
        <button class="top-bar-action">⚙️</button>
      </div>

      <!-- Admin Hero -->
      <div style="background:linear-gradient(135deg, var(--admin) 0%, var(--admin-dark) 100%); padding:20px; color:white;">
        <div style="display:flex; align-items:center; gap:14px; margin-bottom:16px;">
          <div class="avatar avatar-lg" style="background:rgba(255,255,255,0.15); font-size:28px;">⚙️</div>
          <div>
            <p style="font-size:13px; opacity:0.8;">Admin Dashboard</p>
            <h2 style="font-size:20px; font-weight:800;">Thoothukudi District</h2>
          </div>
        </div>
        <div style="display:flex; gap:8px;">
          <div style="flex:1; background:rgba(255,255,255,0.12); border-radius:12px; padding:14px; text-align:center;">
            <div style="font-size:26px; font-weight:800;">12,847</div>
            <div style="font-size:11px; opacity:0.85;">Beneficiaries</div>
          </div>
          <div style="flex:1; background:rgba(255,255,255,0.12); border-radius:12px; padding:14px; text-align:center;">
            <div style="font-size:26px; font-weight:800;">8</div>
            <div style="font-size:11px; opacity:0.85;">Active Schemes</div>
          </div>
          <div style="flex:1; background:rgba(255,255,255,0.12); border-radius:12px; padding:14px; text-align:center;">
            <div style="font-size:26px; font-weight:800;">156</div>
            <div style="font-size:11px; opacity:0.85;">Pending</div>
          </div>
        </div>
      </div>

      <div class="content-padding content-gap" style="padding-top:16px;">
        <!-- Quick Actions -->
        <div class="grid-2" style="gap:12px;">
          <div class="card" style="text-align:center; cursor:pointer; padding:16px;" data-navigate="scheme-management">
            <div style="font-size:28px; margin-bottom:6px;">📝</div>
            <p style="font-size:13px; font-weight:600;">Manage Schemes</p>
            <p style="font-size:11px; color:var(--admin);">8 active</p>
          </div>
          <div class="card" style="text-align:center; cursor:pointer; padding:16px;">
            <div style="font-size:28px; margin-bottom:6px;">👥</div>
            <p style="font-size:13px; font-weight:600;">Officers</p>
            <p style="font-size:11px; color:var(--text-hint);">24 active</p>
          </div>
          <div class="card" style="text-align:center; cursor:pointer; padding:16px;">
            <div style="font-size:28px; margin-bottom:6px;">📊</div>
            <p style="font-size:13px; font-weight:600;">Reports</p>
            <p style="font-size:11px; color:var(--text-hint);">Download</p>
          </div>
          <div class="card" style="text-align:center; cursor:pointer; padding:16px;">
            <div style="font-size:28px; margin-bottom:6px;">🔔</div>
            <p style="font-size:13px; font-weight:600;">Alerts</p>
            <p style="font-size:11px; color:var(--error); font-weight:600;">5 critical</p>
          </div>
        </div>

        <!-- Disbursement Summary -->
        <div class="card">
          <h4 style="font-size:15px; font-weight:700; margin-bottom:14px;">💰 Fund Disbursement — FY 2025-26</h4>
          <div style="display:flex; justify-content:space-between; margin-bottom:12px;">
            <div>
              <p style="font-size:11px; color:var(--text-hint);">Total Allocated</p>
              <p style="font-size:20px; font-weight:800; color:var(--admin);">₹48.5 Cr</p>
            </div>
            <div style="text-align:right;">
              <p style="font-size:11px; color:var(--text-hint);">Disbursed</p>
              <p style="font-size:20px; font-weight:800; color:var(--citizen);">₹32.1 Cr</p>
            </div>
          </div>
          <div class="progress-bar" style="height:10px;">
            <div class="progress-bar-fill" style="width:66%; background:var(--admin);"></div>
          </div>
          <div style="display:flex; justify-content:space-between; margin-top:6px;">
            <span style="font-size:12px; color:var(--citizen);">66% utilized</span>
            <span style="font-size:12px; color:var(--text-hint);">₹16.4 Cr remaining</span>
          </div>
        </div>

        <!-- Scheme-wise Stats -->
        <div class="card">
          <h4 style="font-size:15px; font-weight:700; margin-bottom:14px;">📋 Scheme-wise Statistics</h4>
          <div style="display:flex; flex-direction:column; gap:12px;">
            <div style="display:flex; align-items:center; gap:12px; padding:10px; background:var(--bg); border-radius:10px;">
              <div style="width:40px; height:40px; border-radius:10px; background:var(--citizen-surface); display:flex; align-items:center; justify-content:center; font-size:18px;">🌾</div>
              <div style="flex:1;">
                <h4 style="font-size:14px; font-weight:600;">PM-KISAN</h4>
                <p style="font-size:11px; color:var(--text-hint);">2,450 beneficiaries</p>
              </div>
              <div style="text-align:right;">
                <p style="font-size:14px; font-weight:700; color:var(--citizen);">₹14.7 Cr</p>
                <p style="font-size:11px; color:var(--text-hint);">disbursed</p>
              </div>
            </div>

            <div style="display:flex; align-items:center; gap:12px; padding:10px; background:var(--bg); border-radius:10px;">
              <div style="width:40px; height:40px; border-radius:10px; background:#e3f2fd; display:flex; align-items:center; justify-content:center; font-size:18px;">🏠</div>
              <div style="flex:1;">
                <h4 style="font-size:14px; font-weight:600;">PMAY Housing</h4>
                <p style="font-size:11px; color:var(--text-hint);">890 beneficiaries</p>
              </div>
              <div style="text-align:right;">
                <p style="font-size:14px; font-weight:700; color:var(--primary);">₹8.9 Cr</p>
                <p style="font-size:11px; color:var(--text-hint);">disbursed</p>
              </div>
            </div>

            <div style="display:flex; align-items:center; gap:12px; padding:10px; background:var(--bg); border-radius:10px;">
              <div style="width:40px; height:40px; border-radius:10px; background:#fff3e0; display:flex; align-items:center; justify-content:center; font-size:18px;">👵</div>
              <div style="flex:1;">
                <h4 style="font-size:14px; font-weight:600;">Old Age Pension</h4>
                <p style="font-size:11px; color:var(--text-hint);">1,230 beneficiaries</p>
              </div>
              <div style="text-align:right;">
                <p style="font-size:14px; font-weight:700; color:var(--officer);">₹5.2 Cr</p>
                <p style="font-size:11px; color:var(--text-hint);">disbursed</p>
              </div>
            </div>

            <div style="display:flex; align-items:center; gap:12px; padding:10px; background:var(--bg); border-radius:10px;">
              <div style="width:40px; height:40px; border-radius:10px; background:#fce4ec; display:flex; align-items:center; justify-content:center; font-size:18px;">👩</div>
              <div style="flex:1;">
                <h4 style="font-size:14px; font-weight:600;">Mahalir Thittam</h4>
                <p style="font-size:11px; color:var(--text-hint);">567 beneficiaries</p>
              </div>
              <div style="text-align:right;">
                <p style="font-size:14px; font-weight:700; color:#e91e63;">₹3.3 Cr</p>
                <p style="font-size:11px; color:var(--text-hint);">disbursed</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Pending Approvals -->
        <div class="card">
          <h4 style="font-size:15px; font-weight:700; margin-bottom:14px;">⏳ Pending Approvals by Stage</h4>
          <div style="display:flex; flex-direction:column; gap:10px;">
            <div style="display:flex; align-items:center; gap:8px;">
              <span style="font-size:14px; width:120px;">VAO Level</span>
              <div class="progress-bar" style="flex:1; height:8px;">
                <div class="progress-bar-fill" style="width:35%; background:var(--citizen);"></div>
              </div>
              <span style="font-size:14px; font-weight:700; width:30px; text-align:right;">54</span>
            </div>
            <div style="display:flex; align-items:center; gap:8px;">
              <span style="font-size:14px; width:120px;">RI Level</span>
              <div class="progress-bar" style="flex:1; height:8px;">
                <div class="progress-bar-fill" style="width:26%; background:var(--officer);"></div>
              </div>
              <span style="font-size:14px; font-weight:700; width:30px; text-align:right;">41</span>
            </div>
            <div style="display:flex; align-items:center; gap:8px;">
              <span style="font-size:14px; width:120px;">Tahsildar</span>
              <div class="progress-bar" style="flex:1; height:8px;">
                <div class="progress-bar-fill" style="width:20%; background:var(--warning);"></div>
              </div>
              <span style="font-size:14px; font-weight:700; width:30px; text-align:right;">32</span>
            </div>
            <div style="display:flex; align-items:center; gap:8px;">
              <span style="font-size:14px; width:120px;">Collector</span>
              <div class="progress-bar" style="flex:1; height:8px;">
                <div class="progress-bar-fill" style="width:19%; background:var(--error);"></div>
              </div>
              <span style="font-size:14px; font-weight:700; width:30px; text-align:right;">29</span>
            </div>
          </div>
        </div>

        <!-- System Health -->
        <div class="card" style="background:var(--admin-surface); border:1px solid #80cbc4; margin-bottom:24px;">
          <h4 style="font-size:15px; font-weight:700; margin-bottom:10px;">🖥️ System Health</h4>
          <div class="grid-2" style="gap:10px;">
            <div style="display:flex; align-items:center; gap:6px;">
              <span style="color:var(--citizen);">🟢</span>
              <span style="font-size:13px;">API Gateway</span>
            </div>
            <div style="display:flex; align-items:center; gap:6px;">
              <span style="color:var(--citizen);">🟢</span>
              <span style="font-size:13px;">Database</span>
            </div>
            <div style="display:flex; align-items:center; gap:6px;">
              <span style="color:var(--citizen);">🟢</span>
              <span style="font-size:13px;">Aadhaar Auth</span>
            </div>
            <div style="display:flex; align-items:center; gap:6px;">
              <span style="color:var(--warning);">🟡</span>
              <span style="font-size:13px;">SMS Gateway</span>
            </div>
          </div>
          <p style="font-size:11px; color:var(--text-hint); margin-top:10px;">Last sync: 2 mins ago • Uptime: 99.7%</p>
        </div>
      </div>
    </div>
  `;
}
