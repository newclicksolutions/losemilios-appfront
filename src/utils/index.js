import moment from 'moment';
import CryptoJS from 'crypto-js';
import 'moment/locale/es'; // Importa el idioma español

export const formatoMoneda = (valor) => {
  const formattedValue = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
  }).format(valor);

  // Eliminar la coma y los dos últimos ceros
  const trimmedValue = formattedValue.replace(/,00$/, '');

  return trimmedValue;
};

export const hashText = (valor) => {
  const hashedText  = CryptoJS.MD5(valor).toString();

  return hashedText;
};

export const getFormattedTime = () =>{
  const currentTime = moment().format('hh:mm A');
  return currentTime;
}

export const formattedDate = (datein) => {
  const date = moment(datein);
  moment.locale('es'); // Establece el idioma en español
  const formattedString = date.format("dddd, D [de] MMMM [de] YYYY h:mm a");
  return formattedString.charAt(0).toUpperCase() + formattedString.slice(1);
}


export const getstore = () =>{
  if (localStorage.getItem("shopingcart")) {
    if (this.storedCart.length === 0) {
        return true;
    } else {
      return false;
    }
  }
}



export const GetEncryptedData =(datasource) =>{
  const clave = 'Rt8wkjc##34laAD9?884**';
  const encrypted = localStorage.getItem(datasource);
  console.log(encrypted)
  if (encrypted) {
    try {
      const bytes = CryptoJS.AES.decrypt(encrypted, clave);
      const decrypted = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
      console.log(decrypted)
      return decrypted;
    } catch (error) {
      console.error("Error al desencriptar datos:", error);
      return null;
    }
  }
  return null;
}




