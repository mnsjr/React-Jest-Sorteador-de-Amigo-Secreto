//  CSS
import './Formulario.css'

// REACT
import React from 'react'

// COMPONENTS
import Cabecalho from '../../componentes/Cabecalho/Cabecalho'

// TO RUN TESTS: npm test IN TERMINAL
// ALURA LINK: https://cursos.alura.com.br/course/react-testando-componentes
// FIGMA LINK: https://www.figma.com/file/c3RarCwq533GF1rrTRQEES/Sorteador-de-amigo-secreto?node-id=35%3A134

const Formulario = () => {
  return (
    <form >
      <Cabecalho/>
      <div className='container-input'>
          <div className='title-vamos-comecar'>
            <h2>Vamos começar!</h2>
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