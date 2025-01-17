const fs = require('fs')

const first = fs.readFileSync('./data/first.txt', 'utf-8') /* Este método lee un archivo pasandole la ruta, sin embargo lo devuelve en estado 'crudo' y es necesario aplicarle un formato para que se pueda ver como un string por ejemplo, para eso necesitamos pasarle otro parámetro con el tipo de codificación, en este caso utf-8 para convertirlo a un string tipico */
const second = fs.readFileSync('./data/second.txt')

console.log(first)
console.log(second.toString()) /* También se puede usar el metodo toString() para convertir el buffer a texto*/

const title = 'Este contenido lo estoy agregando al archivo fourth'

fs.writeFileSync('./data/third.txt', 'Este segundo parametro define el contenido del archivo creado') /* Este recibe una ruta para colocar un archivo, por ejemplo el archivo third.txt en la carpeta data */
fs.writeFileSync('./data/fourth.txt', title)  /* Si yo vuelvo a ejecutar el archivo lo que hace es sobreescribirlo, por ejemplo aquí si cambio el valor de la variable title, al ejecutar el contenido de fourth.txt cambiará al nuevo valor que le asigné */

fs.writeFileSync('./data/fourth.txt', title, {
    flag: 'a'
})  /* En este caso como tercer parámetro le coloco un objeto, donde hay un atributo flag con el valor 'a' (proviene de append), lo que hace es determinar que lo que ahora se pase con writeFileSync se va a agregar en lugar de sobreescribir el archivo ya existente, además cada vez que se ejecute esto se va a volver a agregar*/