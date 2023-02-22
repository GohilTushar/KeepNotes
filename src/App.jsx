import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Createnote from "./Createnote";
import Note from "./Note";
const App=()=>{
  const [addItem,setAddItem]=useState([])
  const addNote=(note)=>{
    setAddItem((prevData)=>{
      return [...prevData,note];
    })
    console.log(note);
  }
  const onDelete=(id)=>{
    setAddItem((old)=>
      old.filter((currElem,index)=>{
        return index!==id;
      })
    )
  }
  return(
    <>
    <Header/>
    <Createnote passNote={addNote}/>
    {addItem.map((val,index)=>{
      return <Note
        key={index}
        id={index}
        title={val.title}
        content={val.content}
        deleteItem={onDelete}
      />
    })}    
    <Footer/>
    </>
  )
}
export default App;
