module.exports = {
  apps: [
    {
      name: "controlplaga-app",
      script: "npm",
      args: "start",
      port: 3003,
      env: {
        NODE_ENV: "production",
        PORT: 3003,
      },
    },
  ],
};
