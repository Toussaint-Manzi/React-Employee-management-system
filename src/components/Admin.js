import { useState,useEffect } from 'react'
import axios from 'axios'

const Admin = () => {

  const [ tasks, setTasks ] = useState([]);
  const [isLoading , setisLoading] = useState(true)
  const url = "http://localhost:8000/Employee";


  // const getAllTasks = () =>{

  // }

  useEffect(()=>{
    axios.get(url).then((res)=>{
        setTasks(res.data);
        setisLoading (false);
    })
  },[tasks])

  return (
    <div className='admin'>
      <h2>Admin dashboard</h2>
      <ul>
        <li className='dash'>
          <h4>Employee Id</h4>
          <h4>Names</h4>
          <h4>Email</h4>
          <h4>Phone number</h4>
          <h4>Position</h4>
        </li>
        {!isLoading ? (tasks.map((task) =>{ 
          const { id,name,email,phone,position } = task;
        return(
          <li key ={task.id} className="line dash">
            <h4>{id}</h4>
            <h4>{name}</h4>
            <h4>{email}</h4>
            <h4>{phone}</h4>
            <h4>{position || 'Casual'}</h4>
          </li> 
        )
        })) : <div>Loading...</div> }
      </ul>
      
    </div>
  )
}

export default Admin