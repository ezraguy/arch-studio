import React from 'react';
import './App.css';
import Footer from './components/footer';
import Main from './components/main';
import Navbar from './components/navbar';
import { Switch, Route } from 'react-router-dom';
import About from './components/about';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/" component={Main} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
