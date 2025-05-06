module.exports = {
  apps: [
    {
      name: "losemilios-FRONT",
      // ejecuta como comando de shell, no como módulo node
      script: "bash",
      args: ["-c", "npx serve -s dist -l 0.0.0.0:6004"],
      cwd: ".", // o ruta al frontend
      env: {
        NODE_ENV: "production"
      }
    }
  ]
};