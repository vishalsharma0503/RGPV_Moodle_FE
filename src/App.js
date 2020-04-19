import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Slider from './Components/Carousel';
import Footer from './Components/Footer';
import News from './Components/News';


function App() {
  return (
    <div className="App">
      <Header/>
      <Slider/>
      <News/>
      <Footer/>
  
    </div>
  );
}

export default App;
