export function renderOfficerAnalytics() {
    return `
    <div class="screen has-bottom-nav">
      <div class="top-bar officer">
        <button class="top-bar-back" data-navigate="officer-home">←</button>
        <span class="top-bar-title">Analytics Dashboard</span>
      </div>

      <!-- Today's Summary -->
      <div style="background:linear-gradient(135deg, var(--officer) 0%, var(--officer-dark) 100%); padding:20px; color:white;">
        <p style="font-size:13px; opacity:0.8; margin-bottom:8px;">📊 Today's Performance — 14 Feb 2026</p>
        <div style="display:flex; gap:10px;">
          <div style="flex:1; background:rgba(255,255,255,0.15); border-radius:12px; padding:14px; text-align:center;">
            <div style="font-size:28px; font-weight:800;">8</div>
            <div style="font-size:11px; opacity:0.85;">Processed</div>
          </div>
          <div style="flex:1; background:rgba(255,255,255,0.15); border-radius:12px; padding:14px; text-align:center;">
            <div style="font-size:28px; font-weight:800;">6</div>
            <div style="font-size:11px; opacity:0.85;">Approved</div>
          </div>
          <div style="flex:1; background:rgba(255,255,255,0.15); border-radius:12px; padding:14px; text-align:center;">
            <div style="font-size:28px; font-weight:800;">1</div>
            <div style="font-size:11px; opacity:0.85;">Rejected</div>
          </div>
          <div style="flex:1; background:rgba(255,255,255,0.15); border-radius:12px; padding:14px; text-align:center;">
            <div style="font-size:28px; font-weight:800;">1</div>
            <div style="font-size:11px; opacity:0.85;">Pending</div>
          </div>
        </div>
      </div>

      <div class="content-padding content-gap" style="padding-top:16px;">
        <!-- Approval Rate -->
        <div class="card">
          <h4 style="font-size:15px; font-weight:700; margin-bottom:16px;">📈 Approval Rate — This Month</h4>
          <div style="display:flex; align-items:center; gap:20px;">
            <div class="donut-chart" style="background: conic-gradient(var(--citizen) 0deg 320deg, var(--error) 320deg 338deg, var(--warning) 338deg 360deg);">
              <span class="donut-chart-label" style="color:var(--citizen);">89%</span>
            </div>
            <div style="flex:1; display:flex; flex-direction:column; gap:8px;">
              <div style="display:flex; align-items:center; gap:8px;">
                <div style="width:10px; height:10px; border-radius:50%; background:var(--citizen);"></div>
                <span style="font-size:13px; flex:1;">Approved</span>
                <span style="font-size:13px; font-weight:700;">142</span>
              </div>
              <div style="display:flex; align-items:center; gap:8px;">
                <div style="width:10px; height:10px; border-radius:50%; background:var(--error);"></div>
                <span style="font-size:13px; flex:1;">Rejected</span>
                <span style="font-size:13px; font-weight:700;">12</span>
              </div>
              <div style="display:flex; align-items:center; gap:8px;">
                <div style="width:10px; height:10px; border-radius:50%; background:var(--warning);"></div>
                <span style="font-size:13px; flex:1;">Pending Docs</span>
                <span style="font-size:13px; font-weight:700;">6</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Weekly Bar Chart -->
        <div class="card">
          <h4 style="font-size:15px; font-weight:700; margin-bottom:8px;">📊 Weekly Applications Processed</h4>
          <div class="bar-chart">
            <div class="bar-chart-item">
              <div class="bar-chart-value">12</div>
              <div class="bar-chart-bar" style="height:48%; background:var(--officer);"></div>
              <div class="bar-chart-label">Mon</div>
            </div>
            <div class="bar-chart-item">
              <div class="bar-chart-value">18</div>
              <div class="bar-chart-bar" style="height:72%; background:var(--officer);"></div>
              <div class="bar-chart-label">Tue</div>
            </div>
            <div class="bar-chart-item">
              <div class="bar-chart-value">9</div>
              <div class="bar-chart-bar" style="height:36%; background:var(--officer);"></div>
              <div class="bar-chart-label">Wed</div>
            </div>
            <div class="bar-chart-item">
              <div class="bar-chart-value">22</div>
              <div class="bar-chart-bar" style="height:88%; background:var(--officer-dark);"></div>
              <div class="bar-chart-label">Thu</div>
            </div>
            <div class="bar-chart-item">
              <div class="bar-chart-value">15</div>
              <div class="bar-chart-bar" style="height:60%; background:var(--officer);"></div>
              <div class="bar-chart-label">Fri</div>
            </div>
            <div class="bar-chart-item">
              <div class="bar-chart-value">8</div>
              <div class="bar-chart-bar" style="height:32%; background:var(--officer-light);"></div>
              <div class="bar-chart-label">Sat</div>
            </div>
            <div class="bar-chart-item">
              <div class="bar-chart-value">—</div>
              <div class="bar-chart-bar" style="height:4%; background:var(--divider);"></div>
              <div class="bar-chart-label">Sun</div>
            </div>
          </div>
        </div>

        <!-- Scheme-wise Breakdown -->
        <div class="card">
          <h4 style="font-size:15px; font-weight:700; margin-bottom:12px;">🏷️ Scheme-wise Breakdown</h4>
          <div style="display:flex; flex-direction:column; gap:12px;">
            <div>
              <div style="display:flex; justify-content:space-between; margin-bottom:4px;">
                <span style="font-size:13px; font-weight:500;">PM-KISAN</span>
                <span style="font-size:13px; font-weight:700;">48</span>
              </div>
              <div class="progress-bar" style="height:6px;"><div class="progress-bar-fill" style="width:60%; background:#4caf50;"></div></div>
            </div>
            <div>
              <div style="display:flex; justify-content:space-between; margin-bottom:4px;">
                <span style="font-size:13px; font-weight:500;">PMAY Housing</span>
                <span style="font-size:13px; font-weight:700;">35</span>
              </div>
              <div class="progress-bar" style="height:6px;"><div class="progress-bar-fill" style="width:44%; background:#2196f3;"></div></div>
            </div>
            <div>
              <div style="display:flex; justify-content:space-between; margin-bottom:4px;">
                <span style="font-size:13px; font-weight:500;">Old Age Pension</span>
                <span style="font-size:13px; font-weight:700;">28</span>
              </div>
              <div class="progress-bar" style="height:6px;"><div class="progress-bar-fill" style="width:35%; background:#ff9800;"></div></div>
            </div>
            <div>
              <div style="display:flex; justify-content:space-between; margin-bottom:4px;">
                <span style="font-size:13px; font-weight:500;">Mahalir Thittam</span>
                <span style="font-size:13px; font-weight:700;">22</span>
              </div>
              <div class="progress-bar" style="height:6px;"><div class="progress-bar-fill" style="width:28%; background:#e91e63;"></div></div>
            </div>
            <div>
              <div style="display:flex; justify-content:space-between; margin-bottom:4px;">
                <span style="font-size:13px; font-weight:500;">Others</span>
                <span style="font-size:13px; font-weight:700;">27</span>
              </div>
              <div class="progress-bar" style="height:6px;"><div class="progress-bar-fill" style="width:34%; background:#9e9e9e;"></div></div>
            </div>
          </div>
        </div>

        <!-- Village Performance -->
        <div class="card" style="margin-bottom:24px;">
          <h4 style="font-size:15px; font-weight:700; margin-bottom:12px;">🏘️ Village Performance</h4>
          <div style="display:flex; flex-direction:column; gap:8px;">
            <div style="display:flex; align-items:center; gap:10px; padding:8px 0; border-bottom:1px solid var(--divider);">
              <span style="font-size:14px; width:20px; text-align:center; font-weight:700; color:var(--officer);">1</span>
              <span style="flex:1; font-size:14px; font-weight:500;">Ottapidaram</span>
              <span style="font-size:14px; font-weight:700; color:var(--citizen);">92%</span>
              <span style="font-size:18px;">🏆</span>
            </div>
            <div style="display:flex; align-items:center; gap:10px; padding:8px 0; border-bottom:1px solid var(--divider);">
              <span style="font-size:14px; width:20px; text-align:center; font-weight:700; color:var(--officer);">2</span>
              <span style="flex:1; font-size:14px; font-weight:500;">Keelakarai</span>
              <span style="font-size:14px; font-weight:700;">78%</span>
            </div>
            <div style="display:flex; align-items:center; gap:10px; padding:8px 0; border-bottom:1px solid var(--divider);">
              <span style="font-size:14px; width:20px; text-align:center; font-weight:700; color:var(--officer);">3</span>
              <span style="flex:1; font-size:14px; font-weight:500;">Pudur</span>
              <span style="font-size:14px; font-weight:700;">64%</span>
            </div>
            <div style="display:flex; align-items:center; gap:10px; padding:8px 0;">
              <span style="font-size:14px; width:20px; text-align:center; font-weight:700; color:var(--error);">4</span>
              <span style="flex:1; font-size:14px; font-weight:500;">Vilathikulam</span>
              <span style="font-size:14px; font-weight:700; color:var(--error);">41%</span>
              <span style="font-size:11px; color:var(--error);">⚠️</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Nav -->
      <nav class="bottom-nav">
        <button class="bottom-nav-item" data-navigate="officer-home">
          <span class="nav-icon">🏠</span><span>Home</span>
        </button>
        <button class="bottom-nav-item" data-navigate="applications-queue">
          <span class="nav-icon">📋</span><span>Queue</span>
        </button>
        <button class="bottom-nav-item" data-navigate="field-inspection">
          <span class="nav-icon">📍</span><span>Field</span>
        </button>
        <button class="bottom-nav-item" data-navigate="village-map">
          <span class="nav-icon">🗺️</span><span>Map</span>
        </button>
        <button class="bottom-nav-item active" data-navigate="officer-analytics">
          <span class="nav-icon">📊</span><span>Stats</span>
        </button>
      </nav>
    </div>
  `;
}
