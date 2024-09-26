const express = require('express');
const colecaoUf = require('./dados/dados.js');

const app = express();

app.get('/ufs', (req, res) => {
    res.json(colecaoUf.colecaoUf);
});

app.get('/ufs/:iduf', (req, res) => {
    const idUF = parseInt(req.params.iduf);
    let mesnsagemErro = '';
    let uf;
    if (!(isNaN(idUF))) {
        uf = colecaoUf.colecaoUf.find(u => u.id === idUF);
        if (!uf) {
            mesnsagemErro = 'UF não encontrado';
        }
    } else {
        mesnsagemErro = 'Requisito inválido';
    }

    if (uf) {
        res.json(uf);
    } else {
        res.status(404).json({ "erro": mesnsagemErro });
    }
})
let data = Date()
app.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080", data);
});