import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import Sorteio from './Sorteio';
import { useListaDeParticipantes } from '../../state/hook/useListaDeParticipantes';
import { useResultadoDoSorteio } from '../../state/hook/useResultadoDoSorteio';

// TDD (TEST DRIVEN DEVELOPMENT) - (DESENVOLVIMENTO ORIENTADO A TESTES)
// TO RUN TESTS: npm test IN TERMINAL

jest.mock('../../state/hook/useListaDeParticipantes', () => {
  return {
      useListaDeParticipantes: jest.fn()
  }
})

jest.mock('../../state/hook/useResultadoDoSorteio', () => {
  return {
    useResultadoDoSorteio: jest.fn()
  }
})

describe('página de sorteio', () => {

  const participantes = [
    'Ana',
    'Pedro',
    'Guilherme'
  ]

  const resultado = new Map([
    ['Ana', 'Joel'],
    ['Joel', 'Catarina'],
    ['Catarina', 'Ana']
  ])

  beforeEach(() => {
    (useListaDeParticipantes as jest.Mock).mockReturnValue([participantes])
    (useResultadoDoSorteio as jest.Mock).mockReturnValue(resultado)
  })

  test('todos os participantes podem exibir os seus amigos secretos', () => {
    render(
      <RecoilRoot>
        <Sorteio/>
      </RecoilRoot>);
    
    const options = screen.queryAllByRole('option')

    expect(options).toHaveLength(participantes.length);
  });

  test('o amigo secreto é exibido qundo solicitado', () => {
    render(
      <RecoilRoot>
        <Sorteio/>
      </RecoilRoot>);

      const select = screen.getByPlaceholderText('Selecione o seu nome')
      fireEvent.change(select, {
        target: {
          value: participantes[0]
        }
      })
      const botao = screen.getByRole('button')
      fireEvent.click(botao)

      const amigoSecreto = screen.getByRole('alert')
      
      expect(amigoSecreto).toBeInTheDocument()
  })




});