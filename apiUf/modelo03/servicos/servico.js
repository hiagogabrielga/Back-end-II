import colecaoUf from "../dados/dados.js";

export const buscarUfs = () => {
    return colecaoUf
}

export const consultarUf = (nomeUf) => {
    return colecaoUf.filter(uf => uf.nome.toLowerCase().includes(nomeUf.toLowerCase()))
}

export const buscarUfsPorId = (id) => {
    const idUF = parseInt(id);
    return uf = colecaoUf.colecaoUf.find(u => u.id === idUF);
}