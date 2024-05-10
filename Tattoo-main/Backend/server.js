const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const cors = require('cors');

const app = express();
const port = 3000;

// Configuración de CORS
app.use(cors());

// Configuración de conexión a MySQL
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "DeluxTattoo"
});

// Establecer conexión a la base de datos
connection.connect((err) => {
  if (err) {
    console.error('Error de conexión a la base de datos:', err);
    return;
  }
  console.log('Conexión exitosa a la base de datos');
});

// Configuración de bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Ruta para manejar la solicitud de reserva de cita
app.post("/guardar_cita", (req, res) => {
  const { nombreCliente, apellidoCliente, telefono, correo, edad, fechaCita } = req.body;

  // Insertar la cita en la base de datos
  const sql = "INSERT INTO cita_tattoo (nombre_cliente, apellido_cliente, telefono, correo, edad, fecha_cita) VALUES (?, ?, ?, ?, ?, ?)";
  connection.query(sql, [nombreCliente, apellidoCliente, telefono, correo, edad, fechaCita], (err, result) => {
    if (err) {
      res.status(500).json({ prompt: "Error al reservar la cita"});
      return;
    }
    res.json({ prompt: "La cita se ha reservado correctamente." });
  });

});

app.listen(port, () => {
  console.log('Servidor escuchando en http://localhost:${port}');
});