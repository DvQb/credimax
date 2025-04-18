// backend_express/index.js

const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3001;
const DB_PATH = path.join(__dirname, 'clientes.json');

app.use(cors());
app.use(express.json());

// Leer datos existentes del archivo (si existe)
const leerClientes = () => {
  try {
    const data = fs.readFileSync(DB_PATH, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
};

// Guardar datos en el archivo
const guardarClientes = (clientes) => {
  fs.writeFileSync(DB_PATH, JSON.stringify(clientes, null, 2), 'utf-8');
};

// Endpoints
app.get('/clientes', (req, res) => {
  const clientes = leerClientes();
  res.json(clientes);
});

app.post('/clientes', (req, res) => {
  const nuevoCliente = req.body;
  const clientes = leerClientes();
  clientes.push(nuevoCliente);
  guardarClientes(clientes);
  res.status(201).json(nuevoCliente);
});

app.listen(PORT, () => {
  console.log(`Servidor Express corriendo en http://localhost:${PORT}`);
});
