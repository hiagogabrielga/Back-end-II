import express from "express";
import colecaoUf from "./dados/dados.js";

const app = express();

const consultarUf = (nomeUf) => {
    return colecaoUf.filter(uf => uf.nome.toLowerCase().includes(nomeUf.toLowerCase()))
}

app.get('/ufs', (req, res) => {
    const nomeUf = req.query.busca;
    const resultado = nomeUf ? consultarUf(nomeUf) : colecaoUf;
    if (resultado.length > 0){
        res.json(resultado)
    } else {
        res.status(404).send({"erro": "nenhuma UF encontrdas"})
    }
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