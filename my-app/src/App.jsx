import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { v4 as uuid } from "uuid";

function App() {

  const [todo,setTodo]=useState()
  const [todoList,setTodoList]=useState([])//add to arr for store todo items

  const onToDoInput=(e)=>{
    setTodo(e.target.value);
  };
  const onAddtodo=(e)=>{
    
    if(todo.trim()===""){
      alert("todo cannot be empty")
      return;
    }


    setTodoList([...todoList,{id: uuid(),todo:todo,isCompleted:false}])//on click add ,set todo list with value in todo state,when ever we want to add value to arr or obj,first spread it,set the value in the form of obj,because we need key to identify
    //to get the id ,install package
    setTodo("")//clear input after adding
  };

  const onClickDelete=(id)=>{
    const updatedList=todoList.filter(todo=>todo.id!==id);
    setTodoList(updatedList)

  };
  const onClickCheckboxChange=(id)=>{
    const updatedList=todoList.map(todo=>todo.id===id?{...todo,  isCompleted: !todo.isCompleted}:todo)
    setTodoList(updatedList)
    console.log(updatedList)

  }

  return (  
    <>
      <h1>My ToDoList</h1>
      <div>
        <input value={todo} onChange={onToDoInput} placeholder="enter your ToDoList"></input>
        <button onClick={onAddtodo}>ADD </button>
      </div>
      <div>
        {
           todoList?.length>0 && todoList.map(todo =>(
            <div key={todo.id} >
              <label>
                <input onClick={()=>onClickCheckboxChange(todo.id)} type="checkbox"/>
                <span className={todo.isCompleted?'strike-through':''}>{todo.todo}</span>
                </label>
                <button onClick={()=>onClickDelete(todo.id)} >Delete</button>

            </div>
          ))
        }
      </div>

    </>
  );
}

export default App;


//todo
// features-adding data,checkbox for each data,able to delete
// on click of button ,add to todo,make list dynamic
//to show something on the view ,we need to create a state
