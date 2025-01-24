const { readFile } = require("fs");

const getText = (pathFile) => {
  return new Promise(function (resolve, reject) {
    readFile(pathFile, "utf-8", (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
};
/* getText(`./data/fourth.txt`)
    .then((result) => console.log(result))
    .then(() => getText('./data/first.txt'))
    .then((result) => console.log(result))
    .catch((error) => console.log(error))

 */
async function read() {
  try {
      /* throw new Error("Esto es un error inesperado");  ---> Esto es una forma de generar un error, el throw provoca que todo el código siguiente ya no se ejecute*/
      const result = await getText("./data/first.txt");
      const result2 = await getText("./data/second.txt");
      const result3 = await getText("./data/third.txt");
    const result4 = await getText("./data/fourth.txt");
    console.log(result);
    console.log(result2);
    console.log(result3);
    console.log(result4);
  } catch (error) {
    console.log(error);
  }
}
read();
