
const dividir = (dividendo, divisor) => {
    
  if (divisor === 0) {
    return "No se puede dividir por 0 !!";
  }

  const resultado = dividendo / divisor;

  return resultado;
};

module.exports = dividir;