const express = require('express');

const router = express.Router();

router.get('/', (_, res)=>{
    res.send('Essa é a rota principal!');
});

module.exports =router;