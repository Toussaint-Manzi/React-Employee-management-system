// import { useState,useEffect } from 'react';
// import axios from 'axios'
// // import { v4 as uuidv4 } from 'uuid';
// // import { FaTimes } from 'react-icons/fa';



// const Todo = () => {
//     const [ todos , setTodos ] = useState("")
//     // const [ input, setInput ] = useState("")
//     const url = "http://localhost:8000/tasks"

//     // const onDelete = (id) => {
//     //     setTodos(todos.filter((todo) => todo.id !== id));
//     // }

//     // const onChange = (e) =>{
//     //     setInput (e.target.value);
//     // } 

//     // const onSubmit = (e) => {
//     //     e.preventDefault();
//     //     setTodos([...todos, { id:uuidv4() , title:input, completed:false}]);
//     //     console.log(todos);
//     //     setInput("");
//     // }

//     useEffect(()=>{
//         axios.get(url).then((res)=>{
//             setTodos(res.data);
//             console.log(res.data)
//         })
//     },[])




//     return (
//         <div className='task'>
//             <h3>Hi there</h3>
//             {/* <form onSubmit={ onSubmit } className='form-control  form-control-check'>
//             <input type='text' placeholder='Enter a new task' value = { input } onChange = {onChange}/>
//             <button className='btn' type='onSubmit'>Add</button>
//             </form> */}
//             {todos.title.map((todo) => (
//             <h5 key={todo.id}>
//                 {todo.title}
//               {/* <FaTimes style={{color:'red', cursor:'pointer' ,float:'right'}} onClick = {() => onDelete (todo.id)} /> */}
//             </h5>
//             ))}
//         </div>
//     )
// }

// export default Todo
