import React from 'react';
import Button from '@material-ui/core/Button';
import './toolbar.css';

function toolbar() {
    return (
        <div className="toolbar">
            <Button>Pencil</Button>
            <Button>Rectangle</Button>
            <Button>Circle</Button>
        </div>
    )
}

export default toolbar
