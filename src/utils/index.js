export const formatoMoneda = (valor) => {
  const formattedValue = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
  }).format(valor);

  // Eliminar la coma y los dos últimos ceros
  const trimmedValue = formattedValue.replace(/,00$/, '');

  return trimmedValue;
};