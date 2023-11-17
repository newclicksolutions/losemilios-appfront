import moment from 'moment';

export const formatoMoneda = (valor) => {
  const formattedValue = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
  }).format(valor);

  // Eliminar la coma y los dos últimos ceros
  const trimmedValue = formattedValue.replace(/,00$/, '');

  return trimmedValue;
};

export const getFormattedTime = () =>{
  const currentTime = moment().format('hh:mm A');
  return currentTime;
}

export const getstore = () =>{
  if (sessionStorage.getItem("shopingcart")) {
    if (this.storedCart.length === 0) {
        return true;
    } else {
      return false;
    }
  }
}




