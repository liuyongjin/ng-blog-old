module.exports = {
  apps : [{
    name: "ng-blog",
    script: "./dist/server.js",
    env_production: {
      NODE_ENV: "production",
    },
    env: {
      NODE_ENV: "development",
    }
  }]
};
