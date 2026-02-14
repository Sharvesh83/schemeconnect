import { t, currentLang } from '../translations.js';

export function renderCitizenHome() {
  return `
    <div class="screen has-bottom-nav">
      <!-- Hero Section -->
      <div class="hero-section citizen">
        <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:20px;">
          <div>
            <p class="hero-greeting">${t('citizenHome.greeting')}</p>
            <h1 class="hero-name">${t('citizenHome.name')}</h1>
            <p style="font-size:13px; opacity:0.8;">${t('citizenHome.location')}</p>
          </div>
          <div class="avatar avatar-lg" style="background:rgba(255,255,255,0.2); font-size:32px;">👨‍🌾</div>
        </div>
        <div style="background:rgba(255,255,255,0.15); border-radius:var(--radius-md); padding:12px 16px; display:flex; align-items:center; gap:12px; cursor:pointer;" data-navigate="recommended-schemes">
          <span style="font-size:20px;">🔍</span>
          <div>
            <p style="font-weight:600; font-size:var(--fs-sm);">${t('citizenHome.checkSchemes')}</p>
            <p style="font-size:var(--fs-xs); opacity:0.7;">${t('citizenHome.checkSchemesDesc')}</p>
          </div>
        </div>
      </div>

      <!-- Stats Grid -->
      <div style="padding:16px 20px 8px;">
        <div class="grid-3">
          <div class="stat-card" style="text-align:center;">
            <div class="stat-icon" style="background:var(--citizen-surface); margin:0 auto;">🎯</div>
            <div class="stat-value" style="color:var(--citizen);">12</div>
            <div class="stat-label">${t('citizenHome.eligible')}</div>
          </div>
          <div class="stat-card" style="text-align:center;">
            <div class="stat-icon" style="background:var(--primary-surface); margin:0 auto;">📋</div>
            <div class="stat-value" style="color:var(--primary);">3</div>
            <div class="stat-label">${t('citizenHome.applied')}</div>
          </div>
          <div class="stat-card" style="text-align:center;">
            <div class="stat-icon" style="background:#fff8e1; margin:0 auto;">✅</div>
            <div class="stat-value" style="color:var(--warning);">2</div>
            <div class="stat-label">${t('citizenHome.approved')}</div>
          </div>
        </div>
      </div>

      <!-- My Applications -->
      <div class="section-header">
        <span class="section-title">${t('citizenHome.myApps')}</span>
        <span class="section-action" data-navigate="application-tracker">${t('citizenHome.viewAll')}</span>
      </div>
      <div style="padding:0 20px; display:flex; flex-direction:column; gap:12px;">
        <div class="card" style="cursor:pointer;" data-navigate="application-tracker">
          <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:8px;">
            <div>
              <h4 style="font-size:var(--fs-base); font-weight:700;">${t('citizenHome.pmKisan')}</h4>
              <p style="font-size:var(--fs-xs); color:var(--text-secondary);">₹6,000/year • Applied 15 Jan 2026</p>
            </div>
            <span class="badge badge-warning">${t('citizenHome.underReview')}</span>
          </div>
          <div class="progress-bar"><div class="progress-bar-fill" style="width:45%;"></div></div>
        </div>

        <div class="card" style="cursor:pointer;" data-navigate="application-tracker">
          <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:8px;">
            <div>
              <h4 style="font-size:var(--fs-base); font-weight:700;">${t('citizenHome.pmay')}</h4>
              <p style="font-size:var(--fs-xs); color:var(--text-secondary);">₹2,50,000 • Applied 3 Dec 2025</p>
            </div>
            <span class="badge badge-info">${t('citizenHome.documentsVerified')}</span>
          </div>
          <div class="progress-bar"><div class="progress-bar-fill" style="width:60%;"></div></div>
        </div>

        <div class="card" style="cursor:pointer;" data-navigate="application-tracker">
          <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:8px;">
            <div>
              <h4 style="font-size:var(--fs-base); font-weight:700;">${t('citizenHome.pension')}</h4>
              <p style="font-size:var(--fs-xs); color:var(--text-secondary);">₹1,000/month • Applied 20 Nov 2025</p>
            </div>
            <span class="badge badge-success">${t('citizenHome.approvedStatus')}</span>
          </div>
          <div class="progress-bar"><div class="progress-bar-fill" style="width:100%;"></div></div>
        </div>
      </div>

      <!-- Quick Actions -->
      <div class="section-header">
        <span class="section-title">${t('citizenHome.quickActions')}</span>
      </div>
      <div style="padding:0 20px;">
        <div class="grid-2" style="gap:12px;">
          <div class="card" style="text-align:center; cursor:pointer; padding:16px;" data-navigate="profile-setup">
            <div style="font-size:28px; margin-bottom:8px;">👤</div>
            <p style="font-weight:600; font-size:var(--fs-sm);">${t('citizenHome.profileAction')}</p>
          </div>
          <div class="card" style="text-align:center; cursor:pointer; padding:16px;" data-navigate="document-upload">
            <div style="font-size:28px; margin-bottom:8px;">📁</div>
            <p style="font-weight:600; font-size:var(--fs-sm);">${t('citizenHome.docsAction')}</p>
          </div>
          <div class="card" style="text-align:center; cursor:pointer; padding:16px;" data-navigate="notifications">
            <div style="font-size:28px; margin-bottom:8px;">🔔</div>
            <p style="font-weight:600; font-size:var(--fs-sm);">${t('citizenHome.notifsAction')}</p>
          </div>
          <div class="card" style="text-align:center; cursor:pointer; padding:16px;">
            <div style="font-size:28px; margin-bottom:8px;">🏥</div>
            <p style="font-weight:600; font-size:var(--fs-sm);">${t('citizenHome.helpAction')}</p>
          </div>
        </div>
      </div>

      <!-- Recent Updates -->
      <div class="section-header">
        <span class="section-title">${t('citizenHome.recentUpdates')}</span>
      </div>
      <div style="padding:0 20px 24px; display:flex; flex-direction:column; gap:12px;">
        <div class="notification-card notification-unread">
          <div class="notification-icon" style="background:var(--citizen-surface);">🆕</div>
          <div class="notification-body">
            <h4>${t('citizenHome.newScheme')}</h4>
            <p>${t('citizenHome.newSchemeDesc')}</p>
          </div>
        </div>
        <div class="notification-card">
          <div class="notification-icon" style="background:var(--primary-surface);">📋</div>
          <div class="notification-body">
            <h4>${t('citizenHome.appUpdate')}</h4>
            <p>${t('citizenHome.appUpdateDesc')}</p>
          </div>
        </div>
      </div>

      <!-- Bottom Nav -->
      <nav class="bottom-nav">
        <button class="bottom-nav-item active" data-navigate="citizen-home">
          <span class="nav-icon">🏠</span>
          <span>${t('common.home')}</span>
        </button>
        <button class="bottom-nav-item" data-navigate="recommended-schemes">
          <span class="nav-icon">📋</span>
          <span>${t('common.schemes')}</span>
        </button>
        <button class="bottom-nav-item" data-navigate="application-tracker">
          <span class="nav-icon">📍</span>
          <span>${t('common.track')}</span>
        </button>
        <button class="bottom-nav-item" data-navigate="notifications">
          <span class="nav-icon">🔔</span>
          <span>${t('common.alerts')}</span>
        </button>
        <button class="bottom-nav-item" data-navigate="profile-setup">
          <span class="nav-icon">👤</span>
          <span>${t('common.profile')}</span>
        </button>
      </nav>
    </div>
  `;
}
