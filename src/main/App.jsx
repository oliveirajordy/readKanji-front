import React, { useState } from 'react';
import './App.css';

import Header from '../components/template/Header';
import Menu from '../components/template/Menu';
import Content from '../components/template/Content';

//inicialização e estrutura geral do estado
const INITIAL_STATE = {
  content: 'home',
  style: {},
  
};

function App() {
  return (
    <div className="App">
      <Header />
      <Menu />
      <Content />
    </div>
  );
}

export default App;
