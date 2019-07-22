var mongoose = require('mongoose');

var alunosSchema = new mongoose.Schema({
    nome: String,
    idade: Number
});

module.exports = mongoose.model('alunos', alunosSchema);