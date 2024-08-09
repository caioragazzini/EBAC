const express = require("express");

const { Pedido } = require('../models');

const router = express.Router();

router.get('/', (_, res)=>{
    Pedido.find({}).then((pedidos)=> {

        res.render('pedidos/index', {
            nomeUsuario:"Caio Ragazzini",
            pedidos: pedidos,
        });

    })
       
});

module.exports =router;