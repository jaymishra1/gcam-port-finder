import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import SearchBox from "./SearchBox";
import BrandList from "./BrandList";
import InstallGuide from "./InstallGuide";
import ResultList from "./ResultList";
import { fetchGCamPorts } from "../utils/api";
import "../styles/index.css";

const GCamPortFinder = ({
  apiBaseUrl = "https://gcamapk.io/wp-json/wp/v2",
  defaultBrands = [],
  theme = "light",
  onResultClick,
  showInstallGuide = true,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showGuide, setShowGuide] = useState(false);

  useEffect(() => {
    // If a brand is selected, search for it
    if (selectedBrand) {
      handleSearch(selectedBrand);
    }
  }, [selectedBrand]);

  const handleSearch = async (query) => {
    setLoading(true);
    try {
      const portsData = await fetchGCamPorts(apiBaseUrl, query || searchQuery);
      setResults(portsData);
    } catch (error) {
      console.error("Error fetching GCam ports:", error);
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  const handleBrandSelect = (brand) => {
    setSelectedBrand(brand);
    setSearchQuery(brand);
  };

  const toggleInstallGuide = () => {
    setShowGuide(!showGuide);
  };

  const handleResultItemClick = (port) => {
    if (onResultClick) {
      onResultClick(port);
    }
  };

  return (
    <div className={`gcam-port-finder-container theme-${theme}`}>
      <h1 className="gcam-port-finder-title">Find GCam Port for your device</h1>

      <SearchBox
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onSearch={() => handleSearch()}
      />

      {showInstallGuide && (
        <button
          className="gcam-install-guide-button"
          onClick={toggleInstallGuide}
        >
          How to Install?
        </button>
      )}

      {showGuide && <InstallGuide onClose={toggleInstallGuide} />}

      <h2 className="gcam-brand-title">Suggested Ports by Brand</h2>

      <BrandList
        brands={defaultBrands}
        onBrandSelect={handleBrandSelect}
        selectedBrand={selectedBrand}
      />

      {loading ? (
        <div className="gcam-loading">Loading...</div>
      ) : (
        <ResultList results={results} onItemClick={handleResultItemClick} />
      )}
    </div>
  );
};

GCamPortFinder.propTypes = {
  apiBaseUrl: PropTypes.string,
  defaultBrands: PropTypes.arrayOf(PropTypes.string),
  theme: PropTypes.oneOf(["light", "dark"]),
  onResultClick: PropTypes.func,
  showInstallGuide: PropTypes.bool,
};

export default GCamPortFinder;
