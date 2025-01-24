const fs = require("fs");

/* cuando no ponemos Sync al final de la función estamos ejecutándola de forma asíncrona, por lo que no se la puede almacenar en una variable, aquí específicamente estamos usando la función readFile, donde se compone de parámetros como la ruta de directorio, el tipo de codificación de texto y una función conocida como callback, la cual se ejecutará después de finalizar la ejecución de esta async, también se puede anidar asyncs */

fs.readFile("./data/first.txt", "utf-8", (error, data) => {
  if (error) {
    console.log(error);
  }
  console.log(data);

  fs.readFile("./data/second.txt", "utf-8", (error, data) => {
    if (error) {
      console.log(error);
    }
    console.log(data);
    fs.writeFile(
      "./data/newfile.txt",
      "archivo creado desde asyncfs",
      (err, data) => {
        console.log(error);
        console.log(data);

        fs.writeFile(
          "./data/newfile2.txt",
          "archivo creado desde asyncfs",
          (err, data) => {
            console.log(error);
            console.log(data);

            fs.writeFile(
              "./data/newfile3.txt",
              "archivo creado desde asyncfs",
              (err, data) => {
                console.log(error);
                console.log(data);
              }
            );
          }
        );
      }
    );
  });
});
