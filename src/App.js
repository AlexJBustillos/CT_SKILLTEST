// Imports
import React from 'react';
// CSS
import './App.css';
//Components
import Team from './components/Team';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import History from './components/History';



function App() {
  // Set state values here

  return (
    <div className="App">
      <Navbar />
      <History />
      <Team />
      <Footer />
    </div>
  );
}

export default App;
