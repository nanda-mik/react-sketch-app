import React from 'react';
import { SketchField, Tools } from 'react-sketch';
import "./whiteboard.css";

export default function whiteboard({ choice }) {

    return (
        <div className="whiteboard">
            {choice === "pencil" && <SketchField
                tool={Tools.Pencil}
                lineColor='black'
                lineWidth={3}
                height={650} />}
            {choice === "rectangle" && <SketchField
                tool={Tools.Rectangle}
                lineColor='black'
                lineWidth={3}
                height={650} />}
            {choice === "circle" && <SketchField
                tool={Tools.Circle}
                lineColor='black'
                lineWidth={3}
                height={650} />}
            {choice === "line" && <SketchField
                tool={Tools.Line}
                lineColor='black'
                lineWidth={3}
                height={650} />}
        </div>
    );
}

