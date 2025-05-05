// ecosystem.config.js
module.exports = {
    apps: [
      {
        name: "losemilios-FRONT",
        script: "serve",
        args: "-s dist -l 6004"
      }
    ]
  }