import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import axiosWithAuth from '../axiosWithAuth'



function Register(props) {


  const [register,setRegister]=useState({
      username:'',
      password:''
  });
  
  const handleChange=e=>{
      setRegister({
        ...register,
        [e.target.name]:e.target.value
    })
  }

  const registerSubmit=e=>{
    e.preventDefault()
    console.log(register)
    axiosWithAuth().post('/api/users/register', register)
    .then(response=>{
          console.log(response)
          localStorage.setItem('username',response.data.username)
          localStorage.setItem('token',response.data.token);
          props.history.push("/dashboard");
    })
    .catch(err=>{
          console.log(err);
    })
  }

  return (
    <div className="register">
            <h2>Register</h2>
            <form onSubmit={registerSubmit}>

                <input placeholder=" username" name="username" type="text" onChange={handleChange} id="username"/>

                <input placeholder=" password" name="password" type="password" onChange={handleChange} id="password"/>

                <button type="submit">Register</button>

                <div>Have an account? Login <a href="http://localhost:3000/">here</a></div>
            </form>
    </div>

            
  );
}

export default Register;