import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import axiosWithAuth from '../../axiosWithAuth'
import {BrowserRouter as Router,  Route,Switch } from 'react-router-dom'
import Chatroom from './chatroom'

function Users_list(){
    const [users, setUsers] = useState([])
    useEffect(()=>{
        axiosWithAuth().get('/api/users/all-users')
        .then(response=>{
              console.log(response)
              setUsers(response.data)
        })
        .catch(err=>{
              console.log(err);
        })
    },[])



    return(
        <div>
            <Router>
                <Switch>
                    <Route path="/chatroom" component={Chatroom}/>
                </Switch>
            </Router>
                {users.map(item=>(
                    <Link to="/chatroom">
                        <div className="user"  id = {item.id}>
                        <h1>{item.username}</h1>   
                        <h1>{item.id}</h1>
                    </div>
                    </Link>
                ))}
        </div>
    )
}


export default Users_list