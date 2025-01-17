/* Por supuesto que se puede introducir los modulos en variables let pero conviene mas usar const ya que no vas a estar modificando los modulos */
const path = require('path')

const filePath = path.join('/public', 'dist', '/styles', 'main.css' ); /* esta funcion permite unir rutas de directorios y además las adapta directamente para el sistema operativo que se está usando */
 
console.log(path.basename(filePath)) /* Basename lo que hace es devolver solo el archivo que está en la ruta*/

console.log(path.dirname(filePath)) /* Lo contrario a Basename, devuelve pero solo la ruta */

console.log(path.parse(filePath)) /* Devuelve la ruta del archivo convertida en un objeto */

console.log(path.resolve('dist')) /* alternativa a join, lo que hace es resolver toda la ruta entera a partir de un directorio individual*/

/* Con el modulo path podemos ejecutar una determinada logica dependiendo del OS */