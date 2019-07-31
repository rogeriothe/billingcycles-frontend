module.exports = {
  apps : [{
    name: "todo-backend",
    script: "./src/index.jss",
    env: {
      NODE_ENV: "development",
    },
    env_production: {
      NODE_ENV: "production",
    }
  }]
}