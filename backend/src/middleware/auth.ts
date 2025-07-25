import { auth } from "express-oauth2-jwt-bearer";

export const jwtCheck = auth({
  audience: process.env.AUTH0_AUDIENCE || 'food-ordering-app-api',
  issuerBaseURL:  process.env.AUTH0_ISSUER_BASE_URL || 'https://dev-sagarauth.us.auth0.com/',
  tokenSigningAlg: 'RS256'
});