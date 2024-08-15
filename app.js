const express = require('express');
const path = require('path');

const routerPerfil = require('./ebac-modulo-5/routes/perfil');
const { connect } = require('./ebac-modulo-5/models'); 

const app = express();
const porta = 3000;

app.set('views', path.join(__dirname, 'ebac-modulo-5', 'views'));
app.set('view engine', 'ejs');

app.use('/perfil', routerPerfil);
app.use((req, res, next) => {
  res.set('Cache-Control', 'no-store');
  next();
});

app.listen(porta, async () => {
  connect(); 
  console.log(`Servidor ouvindo na porta ${porta}`);
});