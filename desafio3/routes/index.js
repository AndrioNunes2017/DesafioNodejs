var express = require('express');
var router = express.Router();

var alunoController = require('../controller/alunoController');

router.get('/', function(req, res) {
  alunoController.lista(req,res);
});

router.get('/AddAluno', function(req, res){
  alunoController.addAluno(req, res);
});

router.post('/saveAluno', function(req, res){
  alunoController.save(req, res);
});

module.exports = router;
