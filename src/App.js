import React from 'react';
import './App.css';
import Main from './components/main';
import Navbar from './components/navbar';
import Welcome from './components/welcome';

function App() {
  return (
    <div className="App">
      <div className="line"></div>
      <div className="page-name">HOME</div>
      <Navbar />
      <Main />
      <Welcome />
    </div>
  );
}

export default App;
