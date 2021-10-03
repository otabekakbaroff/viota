import { Button } from '@material-ui/core';
import {useState} from 'react';
import authStyles from "../authStyles";



function Register() {
  const auth_classes = authStyles()



  const [register,setRegister]=useState({
      username:'register',
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
  }

  return (
    <div className={auth_classes.general} id="registerContainer">
        <div  className={auth_classes.validation}>
                <img className={auth_classes.avatar} src={`https://avatars.dicebear.com/api/bottts/${register.username}.svg`} alt="user's avatar"/>
                <h2 >Welcome</h2>
                <p className={auth_classes.discription}>Sign up</p>
                <form onSubmit={registerSubmit} className={auth_classes.form}>

                    <input  className={auth_classes.item} placeholder=" Username" name="username" type="text" onChange={handleChange} id="username"/>

                    <input className={auth_classes.item} placeholder=" Password" name="password" type="password" onChange={handleChange} id="password"/>

                    <Button className={auth_classes.button}type="submit">Sign up</Button>

                    <p  >Have an account? Login <a href="http://localhost:3000/">here</a></p>
                </form>
        </div>
    </div>
            
  );
}

export default Register;