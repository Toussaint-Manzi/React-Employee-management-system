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
        // console.log(tasks)
        setisLoading (false);
    })
  },[tasks])

  return (
    <div>
      {!isLoading ? (tasks.map(task => <div key ={task.id} className="line">{task.name}</div>
      )) : <div>Loading...</div> }
    </div>
  )
}

export default Admin