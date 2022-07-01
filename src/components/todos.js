import { FaTimes,FaEdit } from 'react-icons/fa';

const todos = ({ todos ,onDelete, onComplete }) => {

  return (
    <div className='task'>
      {todos.map((todo)=> (
        <h5 key={todo.id}>
          {todo.title}
          <FaEdit className='edit'/>
          <FaTimes style={{color:'red', cursor:'pointer' ,float:'right'}} onClick = {() => onDelete (todo.id)} />
        </h5>
        ))} 
    </div>
  )
}

export default todos;