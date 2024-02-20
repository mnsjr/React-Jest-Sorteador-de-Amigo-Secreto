import { atom } from "recoil";
// AQUI UTILIZAMOS A LIB RECOIL PARA GERENCIAR O ARMAZENAMENTO DE DADOS NA PRÓPRIA APLICAÇÃO

export const listaDeParticipantesState = atom<string[]>({
    key: "listaDeParticipantesState",
    default: []
})

export const resultadoAmigoSecreto = atom<Map<string, string>>({
    key: 'resultadoAmigoSecreto',
    default: new Map()
})

export const erroState = atom<string>({
    key: 'erroState',
    default: ''
})

