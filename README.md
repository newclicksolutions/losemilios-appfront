# EnftyMart Vue Template

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```
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

UPDATE wp_options SET option_value = 'https://lotto-panama.com/' WHERE wp_options.option_id = 1;

scp elementor-pro-3.16.2.zip ssh root@172.233.189.40 /var/www/lotto-panama.com/wp-content/plugins