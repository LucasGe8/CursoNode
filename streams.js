const {writeFile} = require('fs/promises')

/* const createBigFile = async () => {
    await writeFile('./data/bigfile.txt', 'hello world'.repeat(1000000))
}
 */
//createBigFile()

const {createReadStream} = require('fs')

const stream = createReadStream('./data/bigfile.txt')

stream.on('data', (chunk)=> {
    console.log(chunk.toString()) // ---> también se puede pasarle el parámetro de la codificación de texto utf-8 simplemente a la funcion createReadStream
})

stream.on('end', () => {
    console.log('Ya terminé de leer el archivo')
})

stream.on('error', (error)=>{ 
    console.log(error)
})