export function renderDocumentUpload() {
    return `
    <div class="screen has-bottom-nav">
      <div class="top-bar citizen">
        <button class="top-bar-back" data-navigate="profile-setup">←</button>
        <span class="top-bar-title">Upload Documents</span>
      </div>

      <div class="content-padding" style="padding-top:20px;">
        <h3 style="font-size:18px; font-weight:700; margin-bottom:4px;">Required Documents</h3>
        <p style="font-size:13px; color:var(--text-secondary); margin-bottom:4px;">அவசியமான ஆவணங்கள்</p>
        <div style="display:flex; align-items:center; gap:8px; margin-bottom:20px;">
          <div class="progress-bar" style="flex:1; height:6px;">
            <div class="progress-bar-fill" style="width:80%;"></div>
          </div>
          <span style="font-size:13px; font-weight:600; color:var(--citizen);">4/5</span>
        </div>
      </div>

      <div class="content-padding content-gap" style="padding-top:0; gap:14px;">
        <!-- Uploaded Documents -->
        <div class="upload-card uploaded">
          <div class="upload-card-icon">✓</div>
          <div style="flex:1;">
            <h4 style="font-size:14px; font-weight:600;">Aadhaar Card / ஆதார் அட்டை</h4>
            <p style="font-size:12px; color:var(--citizen);" class="upload-status">Uploaded • Verified ✓</p>
            <div class="progress-bar" style="height:3px; margin-top:6px;"><div class="progress-bar-fill" style="width:100%;"></div></div>
          </div>
          <span style="font-size:11px; color:var(--text-hint);">1.2 MB</span>
        </div>

        <div class="upload-card uploaded">
          <div class="upload-card-icon">✓</div>
          <div style="flex:1;">
            <h4 style="font-size:14px; font-weight:600;">Income Certificate / வருமானச் சான்றிதழ்</h4>
            <p style="font-size:12px; color:var(--citizen);" class="upload-status">Uploaded • Pending verification</p>
            <div class="progress-bar" style="height:3px; margin-top:6px;"><div class="progress-bar-fill" style="width:100%;"></div></div>
          </div>
          <span style="font-size:11px; color:var(--text-hint);">842 KB</span>
        </div>

        <div class="upload-card uploaded">
          <div class="upload-card-icon">✓</div>
          <div style="flex:1;">
            <h4 style="font-size:14px; font-weight:600;">Land Patta / நிலப் பட்டா</h4>
            <p style="font-size:12px; color:var(--citizen);" class="upload-status">Uploaded</p>
            <div class="progress-bar" style="height:3px; margin-top:6px;"><div class="progress-bar-fill" style="width:100%;"></div></div>
          </div>
          <span style="font-size:11px; color:var(--text-hint);">2.1 MB</span>
        </div>

        <div class="upload-card uploaded">
          <div class="upload-card-icon">✓</div>
          <div style="flex:1;">
            <h4 style="font-size:14px; font-weight:600;">Ration Card / ரேஷன் அட்டை</h4>
            <p style="font-size:12px; color:var(--citizen);" class="upload-status">Uploaded</p>
            <div class="progress-bar" style="height:3px; margin-top:6px;"><div class="progress-bar-fill" style="width:100%;"></div></div>
          </div>
          <span style="font-size:11px; color:var(--text-hint);">956 KB</span>
        </div>

        <!-- Pending Upload -->
        <div class="upload-card">
          <div class="upload-card-icon" style="background:#fff3e0;">📄</div>
          <div style="flex:1;">
            <h4 style="font-size:14px; font-weight:600;">Community Certificate / சாதிச் சான்றிதழ்</h4>
            <p style="font-size:12px; color:var(--officer);" class="upload-status">Tap to upload</p>
          </div>
          <span style="font-size:20px; color:var(--text-hint);">+</span>
        </div>
      </div>

      <!-- Upload Tips -->
      <div class="content-padding" style="padding-top:16px; padding-bottom:24px;">
        <div class="card" style="background:var(--primary-surface); border:1px solid #bbdefb; padding:14px;">
          <h4 style="font-size:13px; font-weight:600; color:var(--primary); margin-bottom:6px;">💡 Upload Tips</h4>
          <ul style="font-size:12px; color:var(--text-secondary); padding-left:16px; line-height:1.8;">
            <li>Use clear, well-lit photos</li>
            <li>All four corners must be visible</li>
            <li>Max file size: 5 MB per document</li>
            <li>Accepted formats: JPG, PNG, PDF</li>
          </ul>
        </div>

        <button class="btn btn-primary btn-block btn-lg" style="margin-top:16px;" data-navigate="recommended-schemes">
          Continue to Schemes →
        </button>
      </div>

      <!-- Bottom Nav -->
      <nav class="bottom-nav">
        <button class="bottom-nav-item" data-navigate="citizen-home">
          <span class="nav-icon">🏠</span><span>Home</span>
        </button>
        <button class="bottom-nav-item" data-navigate="recommended-schemes">
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
