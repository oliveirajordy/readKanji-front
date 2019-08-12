import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import Header from '../components/template/Header';
import Menu from '../components/template/Menu';
import Content from '../components/template/Content';


function App() {

  //inicialização e estrutura geral do estado
  const INITIAL_STATE = {
    content: 'converter',
    theme: localStorage.getItem('__theme') || 'light',
    fontSize: localStorage.getItem('__fontSize') || 'normal-size'
  };

  const [data, setData] = useState(INITIAL_STATE)

  const setContent = content => {
    setData({ ...data, content })
  }

  const setTheme = theme => {
    localStorage.setItem('__theme', theme)
    setData({ ...data, theme })
  }

  const setFontSize = fontSize => {
    localStorage.setItem('__fontSize', fontSize)
    setData({ ...data, fontSize })
  }

  return (
    <div className="App">
      <Header />
      <Menu content={data.content} setContent={setContent} />
      <Content content={data.content} theme={data.theme} setTheme={setTheme} fontSize={data.fontSize} changeFontSize={setFontSize} />
    </div>
  );
}

export default App;
