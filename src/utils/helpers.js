/**
 * Utility functions for the GCam Port Finder
 */

/**
 * Filter models based on search query
 *
 * @param {Array} models - Array of model objects
 * @param {string} query - Search query string
 * @returns {Array} - Filtered array of models
 */
export const filterModelsByQuery = (models, query) => {
  if (!query) return models;

  const lowerQuery = query.toLowerCase();

  return models.filter((model) => model.toLowerCase().includes(lowerQuery));
};

/**
 * Format file size for display
 *
 * @param {number} bytes - Size in bytes
 * @returns {string} - Formatted size string
 */
export const formatFileSize = (bytes) => {
  if (typeof bytes !== "number" || isNaN(bytes)) {
    return "Unknown";
  }

  if (bytes === 0) return "0 Bytes";

  const sizes = ["Bytes", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(1024));

  return parseFloat((bytes / Math.pow(1024, i)).toFixed(2)) + " " + sizes[i];
};

/**
 * Get Android version name from version number
 *
 * @param {number} versionNumber - Android API level
 * @returns {string} - Android version name
 */
export const getAndroidVersionName = (versionNumber) => {
  const versionMap = {
    33: "Android 13",
    32: "Android 12L",
    31: "Android 12",
    30: "Android 11",
    29: "Android 10",
    28: "Android 9 (Pie)",
    27: "Android 8.1 (Oreo)",
    26: "Android 8.0 (Oreo)",
    25: "Android 7.1 (Nougat)",
    24: "Android 7.0 (Nougat)",
    23: "Android 6.0 (Marshmallow)",
    22: "Android 5.1 (Lollipop)",
    21: "Android 5.0 (Lollipop)",
  };

  return versionMap[versionNumber] || `Android ${versionNumber}`;
};

/**
 * Format date for display
 *
 * @param {string} dateString - ISO date string
 * @returns {string} - Formatted date string
 */
export const formatDate = (dateString) => {
  if (!dateString) return "";

  try {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  } catch (e) {
    return "";
  }
};

/**
 * Generate a unique ID
 *
 * @returns {string} - Unique ID string
 */
export const generateUniqueId = () => {
  return "_" + Math.random().toString(36).substr(2, 9);
};

/**
 * Check if device is compatible with GCam port
 *
 * @param {string} deviceModel - Device model
 * @param {Array} compatibleDevices - List of compatible devices
 * @returns {boolean} - True if compatible
 */
export const isDeviceCompatible = (deviceModel, compatibleDevices) => {
  if (!deviceModel || !Array.isArray(compatibleDevices)) {
    return false;
  }

  const lowerDeviceModel = deviceModel.toLowerCase();

  return compatibleDevices.some(
    (device) =>
      device.toLowerCase().includes(lowerDeviceModel) ||
      lowerDeviceModel.includes(device.toLowerCase())
  );
};
