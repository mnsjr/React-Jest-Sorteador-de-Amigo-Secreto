import { render, screen } from "@testing-library/react";
import React from "react";
import AppMain from "./AppMain";
import { RecoilRoot } from "recoil";

const mockNavegacao = jest.fn()

jest.mock('react-router-dom', () => {
    return {
        useNavigate: () => mockNavegacao
    }
})

describe('a pagina de config', () => {
    test('renders learn react link', () => {
        render(
            <RecoilRoot>
            <AppMain />
            </RecoilRoot>); 
        // THIS TEST IS LOOKING FOR SOME TEXT IN APP COMPONENT, THE SAME CAN DO WITH ANY COMPONENT AND TEXT
        const linkElement = screen.getByText(/Vamos começar!/i);
        expect(linkElement).toBeInTheDocument();
    });

    test('deve ser renderizada corretamente', () => {
        const { container } = render(<RecoilRoot>
            <AppMain />
        </RecoilRoot>)

        // ESTA É UMA PÁGINA MERAMENTE VISUAL, 
        // ENTÃO IREMOS FAZER UM TESTE DE SNAPSHOT, 
        // COMPARANDO A IMAGEM DA TELA PARA GARANTIR QUE ELA SEMPRE SERÁ RENDERIZADA DA MESMA FORMA

        // TO UPDATE SNAPSHOT TEST:
        // Press u to update failing snapshots.
        expect(container). toMatchSnapshot()
    })
})