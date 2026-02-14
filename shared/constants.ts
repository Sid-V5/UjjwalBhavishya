/**
 * Application-wide constants and configuration values.
 * Centralises magic numbers and strings to improve maintainability.
 */

// ─── Authentication ──────────────────────────────────────────────────────────
export const AUTH = {
  /** Salt rounds for bcrypt password hashing */
  BCRYPT_SALT_ROUNDS: 10,
  /** JWT token expiry duration */
  TOKEN_EXPIRY: "7d",
} as const;

// ─── Pagination ──────────────────────────────────────────────────────────────
export const PAGINATION = {
  /** Default number of items per page */
  DEFAULT_PAGE_SIZE: 20,
  /** Maximum items a client can request in one page */
  MAX_PAGE_SIZE: 100,
} as const;

// ─── Recommendations ─────────────────────────────────────────────────────────
export const RECOMMENDATIONS = {
  /** Maximum number of recommendations returned per user */
  MAX_RESULTS: 10,
  /** Minimum eligibility score threshold (0–1) to be considered a match */
  ELIGIBILITY_THRESHOLD: 0.7,
  /** Minimum score to include in recommendation results */
  MIN_SCORE: 0,
} as const;

// ─── Chat ────────────────────────────────────────────────────────────────────
export const CHAT = {
  /** Number of most-recent messages sent as context to the LLM */
  HISTORY_WINDOW: 10,
  /** Maximum output tokens for Gemini responses */
  MAX_OUTPUT_TOKENS: 512,
} as const;

// ─── Rate Limiting ───────────────────────────────────────────────────────────
export const RATE_LIMIT = {
  /** Time window in milliseconds */
  WINDOW_MS: 15 * 60 * 1000,
  /** Maximum requests allowed per window per IP */
  MAX_REQUESTS: 100,
} as const;

// ─── Validation ──────────────────────────────────────────────────────────────
export const VALIDATION = {
  /** Minimum username length */
  MIN_USERNAME_LENGTH: 3,
  /** Maximum username length */
  MAX_USERNAME_LENGTH: 50,
  /** Minimum password length */
  MIN_PASSWORD_LENGTH: 8,
  /** Regex for Indian phone numbers */
  PHONE_REGEX: /^[6-9]\d{9}$/,
  /** Regex for Indian pincode */
  PINCODE_REGEX: /^\d{6}$/,
  /** Regex for 12-digit Aadhaar number */
  AADHAAR_REGEX: /^\d{12}$/,
} as const;

// ─── Application Statuses ────────────────────────────────────────────────────
export const APPLICATION_STATUS = {
  SUBMITTED: "submitted",
  UNDER_REVIEW: "under_review",
  APPROVED: "approved",
  REJECTED: "rejected",
  DISBURSED: "disbursed",
} as const;

export type ApplicationStatus =
  (typeof APPLICATION_STATUS)[keyof typeof APPLICATION_STATUS];

// ─── Grievance Priorities & Statuses ─────────────────────────────────────────
export const GRIEVANCE_PRIORITY = {
  LOW: "low",
  MEDIUM: "medium",
  HIGH: "high",
} as const;

export const GRIEVANCE_STATUS = {
  OPEN: "open",
  IN_PROGRESS: "in_progress",
  RESOLVED: "resolved",
  CLOSED: "closed",
} as const;

// ─── Supported Languages ────────────────────────────────────────────────────
export const SUPPORTED_LANGUAGES = [
  "en", // English
  "hi", // Hindi
  "bn", // Bengali
  "te", // Telugu
  "mr", // Marathi
  "ta", // Tamil
  "gu", // Gujarati
  "kn", // Kannada
  "ml", // Malayalam
  "pa", // Punjabi
] as const;

export type SupportedLanguage = (typeof SUPPORTED_LANGUAGES)[number];
