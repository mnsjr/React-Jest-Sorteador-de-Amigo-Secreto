import React from 'react';
import './ListaParticipantes.css'
import { useListaDeParticipantes } from '../../state/hook/useListaDeParticipantes';

const ListaParticipantes = () => {
  const participantes: string[] = useListaDeParticipantes();

  return (
    <ul className='lista-participantes-list'>
      {participantes.map((participante, index) => (
          <li key={index} role="listaitem">
            {participantes.length === index ? ' ' : <span> + </span>}
            {participante}
            {participantes.length === index ? ' ' : <span> + </span>}
          </li>
      ))}
    </ul>
  );
};

export default ListaParticipantes;
