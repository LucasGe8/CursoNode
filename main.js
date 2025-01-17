
/* Aquí poniendo {} y presionando Ctrl + Espacio se puede visualizar qué puedo importar desde el modulo que creé, es necesario que primero declare la ruta del modulo, además puedo importar varias cosas simplemente separandolas con ',' por ejemplo: */
const {myArray, myNumber,myWebAddress, user} = require('./modules/myModule')


console.log(myArray)
console.log(myNumber)
console.log(myWebAddress)
console.log(user)
