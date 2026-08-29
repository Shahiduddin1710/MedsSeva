import { Smartphone, ShieldAlert, ExternalLink } from "lucide-react";
import "../styles/BuildDownload.css";

export default function BuildDownload() {
  const downloadUrl = "https://mega.nz/file/NutCkRaA#vN6tf2E517GkJn7vXPm352XQ1eR0unb3fmUaCOoazB8";

  return (
<div className="build-page">
      <div className="build-container">
        <div className="build-card">
          <div className="build-header">
            <div className="build-icon">
              <Smartphone size={32} />
            </div>
            <div>
              <h1 className="build-title">MedsSeva - Diagnostics App</h1>
              <p className="build-subtitle">
                View and install apps built for internal distribution.
              </p>
            </div>
          </div>

          <div className="build-details">
            <div className="detail-row">
              <span className="detail-label">Build artifact</span>
              <span className="detail-value">APK</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Platform</span>
              <span className="detail-value">Android internal distribution build</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Status</span>
              <span className="detail-status">
                <span className="status-dot"></span>
                Finished
              </span>
            </div>
            <div className="detail-row">
              <span className="detail-label">File size</span>
              <span className="detail-value">175.8 MB</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Version</span>
              <span className="detail-value">v1.0.0</span>
            </div>
          </div>

          <div className="build-actions">
            <a
              href={downloadUrl}
              className="btn-install"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink size={18} />
              Download the App
            </a>
          </div>

          <div className="build-note">
            <ShieldAlert size={16} />
            <div className="build-note-content">
              <p className="build-note-title">Google Play Protect Notice</p>
              <p className="build-note-text">
                You may see "Play Protect hasn't seen this app before" or "App scan recommended".
                This is normal as the app is in beta and not on Play Store yet.
                Tap <strong>"Install without scanning"</strong> or <strong>"Install anyway" </strong>
                - the app is completely safe with no malware.
              </p>
            </div>
          </div>
        </div>
      </div>

   </div>
  );
}