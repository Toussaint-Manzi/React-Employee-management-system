import { useState } from 'react'
import axios from 'axios'
import ShortUniqueId from 'short-unique-id';

const Register = () => {
  const [ inputName,setInputName ] = useState('')
  const [ inputEmail,setInputEmail ] = useState('')
  const [ inputPhone,setInputPhone ] = useState('')
  const [ inputPassword,setInputPassword ] = useState('')
  const uid = new ShortUniqueId();

  const url = "http://localhost:8000/Employee";


  const onChange1 = (e) =>{
    setInputName(e.target.value);
  }
  const onChange2 = (e) =>{
    setInputEmail(e.target.value);
  }
  const onChange3 = (e) =>{
    setInputPhone(e.target.value);
  }
  const onChange4 = (e) =>{
    setInputPassword(e.target.value);
  }


  const onSubmit = () =>{
    axios.post(url,{
      id: uid(),
      name:inputName,
      email:inputEmail,
      phone:inputPhone,
      password:inputPassword
    }).then(() =>{
    })
  }
    

  return (
    <div className='register'>
        <div className="container">
            <h3>Register here.</h3>
            <form className='form' onSubmit={onSubmit}>
                <label>Name</label>
                <input type="text" placeholder='Enter name' value={inputName} onChange={onChange1}/>
                <label>Email</label>
                <input type="email" placeholder='Enter Email' value={inputEmail} onChange={onChange2}/>
                <label>Phone</label>
                <input type="text" placeholder='Enter Phone number'value={inputPhone} onChange={onChange3}/>
                <label>Password</label>
                <input type="password" placeholder='Enter Password'value={inputPassword} onChange={onChange4}/>
                <button className='btn' type='onSubmit'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Register