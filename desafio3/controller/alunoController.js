var alunoService = require('../service/alunoService');

var alunoController = {};

alunoController.lista = function(req, res){
    try {
        alunoService.list(req, res);
    } catch (error) {
        console.log(error.message);
    }
};

alunoController.addAluno = function(req, res){
    res.render("../views/createAluno");
};

alunoController.save = function(req, res){
    try {
        if(!alunoService.verificaNumero(req.body.idade)){
            res.send("<h3>Verifique o campo Idade</h3> ");
        }else{
            alunoService.saveAluno(req.body);
            res.redirect("/");
        }
    } catch (error) {
        console.log(error.message);
    }
};

module.exports = alunoController;