const multiplicar = (numero1, numero2) => {
    
  if (numero1 === 0 || numero2 === 0) {
    return 0;
  }

  const resultado = numero1 * numero2;

  return resultado;
};

module.exports = multiplicar;
