import './style.css';

// --- Screen Imports ---
import { renderSplash } from './screens/splash.js';
import { renderRoleSelection } from './screens/roleSelection.js';
import { renderLogin } from './screens/login.js';
import { renderCitizenHome } from './screens/citizenHome.js';
import { renderProfileSetup } from './screens/profileSetup.js';
import { renderDocumentUpload } from './screens/documentUpload.js';
import { renderRecommendedSchemes } from './screens/recommendedSchemes.js';
import { renderSchemeDetails } from './screens/schemeDetails.js';
import { renderApplicationSubmit } from './screens/applicationSubmit.js';
import { renderApplicationTracker } from './screens/applicationTracker.js';
import { renderNotifications } from './screens/notifications.js';
import { renderOfficerHome } from './screens/officerHome.js';
import { renderApplicationsQueue } from './screens/applicationsQueue.js';
import { renderVerification } from './screens/verification.js';
import { renderFieldInspection } from './screens/fieldInspection.js';
import { renderVillageMap } from './screens/villageMap.js';
import { renderOfficerAnalytics } from './screens/officerAnalytics.js';
import { renderSchemeManagement } from './screens/schemeManagement.js';
import { renderSystemOverview } from './screens/systemOverview.js';

// --- State ---
export let currentRole = 'citizen'; // 'citizen', 'officer', 'admin'

export function setRole(role) {
  currentRole = role;
}

// --- Route Map ---
const routes = {
  'splash': renderSplash,
  'role-selection': renderRoleSelection,
  'login': renderLogin,
  'citizen-home': renderCitizenHome,
  'profile-setup': renderProfileSetup,
  'document-upload': renderDocumentUpload,
  'recommended-schemes': renderRecommendedSchemes,
  'scheme-details': renderSchemeDetails,
  'application-submit': renderApplicationSubmit,
  'application-tracker': renderApplicationTracker,
  'notifications': renderNotifications,
  'officer-home': renderOfficerHome,
  'applications-queue': renderApplicationsQueue,
  'verification': renderVerification,
  'field-inspection': renderFieldInspection,
  'village-map': renderVillageMap,
  'officer-analytics': renderOfficerAnalytics,
  'scheme-management': renderSchemeManagement,
  'system-overview': renderSystemOverview,
};

// --- Router ---
const container = document.getElementById('screen-container');

export function navigate(screen) {
  window.location.hash = screen;
}

function render() {
  const hash = window.location.hash.slice(1) || 'splash';
  const renderFn = routes[hash];
  if (renderFn) {
    container.innerHTML = renderFn();
    container.scrollTop = 0;
    bindEvents(hash);
  }
}

// --- Event Binding ---
function bindEvents(screen) {
  // Global click delegation
  container.querySelectorAll('[data-navigate]').forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      navigate(el.getAttribute('data-navigate'));
    });
  });

  container.querySelectorAll('[data-role]').forEach(el => {
    el.addEventListener('click', () => {
      setRole(el.getAttribute('data-role'));
    });
  });

  // Checkbox toggling
  container.querySelectorAll('.checkbox').forEach(el => {
    el.addEventListener('click', () => {
      el.classList.toggle('checked');
      if (el.classList.contains('checked')) {
        el.textContent = '✓';
      } else {
        el.textContent = '';
      }
    });
  });

  // Upload card toggling
  container.querySelectorAll('.upload-card:not(.uploaded)').forEach(el => {
    el.addEventListener('click', () => {
      el.classList.add('uploaded');
      const icon = el.querySelector('.upload-card-icon');
      if (icon) icon.textContent = '✓';
      const status = el.querySelector('.upload-status');
      if (status) {
        status.textContent = 'Uploaded';
        status.style.color = 'var(--citizen)';
      }
    });
  });

  // Tab switching
  container.querySelectorAll('.tab-item').forEach(tab => {
    tab.addEventListener('click', () => {
      container.querySelectorAll('.tab-item').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
    });
  });

  // Bottom nav active state
  container.querySelectorAll('.bottom-nav-item').forEach(item => {
    item.addEventListener('click', () => {
      container.querySelectorAll('.bottom-nav-item').forEach(i => i.classList.remove('active'));
      item.classList.add('active');
    });
  });
}

// --- Init ---
window.addEventListener('hashchange', render);
window.addEventListener('DOMContentLoaded', () => {
  // Auto-splash with timed redirect
  if (!window.location.hash || window.location.hash === '#splash') {
    render();
    setTimeout(() => navigate('role-selection'), 3000);
  } else {
    render();
  }
});
