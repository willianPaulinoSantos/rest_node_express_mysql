const Atendimento = require('../models/atendimentos');


module.exports = function(app){
    app.get("/atendimentos", function(req, res){
        res.send("Você está na rota de atendimentos e está realizand um GET");
    });

    app.post("/atendimentos", function(req, res){
        const atendimento = req.body
        Atendimento.adiciona(atendimento)
        res.send("Você está na rota de atendimentos e está realizando um POST");
    })
}