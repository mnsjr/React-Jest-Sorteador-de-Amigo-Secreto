import React from 'react';
import { render, screen } from '@testing-library/react';
import Formulario from './Formulario';

// TO RUN TESTS: npm test IN TERMINAL

test('renders input and button', () => {
    render(<Formulario />);
    
    // LOOKING FOR INPUT ELEMENTS BY PLACEHOLDER
    const input = screen.getByPlaceholderText('Insira os nomes dos participantes');

    // LOOKING FOR BUTTON ELEMENTS BY ROLE
    const button = screen.getByRole('button');
    

    // AQUI É ONDE O TESTE É REALIZADO E VERIFICADO
    expect(input).toBeInTheDocument();

    expect(button).toBeDisabled();

});