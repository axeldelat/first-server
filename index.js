const http = require('http')

const server = http.createServer((request, response)=>{
    console.log('Petición entrante---- ' + request.url)
    response.write('Hola desde node')
    response.end()
})

server.listen(8080, () => {
  console.log('El servidor está escuchando el puerto 8080')
})


/*
  Responder diferente en cada ruta
  /hola => Hola Koder, Bienvenido
  /adios => Hasta la vista baby

  Agregar a un repo de github
*/
