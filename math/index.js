function sumar(x,y) {
    return x + y
}
function restar(x,y) {
    return x - y
}
function multiplicar(x,y) {
    return x * y
}
function dividir(x,y) {
    return x / y
}

/* console.log(sumar(10,20))
console.log(restar(10,20))
console.log(multiplicar(10,20))
console.log(dividir(10,20)) */


/* También se pueden exportar funciones */
module.exports = {
    sumar,
    restar,
    multiplicar,
    dividir
}