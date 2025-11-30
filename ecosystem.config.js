module.exports = {
  apps: [
    {
      name: "controlplaga-app",
      script: "npm",
      args: "start",
      port: 3007,
      env: {
        NODE_ENV: "production",
        PORT: 3007
      }
    }
  ]
};
