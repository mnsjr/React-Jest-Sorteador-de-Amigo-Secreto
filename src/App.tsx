// REACT
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import AppMain from './pages/AppMain/AppMain';
import Sorteio from './pages/Sorteio/Sorteio';


function App() {
  return (
    <BrowserRouter>
      {/* O RECOIL É UMA LIB QUE GERENCIA AS VARIÁVEIS GLOBAIS DO APP */}
      <RecoilRoot> 
        <Routes>
          <Route path='/' element={<AppMain />}/>
          <Route path='/sorteio' element={<Sorteio />}/>
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
