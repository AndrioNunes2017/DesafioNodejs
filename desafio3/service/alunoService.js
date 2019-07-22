var aluno = require('../model/alunos');

var alunoService = {};

alunoService.verificaNumero = function isNumeric(valor){
    return !isNaN(valor) && isFinite(valor) && valor !='';
};

alunoService.list = function(req, res){
    aluno.find({}).exec(function(err, alunos){
        if(err)
            console.log(err);
        else
            res.render("../views/index",{alunos: alunos});
    });
};

alunoService.saveAluno = function(Jsonaluno){
    var alu = new aluno(Jsonaluno);
    alu.save(function(err){
        if(err){
            throw new Error('Erro ao tentar gravar');
        }
    });
};

module.exports = alunoService;