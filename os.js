/* si no le colocamos './' antes del nombre del modulo que queremos instalar en lugar de buscar en el directorio de nuestro proyecto node automáticamente buscara en su propio directorio, de esta manera podemos utilizar los modulos que ya son de node, por ejemplo el modulo os */
const os = require('os')

console.log(os.userInfo())
console.log(os.uptime()) /* Esta función uptime muestra cuanto tiempo lleva encendido el ordenador en segundos*/
console.log(os.platform()) /* Esta función determina qué sistema operativo es el del equipo actual */
console.log(os.totalmem()) /* Esta función determina la memoria ram total*/
console.log(os.freemem()) /* Esta función determina la memoria ram libre*/


/* No siempre es necesario usar console.log(), también existen funciones como console.table() donde podemos colocar datos dentro de una tabla */

console.table({
    os: os.platform(),
    version: os.release(),
    totalMemory: os.totalmem(),
})