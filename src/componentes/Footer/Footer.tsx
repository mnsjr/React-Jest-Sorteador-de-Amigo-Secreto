import React from 'react'
import './Footer.css';
import { useListaDeParticipantes } from '../../state/hook/useListaDeParticipantes'
import { useNavigate } from 'react-router-dom'

const Footer = () => {

    const participantes = useListaDeParticipantes()
    const navegarPara = useNavigate()

    const iniciar = () => {
        navegarPara('/sorteio')
    }

  return (
    <footer className="rodape-configuracoes">
        <button className="botao" disabled={participantes.length < 3} onClick={iniciar}>
          Iniciar brincadeira
        </button>
    </footer>
  )
}

export default Footer