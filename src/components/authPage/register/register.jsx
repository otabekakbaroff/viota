import { Button } from '@material-ui/core';
import {useState} from 'react';
import useStyles from "../../styles";



function Register(props) {
  const classes = useStyles()



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
    <div  className={classes.validation}>
            <img className={classes.avatar} src={`https://avatars.dicebear.com/api/bottts/${register.username}.svg`} alt="user's avatar"/>
            <h2 className={classes.form.black}>Welcome</h2>
            <p className='.descript'>Sign up</p>
            <form onSubmit={registerSubmit} className={classes.form}>

                <input  className={classes.item} placeholder=" Username" name="username" type="text" onChange={handleChange} id="username"/>

                <input className={classes.item} placeholder=" Password" name="password" type="password" onChange={handleChange} id="password"/>

                <Button className={classes.button}type="submit">Sign up</Button>

                <p  className='.descript'>Have an account? Login <a href="http://localhost:3000/">here</a></p>
            </form>
    </div>

            
  );
}

export default Register;