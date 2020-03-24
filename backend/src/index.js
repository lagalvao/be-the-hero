const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors({
    //origin: 'http://meuapp.com'
}));

//Entender que as requisições serao feitas pelo formado JSON
app.use(express.json());
app.use(routes);

app.listen(3333);