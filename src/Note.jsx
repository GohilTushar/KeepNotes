import React from "react";
import Button from '@mui/material/Button';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
const Note=(props)=>{
    const deleteNote=()=>{
        props.deleteItem(props.id);
    }
    return(
        <>
            <div className="row">
            <div className="cln">
                <h1>{props.title}</h1>
                <br/>
                <p>{props.content}</p>
                <Button onClick={deleteNote}>
                <DeleteOutlineIcon className="btn"/>
                </Button>
                </div>
            </div>
        </>
    )
}
export default Note;