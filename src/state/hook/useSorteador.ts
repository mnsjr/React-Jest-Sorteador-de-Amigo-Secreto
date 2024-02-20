import { useListaDeParticipantes } from "./useListaDeParticipantes"
import { useSetRecoilState } from "recoil";
import { resultadoAmigoSecreto } from "../atom";
import { realizarSorteio } from "../helpers/realizarSorteio/realizarSorteio";

// USANDO A LIB JUST-SHUFFLE PARA EMBARALHAR A LISTA DE PARTICIPANTES
// npm i just-shuffle

export const useSorteador = () => {
    const participantes = useListaDeParticipantes();
    const setResultado = useSetRecoilState(resultadoAmigoSecreto);
    return () => {
        const resultado = realizarSorteio(participantes)
        setResultado(resultado);
     }
}