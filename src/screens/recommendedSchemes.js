export function renderRecommendedSchemes() {
    return `
    <div class="screen has-bottom-nav">
      <div class="top-bar citizen">
        <button class="top-bar-back" data-navigate="citizen-home">←</button>
        <span class="top-bar-title">Eligible Schemes</span>
        <button class="top-bar-action">🔍</button>
      </div>

      <!-- Filter Chips -->
      <div style="background:white; padding:12px 20px; display:flex; gap:8px; overflow-x:auto; border-bottom:1px solid var(--divider);">
        <span class="chip active">All (12)</span>
        <span class="chip">🌾 Agriculture</span>
        <span class="chip">🏠 Housing</span>
        <span class="chip">👵 Pension</span>
        <span class="chip">👩 Women</span>
        <span class="chip">📚 Education</span>
      </div>

      <div style="padding:12px 20px 4px;">
        <h3 style="font-size:16px; font-weight:700;">You are eligible for <span style="color:var(--citizen);">12 schemes</span></h3>
        <p style="font-size:12px; color:var(--text-secondary);">Based on your profile • Ottapidaram, Thoothukudi</p>
      </div>

      <div class="content-padding content-gap" style="padding-bottom:24px;">
        <!-- Featured Scheme -->
        <div class="scheme-card featured" data-navigate="scheme-details" style="cursor:pointer;">
          <div class="scheme-info">
            <div style="display:flex; gap:6px; margin-bottom:6px;">
              <span class="badge badge-success">🌾 Agriculture</span>
              <span class="badge badge-info">Central Govt</span>
            </div>
            <h3>PM-KISAN Samman Nidhi</h3>
            <p class="scheme-benefit">₹6,000/year direct benefit</p>
            <p>Income support of ₹6,000 per year in 3 installments for small & marginal farmers.</p>
            <button class="btn btn-primary btn-sm" style="margin-top:10px;" data-navigate="scheme-details">View & Apply →</button>
          </div>
          <div class="score-circle score-high">95%</div>
        </div>

        <!-- Scheme 2 -->
        <div class="scheme-card" data-navigate="scheme-details" style="cursor:pointer;">
          <div class="scheme-info">
            <div style="display:flex; gap:6px; margin-bottom:6px;">
              <span class="badge badge-info">🏠 Housing</span>
              <span class="badge badge-orange">State Govt</span>
            </div>
            <h3>PMAY – Gramin Housing</h3>
            <p class="scheme-benefit">₹2,50,000 housing subsidy</p>
            <p>Financial assistance for construction of pucca house with basic amenities.</p>
            <button class="btn btn-outline btn-sm" style="margin-top:10px;" data-navigate="scheme-details">View Details →</button>
          </div>
          <div class="score-circle score-high">92%</div>
        </div>

        <!-- Scheme 3 -->
        <div class="scheme-card" data-navigate="scheme-details" style="cursor:pointer;">
          <div class="scheme-info">
            <div style="display:flex; gap:6px; margin-bottom:6px;">
              <span class="badge badge-warning">👵 Pension</span>
              <span class="badge badge-orange">State Govt</span>
            </div>
            <h3>TN Old Age Pension Scheme</h3>
            <p class="scheme-benefit">₹1,000/month pension</p>
            <p>Monthly pension for senior citizens above 60 years with annual income below ₹24,000.</p>
            <button class="btn btn-outline btn-sm" style="margin-top:10px;">View Details →</button>
          </div>
          <div class="score-circle score-medium">78%</div>
        </div>

        <!-- Scheme 4 -->
        <div class="scheme-card" data-navigate="scheme-details" style="cursor:pointer;">
          <div class="scheme-info">
            <div style="display:flex; gap:6px; margin-bottom:6px;">
              <span class="badge badge-success">👩 Women SHG</span>
            </div>
            <h3>Mahalir Thittam – SHG Support</h3>
            <p class="scheme-benefit">₹15,000 startup grant</p>
            <p>Self-Help Group support for women with micro-enterprise loans and training.</p>
            <button class="btn btn-outline btn-sm" style="margin-top:10px;">View Details →</button>
          </div>
          <div class="score-circle score-medium">74%</div>
        </div>

        <!-- Scheme 5 -->
        <div class="scheme-card" data-navigate="scheme-details" style="cursor:pointer;">
          <div class="scheme-info">
            <div style="display:flex; gap:6px; margin-bottom:6px;">
              <span class="badge badge-info">🌾 Agriculture</span>
            </div>
            <h3>TN Uzhavar Pathukappu</h3>
            <p class="scheme-benefit">₹5,000/season crop insurance</p>
            <p>Crop insurance and agricultural input subsidy for registered farmers in Tamil Nadu.</p>
            <button class="btn btn-outline btn-sm" style="margin-top:10px;">View Details →</button>
          </div>
          <div class="score-circle score-medium">71%</div>
        </div>

        <!-- Scheme 6 -->
        <div class="scheme-card" data-navigate="scheme-details" style="cursor:pointer;">
          <div class="scheme-info">
            <div style="display:flex; gap:6px; margin-bottom:6px;">
              <span class="badge badge-warning">📚 Education</span>
            </div>
            <h3>Post-Matric Scholarship</h3>
            <p class="scheme-benefit">₹12,000/year scholarship</p>
            <p>Scholarship for SC/ST/OBC students pursuing higher education after Class 10.</p>
            <button class="btn btn-outline btn-sm" style="margin-top:10px;">View Details →</button>
          </div>
          <div class="score-circle score-low">58%</div>
        </div>
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
