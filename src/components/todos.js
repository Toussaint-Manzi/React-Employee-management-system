import { FaTimes,FaEdit } from 'react-icons/fa';
// import { useSelector, useDispatch } from 'react-redux'
import { useDispatch,useSelector } from 'react-redux'
import { deleteTodo, getAllTodos, todoSelector } from '../features/todoApp'

const Todos = ({ edit,setEdit, onComplete }) => {

    const dispatch = useDispatch();
    const { todos } = useSelector(todoSelector);

  const handleEdit = ({id}) =>{
    if(!edit){
      const findTodo = todos.find((todo) => todo.id === id )
      setEdit(findTodo);
    } else{
      setEdit(null)
    }

  }

  const onDelete = (id) => {
    // axios.delete(`${url}/${id}`).then((res)=>{
    //   setTodos(res.data);
    // })
    console.log(id)
    dispatch(deleteTodo(id));
    dispatch(getAllTodos())
  }

  return (
    <div className='task'>
      {todos.map((todo)=> (
        <h5 key={todo.id}>
          {todo.title}
          <FaEdit className='edit' onClick={()=> handleEdit(todo)}/>
          <FaTimes style={{color:'red', cursor:'pointer' ,float:'right'}} onClick = {() => onDelete (todo.id)} />
        </h5>
        ))} 
    </div>
  )
}

export default Todos;