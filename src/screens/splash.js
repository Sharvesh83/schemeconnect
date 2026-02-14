export function renderSplash() {
    return `
    <div class="screen splash-screen">
      <div style="position:relative; z-index:1; padding: 0 32px;">
        <div style="margin-bottom: 32px;">
          <div style="width:100px; height:100px; margin:0 auto; border-radius:50%; background:rgba(255,255,255,0.12); display:flex; align-items:center; justify-content:center; font-size:48px; border: 3px solid rgba(255,255,255,0.2);">
            🏛️
          </div>
        </div>
        <h1 style="font-size:36px; font-weight:800; letter-spacing:-0.5px; margin-bottom:8px;">
          SchemeConnect
        </h1>
        <p style="font-size:13px; opacity:0.7; letter-spacing:3px; text-transform:uppercase; margin-bottom:24px;">
          Government of India
        </p>
        <p style="font-size:17px; opacity:0.9; line-height:1.5; max-width:280px; margin:0 auto;">
          Find and access the schemes you deserve
        </p>
        <div style="margin-top:48px;">
          <div style="width:40px; height:4px; background:rgba(255,255,255,0.3); border-radius:4px; margin:0 auto; position:relative; overflow:hidden;">
            <div style="width:40px; height:4px; background:white; border-radius:4px; animation: loading 2s ease-in-out infinite;"></div>
          </div>
        </div>
        <style>
          @keyframes loading {
            0% { transform: translateX(-100%); }
            50% { transform: translateX(0); }
            100% { transform: translateX(100%); }
          }
        </style>
      </div>
      <div style="position:absolute; bottom:32px; left:0; right:0; text-align:center; z-index:1;">
        <p style="font-size:11px; opacity:0.5;">Supported by</p>
        <p style="font-size:13px; opacity:0.7; font-weight:600;">Digital India • NIC</p>
      </div>
    </div>
  `;
}
