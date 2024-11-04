import express from "express"
import {pesquisarTodaLista, consultarParte} from "./servicos/servicos.js"

const app = express();

app.get("/lista",(req, res) => {
    const nomeParte = req.query.busca
    const resultado = nomeParte ? consultarParte(nomeParte) : pesquisarTodaLista()
    if (resultado.length > 0){
        res.json(resultado)
    } else {
        res.status(404).send({"erro": "nenhuma dado encontrdo."})
    }
})

app.listen(8080, () => {
    console.log("servidor iniciado")
})