import React from 'react';
import { act, fireEvent, render, screen } from '@testing-library/react';
import Formulario from './Formulario';
import { RecoilRoot } from 'recoil';

// TDD (TEST DRIVEN DEVELOPMENT) - (DESENVOLVIMENTO ORIENTADO A TESTES)
// TO RUN TESTS: npm test IN TERMINAL

describe('comportamento do Formulario.tsx', () => {
  test('renders learn react link', () => {
    render(
        <RecoilRoot>
          <Formulario />
        </RecoilRoot>); 
    // THIS TEST IS LOOKING FOR SOME TEXT IN APP COMPONENT, THE SAME CAN DO WITH ANY COMPONENT AND TEXT
    const linkElement = screen.getByText(/Vamos começar!/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('quando o input está vazio, novos participantes não podem ser adicionados', () => {
    render(
      <RecoilRoot>
        <Formulario />
      </RecoilRoot>);
    
    const input = screen.getByPlaceholderText('Insert players names');
    const button = screen.getByRole('button');

    expect(input).toBeInTheDocument();
    expect(button).toBeDisabled();
  });

  test('adicionar um participante caso exista um nome preenchido', () => {
    render(
      <RecoilRoot>
        <Formulario />
      </RecoilRoot>);
      
    // searching on DOM for input element by placeholder
    const input = screen.getByPlaceholderText('Insert players names');

    // searching for button element by role
    const button = screen.getByRole('button');

    // inseri um valor no input
    fireEvent.change(input, {
      target: {
        value: "Ana Catarina"
      }
    });

    //  clicar no botão se submit
    fireEvent.click(button);

    //  garantir que o input esteja com o foco ativo
    expect(input).toHaveFocus();

    //  garantir que o input não tenha um valor
    expect(input).toHaveValue("");
  })

  test('nomes duplicados não podem ser adicionados na lista', () => {
    render(
      <RecoilRoot>
        <Formulario />
      </RecoilRoot>);
      
    const input = screen.getByPlaceholderText('Insert players names');
    const button = screen.getByRole('button');

    fireEvent.change(input, {
      target: {
        value: "Ana Catarina"
      }
    });
    fireEvent.click(button);

    fireEvent.change(input, {
      target: {
        value: "Ana Catarina"
      }
    });
    fireEvent.click(button);

    const mensagemDeErro = screen.getByRole('alert');

    expect(mensagemDeErro.textContent).toBe('Nomes duplicados não são permitidos!');
  })

  test('a mensagem de erro deve sumir apos os timers', () => {
    jest.useFakeTimers();
    render(
      <RecoilRoot>
        <Formulario />
      </RecoilRoot>);
      
    const input = screen.getByPlaceholderText('Insert players names');
    const button = screen.getByRole('button');

    fireEvent.change(input, {
      target: {
        value: "Ana Catarina"
      }
    });
    fireEvent.click(button);

    fireEvent.change(input, {
      target: {
        value: "Ana Catarina"
      }
    });
    fireEvent.click(button);

    let mensagemDeErro = screen.queryByRole('alert');
    expect(mensagemDeErro).toBeInTheDocument();

    // esperar n segundo
    act(() => {
      jest.runAllTimers();
    });    

    mensagemDeErro = screen.queryByRole('alert');
    expect(mensagemDeErro).toBeNull();
  })
})

