try {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  console.log(data);
} catch (error) {
  console.log(error);
}

/* Debido a que incluimos type module en el package.json, se puede escribir el try catch sin meterlo en una función */
