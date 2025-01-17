
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


/* También se puede exportar de esta forma: */
module.exports.user = user;
module.exports.myNumber = myNumber;
module.exports.myArray = myArray;
module.exports.myWebAddress = myWebAddress;

/* Incluso se puede exportar sin la necesidad de meterlo en una constante o variable, se puede crear el grupo dentro de la declaración por ejemplo */

/* Además esta es la forma más utilizada generalmente */
module.exports = { 
    myWebAddress,
    myNumber,
    myArray,
    user
}

/* Obs: Si no se quiere compartir algo en específico simplemente no hay que exportarlo */

/* console.log(module) */