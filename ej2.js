//1 - poner en la terminal esto: npm install express

// Importamos el módulo express
const express = require('express');

// Creamos una app de Express
const app = express();

// Definimos el puerto
const puerto = 3000;

// 4. Rutas
// Ruta raíz - GET
app.get('/', (req, res) => {
  res.send('Bienvenido a nuestro servidor Express');
});

// // Rutas de PRODUCTOS
app.get('/productos', (req, res) => {
  res.send('Listado de productos');
});

app.post('/productos', (req, res) => {
  res.send('Crear un producto');
});

app.put('/productos', (req, res) => {
  res.send('Actualizar un producto');
});

app.delete('/productos', (req, res) => {
  res.send('Borrar un producto');
});

// // Rutas de USUARIOS
app.get('/usuarios', (req, res) => {
  res.send('Listado de usuarios');
});

app.post('/usuarios', (req, res) => {
  res.send('Crear un usuario');
});

app.put('/usuarios', (req, res) => {
  res.send('Actualizar un usuario');
});

app.delete('/usuarios', (req, res) => {
  res.send('Borrar un usuario');
});

// 5. Iniciamos el servidor
app.listen(puerto, () => {
  console.log(`Servidor Express escuchando en el puerto ${puerto}`);
});