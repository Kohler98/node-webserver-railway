require('dotenv').config()
const express = require('express')
var hbs = require('hbs');
const app = express()


const port = process.env.PORT


//handlebar
app.set('view engine', 'hbs')
hbs.registerPartials(__dirname + '/views/partials');

//es una funcion que se ejecuta antes de otra, para servir contenido estatico
app.use(express.static('templated-roadtrip'))

app.get('/', function (req, res) {
   
  res.render('home',{
    nombre:'Victor',
    titulo:'Curso de node'
  })
})
app.get('/generic.html', function (req, res) {
   
  res.render('generic',{
    nombre:'Victor',
    titulo:'Curso de node'
  })
})
app.get('/elements.html', function (req, res) {
   
  res.render('elements',{
    nombre:'Victor',
    titulo:'Curso de node'
  })
})
app.get('/index.html' , function (req, res) {
 
  res.render('home',{
    nombre:'Victor',
    titulo:'Curso de node'
  })
})
 
 
app.get('/hola-mundo', function (req, res) {
  res.send('Hello World en otra ruta')
})
app.get('*', function (req, res) {
  res.sendFile(__dirname + '/public/404.html')
})

app.listen(port, ()=>{
  console.log(`Example app listening at https://localhost:${port}`)
})