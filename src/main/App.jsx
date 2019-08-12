import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import Header from '../components/template/Header';
import Menu from '../components/template/Menu';
import Content from '../components/template/Content';


function App() {

  //inicialização e estrutura geral do estado
  const INITIAL_STATE = {
    content: 'settings',
    theme: localStorage.getItem('__theme') || 'light'
  };

  const [data, setData] = useState(INITIAL_STATE)

  const setContent = content => {
    setData({ ...data, content })
  }

  const setTheme = theme => {
    localStorage.setItem('__theme', theme)
    setData({ ...data, theme })
  }

  return (
    <div className="App">
      <Header />
      <Menu content={data.content} setContent={setContent} />
      <Content content={data.content} theme={data.theme} setTheme={setTheme} />
    </div>
  );
}

export default App;
