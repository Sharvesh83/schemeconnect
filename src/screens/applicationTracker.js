import { t } from '../translations.js';

export function renderApplicationTracker() {
  return `
    <div class="screen has-bottom-nav">
      <div class="top-bar citizen">
        <button class="top-bar-back" data-navigate="citizen-home">${t('common.back')}</button>
        <span class="top-bar-title">${t('tracker.title')}</span>
      </div>

      <!-- Application Card -->
      <div style="padding:16px 20px;">
        <div class="card card-highlight">
          <div style="display:flex; justify-content:space-between; margin-bottom:8px;">
            <span style="font-size:var(--fs-xs); color:var(--text-secondary);">${t('tracker.appId')}: <strong>TK-2026-00847</strong></span>
            <span class="badge badge-warning">${t('citizenHome.underReview')}</span>
          </div>
          <h3 style="font-size:var(--fs-lg); font-weight:700; margin-bottom:4px;">${t('recSchemes.pmKisan')}</h3>
          <p style="font-size:var(--fs-sm); color:var(--text-secondary);">${t('tracker.benefit')}: ₹6,000/year</p>
        </div>
      </div>

      <!-- Timeline -->
      <div style="padding:8px 20px 24px;">
        <div class="timeline">
          <div class="timeline-item">
            <div class="timeline-dot completed">✓</div>
            <div class="timeline-content">
              <h4>${t('tracker.submitted')}</h4>
              <p>15 Jan 2026, 10:30 AM</p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-dot completed">✓</div>
            <div class="timeline-content">
              <h4>${t('tracker.docsVerified')}</h4>
              <p>18 Jan 2026, 2:15 PM</p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-dot completed">✓</div>
            <div class="timeline-content">
              <h4>${t('tracker.vaoVerify')}</h4>
              <p>22 Jan 2026, 11:00 AM</p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-dot current">⏳</div>
            <div class="timeline-content">
              <h4>${t('tracker.riReview')}</h4>
              <p style="color:var(--warning);">In Progress...</p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-dot pending">5</div>
            <div class="timeline-content">
              <h4>${t('tracker.tahsildar')}</h4>
              <p>Pending</p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-dot pending">6</div>
            <div class="timeline-content">
              <h4>${t('tracker.disbursed')}</h4>
              <p>Pending</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Other Applications -->
      <div class="section-header">
        <span class="section-title">${t('tracker.otherApps')}</span>
      </div>
      <div style="padding:0 20px 24px; display:flex; flex-direction:column; gap:10px;">
        <div class="card" style="padding:14px;">
          <div style="display:flex; justify-content:space-between;">
            <div><h4 style="font-weight:600; font-size:var(--fs-sm);">${t('recSchemes.pmay')}</h4><p style="font-size:var(--fs-xs); color:var(--text-secondary);">₹2,50,000</p></div>
            <span class="badge badge-info">${t('citizenHome.documentsVerified')}</span>
          </div>
        </div>
        <div class="card" style="padding:14px;">
          <div style="display:flex; justify-content:space-between;">
            <div><h4 style="font-weight:600; font-size:var(--fs-sm);">${t('recSchemes.oldAge')}</h4><p style="font-size:var(--fs-xs); color:var(--text-secondary);">₹1,000/month</p></div>
            <span class="badge badge-success">${t('citizenHome.approvedStatus')}</span>
          </div>
        </div>
      </div>

      <nav class="bottom-nav">
        <button class="bottom-nav-item" data-navigate="citizen-home"><span class="nav-icon">🏠</span><span>${t('common.home')}</span></button>
        <button class="bottom-nav-item" data-navigate="recommended-schemes"><span class="nav-icon">�</span><span>${t('common.schemes')}</span></button>
        <button class="bottom-nav-item active" data-navigate="application-tracker"><span class="nav-icon">�</span><span>${t('common.track')}</span></button>
        <button class="bottom-nav-item" data-navigate="notifications"><span class="nav-icon">🔔</span><span>${t('common.alerts')}</span></button>
        <button class="bottom-nav-item" data-navigate="profile-setup"><span class="nav-icon">👤</span><span>${t('common.profile')}</span></button>
      </nav>
    </div>
  `;
}
