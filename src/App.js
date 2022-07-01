import { useState } from 'react';
import Todos from './components/todos';
import Forms from './components/forms';
import axios from 'axios';


const App = () => {
  const [ todos , setTodos ] = useState("")
  const [ input, setInput ] = useState("")
  const url = "http://localhost:8000/tasks"



  // const onComplete = (todo) => {
  //   setTodos(
  //     todos.map((item) => {
  //       if(item.id === todo.id){
  //         // return { ...item , completed = !todo.completed }
  //       } 
  //     })
  //   )
  // }

  const onDelete = (id) => {
    axios.delete(`${url}/${id}`).then((res)=>{
      setTodos(res.data);
    })
    // setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <div className='container'>
      <header className = 'header'>
       <p>To do App</p>
      </header>
      <Forms todos= { todos } input={ input } setTodos= { setTodos } setInput={ setInput }/>
     { todos.length > 0 ? <Todos todos={todos} onDelete={onDelete}/>  : 'No tasks yet'}
    </div>
  )
}

export default App;