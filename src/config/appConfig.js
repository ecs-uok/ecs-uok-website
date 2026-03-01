// ============================================================
// APPLICATION CONFIGURATION
// ============================================================
// Toggle features on/off easily below.
// After changing, just save and redeploy.
// ============================================================

/**
 * Set to `true` to open board member registration.
 * Set to `false` to close registration and hide the form.
 */
export const REGISTRATION_OPEN = true;

/**
 * Web3Forms API key for form submissions.
 * Get yours free at https://web3forms.com
 */
export const WEB3FORMS_API_KEY = import.meta.env.VITE_WEB3FORMS_API_KEY;

/**
 * Cloudinary config for file uploads.
 * Files are uploaded to Cloudinary and the URL is included in the form submission.
 */
export const CLOUDINARY_CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
export const CLOUDINARY_UPLOAD_PRESET = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;
