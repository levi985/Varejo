const express = require('express');
const app = express();
const produtos = require('./routes/produtos');
const vendas = require('./routes/vendas');
const comentarios = require('./routes/comentarios');

app.use(express.json());
app.use('/api/produtos', produtos);
app.use('/api/vendas', vendas);
app.use('/api/comentarios', comentarios);

app.listen(3000, () => console.log('Servidor rodando na porta 3000'));

