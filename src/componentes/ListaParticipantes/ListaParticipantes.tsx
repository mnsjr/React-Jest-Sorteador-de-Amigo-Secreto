import React from 'react';
import { useListaDeParticipantes } from '../../state/hook/useListaDeParticipantes';

const ListaParticipantes = () => {
  const participantes: string[] = useListaDeParticipantes();

  return (
    <ul>
      {participantes.map((participante, index) => (
        <li key={index} role="listaitem">{participante}</li>
      ))}
    </ul>
  );
};

export default ListaParticipantes;
