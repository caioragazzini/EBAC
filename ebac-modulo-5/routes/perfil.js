const express =require('express');

const router = express.Router();

router.get('/', (_, res)=>{
    res.render('perfil/index',{
        nomeUsuario: "Ragazzini",
        idade:"...."
    });
});

module.exports = router;