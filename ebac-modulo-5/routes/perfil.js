const express = require('express');
const { Perfil } = require('../models'); 

const router = express.Router();

router.get('/', async (_, res) => {
  try {
    const perfils = await Perfil.find({});
    res.render('index', {
      nomeUsuario: "Ragazzini",
      perfilUser: perfils,
    });
  } catch (error) {
    console.error('Error fetching profiles:', error);
    res.status(500).send('Internal server error');
  }
});

module.exports = router;