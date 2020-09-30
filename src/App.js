import React from 'react';
import './App.css';
import Footer from './components/footer';
import Main from './components/main';
import Navbar from './components/navbar';

function App() {
  return (
    <div className="App">
      <div className="line"></div>
      <div className="page-name">HOME</div>
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
