/**
 * Default list of popular smartphone brands that have GCam ports
 */
export const DEFAULT_BRANDS = [
  "Samsung",
  "Xiaomi",
  "OnePlus",
  "Realme",
  "Oppo",
  "Redmi",
  "Poco",
  "Nothing",
  "Motorola",
  "Google",
  "Asus",
  "Nokia",
  "Sony",
  "LG",
  "Huawei",
  "Honor",
  "Vivo",
];

/**
 * Map of popular phone models for each brand
 */
export const POPULAR_MODELS = {
  Samsung: [
    "Galaxy S23 Ultra",
    "Galaxy S23+",
    "Galaxy S23",
    "Galaxy S22 Ultra",
    "Galaxy S22+",
    "Galaxy S22",
    "Galaxy S21 FE",
    "Galaxy A54",
    "Galaxy A53",
    "Galaxy A34",
    "Galaxy A33",
  ],
  Xiaomi: [
    "Xiaomi 13 Pro",
    "Xiaomi 13",
    "Xiaomi 12T Pro",
    "Xiaomi 12T",
    "Xiaomi 12 Pro",
    "Xiaomi 12",
    "Xiaomi 11T Pro",
    "Xiaomi 11T",
  ],
  OnePlus: [
    "OnePlus 11",
    "OnePlus 10 Pro",
    "OnePlus 10T",
    "OnePlus 9 Pro",
    "OnePlus 9",
    "OnePlus Nord 3",
    "OnePlus Nord 2T",
    "OnePlus Nord CE 3",
  ],
  Realme: [
    "Realme GT 5 Pro",
    "Realme GT 5",
    "Realme GT 3",
    "Realme GT Neo 5",
    "Realme GT 2 Pro",
    "Realme GT 2",
  ],
  Oppo: [
    "Oppo Find X6 Pro",
    "Oppo Find X6",
    "Oppo Find X5 Pro",
    "Oppo Find X5",
    "Oppo Reno 10 Pro+",
    "Oppo Reno 10 Pro",
    "Oppo Reno 10",
  ],
  Redmi: [
    "Redmi Note 12 Pro+",
    "Redmi Note 12 Pro",
    "Redmi Note 12",
    "Redmi Note 11 Pro+",
    "Redmi Note 11 Pro",
    "Redmi Note 11",
  ],
  Poco: [
    "Poco F5 Pro",
    "Poco F5",
    "Poco F4 GT",
    "Poco F4",
    "Poco X5 Pro",
    "Poco X5",
    "Poco X4 GT",
    "Poco X4 Pro",
  ],
  Nothing: ["Nothing Phone (2)", "Nothing Phone (1)"],
};

/**
 * Function to get popular models for a specific brand
 *
 * @param {string} brand - The brand name
 * @returns {Array} - Array of popular models for the brand
 */
export const getPopularModels = (brand) => {
  return POPULAR_MODELS[brand] || [];
};
