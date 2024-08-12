const express = require('express');
const path = require('path');

const routerPrincipal = require('./ebac-modulo-5/routes/principal');
const routerPedidos = require('./ebac-modulo-5/routes/pedidos') ;
const routerPerfil =require('./ebac-modulo-5/routes/perfil');
const {connect} = require('./ebac-modulo-5/models/pedidos')

const app = express();
const porta =3000;

app.set('views', path.join(__dirname, 'ebac-modulo-5', 'views'));
app.set('view engine', 'ejs');

app.use('/perfis', routerPerfil);
app.use('/pedidos', routerPedidos);
app.use('/', routerPrincipal);


app.listen(porta, () => {
    connect();
    console.log(`Servidor ouvindo na porta ${porta}`);
});