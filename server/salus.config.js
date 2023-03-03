const path = require("path");

const config = {
  disableHelmet: true,
  siteIndexFile: path.resolve(__dirname, "../bundle/index.html"),
  srcDefaults: ["'self'", "*.mob.land"],
  staticFolders: ["assets", "images", "styles", "bundle"],
  helmetConfig: {
    contentSecurityPolicy: {
      directives: {
        defaultSrc: [],
        connectSrc: [],
        fontSrc: ["data", "fonts.gstatic.com/"],
        imgSrc: ["www.w3.org/"],
        scriptSrc: ["self", "use-nonce"],
        styleSrc: ["fonts.googleapis.com/"],
      },
    },
    crossOriginEmbedderPolicy: {},
    crossOriginOpenerPolicy: {},
    crossOriginResourcePolicy: {},
    dnsPrefetchControl: {},
    expectCt: {},
    frameguard: {},
    hidePoweredBy: {},
    hsts: {},
    ieNoOpen: {},
    noSniff: {},
    originAgentCluster: {},
    permittedCrossDomainPolicies: {},
    referrerPolicy: {},
    xssFilter: {},
  },
  rateLimiter: {
    windowMs: 10000,
    max: 400,
  },
  debug: true,
};

module.exports = { config };
