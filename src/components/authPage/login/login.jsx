import { useState } from "react";
import { Button } from "@material-ui/core";
import useStyles from "../../styles";



function Login() {

  const classes = useStyles()

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
    <div className={classes.validation}>
            <img className={classes.avatar}  src={`https://avatars.dicebear.com/api/bottts/${login.username}.svg`} alt="user's avatar"/>
            <h2 >Welcome back</h2>
            <p  className='.descript'>Login</p>
            <form onSubmit={LoginSubmit} className={classes.form}>

                <input  className={classes.item} placeholder=" Username" name="username" type="text" onChange={handleChange} id="username"/>

                <input   className={classes.item} placeholder=" Password" name="password" type="password" onChange={handleChange} id="password"/>

                <Button type="submit" className={classes.button}>Log In</Button>

                <p  className='.descript'>Don't Have an account? Sign up <a href="https://viota.netlify.app/register">here</a></p>
            </form>
    </div>

            
  );
}

export default Login;