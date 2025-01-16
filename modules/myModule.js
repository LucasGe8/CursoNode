const myWebAddress = "instagram.com/lukasg8_"
const myNumber = 30
const myArray = [10, 20, 30]
const user = {
    name: 'Lucas',
    lastname: 'Godoy'
}
/* Agrupamos los elementos */
const group = {
    myWebAddress: myWebAddress,
    myNumber: myNumber,
    myArray: myArray,
    user: user
}
/* También se puede hacer de la siguiente manera: */
const group2 = {
    myWebAddress,
    myNumber,
    myArray,
    user
}
/* Exportamos */
module.exports = group;

/* Incluso se puede exportar sin la necesidad de meterlo en una constante o variable, se puede crear el grupo dentro de la declaración por ejemplo */

/* console.log(module) */