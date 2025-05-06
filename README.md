# EnftyMart Vue Template

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```
\
npm run build && pm2 start ecosystem.config.js && pm2 save && pm2 startup

pm2 start "npm run serve" --name losemilios-FRONT

pm2 serve -s dist --name emiliosFRONT

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### node legacy provider
export NODE_OPTIONS=--openssl-legacy-provider
