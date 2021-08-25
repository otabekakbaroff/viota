import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import axiosWithAuth from '../axiosWithAuth'



function Login(props) {


  const [login,setLogin]=useState({
      username:'',
      password:''
  });
  
  const handleChange=e=>{
      setLogin({
        ...login,
        [e.target.name]:e.target.value
    })
  }

  const LoginSubmit=e=>{
    e.preventDefault()
    console.log(login)
    axiosWithAuth().post('/api/users/login', login)
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
    <div className="login">
            <h2>Login</h2>
            <form onSubmit={LoginSubmit}>

                <input placeholder=" username" name="username" type="text" onChange={handleChange} id="username"/>

                <input placeholder=" password" name="password" type="password" onChange={handleChange} id="password"/>

                <button type="submit">Log In</button>

                <div>Don't Have an account? register <a href="http://localhost:3000/register">here</a></div>
            </form>
    </div>

            
  );
}

export default Login;