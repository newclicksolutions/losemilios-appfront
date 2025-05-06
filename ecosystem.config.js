module.exports = {
  apps: [
    {
      name: "losemilios-FRONT",
      script: "./start-frontend.sh",
      interpreter: "/bin/bash",
      exec_mode: "fork",
      env: {
        NODE_ENV: "production"
      }
    }
  ]
};
