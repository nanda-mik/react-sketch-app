import React from 'react';
import { SketchField, Tools } from 'react-sketch';

function whiteboard() {
    return (
        <div>
            <SketchField
                tool={Tools.Pencil}
                lineColor='black'
                lineWidth={3} />
        </div>
    );
}

export default whiteboard;
