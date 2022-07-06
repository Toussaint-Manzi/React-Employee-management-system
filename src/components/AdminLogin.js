import { Navigate } from "react-router-dom"

const AdminLogin = () => {

  const onSubmit = () =>{
    Navigate("/admin")
  }

  return (
    <div className="container">
        <h3 className="title">Login here</h3>
        <form className='Lform' onSubmit={onSubmit}>
            <label>Email or username</label>
            <input type="email" placeholder='Enter Email or username'/>
            <label>Password</label>
            <input type="password" placeholder='Enter Password'/>
            <button className='btn' type='onSubmit'>Login</button>
        </form>
    </div>
  )
}

export default AdminLogin