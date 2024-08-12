const mongoose = require('mongoose');

const PerfilSchema = require('../perfis/perfil');

const Perfil = mongoose.model('perfil', PerfilSchema);

const connect =()=>{

    mongoose.connect('mongodb://localhost:27017/ebac-perfil')
    
};

module.exports = {
    connect,
    Perfil,
}