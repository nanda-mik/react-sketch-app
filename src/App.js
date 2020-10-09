import React, { useState } from 'react';
import './App.css';
import Whiteboard from './components/Whiteboard/whiteboard';
import Toolbar from './components/Toolbar/toolbar';

function App() {
  const [choice, setChoice] = useState("pencil");

  const onClickHandler = (e) => {
    if (e === "pencil")
      setChoice("pencil");
    else if (e === "rectangle")
      setChoice("rectangle");
    else if (e === "circle")
      setChoice("circle");
    else if (e === "line")
      setChoice("line");
  }


  return (
    <div className="App">
      <Toolbar onChoice={onClickHandler} />
      <Whiteboard choice={choice} />
    </div>
  );
}

export default App;
