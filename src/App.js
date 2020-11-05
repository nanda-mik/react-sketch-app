import React, { useState } from 'react';
import './App.css';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
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
    <TransformWrapper
      defaultScale={1}
      defaultPositionX={200}
      defaultPositionY={100}
    >
      {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
        <React.Fragment>
          <Toolbar onChoice={onClickHandler} />
          <TransformComponent>
            <div>Hell react sketch</div>
            {/* <div><Whiteboard choice={choice} /></div> 
            while using this i get this error Maximum update depth exceeded.*/}
          </TransformComponent>
          <div className="tools">
            <button onClick={zoomIn}>+</button>
            <button onClick={zoomOut}>-</button>
            <button onClick={resetTransform}>x</button>
          </div>
        </React.Fragment>
      )}
    </TransformWrapper>
  );
}