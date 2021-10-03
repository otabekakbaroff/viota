import { useState } from "react";
import { Button } from "@material-ui/core";
import authStyles from "../authStyles";



function Login() {

  const auth_classes = authStyles()

  const [login,setLogin]=useState({
      username:'login',
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
  }

  return (
    <div className={auth_classes.general} id="loginContainer">
      <div className={auth_classes.validation}>
              <img className={auth_classes.avatar}  src={`https://avatars.dicebear.com/api/bottts/${login.username}.svg`} alt="user's avatar"/>
              <h2 >Welcome back</h2>
              <p className={auth_classes.discription}>Login</p>
              <form onSubmit={LoginSubmit} className={auth_classes.form}>

                  <input  className={auth_classes.item} placeholder=" Username" name="username" type="text" onChange={handleChange} id="username"/>

                  <input   className={auth_classes.item} placeholder=" Password" name="password" type="password" onChange={handleChange} id="password"/>

                  <Button type="submit" className={auth_classes.button}>Log In</Button>

                  <p  >Don't have an account? Sign up <a href="http://localhost:3000/register">here</a></p>
              </form>
      </div>
    </div>

            
  );
}

export default Login;