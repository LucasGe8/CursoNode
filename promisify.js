const { readFile } = require("fs");
const { promisify } = require("util");

const readFilePromise = promisify(readFile)
/* Elimina prácticamente la necesidad de crear el bloque de la función donde se retorna la nueva promesa, es más eficiente que todos los métodos antes vistos */
async function read() {
    try {
        /* throw new Error("Esto es un error inesperado");  ---> Esto es una forma de generar un error, el throw provoca que todo el código siguiente ya no se ejecute*/
        const result = (await readFilePromise("./data/first.txt")).toString();
        const result2 = (await readFilePromise("./data/second.txt")).toString();
        const result3 = (await readFilePromise("./data/third.txt")).toString();
      const result4 = (await readFilePromise("./data/fourth.txt")).toString();
      console.log(result);
      console.log(result2);
      console.log(result3);
      console.log(result4);
    } catch (error) {
      console.log(error);
    }
  }
  read();