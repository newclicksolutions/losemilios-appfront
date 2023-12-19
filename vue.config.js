module.exports = {
    publicPath: process.env.NODE_ENV === "production" ? "" : "/",
    productionSourceMap: false,
    devServer: {
      port: 3000,
      disableHostCheck: true,
    },
  };