const http = require("http");

/* Creamos un servidor http, se compone de request y response*/
const server = http.createServer((request, response) => {
  console.log(request.url);

  if (request.url === "/") {
    response.write("Welcome to the Server");
    return response.end();
  }
  if (request.url === "/about") {
    response.write("Acerca De: ");
    return response.end();
  }
  /* Usando condicionales para cambiar el response según la solicitud (También se le puede pasar html) */
  response.write(`           
        <h1>Not Found</h1>
        <p>No encontramos la pagina que estabas buscando</p>
        <img src="https://i.pinimg.com/736x/f0/2c/f2/f02cf231501047982a7cd7f2dea40144.jpg" alt = "Imagen" style = "width:auto; height:200px">
        <br>
        <a href="/">Volver a la pagina principal</a>
        `); /* Con `` se pueden crear strings de varias lineas */
  response.end();
});

server.listen(3000); /*Asigno a mi servidor http el puerto 3000*/

console.log("Servidor escuchando en el puerto 3000");
