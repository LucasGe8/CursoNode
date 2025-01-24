const http = require("http");
const { createReadStream } = require("fs");

const server = http.createServer((req, res) => {
  const fileStream = createReadStream("./data/bigfile.txt", {
    encoding: "utf-8",
  });

  /* el método pipe sirve para mandarle un dato a otra función, aquí por ejemplo le manda cada chunk al response */
  fileStream.on("data", (chunk) => {
    fileStream.pipe(res);
  });

  fileStream.on("error", (error) => {
    console.log(error);
  });
});
server.listen(3000);
console.log("Server Running on Port 3000");
