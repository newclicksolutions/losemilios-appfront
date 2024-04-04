module.exports = {
    publicPath: process.env.NODE_ENV === "production" ? "" : "/",
    productionSourceMap: false,
    devServer: {
      port: 6005,
      disableHostCheck: true,
    },
  };