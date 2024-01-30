//  CSS
import './Formulario.css'

// REACT
import {useState, useRef,  useEffect} from 'react'

// COMPONENTS
import Cabecalho from '../Cabecalho/Cabecalho'
import { useAdicionarParticipante } from '../../state/hook/useAdicionarParticipante';
import { useMensagemDeErro } from '../../state/hook/useMensagemDeErro';

// TO RUN TESTS: npm test IN TERMINAL
// ALURA LINK: https://cursos.alura.com.br/course/react-testando-componentes
// FIGMA LINK: https://www.figma.com/file/c3RarCwq533GF1rrTRQEES/Sorteador-de-amigo-secreto?node-id=35%3A134

const Formulario = () => {

  const [nome, setNome] = useState('');

  const inputRef = useRef<HTMLInputElement>(null);

  const adicionarNaLista = useAdicionarParticipante();

  const mensagemDeErro = useMensagemDeErro()

  const adicionarParticipante = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();
    adicionarNaLista(nome)
    setNome('');
    inputRef.current?.focus();
  }

  return (
    <form onSubmit={adicionarParticipante}>
      <Cabecalho/>
      <div className='container-input'>
          <div className='title-vamos-comecar'>
            <h2>Vamos começar!</h2>
          </div>
          <div className='input-insira-nomes'>
            <input 
              ref={inputRef}
              value={nome}
              onChange={event => setNome(event.target.value)}
              type="text" 
              placeholder='Insert players names'/>
            <button disabled={!nome}>Adicionar</button>
            {mensagemDeErro && <p role="alert">{mensagemDeErro}</p>}
          </div>
      </div>
        
    </form>
  )
}

export default Formulario