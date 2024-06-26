// CSS
import './Cabecalho.css';

// IMGs
import participante from './img/participante.png';
import dice from './img/dice.svg';
import dice2 from './img/dice2.svg';

const Cabecalho = () => {
  return (
    <div className='page-form'>
        <div className='form-title'>
          <div className='form-title-dice'>
            <img src={dice} alt="Imagem decorativa na figura de um dado." />
            <img src={dice2} alt="Imagem decorativa na figura de um dado." />
            <img src={dice} alt="Imagem decorativa na figura de um dado." />
          </div>
          <h1>SORTEADOR DE AMIGO SECRETO</h1>
        </div>
        <div className='page-form-img'>
          <img src={participante} alt="Imagem decorativa, mulher jovem, parda, cabelo encaracolado estilo black power, vestindo uma blusa laranja com um tablet amarelo nas mãos." />
        </div>
    </div>
  )
}

export default Cabecalho