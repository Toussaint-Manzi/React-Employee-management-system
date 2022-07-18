import {useEffect} from 'react';
import { useDispatch } from 'react-redux'
import { createTodo, getAllTodos } from '../features/todoApp'
// import axios from 'axios'
import { v4 as uuidv4 } from 'uuid';

const Forms = ( { input, setTodos, setInput,edit , setEdit } ) => {

  const dispatch = useDispatch();
  // const { todos } = useSelector(todoSelector)

  // const url = "http://localhost:8000/Tasks"

  const onChange = (e) =>{
    setInput (e.target.value);
  }  

  const updateTodo = (title, id ,completed) =>{
    // axios.put(`${url}/${id}`, {
    //   title,
    //   id,
    //   completed
    // }).then((res)=>{
    //   setTodos(res.data);
    // })
    dispatch(updateTodo({title, id ,completed}))
  }

  const data = {
    id:uuidv4(),
    title:input,
    completed:false
  }

  
  const onSubmit = () => {
    if(!edit) {
      // axios.post(url,{
      //   id:uuidv4(),
      //   title:input,
      //   completed:false
      // }).then((res)=>{
      //   setTodos(res.data);
      // })
      // setInput("");

      dispatch(createTodo(data))
    }else {
      updateTodo(input , edit.id ,edit.completed);
    }
  }
  
  useEffect(()=>{
    // axios.get(url).then((res)=>{
    //     setTodos(res.data);
    // })

    dispatch(getAllTodos())
  },[dispatch])

  // console.log(todos)

  return (
    <div>
        <form onSubmit={ onSubmit } className='form-control  form-control-check'>
            <input type='text' placeholder='Enter a new task' value = { input } onChange = {onChange}/>
            <button className='btn' type='onSubmit'>Add</button>
        </form>
    </div>
  )
}

export default Forms