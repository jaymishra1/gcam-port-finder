import React from "react";
import PropTypes from "prop-types";

const SearchBox = ({ value, onChange, onSearch }) => {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onSearch();
    }
  };

  return (
    <div className="gcam-search-container">
      <input
        type="text"
        className="gcam-search-input"
        placeholder="Enter your phone model"
        value={value}
        onChange={onChange}
        onKeyDown={handleKeyDown}
      />
      <button className="gcam-search-button" onClick={onSearch}>
        Search
      </button>
    </div>
  );
};

SearchBox.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
};

export default SearchBox;
