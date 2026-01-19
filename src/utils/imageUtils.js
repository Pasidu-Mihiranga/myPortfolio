/**
 * Image utility functions for WebP optimization
 * Automatically converts image paths to try WebP versions first
 */

/**
 * Converts an image path to its WebP equivalent
 * @param {string} imagePath - Original image path (e.g., "/images/photo.jpg")
 * @returns {string} - WebP path (e.g., "/images/photo.webp")
 */
export function getWebPPath(imagePath) {
    if (!imagePath) return imagePath;

    // Already a WebP image
    if (imagePath.toLowerCase().endsWith('.webp')) {
        return imagePath;
    }

    // Replace jpg, jpeg, png extensions with webp
    return imagePath.replace(/\.(jpg|jpeg|png)$/i, '.webp');
}

/**
 * Returns both original and WebP paths for use with picture element
 * @param {string} imagePath - Original image path
 * @param {string} baseUrl - Base URL for assets (from import.meta.env.BASE_URL)
 * @returns {{ original: string, webp: string }} - Object with both paths
 */
export function getImagePaths(imagePath, baseUrl = '') {
    if (!imagePath) return { original: '', webp: '' };

    // Handle paths starting with /
    const fullPath = imagePath.startsWith('/')
        ? `${baseUrl}${imagePath.slice(1)}`
        : imagePath;

    const webpPath = getWebPPath(fullPath);

    return {
        original: fullPath,
        webp: webpPath
    };
}

/**
 * Creates an optimized image path that prefers WebP
 * @param {string} imagePath - Original image path
 * @param {string} baseUrl - Base URL for assets
 * @returns {string} - WebP path if original was jpg/jpeg/png, otherwise original
 */
export function getOptimizedImagePath(imagePath, baseUrl = '') {
    if (!imagePath) return '';

    // Handle paths starting with /
    const fullPath = imagePath.startsWith('/')
        ? `${baseUrl}${imagePath.slice(1)}`
        : imagePath;

    // Convert to WebP path
    return getWebPPath(fullPath);
}
