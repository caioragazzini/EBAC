const express = require('express');

const router = express.Router();

router.get('/', (_, res)=>{

    res.render('perfil/index',{ 
        nomeUsuario : "Caio Ragazzini",
        idade : 40
    });

});

module.exports =router;

