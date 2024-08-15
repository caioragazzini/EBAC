const mongoose = require('mongoose');

const PerfilSchema = require('./perfil');

const Perfil = mongoose.model('Perfil', PerfilSchema);

const connect = () => {
    mongoose.connect('mongodb://localhost:27017/ebac-perfil')
        .then(() => console.log('Conectado ao MongoDB'))
        .catch(err => console.error('Erro ao conectar ao MongoDB:', err));
};

module.exports = {
    connect,
    Perfil,
}