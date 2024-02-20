// COMPONENTS
import Formulario from '../../componentes/Formulario/Formulario';
import Cabecalho from '../../componentes/Cabecalho/Cabecalho';
import ListaParticipantes from '../../componentes/ListaParticipantes/ListaParticipantes';
import Footer from '../../componentes/Footer/Footer';
import Card from '../../componentes/Card/Card';

// CSS
import './AppMain.css';

// REACT
import React from 'react'

const AppMain = () => {
  return (
    <Card>
        <Cabecalho/>
        <section className='container-app-main'>
            <h2>Vamos começar!</h2>
            <Formulario />
            <ListaParticipantes/>
            <Footer/>
        </section>
    </Card> 
  )
}

export default AppMain