import { useNavigate } from "react-router-dom"
import { useState } from "react";

const AdminLogin = () => {

  const navigate = useNavigate();
  const [ inputEmail ,setInputEmail] = useState('')
  const [ inputPassword ,setInputPassword] = useState('')

  const onChange1 = (e) =>{
    setInputEmail(e.target.value);
  } 

  const onChange2 = (e) =>{
    setInputPassword(e.target.value);
  } 

  const onSubmit = () =>{
    if(inputEmail === 'admin@gmail.com' && inputPassword === 'admin12'){
      localStorage.setItem("Email" ,inputEmail)
      localStorage.setItem("Password" , inputPassword)
      navigate("/admin")
    }else {
      alert("Wrong password")
    }
  }

  return (
    <div className="container">
        <h3 className="title">Login here</h3>
        <form className='Lform' onSubmit={onSubmit}>
            <label>Email or username</label>
            <input type="text" placeholder='Enter Email or username' value={inputEmail} onChange={onChange1}/>
            <label>Password</label>
            <input type="password" placeholder='Enter Password' value={inputPassword} onChange={onChange2}/>
            <button className='btn' type='onSubmit'>Login</button>
        </form>
    </div>
  )
}

export default AdminLogin