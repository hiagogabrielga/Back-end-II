import express from "express";
import listaPart from "./dados/dados.js";

//const express = require('express');
//const dadosLista = require('./dados/dados.js')

const app = express();

app.get('/listaPartes', (req,res) => {
    res.json(listaPart)
})

app.get('/listaPartes/:idPa', (req, res) => {
    const idPa = parseInt(req.params.idPa);
    let parte;
    let mensagemErro = "";
    if (!(isNaN(idPa))) {
        parte = listaPart.find(u => u.id === idPa)
        if(!(parte)){
            mensagemErro = "Parte não encontrada"
        }
    } else {
        mensagemErro = 'Requisito inválido';
    }

    if(parte){
        res.json(parte)
    } else{
        res.status(404).json({ "erro": mensagemErro });
    } 
})

app.listen(8081, () => {
    console.log("Servidor iniciado com sucesso na porta 8081", Date())
})