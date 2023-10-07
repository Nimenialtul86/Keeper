import React, { useEffect, useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';
import axios from "axios";

function CreateArea(props) {

const [isExpanded, setExpanded] = useState(false)

function expand() {
    setExpanded(true);
}

  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  // function submitNote(event) {
  //   props.onAdd(note);
  //   setNote({
  //     title: "",
  //     content: ""
  //   });
  //   event.preventDefault();
  // }

  const submitNote = async (event) => {
    props.onAdd(note);
       setNote({
      title: "",
      content: ""
    });
    try {
     const res = await axios.post("http://localhost:4000", {
        title: "",
        content: ""
      }) 
    }catch(err){
      console.log(err)
    }
    event.preventDefault();
  }

  useEffect(()=>{
    const getNote = async () => {
      try {
        const res = await axios.get("http://localhost:4000")
        setNote(res.data)
      } catch(err) {
        console.log(err)
      }
    }
    getNote()
  },[])

  return (
    <div>
      <form className="create-note">
        {
            isExpanded ?       <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        /> : null
        } 
        
        <textarea
        onClick={expand}
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
        />
      <Zoom in={isExpanded}>  
          <Fab onClick={submitNote}>
            <AddIcon />
        </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
