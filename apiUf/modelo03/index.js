import express from "express";
import {buscarUfs, consultarUf, buscarUfsPorId} from "./servicos/servico.js";

const app = express();

app.get('/ufs', (req, res) => {
    const nomeUf = req.query.busca;
    const resultado = nomeUf ? consultarUf(nomeUf) : buscarUfs();
    if (resultado.length > 0){
        res.json(resultado)
    } else {
        res.status(404).send({"erro": "nenhuma UF encontrdas"})
    }
}); 

app.get('/ufs/:iduf', (req, res) => {
    const uf = buscarUfsPorId(req.params.iduf);
    if (uf) {
        res.json(uf);
    } else if (isNaN(parseInt(req.params.iduf))){
        res.status(400).json({"erro":"Requisito inválido"});
    } else {
        res.status(404).json({"erro":"UF não encontrado"});
    }
})
let data = Date()
app.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080", data);
});