import React from 'react';
import { Wrapper } from './components/Wrapper';
import { Footer } from './components/Footer';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
         Golf Digest Tech
      </header>
      <div role="main">
        <Wrapper />
      </div>
      <Footer />
    </div>
  );
}

export default App;
