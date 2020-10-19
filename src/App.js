import React, { useState } from 'react';
import './App.css';
import Whiteboard from './components/Whiteboard/whiteboard';
import Toolbar from './components/Toolbar/toolbar';

export default function App() {
  const [choice, setChoice] = useState("pencil");

  const elements = {
    pencil: "pencil",
    rectangle: "rectangle",
    circle: "circle",
    line: "line"
  };

  const onClickHandler = (e) => {
    setChoice(elements[e]);
  }


  return (
    <div className="App">
      <Toolbar onChoice={onClickHandler} />
      <Whiteboard choice={choice} />
    </div>
  );
}

