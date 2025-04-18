import axios from "axios";

/**
 * Fetches GCam ports from the API based on search query
 *
 * @param {string} baseUrl - The base URL for the API
 * @param {string} query - The search query (device model or brand)
 * @returns {Promise<Array>} - Array of GCam port objects
 */
export const fetchGCamPorts = async (baseUrl, query) => {
  try {
    // This assumes the API has a search endpoint that accepts a query parameter
    // You would need to adjust this based on the actual API structure
    const response = await axios.get(`${baseUrl}/search`, {
      params: {
        s: query,
        per_page: 20,
        type: "gcam_port",
      },
    });

    // Transform the API response into our expected format
    return transformApiResponse(response.data);
  } catch (error) {
    console.error("Error fetching GCam ports:", error);
    throw error;
  }
};

/**
 * Transform API response into the format expected by components
 *
 * @param {Object} apiData - Raw API response data
 * @returns {Array} - Transformed array of GCam port objects
 */
const transformApiResponse = (apiData) => {
  // This is a placeholder implementation
  // You'll need to adjust based on the actual API response structure
  if (!apiData || !Array.isArray(apiData)) {
    return [];
  }

  return apiData.map((item) => ({
    id: item.id,
    title: item.title?.rendered || "Unknown GCam Port",
    version: extractVersion(item.title?.rendered || ""),
    compatibleDevices: extractCompatibleDevices(item.content?.rendered || ""),
    developer: extractDeveloper(item.content?.rendered || ""),
    fileSize: extractFileSize(item.content?.rendered || ""),
    releaseDate: formatDate(item.date),
    downloadUrl: extractDownloadUrl(item.content?.rendered || ""),
  }));
};

/**
 * Extract version information from title
 *
 * @param {string} title - Port title
 * @returns {string} - Version string
 */
const extractVersion = (title) => {
  // Example: "GCam 8.1 for Samsung"
  const versionMatch = title.match(/GCam\s+(\d+\.\d+)/i);
  return versionMatch ? versionMatch[1] : "Unknown";
};

/**
 * Extract compatible devices from content
 *
 * @param {string} content - Port content/description HTML
 * @returns {Array} - Array of compatible device names
 */
const extractCompatibleDevices = (content) => {
  // This is a simplified implementation
  // In a real scenario, you'd parse the HTML content more carefully
  const compatibilityMatch = content.match(/Compatible with:\s*([^<]+)/i);

  if (compatibilityMatch && compatibilityMatch[1]) {
    return compatibilityMatch[1]
      .split(",")
      .map((device) => device.trim())
      .filter((device) => device.length > 0);
  }

  return ["Unknown"];
};

/**
 * Extract developer name from content
 *
 * @param {string} content - Port content/description HTML
 * @returns {string} - Developer name
 */
const extractDeveloper = (content) => {
  const developerMatch = content.match(/Developer:\s*([^<]+)/i);
  return developerMatch ? developerMatch[1].trim() : "Unknown";
};

/**
 * Extract file size from content
 *
 * @param {string} content - Port content/description HTML
 * @returns {string} - File size
 */
const extractFileSize = (content) => {
  const sizeMatch = content.match(/Size:\s*([^<]+)/i);
  return sizeMatch ? sizeMatch[1].trim() : "Unknown";
};

/**
 * Extract download URL from content
 *
 * @param {string} content - Port content/description HTML
 * @returns {string} - Download URL
 */
const extractDownloadUrl = (content) => {
  const linkMatch = content.match(/href=["']([^"']+\.apk)["']/i);
  return linkMatch ? linkMatch[1] : "";
};

/**
 * Format date string
 *
 * @param {string} dateString - ISO date string
 * @returns {string} - Formatted date
 */
const formatDate = (dateString) => {
  if (!dateString) return "Unknown";

  try {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  } catch (e) {
    return "Unknown";
  }
};
