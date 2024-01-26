import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Formulario from './Formulario';

// TDD (TEST DRIVEN DEVELOPMENT) - (DESENVOLVIMENTO ORIENTADO A TESTES)
// TO RUN TESTS: npm test IN TERMINAL

test('renders learn react link', () => {
    render(<Formulario />);
    // THIS TEST IS LOOKING FOR SOME TEXT IN APP COMPONENT, THE SAME CAN DO WITH ANY COMPONENT AND TEXT
    const linkElement = screen.getByText(/Vamos começar!/i);
    expect(linkElement).toBeInTheDocument();
  });

test('quando o input está vazio, novos participantes não podem ser adicionados', () => {
  render(<Formulario />);
  
  // LOOKING FOR INPUT ELEMENTS BY PLACEHOLDER
  const input = screen.getByPlaceholderText('Insira os nomes dos participantes');

  // LOOKING FOR BUTTON ELEMENTS BY ROLE
  const button = screen.getByRole('button');
  

  // AQUI É ONDE O TESTE É REALIZADO E VERIFICADO
  // ESPERANDO QUE O BUTTON ESTEJA NO DOCUMENT
  expect(input).toBeInTheDocument();

  // ESPERANDO QUE O BUTTON ESTEJA DESABILITADO
  expect(button).toBeDisabled();

});

test('adicionar um participante caso exista um nome preenchido', () => {
  render(<Formulario />);
    
  // LOOKING FOR INPUT ELEMENTS BY PLACEHOLDER
  const input = screen.getByPlaceholderText('Insira os nomes dos participantes');

  // LOOKING FOR BUTTON ELEMENTS BY ROLE
  const button = screen.getByRole('button');

  // inseriri um valor no input
  fireEvent.change(input, {
    target: {
      value: 'Ana Catarina'
    }
  });

  //  clicar no botão se submit
  fireEvent.click(button);

  //  garantir que o input esteja com o foco ativo
  expect(input).toHaveFocus();

  //  garantir que o input não tenha um valor
  expect(input).toHaveValue('');
})