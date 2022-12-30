import React from 'react'
import '../style/Formulario.css'
import logo from '../img/logo.png';
import participante from '../img/participante.png';

// FIGMA LINK: https://www.figma.com/file/c3RarCwq533GF1rrTRQEES/Sorteador-de-amigo-secreto?node-id=35%3A134

const Formulario = () => {
  return (
    <form>
        <div>
            <img src={logo} alt="" />
            <img src={participante} alt="" />
        </div>
        <div className='container-input'>
            <input type="text" placeholder='Insira os nomes dos participantes'/>
            <button disabled={true}>Adicionar</button>
        </div>
        
    </form>
  )
}

export default Formulario