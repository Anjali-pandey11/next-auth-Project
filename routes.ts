/**
 *  An array of routes that are accessible to the public
 * These routed do not require authentication
 *  @type {string[]}
 */

export const publicRoutes = [
  "/",
  "/auth/new-verification"
]

/**cessibl
 *  An array of routes that are used for authentication
 * These routed will redirect logged in user to /settings
 *  @type {string[]}
 */

export const authRoutes = [
  "/auth/login",
  "/auth/register",
  "/auth/error"
]

/**
 * The prefix for API authentication routes
 * Routes that start with this prefix are used for API
 * @type {string[]}
 */

export const apiAuthPrefix = "/api/auth";


export const DEFAULT_LOGIN_REDIRECT= "/settings";


