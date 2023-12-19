const CONSTANTS_PROD = {
  URL_API: "https://acreapi.herokuapp.com/api/",
  VERSION_API: "v1",
  IMG_PATH: "https://acrefiles.s3.us-east-2.amazonaws.com/files/"
};
const CONSTANTS_TEST = {
  URL_API:"http://localhost:3001/api/v1",
  VERSION_API: "v1",
  IMG_PATH: "https://acrefiles.s3.us-east-2.amazonaws.com/files/"
};

const TEST_ENVIRONMENT = false;

export { CONSTANTS_PROD, CONSTANTS_TEST, TEST_ENVIRONMENT };

//En los objetos de las constantes se van a agregar las variables que van a definir el comportamiento de la aplicación
//TEST_ENVIRONMENT, nos ayudara a trabajar la aplicación en modo de prueba o producción
