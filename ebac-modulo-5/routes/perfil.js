const express =require('express');

const { Perfil } = require('../models/perfis');

const router = express.Router();

router.get('/', (_, res)=>{
    Perfil.find({}).then((perfil) => {
        
        res.render('perfil/index',{
            nomeUsuario: "Ragazzini",
            perfil: perfil,
        });



    })
   
});

module.exports = router;