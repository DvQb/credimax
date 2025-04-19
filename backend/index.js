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



const DB_USUARIOS = path.join(__dirname, 'usuarios.json');

const leerUsuarios = () => {
  try {
    const data = fs.readFileSync(DB_USUARIOS, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
};

const guardarUsuarios = (usuarios) => {
  fs.writeFileSync(DB_USUARIOS, JSON.stringify(usuarios, null, 2), 'utf-8');
};


app.post('/register', (req, res) => {
  const { correo, password } = req.body;

  if (!correo || !password) {
    return res.status(400).json({ message: 'Correo y contraseña requeridos' });
  }

  const usuarios = leerUsuarios();

  const usuarioExistente = usuarios.find(u => u.correo === correo);

  if (usuarioExistente) {
    return res.status(409).json({ message: 'Usuario ya registrado' });
  }

  usuarios.push({ correo, password });
  guardarUsuarios(usuarios);

  res.status(201).json({ message: 'Usuario registrado exitosamente' });
});

app.post('/login', (req, res) => {
  const { correo, password } = req.body;
  const usuarios = leerUsuarios();

  const usuario = usuarios.find(
    (u) => u.correo === correo && u.password === password
  );

  if (usuario) {
    res.status(200).json({ message: 'Login exitoso' });
  } else {
    res.status(401).json({ message: 'Correo o contraseña incorrectos' });
  }
});
