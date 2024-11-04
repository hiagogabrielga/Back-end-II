import listaPart from "../dados/dados.js"

export const pesquisarTodaLista = () => {
    return listaPart
}

export const consultarParte = (nome_da_parte) => {
    return listaPart.filter(nome => nome.nome_da_parte.toLowerCase().includes(nome_da_parte.toLowerCase()))
}