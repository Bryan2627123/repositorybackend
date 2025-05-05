require('dotenv').config()
const http = require('http')

function requestController(req, res) {
  console.log('Bienvenidos al curso');
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end('<h1>Aplicación desplegada con éxito 🚀</h1>');
}

const server = http.createServer(requestController)

const PORT = process.env.PORT || 3000

server.listen(PORT, function() {
  console.log("Aplicación corriendo en: " + PORT)
})
