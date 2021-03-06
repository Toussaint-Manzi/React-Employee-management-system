import { useState,useEffect } from 'react'
import axios from 'axios'
import jsPDF from "jspdf";
import autoTable from 'jspdf-autotable';
import { CSVLink } from "react-csv";


const Admin = () => {

  const [ tasks, setTasks ] = useState([]);
  const [isLoading , setisLoading] = useState(true)
  const url = "http://localhost:8000/Employee";
  const doc = new jsPDF();
  


  const assignCsvData = () =>{
    let arr = [['EmployeeId','Name', 'Email','Phone number', 'Position']]
    for (let i=0;i<tasks.length;i++){
      arr.push(Object.values(tasks[i]));
    }
    return arr;
  }

  const csvData = assignCsvData();


  const pdfDownloader = () =>{
    let arr = []
    for (let i=0;i<tasks.length;i++){
      arr.push(Object.values(tasks[i]));
    }

    autoTable(doc, {
      title: ['Employees data'],
      head: [['EmployeeId','Name', 'Email','Phone number', 'Position']],
      body: arr,
    })
    doc.save('Employee data');
  }


  useEffect(()=>{
    axios.get(url).then((res)=>{
        setTasks(res.data);
        setisLoading (false);
    })
  },[tasks])

  return (
    <div className='admin'>
      <h2>Admin dashboard</h2>
      <ul className='ulA'>
        <li className='dash'>
          <h4>Employee Id</h4>
          <h4>Names</h4>
          <h4>Email</h4>
          <h4>Phone number</h4>
          <h4>Position</h4>
          <h4>Update</h4>
          <h4>Delete</h4>
        </li>
        {!isLoading ? (tasks.map((task) =>{ 
          const { id,name,email,phone,position } = task;
        return(
          <li key ={id} className="line">
            <h4>{id}</h4>
            <h4>{name}</h4>
            <h4>{email}</h4>
            <h4>{phone}</h4>
            <h4>{position || 'Casual'}</h4>
            <h4 className='btnD' variant='danger'>Update</h4>
            <h4 className='btnU'>Delete</h4>
          </li> 
        )
        })) : <div>Loading...</div> }
      </ul>
      <div className='abtn'>
        <button onClick={pdfDownloader} className='btn links'>Download a pdf</button>
        <CSVLink data={csvData} className='btn links'>Download Csv</CSVLink>
      </div>
    </div>
  )
}

export default Admin