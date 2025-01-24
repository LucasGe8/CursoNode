const { readFile } = require("fs/promises");
/* De esta forma con el /promises las funciones del modulo fs ya vienen convertidas en promesas */

async function read() {
  try {
    /* throw new Error("Esto es un error inesperado");  ---> Esto es una forma de generar un error, el throw provoca que todo el código siguiente ya no se ejecute*/
    const result = (await readFile("./data/first.txt")).toString();
    const result2 = (await readFile("./data/second.txt")).toString();
    const result3 = (await readFile("./data/third.txt")).toString();
    const result4 = (await readFile("./data/fourth.txt")).toString();
    console.log(result);
    console.log(result2);
    console.log(result3);
    console.log(result4);
  } catch (error) {
    console.log(error);
  }
}
read();
