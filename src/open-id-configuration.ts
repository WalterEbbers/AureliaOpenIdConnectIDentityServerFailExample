﻿import { OpenIdConnectConfiguration } from "aurelia-open-id-connect";
import { UserManagerSettings, WebStorageStateStore } from "oidc-client";

const appHost = "http://localhost:9000";

export default {
  loginRedirectRoute: "/private",
  logoutRedirectRoute: "/index",
  unauthorizedRedirectRoute: "/index",
  userManagerSettings: {

    // The number of seconds in advance of access token expiry
    // to raise the access token expiring event.
    accessTokenExpiringNotificationTime: 1,

    // Either host your own OpenID Provider or select a certified authority
    // from the list http://openid.net/certification/
    authority: "http://localhost/Identity/",

    automaticSilentRenew: true,

    // IdentityServer4 supports OpenID Connect Session Management
    // https://openid.net/specs/openid-connect-session-1_0.html
    monitorSession: true,
    checkSessionInterval: 2000,

    // The client or application ID that the authority issues.
    client_id: "CustomerClient",

    filterProtocolClaims: true,
    loadUserInfo: false,
    post_logout_redirect_uri: `${appHost}/signout-oidc`,
    redirect_uri: `${appHost}/signin-oidc`,
    response_type: "id_token",
    scope: "openid api",
    // number of millisecods to wait for the authorization
    // server to response to silent renew request
    silentRequestTimeout: 10000,
    silent_redirect_uri: `${appHost}/signin-oidc`,
    userStore: new WebStorageStateStore({
      prefix: "oidc",
      store: window.localStorage,
    }),
  } as UserManagerSettings,
} as OpenIdConnectConfiguration;
