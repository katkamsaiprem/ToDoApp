import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";


function App() {
  
  const [todo,setTodo]=useState()

  const onToDoInput=(e)=>{
    setTodo(e.target.value);
  };
  const onAddtodo=(e)=>{
    
  };

  return (
    <>
      <h1>My ToDoList</h1>
      <div>
        <input value={todo} onChange={onToDoInput} placeholder="enter your ToDoList"></input>
        <button onClick={onAddtodo}>ADD </button>
      </div>
      <div>
        <div>
          <label>
            <input type="checkbox" />
            <span>awdawd</span>
            <button>delete</button>
          </label>
        </div>
      </div>
      
    </>
  );
}

export default App;

//todo
// features-adding data,checkbox for each data,able to delete
// on click of button ,add to todo,make list dynamic
//to show something on the view ,we need to create a state
