const express = require('express')
const app = express()
const port = 3000

app.post('/hola', (req, res) => {
  res.send('hola desde express con post')
})

app.get('/hola', (req, res) => {
  res.send('hola desde express con get')
})

app.post('/adios', (req, res) => {
  res.send('adios con post')
})

app.get('/adios', (req, res) => {
  res.send('adios con get')
})

app.all('/*', (req, res) => {
  res.send('no hay nada aquí')
})

app.listen(port, () => {
  console.log(`First Server App listening at http://localhost:${port}`)
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

/*
Práctica #4
Replicar el servidor que teniamos en http ahora con express
  POST /hola -> hola desde express con post
  GET /hola -> hola desde express con get
  GET /adios -> adios con get
  POST /adios adios con post
  Cualquier metodo a culquier otra ruta => no hay nada aqui (edited)
*/
