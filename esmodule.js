import math, {
  sumar,
  restar,
  multiplicar,
  dividir,
} from "./math/index.js"; /* Esto vendría a ser igual que el require */
/* Se puede exportar e importar de manera individual */
console.log(math.sumar(20, 45));
console.log(math.restar(20, 45));
console.log(math.multiplicar(20, 45));
console.log(math.dividir(20, 45));
