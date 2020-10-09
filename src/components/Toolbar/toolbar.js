import React from 'react';
import Button from '@material-ui/core/Button';
import './toolbar.css';
import CreateIcon from '@material-ui/icons/Create';
import Crop54RoundedIcon from '@material-ui/icons/Crop54Rounded';
import RadioButtonUncheckedRoundedIcon from '@material-ui/icons/RadioButtonUncheckedRounded';
import RemoveIcon from '@material-ui/icons/Remove';

function toolbar(props) {

    return (
        <div className="toolbar">
            <Button onClick={()=> props.onChoice("pencil")}><CreateIcon /></Button>
            <Button onClick={()=> props.onChoice("rectangle")}><Crop54RoundedIcon /></Button>
            <Button onClick={()=> props.onChoice("circle")}><RadioButtonUncheckedRoundedIcon /></Button>
            <Button onClick={()=> props.onChoice("line")}><RemoveIcon /></Button>
        </div>
    )
}

export default toolbar;

