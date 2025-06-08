// ------------------Importaciones--------------------
import express from 'express';
import data from './database.js';
// -----------------Importaciones---------------------

// ------------------Configuración-------------------
const app = express();
const PORT = 3000;
const items = data.items;
// -----------------Configuración---------------------

// ------------------Respuesta a la solicitud-------------------
app.get('/api/characters', (req, res) => {
    console.log('Respuesta a la solicitud de personajes');
    res.setHeader('Content-Type', 'application/json');
    res.json({items}); // Envia la lista de personajes como respuesta en formato JSON
});
// -----------------Respuesta a la solicitud---------------------

// ------------------Obtiene personaje por ID-------------------
app.get('/api/characters/:id', (req, res) => {
    console.log(`Obteniendo personaje por ID: ${req.params.id}`)});
// -----------------Obtiene personaje por ID--------------------

// Verifica que el ID sea un número
const id = req.params.id;
const idNumber = parseInt(id);

// Si el ID no es un número, devuelve un error 400
if (isNaN(idNumber)) {
    return res.status(400).json({
        message: 'Invalid parameter: ID must be a number',
        error: 'Bad Request',
        statusCode: 400,
    });
}