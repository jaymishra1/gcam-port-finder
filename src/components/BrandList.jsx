import React from "react";
import PropTypes from "prop-types";

const BrandList = ({ brands, onBrandSelect, selectedBrand }) => {
  // Default brands if none are provided
  const defaultBrands =
    brands.length > 0
      ? brands
      : [
          "Samsung",
          "Xiaomi",
          "OnePlus",
          "Realme",
          "Oppo",
          "Redmi",
          "Poco",
          "Nothing",
        ];

  return (
    <div className="gcam-brand-list">
      {defaultBrands.map((brand) => (
        <button
          key={brand}
          className={`gcam-brand-item ${
            selectedBrand === brand ? "selected" : ""
          }`}
          onClick={() => onBrandSelect(brand)}
        >
          {brand}
        </button>
      ))}
    </div>
  );
};

BrandList.propTypes = {
  brands: PropTypes.arrayOf(PropTypes.string),
  onBrandSelect: PropTypes.func.isRequired,
  selectedBrand: PropTypes.string,
};

BrandList.defaultProps = {
  brands: [],
  selectedBrand: "",
};

export default BrandList;
