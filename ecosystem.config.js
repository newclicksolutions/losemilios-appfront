module.exports = {
  apps: [
    {
      name: "losemilios-FRONT",
      script: "./node_modules/.bin/serve",
      args: ["-s", "dist", "-l", "0.0.0.0:6004"],
      cwd: ".", // o la ruta correcta si está en subcarpeta
      env: {
        NODE_ENV: "production"
      }
    }
  ]
};