//Importações de libs
const express = require("express");
const nunjucks = require("nunjucks");

//Importação das paginas
const { pesquisa } = require("./pages");

//Configuração express
const app = express();
const port = 3000;


//Configuração nunjucks
nunjucks.configure("src/views", {
    express: app,
    noCache: true,
});

//Configurando arquivos estáticos css, imagens, scripts
app.use(express.static("public"));

//Receber os dados do req.body
app.use(express.urlencoded({extended: true}));

//Configuração de rotas
app.get("/pesquisa", pesquisa);
app.post("/pesquisa", pesquisa);

//Configuração de portas
app.listen(port);