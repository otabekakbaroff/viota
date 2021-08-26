import React from 'react'
import Users_list from './children/users_list'


function Dashboard(){
    return(
        <div className="Dashboard">
            <h1>Dashboard</h1>
            <Users_list/>
        </div>
    )
}

export default Dashboard