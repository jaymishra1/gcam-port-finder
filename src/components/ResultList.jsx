import React from "react";
import PropTypes from "prop-types";

const ResultList = ({ results, onItemClick }) => {
  if (results.length === 0) {
    return (
      <div className="gcam-no-results">
        No GCam ports found. Try another device model or brand.
      </div>
    );
  }

  return (
    <div className="gcam-results-container">
      <h2 className="gcam-results-title">Available GCam Ports</h2>
      <div className="gcam-results-list">
        {results.map((port) => (
          <div
            key={port.id}
            className="gcam-result-item"
            onClick={() => onItemClick(port)}
          >
            <div className="gcam-result-header">
              <h3 className="gcam-result-title">{port.title}</h3>
              <span className="gcam-result-version">{port.version}</span>
            </div>

            <div className="gcam-result-details">
              <div className="gcam-result-compatibility">
                <span className="label">Compatible with:</span>
                <span className="value">
                  {port.compatibleDevices.join(", ")}
                </span>
              </div>

              <div className="gcam-result-developer">
                <span className="label">Developer:</span>
                <span className="value">{port.developer}</span>
              </div>

              <div className="gcam-result-size">
                <span className="label">Size:</span>
                <span className="value">{port.fileSize}</span>
              </div>

              <div className="gcam-result-date">
                <span className="label">Released:</span>
                <span className="value">{port.releaseDate}</span>
              </div>
            </div>

            <div className="gcam-result-actions">
              <button className="gcam-download-button">Download</button>
              <button className="gcam-details-button">More Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

ResultList.propTypes = {
  results: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      title: PropTypes.string.isRequired,
      version: PropTypes.string,
      compatibleDevices: PropTypes.arrayOf(PropTypes.string),
      developer: PropTypes.string,
      fileSize: PropTypes.string,
      releaseDate: PropTypes.string,
      downloadUrl: PropTypes.string,
    })
  ).isRequired,
  onItemClick: PropTypes.func.isRequired,
};

export default ResultList;
