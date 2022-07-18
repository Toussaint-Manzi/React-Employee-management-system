import { useState } from 'react';
import { useSelector } from 'react-redux'
import { todoSelector } from '../features/todoApp'
import Todos from './Todos';
import Forms from './Forms';
// import axios from 'axios';


const Todo = () => {
  // const [ todos , setTodos ] = useState("")
  const [ input, setInput ] = useState("")
  const [ edit,setEdit ] = useState (null)
  // const url = "http://localhost:8000/Tasks"

  const { todos } = useSelector(todoSelector);


  // const onDelete = (id) => {
  //   axios.delete(`${url}/${id}`).then((res)=>{
  //     setTodos(res.data);
  //   })
  // }

  return (
    <div className='container'>
      <header className = 'header'>
       <p>To do App</p>
      </header>
      <Forms todos= { todos } input={ input }  setInput={ setInput } edit={edit} setEdit={setEdit}/>
     { todos.length > 0 ? <Todos todos={todos} edit={edit} setEdit={setEdit}/>  : 'No tasks yet'}
     {/* <Todos todos={todos} onDelete={onDelete} edit={edit} setEdit={setEdit}/> */}
    </div>
  )
}

export default Todo;