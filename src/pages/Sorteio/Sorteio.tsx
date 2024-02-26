import React, {useState} from 'react'
import './Sorteio.css';
import { useListaDeParticipantes } from '../../state/hook/useListaDeParticipantes'
import { useResultadoDoSorteio } from '../../state/hook/useResultadoDoSorteio';
import Card from '../../componentes/Card/Card';
import Airplane from '../../img/aviao.png';
import Cabecalho from '../../componentes/Cabecalho/Cabecalho';
import { useNavigate } from 'react-router-dom'

const Sorteio = () => {

    const participantes = useListaDeParticipantes();
    const [participanteDaVez, SetParticipanteDaVez] = useState('');
    const resultado = useResultadoDoSorteio();
    const [amigoSecreto, setAmigoSecreto] = useState('');
    const navegarPara = useNavigate()

    const sortear = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault();
        if(resultado.has(participanteDaVez)) {
            setAmigoSecreto(resultado.get(participanteDaVez)!)
        } 

        setTimeout(() => {
            setAmigoSecreto('Próximo!')
        }, 3000)
    }

    const reiniciar = () => {
        navegarPara('/')
        window.location.reload();
    }

    return (
        <Card>
            <Cabecalho/>
            <section>
                <h2>Quem vai tirar o papelzinho?</h2>

                <form onSubmit={sortear}>
                    <select
                        required 
                        name="participanteDaVez" 
                        id="participanteDaVez" 
                        placeholder="Selecione o seu nome"
                        title='Selecione o seu nome'
                        value={participanteDaVez}
                        onChange={e => SetParticipanteDaVez(e.target.value)}
                    >
                        <option value="" disabled hidden>Selecione seu nome</option>
                        {participantes.map((participante) => (
                            <option key={participante}>{participante}</option>
                        ))}
                    </select>
                    <p>Clique em sortear para ver quem é seu amigo secreto!</p>
                    <button className="botao-sortear">Sortear</button>
                </form>

                <div className="resultado-sorteio">
                    {
                        amigoSecreto && 
                            <p className="resultado" role='alert'>
                                {amigoSecreto !== 'Próximo!' ? ' + ' : ''} 
                                {amigoSecreto}
                                {amigoSecreto !== 'Próximo!' ? ' + ' : ''}
                            </p>
                    }
                </div>

                <footer className="sorteio">
                    <img src={Airplane} alt="Um desenho de um avião de papel" />
                    <button onClick={() => reiniciar()}>Reiniciar</button>
                </footer>
            </section>
        </Card>
    )
    
}

export default Sorteio