module.exports = {
  apps: [
    {
      name: "ethiopianchurch-backend",
      script: "src/server.js",
      cwd: "./",
      env: {
        NODE_ENV: "development",
        PORT: "4000",
        // DATABASE_URL and JWT_SECRET will be read from .env by dotenv
      },
      env_production: {
        NODE_ENV: "production",
        PORT: "4000"
      },
      watch: false,
      autorestart: true,
      max_restarts: 10,
      time: true
    }
  ]
}