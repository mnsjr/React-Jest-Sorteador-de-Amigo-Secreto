import React from 'react'
import '../style/Formulario.css'
import logo from '../img/logo.png';
import participante from '../img/participante.png';

// TO RUN TESTS: npm test IN TERMINAL
// ALURA LINK: https://cursos.alura.com.br/course/react-testando-componentes
// FIGMA LINK: https://www.figma.com/file/c3RarCwq533GF1rrTRQEES/Sorteador-de-amigo-secreto?node-id=35%3A134


const Formulario = () => {
  return (
    <form>
        <div>
            <img src={logo} alt="" />
            <img src={participante} alt="" />
        </div>
        
        <div className='container-input'>
            <div className='title-vamos-comecar'>
              <h1>Vamos começar!</h1>
            </div>
            <div className='input-insira-nomes'>
              <input type="text" placeholder='Insira os nomes dos participantes'/>
              <button disabled={true}>Adicionar</button>
            </div>
        </div>
        
    </form>
  )
}

export default Formulario