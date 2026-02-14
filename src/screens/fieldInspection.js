export function renderFieldInspection() {
    return `
    <div class="screen has-bottom-nav">
      <div class="top-bar officer">
        <button class="top-bar-back" data-navigate="officer-home">←</button>
        <span class="top-bar-title">Field Inspection</span>
        <span style="font-size:12px; background:rgba(255,255,255,0.2); padding:4px 10px; border-radius:20px;">Live</span>
      </div>

      <!-- Geo Tag Section -->
      <div style="background:linear-gradient(135deg, #263238 0%, #37474f 100%); color:white; padding:20px;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:14px;">
          <div>
            <p style="font-size:12px; opacity:0.7;">📍 Current Location</p>
            <h3 style="font-size:16px; font-weight:700;">Ottapidaram Village</h3>
            <p style="font-size:12px; opacity:0.8;">8.7832° N, 78.0470° E</p>
          </div>
          <div style="width:56px; height:56px; border-radius:50%; background:var(--citizen); display:flex; align-items:center; justify-content:center; font-size:24px; box-shadow:0 0 0 4px rgba(46,125,50,0.3);">
            📍
          </div>
        </div>
        <div style="display:flex; gap:8px;">
          <span style="padding:4px 10px; background:rgba(76,175,80,0.2); border-radius:20px; font-size:11px; color:#81c784;">✅ GPS Active</span>
          <span style="padding:4px 10px; background:rgba(255,193,7,0.2); border-radius:20px; font-size:11px; color:#ffd54f;">📶 Network OK</span>
          <span style="padding:4px 10px; background:rgba(255,255,255,0.1); border-radius:20px; font-size:11px;">🕐 10:32 AM</span>
        </div>
      </div>

      <div class="content-padding content-gap" style="padding-top:16px;">
        <!-- Visit Details -->
        <div class="card card-officer">
          <div style="display:flex; gap:14px; align-items:center; margin-bottom:14px;">
            <div class="avatar" style="background:var(--officer);">R</div>
            <div style="flex:1;">
              <h4 style="font-size:15px; font-weight:600;">Rajammal K.</h4>
              <p style="font-size:13px; color:var(--text-secondary);">PM-KISAN • SC-2026-TK-00465</p>
            </div>
            <span class="badge badge-warning">Visit 1</span>
          </div>
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:8px;">
            <div>
              <p style="font-size:11px; color:var(--text-hint);">Survey No.</p>
              <p style="font-size:14px; font-weight:500;">87/2B</p>
            </div>
            <div>
              <p style="font-size:11px; color:var(--text-hint);">Land Area</p>
              <p style="font-size:14px; font-weight:500;">1.8 Acres</p>
            </div>
          </div>
        </div>

        <!-- Photo Capture -->
        <div class="card">
          <h4 style="font-size:15px; font-weight:700; margin-bottom:12px;">📷 Photo Evidence</h4>
          <div class="grid-2" style="gap:10px;">
            <div style="height:120px; background:linear-gradient(135deg, #e8f5e9, #c8e6c9); border-radius:12px; display:flex; align-items:center; justify-content:center; flex-direction:column; gap:4px; border:2px solid var(--citizen);">
              <span style="font-size:28px;">🌾</span>
              <span style="font-size:11px; color:var(--citizen); font-weight:600;">Land Photo ✓</span>
            </div>
            <div style="height:120px; background:linear-gradient(135deg, #e3f2fd, #bbdefb); border-radius:12px; display:flex; align-items:center; justify-content:center; flex-direction:column; gap:4px; border:2px solid var(--primary);">
              <span style="font-size:28px;">🏠</span>
              <span style="font-size:11px; color:var(--primary); font-weight:600;">House Photo ✓</span>
            </div>
            <div style="height:120px; background:var(--bg); border-radius:12px; display:flex; align-items:center; justify-content:center; flex-direction:column; gap:4px; border:2px dashed var(--border); cursor:pointer;">
              <span style="font-size:28px;">📄</span>
              <span style="font-size:11px; color:var(--text-hint);">Doc Photo</span>
            </div>
            <div style="height:120px; background:var(--bg); border-radius:12px; display:flex; align-items:center; justify-content:center; flex-direction:column; gap:4px; border:2px dashed var(--border); cursor:pointer;">
              <span style="font-size:28px;">➕</span>
              <span style="font-size:11px; color:var(--text-hint);">Add More</span>
            </div>
          </div>
        </div>

        <!-- Visit Status -->
        <div class="card">
          <h4 style="font-size:15px; font-weight:700; margin-bottom:12px;">📋 Inspection Checklist</h4>
          <div style="display:flex; flex-direction:column; gap:10px;">
            <div class="checkbox-row">
              <div class="checkbox checked">✓</div>
              <span style="font-size:14px;">Land ownership verified on-site</span>
            </div>
            <div class="checkbox-row">
              <div class="checkbox checked">✓</div>
              <span style="font-size:14px;">Applicant identity confirmed</span>
            </div>
            <div class="checkbox-row">
              <div class="checkbox checked">✓</div>
              <span style="font-size:14px;">Cultivation activity observed</span>
            </div>
            <div class="checkbox-row">
              <div class="checkbox"></div>
              <span style="font-size:14px;">Neighbor verification completed</span>
            </div>
            <div class="checkbox-row">
              <div class="checkbox"></div>
              <span style="font-size:14px;">GPS coordinates captured</span>
            </div>
          </div>
        </div>

        <!-- Field Notes -->
        <div class="card">
          <h4 style="font-size:15px; font-weight:700; margin-bottom:12px;">📝 Field Notes</h4>
          <textarea class="field-notes" placeholder="Enter observations...">Visited Rajammal's agricultural land at Survey No. 87/2B. Land is actively cultivated with paddy crop. Borewell irrigation present. Boundary walls intact.</textarea>
        </div>

        <!-- Action -->
        <div style="display:flex; gap:10px; padding-bottom:24px;">
          <button class="btn btn-officer btn-block btn-lg" data-navigate="officer-home">
            ✅ Complete Visit
          </button>
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
        <button class="bottom-nav-item active" data-navigate="field-inspection">
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
