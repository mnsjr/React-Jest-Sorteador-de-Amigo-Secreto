// REACT
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import AppMain from './pages/AppMain/AppMain';


function App() {
  return (
    <BrowserRouter>
      {/* O RECOIL É UMA LIB QUE GERENCIA AS VARIÁVEIS GLOBAIS DO APP */}
      <RecoilRoot> 
        <Routes>
          <Route path='/' element={<AppMain />}/>
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
