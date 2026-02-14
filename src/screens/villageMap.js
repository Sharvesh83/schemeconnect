export function renderVillageMap() {
    return `
    <div class="screen has-bottom-nav">
      <div class="top-bar officer">
        <button class="top-bar-back" data-navigate="officer-home">←</button>
        <span class="top-bar-title">Village Coverage Map</span>
      </div>

      <!-- Map -->
      <div style="padding:16px 20px 8px;">
        <div class="map-container">
          <!-- Simulated village dots -->
          <div class="map-dot covered" style="top:25%; left:20%;"></div>
          <div class="map-dot covered" style="top:18%; left:35%;"></div>
          <div class="map-dot covered" style="top:40%; left:15%;"></div>
          <div class="map-dot covered" style="top:55%; left:28%;"></div>
          <div class="map-dot covered" style="top:30%; left:50%;"></div>
          <div class="map-dot covered" style="top:45%; left:45%;"></div>
          <div class="map-dot covered" style="top:65%; left:40%;"></div>
          <div class="map-dot covered" style="top:35%; left:70%;"></div>
          <div class="map-dot covered" style="top:50%; left:65%;"></div>
          <div class="map-dot partial" style="top:22%; left:60%;"></div>
          <div class="map-dot partial" style="top:60%; left:55%;"></div>
          <div class="map-dot partial" style="top:75%; left:25%;"></div>
          <div class="map-dot partial" style="top:20%; left:78%;"></div>
          <div class="map-dot uncovered" style="top:70%; left:70%;"></div>
          <div class="map-dot uncovered" style="top:80%; left:50%;"></div>
          <div class="map-dot uncovered" style="top:42%; left:82%;"></div>
          <div class="map-dot uncovered" style="top:85%; left:75%;"></div>

          <!-- Village Labels -->
          <div style="position:absolute; top:12%; left:24%; font-size:10px; font-weight:600; color:var(--citizen-dark); background:rgba(255,255,255,0.85); padding:2px 6px; border-radius:4px;">Ottapidaram</div>
          <div style="position:absolute; top:48%; left:50%; font-size:10px; font-weight:600; color:var(--citizen-dark); background:rgba(255,255,255,0.85); padding:2px 6px; border-radius:4px;">Keelakarai</div>
          <div style="position:absolute; top:62%; left:15%; font-size:10px; font-weight:600; color:#f57f17; background:rgba(255,255,255,0.85); padding:2px 6px; border-radius:4px;">Pudur</div>
          <div style="position:absolute; top:76%; left:60%; font-size:10px; font-weight:600; color:var(--error); background:rgba(255,255,255,0.85); padding:2px 6px; border-radius:4px;">Vilathikulam</div>
        </div>
        <div class="map-legend" style="margin-top:10px;">
          <div class="map-legend-item"><div class="map-legend-dot" style="background:var(--citizen);"></div>Covered</div>
          <div class="map-legend-item"><div class="map-legend-dot" style="background:var(--warning);"></div>Partial</div>
          <div class="map-legend-item"><div class="map-legend-dot" style="background:var(--error);"></div>Uncovered</div>
        </div>
      </div>

      <!-- Coverage Stats -->
      <div class="section-header">
        <h2 class="section-title">Coverage by Village</h2>
      </div>
      <div class="content-padding content-gap" style="padding-top:0;">
        <div class="card" style="padding:14px 16px;">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
            <div>
              <h4 style="font-size:14px; font-weight:600;">Ottapidaram</h4>
              <p style="font-size:12px; color:var(--text-hint);">847 households</p>
            </div>
            <span style="font-size:16px; font-weight:800; color:var(--citizen);">92%</span>
          </div>
          <div class="progress-bar" style="height:6px;"><div class="progress-bar-fill" style="width:92%; background:var(--citizen);"></div></div>
          <div style="display:flex; gap:12px; margin-top:6px;">
            <span style="font-size:11px; color:var(--text-hint);">✅ 779 covered</span>
            <span style="font-size:11px; color:var(--text-hint);">❌ 68 remaining</span>
          </div>
        </div>

        <div class="card" style="padding:14px 16px;">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
            <div>
              <h4 style="font-size:14px; font-weight:600;">Keelakarai</h4>
              <p style="font-size:12px; color:var(--text-hint);">623 households</p>
            </div>
            <span style="font-size:16px; font-weight:800; color:var(--citizen);">78%</span>
          </div>
          <div class="progress-bar" style="height:6px;"><div class="progress-bar-fill" style="width:78%; background:var(--citizen);"></div></div>
          <div style="display:flex; gap:12px; margin-top:6px;">
            <span style="font-size:11px; color:var(--text-hint);">✅ 486 covered</span>
            <span style="font-size:11px; color:var(--text-hint);">❌ 137 remaining</span>
          </div>
        </div>

        <div class="card" style="padding:14px 16px;">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
            <div>
              <h4 style="font-size:14px; font-weight:600;">Pudur</h4>
              <p style="font-size:12px; color:var(--text-hint);">412 households</p>
            </div>
            <span style="font-size:16px; font-weight:800; color:#f57f17;">64%</span>
          </div>
          <div class="progress-bar" style="height:6px;"><div class="progress-bar-fill" style="width:64%; background:var(--warning);"></div></div>
          <div style="display:flex; gap:12px; margin-top:6px;">
            <span style="font-size:11px; color:var(--text-hint);">✅ 264 covered</span>
            <span style="font-size:11px; color:var(--text-hint);">❌ 148 remaining</span>
          </div>
        </div>

        <div class="card" style="padding:14px 16px;">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
            <div>
              <h4 style="font-size:14px; font-weight:600;">Vilathikulam</h4>
              <p style="font-size:12px; color:var(--text-hint);">965 households</p>
            </div>
            <span style="font-size:16px; font-weight:800; color:var(--error);">41%</span>
          </div>
          <div class="progress-bar" style="height:6px;"><div class="progress-bar-fill" style="width:41%; background:var(--error);"></div></div>
          <div style="display:flex; gap:12px; margin-top:6px;">
            <span style="font-size:11px; color:var(--text-hint);">✅ 396 covered</span>
            <span style="font-size:11px; color:var(--error); font-weight:600;">❌ 569 remaining</span>
          </div>
        </div>
      </div>

      <!-- Summary -->
      <div class="content-padding" style="padding-bottom:24px;">
        <div class="card" style="background:var(--officer-surface); border:1px solid #ffcc80;">
          <div style="display:flex; justify-content:space-around; text-align:center;">
            <div>
              <p style="font-size:22px; font-weight:800; color:var(--officer);">2,847</p>
              <p style="font-size:11px; color:var(--text-secondary);">Total Households</p>
            </div>
            <div>
              <p style="font-size:22px; font-weight:800; color:var(--citizen);">1,925</p>
              <p style="font-size:11px; color:var(--text-secondary);">Beneficiaries</p>
            </div>
            <div>
              <p style="font-size:22px; font-weight:800; color:var(--error);">922</p>
              <p style="font-size:11px; color:var(--text-secondary);">Uncovered</p>
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
        <button class="bottom-nav-item active" data-navigate="village-map">
          <span class="nav-icon">🗺️</span><span>Map</span>
        </button>
        <button class="bottom-nav-item" data-navigate="officer-analytics">
          <span class="nav-icon">📊</span><span>Stats</span>
        </button>
      </nav>
    </div>
  `;
}
