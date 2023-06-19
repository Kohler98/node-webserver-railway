const http = require('http')

http.createServer((req, res)=>{
    // res.setHeader('Content-Dispostion','Attachment; filename=lista.csv')
    // res.writeHead(200, {'Content-Type': 'datos/csv'})
    
    // const person = {
        //     id:1,
        //     nombre: 'Victor'
        // }
        // res.write('id:Nombre')
        // res.write('1:Victor')
        // res.write('2:Simon')
        // res.write('3:Gabriel')
        // res.write('4:Alejandro')
    console.log("hola mundo")
    res.end()
})

.listen(8080)

console.log("Escuchando en el puerto", 8080)