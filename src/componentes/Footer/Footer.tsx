import React from 'react'
import './Footer.css';
import { useListaDeParticipantes } from '../../state/hook/useListaDeParticipantes'
import { useNavigate } from 'react-router-dom'
import { useSorteador } from '../../state/hook/useSorteador';
import Sacolas from '../../img/sacolas.png';

const Footer = () => {

    const participantes = useListaDeParticipantes()
    const navegarPara = useNavigate()

    const sortear = useSorteador()

    const iniciar = () => {
        sortear()
        navegarPara('/sorteio')
    }

    return (
      <footer className="rodape-configuracoes">
          <button className="botao" disabled={participantes.length < 3} onClick={iniciar}>
            Iniciar brincadeira
          </button>
          <img src={Sacolas} alt="Imagem ilustrativa." />
      </footer>
    )
}

export default Footer