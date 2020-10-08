import React, { useState } from 'react';
import './App.css';
import Whiteboard from './components/Whiteboard/whiteboard';
import Toolbar from './components/Toolbar/toolbar';

function App() {

  return (
    <div className="App">
      <h2>React Sketch App</h2>
      <div>
        <Toolbar />
      </div>
      <Whiteboard/>
    </div>
  );
}

export default App;
