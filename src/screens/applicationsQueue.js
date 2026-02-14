export function renderApplicationsQueue() {
    return `
    <div class="screen has-bottom-nav">
      <div class="top-bar officer">
        <button class="top-bar-back" data-navigate="officer-home">←</button>
        <span class="top-bar-title">Applications Queue</span>
        <span style="font-size:12px; background:rgba(255,255,255,0.2); padding:4px 10px; border-radius:20px;">14</span>
      </div>

      <!-- Filter Tabs -->
      <div class="tab-bar">
        <button class="tab-item active" style="--citizen:var(--officer);">All (14)</button>
        <button class="tab-item">Urgent (3)</button>
        <button class="tab-item">New (5)</button>
        <button class="tab-item">Review (6)</button>
      </div>

      <!-- Sort Bar -->
      <div style="padding:10px 20px; display:flex; justify-content:space-between; align-items:center; background:white; border-bottom:1px solid var(--divider);">
        <span style="font-size:12px; color:var(--text-secondary);">Sorted by: <strong>Priority</strong></span>
        <span style="font-size:12px; color:var(--officer); font-weight:600; cursor:pointer;">🔽 Filter</span>
      </div>

      <div style="padding:0;">
        <!-- Urgent Applications -->
        <div class="list-item" style="border-left:4px solid var(--error);" data-navigate="verification">
          <div class="avatar" style="background:var(--error);">M</div>
          <div style="flex:1;">
            <div style="display:flex; justify-content:space-between; align-items:start;">
              <h4 style="font-size:14px; font-weight:600;">Murugan S.</h4>
              <span class="priority-tag priority-high">Overdue</span>
            </div>
            <p style="font-size:12px; color:var(--text-secondary);">📍 Ottapidaram • PM-KISAN</p>
            <p style="font-size:11px; color:var(--text-hint);">Applied: 28 Jan • 17 days ago</p>
          </div>
        </div>

        <div class="list-item" style="border-left:4px solid var(--error);" data-navigate="verification">
          <div class="avatar" style="background:#c62828;">K</div>
          <div style="flex:1;">
            <div style="display:flex; justify-content:space-between; align-items:start;">
              <h4 style="font-size:14px; font-weight:600;">Kannan R.</h4>
              <span class="priority-tag priority-high">Overdue</span>
            </div>
            <p style="font-size:12px; color:var(--text-secondary);">📍 Kayathar • Old Age Pension</p>
            <p style="font-size:11px; color:var(--text-hint);">Applied: 25 Jan • 20 days ago</p>
          </div>
        </div>

        <div class="list-item" style="border-left:4px solid var(--error);" data-navigate="verification">
          <div class="avatar" style="background:#d32f2f;">A</div>
          <div style="flex:1;">
            <div style="display:flex; justify-content:space-between; align-items:start;">
              <h4 style="font-size:14px; font-weight:600;">Amudha P.</h4>
              <span class="priority-tag priority-high">Urgent</span>
            </div>
            <p style="font-size:12px; color:var(--text-secondary);">📍 Vilathikulam • Mahalir Thittam</p>
            <p style="font-size:11px; color:var(--text-hint);">Applied: 30 Jan • 15 days ago</p>
          </div>
        </div>

        <!-- Medium Priority -->
        <div class="list-item" style="border-left:4px solid var(--warning);" data-navigate="verification">
          <div class="avatar" style="background:#f57f17;">S</div>
          <div style="flex:1;">
            <div style="display:flex; justify-content:space-between; align-items:start;">
              <h4 style="font-size:14px; font-weight:600;">Selvam P.</h4>
              <span class="priority-tag priority-medium">Medium</span>
            </div>
            <p style="font-size:12px; color:var(--text-secondary);">📍 Ottapidaram • PMAY Housing</p>
            <p style="font-size:11px; color:var(--text-hint);">Applied: 2 Feb • 12 days ago</p>
          </div>
        </div>

        <div class="list-item" style="border-left:4px solid var(--warning);" data-navigate="verification">
          <div class="avatar" style="background:#ff8f00;">L</div>
          <div style="flex:1;">
            <div style="display:flex; justify-content:space-between; align-items:start;">
              <h4 style="font-size:14px; font-weight:600;">Lakshmi N.</h4>
              <span class="priority-tag priority-medium">Medium</span>
            </div>
            <p style="font-size:12px; color:var(--text-secondary);">📍 Pudur • SHG Support</p>
            <p style="font-size:11px; color:var(--text-hint);">Applied: 3 Feb • 11 days ago</p>
          </div>
        </div>

        <div class="list-item" style="border-left:4px solid var(--warning);" data-navigate="verification">
          <div class="avatar" style="background:#ef6c00;">R</div>
          <div style="flex:1;">
            <div style="display:flex; justify-content:space-between; align-items:start;">
              <h4 style="font-size:14px; font-weight:600;">Rajammal K.</h4>
              <span class="priority-tag priority-medium">Review</span>
            </div>
            <p style="font-size:12px; color:var(--text-secondary);">📍 Keelakarai • PM-KISAN</p>
            <p style="font-size:11px; color:var(--text-hint);">Applied: 4 Feb • 10 days ago</p>
          </div>
        </div>

        <!-- Normal -->
        <div class="list-item" style="border-left:4px solid var(--citizen);" data-navigate="verification">
          <div class="avatar" style="background:var(--citizen);">V</div>
          <div style="flex:1;">
            <div style="display:flex; justify-content:space-between; align-items:start;">
              <h4 style="font-size:14px; font-weight:600;">Velu M.</h4>
              <span class="priority-tag priority-low">New</span>
            </div>
            <p style="font-size:12px; color:var(--text-secondary);">📍 Srivaikundam • Crop Insurance</p>
            <p style="font-size:11px; color:var(--text-hint);">Applied: 10 Feb • 4 days ago</p>
          </div>
        </div>

        <div class="list-item" style="border-left:4px solid var(--citizen);" data-navigate="verification">
          <div class="avatar" style="background:#388e3c;">T</div>
          <div style="flex:1;">
            <div style="display:flex; justify-content:space-between; align-items:start;">
              <h4 style="font-size:14px; font-weight:600;">Thangaraj S.</h4>
              <span class="priority-tag priority-low">New</span>
            </div>
            <p style="font-size:12px; color:var(--text-secondary);">📍 Kovilpatti • Post-Matric Scholarship</p>
            <p style="font-size:11px; color:var(--text-hint);">Applied: 12 Feb • 2 days ago</p>
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
