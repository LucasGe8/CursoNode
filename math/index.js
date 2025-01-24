export function sumar(x, y) {
  return x + y;
}
export function restar(x, y) {
  return x - y;
}
export function multiplicar(x, y) {
  return x * y;
}
export function dividir(x, y) {
  return x / y;
}

/* console.log(sumar(10,20))
console.log(restar(10,20))
console.log(multiplicar(10,20))
console.log(dividir(10,20)) */

/* También se pueden exportar funciones */
/* module.exports = {
    sumar,
    restar,
    multiplicar,
    dividir
} */

/* Y de esta manera se exporta en Ecmascript */
export default {
  sumar,
  restar,
  multiplicar,
  dividir,
};
