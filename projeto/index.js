const customExpress = require("./config/customExpress");
const conexao = require("./infraestrutura/conexao");
const Tabelas = require("./infraestrutura/tabelas");

conexao.connect(function(erro){
    if(erro){
        console.log(erro);
    } else {
        console.log("conectado com sucesso")
        Tabelas.init(conexao)
        const app = customExpress()
        app.listen(8081, function(req, res){ 
            console.log("Servidor rodando"); 
        });
    }
});

