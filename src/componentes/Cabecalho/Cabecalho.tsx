// CSS
import './Cabecalho.css';

// IMGs
import participante from './img/participante.png';
import dice from './img/dice.svg';

const Cabecalho = () => {
  return (
    <div className='page-form'>
        <div className='form-title'>
          <img src={dice} alt="Imagem decorativa na figura de um dado." />
          <h1>SORTEADOR DE AMIGO</h1>
          <h2>SECRETO</h2>
        </div>
        <img src={participante} alt="Imagem decorativa, mulher jovem, parda, cabelo encaracolado estilo black power, vestindo uma blusa laranja com um tablet amarelo nas mãos." />
    </div>
  )
}

export default Cabecalho