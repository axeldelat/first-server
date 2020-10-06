const http = require('http')

const server = http.createServer((request, response)=>{
    console.log('Petición entrante---- ' + request.url)
    console.log('Method: ', request.method)
    if (request.url === "/hola" && request.method === 'POST'){
      response.write('hola Koders, estás intentando crear')
    } else if (request.url === "/hola" && request.method === 'GET'){
      response.write('hola koder estás intentando obtener')
    } else if (request.url === "/adios" && request.method === 'POST'){
      response.write('hasta la vista baby con un post')
    } else if (request.url === "/adios" && request.method === 'GET'){
      response.write('Hasta la vista baby con get')
    }
    else {
      response.setHeader('Content-Type', 'text/html')
      response.write('Tu eres un Koder y yo soy un Texto HTML')
    }
    response.end()
})

server.listen(8080, () => {
  console.log('El servidor está escuchando el puerto 8080')
})


/*
Práctica #1
  Responder diferente en cada ruta
  /hola => Hola Koder, Bienvenido
  /adios => Hasta la vista baby

  Agregar a un repo de github
*/

/*

  Práctica #2
  Hacer que las rutas de hola y adios reaccionen a los diferentes métodos (Get Post)

  POST /hola-> hola Koders, estas intentando crear
  GET /hola -> hola koder estas intentando obtener

  POST /adios -> hasta la vista baby con un post
  GET /adios -> hasta la vista baby con get

  */

/*
  Práctica #3
  (Desde servidor / código )
  Investigar como cambiar el header content-type de la respuesta
  Cambiar el header content type de la respuesta por el mime type de html
*/
