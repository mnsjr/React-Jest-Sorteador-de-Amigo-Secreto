// CSS
import './AppMain.css';

// COMPONENTS
import Formulario from '../../componentes/Formulario/Formulario';
import Cabecalho from '../../componentes/Cabecalho/Cabecalho';

// REACT
import React from 'react'

const AppMain = () => {
  return (
    <div className="App">
        
        <header className="App-header">
            <Cabecalho/>
            <Formulario />
        </header>
    </div> 
  )
}

export default AppMain