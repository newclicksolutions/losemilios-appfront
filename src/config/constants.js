const CONSTANTS = {
  URL_API: "https://api.losemilios.com/api/v1",
  VERSION_API: "v1",
  IMG_PATH: "https://api.losemilios.com/"
};

const CONSTANTS_PROD = {
  URL_API: "https://apitpa.newclicksoluciones.com/api/v1",
  VERSION_API: "v1",
  IMG_PATH: "https://api.losemilios.com/"
};

const TEST_ENVIRONMENT = true;

const CONSTANTS_TEST = TEST_ENVIRONMENT ? CONSTANTS : CONSTANTS_PROD;

export { CONSTANTS_TEST, TEST_ENVIRONMENT };

//En los objetos de las constantes se van a agregar las variables que van a definir el comportamiento de la aplicación
//TEST_ENVIRONMENT, nos ayudara a trabajar la aplicación en modo de prueba o producción
