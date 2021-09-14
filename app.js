const fs = require('fs');
const express = require('express');
const app = express();

const data = JSON.parse(fs.readFileSync('./data.json', 'utf-8'));


app.get('/users', (req, res) => {
    res.status(200).json(data);
});

app.get('/users/:id', (req, res) => {
    const id = req.params.id * 1;
    const element = data.find((el) => {
        return (el.id == id);
    });
});

app.listen(5001, () => {
    console.log('Server Online on port: 5001');
});