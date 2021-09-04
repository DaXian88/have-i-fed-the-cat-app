// src/app.js
const express = require('express');
const { Cat } = require('./models');

const app = express();

// we expect to have to parse json from request bodies
app.use(express.json());

// we will put our routes and controller functions here
app.post('/cats', (req, res) => {
    Cat.create(req.body).then(cat => res.status(201).json(cat));
});

app.get('/cats', (req, res) => {
    Cat.findAll(req.body).then(cat => res.status(201).json(cat));
});

app.get('/cats/:catId', (req, res) => {
    Cat.findByPk(req.params.catId).then(cat => res.status(201).json(cat));
});

app.patch('/cats/:catId', (req, res) => {
    Cat.update(req.body, { where: { id: req.params.catId } }).then(cat => res.status(201).json(cat));
});

app.delete('/cats/:catId', (req, res) => {
    Cat.destroy( { where: { id: req.params.catId } }).then(cat => res.status(201).json(cat));
})

module.exports = app;