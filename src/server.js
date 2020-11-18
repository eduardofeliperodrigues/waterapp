//Importações de libs
const express = require("express");
const nunjucks = require("nunjucks");

//Importação das paginas
const { index, agua, research, saveResearch, results } = require("./pages");

//Configuração express
const app = express();
const port = 3000;

//Configurando arquivos estáticos css, imagens, scripts
app.use(express.static("public"));

//Receber os dados do req.body
app.use(express.urlencoded({extended: true}));

//Configuração nunjucks
nunjucks.configure("src/views", {
    express: app,
    noCache: true,
});

//Configuração de rotas
app.get("/", index);
app.get("/agua", agua);
app.get("/pesquisa", research);
app.post("/pesquisa", saveResearch);
app.get("/results", results);

//Configuração de portas
app.listen(port);