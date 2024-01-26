import { useSetRecoilState } from "recoil"
import { listaDeParticipantesState } from "../atom"

// HOOK PERSONALIZADO

export const useAdicionarParticipante = () => {
    const setLista = useSetRecoilState(listaDeParticipantesState)
    return (nomeParticipante: string) => {
        return setLista(listaAtual => [...listaAtual, nomeParticipante])
    }
}