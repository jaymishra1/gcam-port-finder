import React from "react";
import PropTypes from "prop-types";

const InstallGuide = ({ onClose }) => {
  return (
    <div className="gcam-install-guide-overlay">
      <div className="gcam-install-guide-content">
        <button className="gcam-install-guide-close" onClick={onClose}>
          ×
        </button>
        <h2>How to Install GCam</h2>

        <div className="gcam-install-guide-steps">
          <div className="gcam-install-step">
            <h3>Step 1: Download the APK</h3>
            <p>
              Download the appropriate GCam port APK for your device from the
              search results.
            </p>
          </div>

          <div className="gcam-install-step">
            <h3>Step 2: Enable Unknown Sources</h3>
            <p>
              Go to Settings &gt; Security &gt; Enable "Unknown Sources" or
              "Install unknown apps" permission for your browser.
            </p>
          </div>

          <div className="gcam-install-step">
            <h3>Step 3: Install the APK</h3>
            <p>
              Open the downloaded APK file and tap "Install". If you get a
              warning, tap "Install anyway".
            </p>
          </div>

          <div className="gcam-install-step">
            <h3>Step 4: Configure Settings</h3>
            <p>
              Open the GCam app and configure settings according to your device.
              Some ports may require specific configurations.
            </p>
          </div>

          <div className="gcam-install-note">
            <h3>Important Notes:</h3>
            <ul>
              <li>Not all GCam ports work perfectly on all devices</li>
              <li>Different versions may have different features</li>
              <li>If one version doesn't work, try another</li>
              <li>Check for XML configuration files if available</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

InstallGuide.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default InstallGuide;
