const express = require("express");

const { Pedido } = require('../models/pedidos');

const router = express.Router();

router.get('/', (_, res)=>{
    Pedido.find({}).then((pedido)=> {

        res.render('pedidos/index', {
            nomeUsuario:"Caio Ragazzini",
            pedidos: pedido,
        });

    })
       
});

module.exports =router;