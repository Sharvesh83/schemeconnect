import { t } from '../translations.js';

export function renderApplicationsQueue() {
  return `
    <div class="screen has-bottom-nav">
      <div class="top-bar officer">
        <button class="top-bar-back" data-navigate="officer-home">${t('common.back')}</button>
        <span class="top-bar-title">${t('queue.title')}</span>
        <button class="top-bar-action">${t('queue.filter')}</button>
      </div>

      <div class="tab-bar">
        <button class="tab-item active">${t('queue.all')}</button>
        <button class="tab-item">${t('queue.urgent')}</button>
        <button class="tab-item">${t('queue.new')}</button>
        <button class="tab-item">${t('queue.review')}</button>
      </div>

      <div style="padding:12px 20px 8px; display:flex; justify-content:space-between;">
        <span style="font-size:var(--fs-xs); color:var(--text-hint);">${t('queue.sortBy')} ${t('queue.priority')}</span>
      </div>

      <div style="padding:0 20px; display:flex; flex-direction:column; gap:12px; padding-bottom:24px;">
        <div class="card" style="border-left:4px solid var(--error); cursor:pointer;" data-navigate="verification">
          <div style="display:flex; justify-content:space-between; margin-bottom:6px;">
            <h4 style="font-weight:700;">Murugan Selvam</h4>
            <span class="priority-tag priority-high">${t('queue.overdue')}</span>
          </div>
          <p style="font-size:var(--fs-sm); color:var(--text-secondary);">PM-KISAN • Ottapidaram</p>
          <p style="font-size:var(--fs-xs); color:var(--text-hint);">${t('queue.applied')} 12 ${t('queue.daysAgo')}</p>
        </div>

        <div class="card" style="border-left:4px solid var(--error); cursor:pointer;" data-navigate="verification">
          <div style="display:flex; justify-content:space-between; margin-bottom:6px;">
            <h4 style="font-weight:700;">Lakshmi Kannan</h4>
            <span class="priority-tag priority-high">${t('queue.overdue')}</span>
          </div>
          <p style="font-size:var(--fs-sm); color:var(--text-secondary);">PMAY Housing • Pudur</p>
          <p style="font-size:var(--fs-xs); color:var(--text-hint);">${t('queue.applied')} 10 ${t('queue.daysAgo')}</p>
        </div>

        <div class="card" style="border-left:4px solid var(--warning); cursor:pointer;" data-navigate="verification">
          <div style="display:flex; justify-content:space-between; margin-bottom:6px;">
            <h4 style="font-weight:700;">Raman Perumal</h4>
            <span class="priority-tag priority-medium">Medium</span>
          </div>
          <p style="font-size:var(--fs-sm); color:var(--text-secondary);">Old Age Pension • Kayalpattinam</p>
          <p style="font-size:var(--fs-xs); color:var(--text-hint);">${t('queue.applied')} 7 ${t('queue.daysAgo')}</p>
        </div>

        <div class="card" style="border-left:4px solid var(--citizen); cursor:pointer;" data-navigate="verification">
          <div style="display:flex; justify-content:space-between; margin-bottom:6px;">
            <h4 style="font-weight:700;">Selvi Murugan</h4>
            <span class="priority-tag priority-low">Normal</span>
          </div>
          <p style="font-size:var(--fs-sm); color:var(--text-secondary);">Mahalir Thittam • Vilathikulam</p>
          <p style="font-size:var(--fs-xs); color:var(--text-hint);">${t('queue.applied')} 3 ${t('queue.daysAgo')}</p>
        </div>

        <div class="card" style="border-left:4px solid var(--citizen); cursor:pointer;" data-navigate="verification">
          <div style="display:flex; justify-content:space-between; margin-bottom:6px;">
            <h4 style="font-weight:700;">Kumar Arumugam</h4>
            <span class="priority-tag priority-low">Normal</span>
          </div>
          <p style="font-size:var(--fs-sm); color:var(--text-secondary);">Uzhavar Pathukappu • Srivaikuntam</p>
          <p style="font-size:var(--fs-xs); color:var(--text-hint);">${t('queue.applied')} 2 ${t('queue.daysAgo')}</p>
        </div>
      </div>

      <nav class="bottom-nav">
        <button class="bottom-nav-item" data-navigate="officer-home"><span class="nav-icon">🏠</span><span>${t('common.home')}</span></button>
        <button class="bottom-nav-item active" data-navigate="applications-queue"><span class="nav-icon">📋</span><span>${t('common.queue')}</span></button>
        <button class="bottom-nav-item" data-navigate="field-inspection"><span class="nav-icon">📍</span><span>${t('common.field')}</span></button>
        <button class="bottom-nav-item" data-navigate="village-map"><span class="nav-icon">🗺️</span><span>${t('common.map')}</span></button>
        <button class="bottom-nav-item" data-navigate="officer-analytics"><span class="nav-icon">📊</span><span>${t('common.stats')}</span></button>
      </nav>
    </div>
  `;
}
