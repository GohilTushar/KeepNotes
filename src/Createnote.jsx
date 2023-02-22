import React, { useState } from "react";
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
const Createnote = (props) => {
    const [expand, setExpand] = useState(false);
    const ExpandIt=()=>{
        setExpand(true);
    }
    const backTonormal=()=>{
        setExpand(false);
    }
    const [note, setNote] = useState({
        title: "",
        content: ""
    });
    const addEvent = () => {
        props.passNote(note);
        setNote({
            title: "",
            content: ""
        })
    }
    const InputEvent = (event) => {
        const { name, value } = event.target;
        setNote((oldItem) => {
            return {
                ...oldItem,
                [name]: value
            }
        })
    }
    return (
        <div className="container" onDoubleClick={backTonormal}>
            <div className="rw">
                <div className="cl">
                    <form>
                        {expand ?
                            <input type="text"
                                name={"title"}
                                value={note.title}
                                onChange={InputEvent}
                                placeholder="Title" />
                            : null}
                        <br />
                        <textarea rows="10" column="20"
                            name={"content"}
                            value={note.content}
                            onChange={InputEvent}
                            placeholder="Write A Note..."
                            onClick={ExpandIt}
                        />
                    </form>
                    {expand?
                    <Button onClick={addEvent}>
                        <AddIcon className="btn" />
                    </Button>
                    :null}
                </div>
            </div>

        </div>
    )
}
export default Createnote;