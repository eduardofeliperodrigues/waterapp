const express = require("express");
const app = express();
const port = 3000;

// Nunjucks - Template Engine (existem mais opções de template engine)
const nunjucks = require("nunjucks");
nunjucks.configure("src/views", {
    express: app,
    noCache: true,
});

// Configurando arquivos estáticos css, imagens, scripts
app.use(express.static("public"));

app.get("/formulario_input", (req, res) => {
    res.render("formulario_input.html");
});

app.listen(port);