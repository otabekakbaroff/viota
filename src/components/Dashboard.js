import React,{useState,useEffect} from 'react'
import axiosWithAuth from '../components/axiosWithAuth'


function Dashboard(){
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

    const eventHandler = (e)=>{
        console.log(e.id)
        // props.history.push(`/dashboard${e.id}`);
    }

    return(
        <div>
            <h1>Dashboard</h1>
            <div>
                {users.map(item=>(
                    <div className="user" onClick={eventHandler} id = {item.id}>
                        <h1>{item.username}</h1>   
                        <h1>{item.id}</h1>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Dashboard