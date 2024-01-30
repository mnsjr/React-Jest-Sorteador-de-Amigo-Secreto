import { useRecoilValue, useSetRecoilState } from "recoil"
import { erroState, listaDeParticipantesState } from "../atom"

// HOOK PERSONALIZADO

export const useAdicionarParticipante = () => {
    const setLista = useSetRecoilState(listaDeParticipantesState)
    const lista = useRecoilValue(listaDeParticipantesState)
    const setErro = useSetRecoilState(erroState)
    return (nomeParticipante: string) => {
        if(lista.includes(nomeParticipante)) {
            setErro('Nomes duplicados não são permitidos!')
            setTimeout(() => {
                setErro('')
            }, 3000)
            return
        }
        return setLista(listaAtual => [...listaAtual, nomeParticipante])
    }
}