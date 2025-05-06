module.exports = {
    apps: [
      {
        name: "losemilios-FRONT",
        script: "serve",
        args: "-s dist -l 6004",
        cwd: ".", // Ruta donde está la carpeta dist (generalmente en la raíz del proyecto Vue)
        env: {
          NODE_ENV: "production"
        }
      }
    ]
  };