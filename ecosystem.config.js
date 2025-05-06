module.exports = {
    apps: [
      {
        name: "losemilios-FRONT",
        script: "node_modules/.bin/serve",  // usa la ruta completa a serve
        args: ["-s", "dist", "-l", "6005"], // usa un array en lugar de un string
        cwd: ".", // ajusta si tu proyecto está en otra carpeta
        env: {
          NODE_ENV: "production"
        }
      }
    ]
  };
  