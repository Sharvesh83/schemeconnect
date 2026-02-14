import { t } from '../translations.js';

export function renderNotifications() {
  return `
    <div class="screen has-bottom-nav">
      <div class="top-bar citizen">
        <button class="top-bar-back" data-navigate="citizen-home">${t('common.back')}</button>
        <span class="top-bar-title">${t('notifications.title')}</span>
        <button class="top-bar-action">⚙️</button>
      </div>

      <div class="tab-bar">
        <button class="tab-item active">${t('notifications.all')}</button>
        <button class="tab-item">${t('notifications.schemesTab')}</button>
        <button class="tab-item">${t('notifications.appsTab')}</button>
        <button class="tab-item">${t('notifications.alertsTab')}</button>
      </div>

      <div class="content-padding content-gap">
        <!-- Today -->
        <p style="font-size:var(--fs-xs); font-weight:700; color:var(--text-hint); text-transform:uppercase; letter-spacing:1px;">${t('notifications.today')}</p>
        <div class="notification-card notification-unread">
          <div class="notification-icon" style="background:var(--citizen-surface);">🆕</div>
          <div class="notification-body"><h4>New Scheme Available</h4><p>Uzhavar Pathukappu — Crop insurance for farmers up to ₹25,000.</p><span class="notification-time">2 hours ago</span></div>
        </div>
        <div class="notification-card notification-unread">
          <div class="notification-icon" style="background:var(--primary-surface);">📋</div>
          <div class="notification-body"><h4>Application Update</h4><p>PM-KISAN application moved to Revenue Inspector review.</p><span class="notification-time">4 hours ago</span></div>
        </div>

        <!-- Yesterday -->
        <p style="font-size:var(--fs-xs); font-weight:700; color:var(--text-hint); text-transform:uppercase; letter-spacing:1px; margin-top:8px;">${t('notifications.yesterday')}</p>
        <div class="notification-card">
          <div class="notification-icon" style="background:#fff8e1;">⏰</div>
          <div class="notification-body"><h4>Document Reminder</h4><p>Community certificate pending upload. Complete to proceed.</p><span class="notification-time">Yesterday, 3:00 PM</span></div>
        </div>
        <div class="notification-card">
          <div class="notification-icon" style="background:var(--citizen-surface);">✅</div>
          <div class="notification-body"><h4>VAO Verification Complete</h4><p>PM-KISAN application cleared VAO stage.</p><span class="notification-time">Yesterday, 11:30 AM</span></div>
        </div>

        <!-- This Week -->
        <p style="font-size:var(--fs-xs); font-weight:700; color:var(--text-hint); text-transform:uppercase; letter-spacing:1px; margin-top:8px;">${t('notifications.thisWeek')}</p>
        <div class="notification-card">
          <div class="notification-icon" style="background:var(--citizen-surface);">💰</div>
          <div class="notification-body"><h4>Payment Credited</h4><p>TN Old Age Pension ₹1,000 credited to your bank account.</p><span class="notification-time">3 days ago</span></div>
        </div>
        <div class="notification-card">
          <div class="notification-icon" style="background:var(--primary-surface);">📅</div>
          <div class="notification-body"><h4>Field Visit Scheduled</h4><p>VAO field inspection for PMAY scheduled on 25 Jan 2026.</p><span class="notification-time">4 days ago</span></div>
        </div>
        <div class="notification-card">
          <div class="notification-icon" style="background:#ffebee;">⚠️</div>
          <div class="notification-body"><h4>Deadline Approaching</h4><p>Uzhavar Pathukappu enrollment closes on 28 Feb 2026.</p><span class="notification-time">5 days ago</span></div>
        </div>
        <div class="notification-card">
          <div class="notification-icon" style="background:var(--citizen-surface);">🎉</div>
          <div class="notification-body"><h4>Application Approved!</h4><p>TN Old Age Pension application has been approved.</p><span class="notification-time">6 days ago</span></div>
        </div>
      </div>

      <nav class="bottom-nav">
        <button class="bottom-nav-item" data-navigate="citizen-home"><span class="nav-icon">🏠</span><span>${t('common.home')}</span></button>
        <button class="bottom-nav-item" data-navigate="recommended-schemes"><span class="nav-icon">📋</span><span>${t('common.schemes')}</span></button>
        <button class="bottom-nav-item" data-navigate="application-tracker"><span class="nav-icon">📍</span><span>${t('common.track')}</span></button>
        <button class="bottom-nav-item active" data-navigate="notifications"><span class="nav-icon">🔔</span><span>${t('common.alerts')}</span></button>
        <button class="bottom-nav-item" data-navigate="profile-setup"><span class="nav-icon">👤</span><span>${t('common.profile')}</span></button>
      </nav>
    </div>
  `;
}
