//  CSS
import './Formulario.css'

// REACT
import {useState, useRef} from 'react'

// COMPONENTS
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
      <div className="grupo-input-btn">
        <input 
          ref={inputRef}
          value={nome}
          onChange={event => setNome(event.target.value)}
          type="text" 
          placeholder='Insert players names'
        />
        <button disabled={!nome}>Adicionar</button>
        {mensagemDeErro && <p role="alert">{mensagemDeErro}</p>}
      </div>
    </form>
  )
}

export default Formulario