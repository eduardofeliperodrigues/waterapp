//Importações de libs
const express = require("express");
const nunjucks = require("nunjucks");

//Importação das paginas
const { research, saveResearch, results } = require("./pages");

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
app.get("/pesquisa", research);
app.post("/pesquisa", saveResearch);
app.get("/results", results);

//Configuração de portas
app.listen(port);