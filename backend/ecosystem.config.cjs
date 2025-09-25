module.exports = {
  apps: [
    {
      name: "ethiopianchurch-backend",
      script: "src/server.js",
      cwd: "./",
      env: {
        NODE_ENV: "development",
        PORT: "4000",
      },
      env_production: {
        NODE_ENV: "production",
        PORT: "4000",
      },
      watch: false,
      autorestart: true,
      max_restarts: 10,
      time: true,
    },
  ],
};


