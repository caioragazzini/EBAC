const express = require('express');

const router = express.Router();

router.get('/', (_, res)=> {

    res.send('Rota principal da aplicação');
});

module.exports = router;
