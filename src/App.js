import React,{useState,useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/authPage/login';
import Register from './components/authPage/register';
import {Context} from './components/Context'
import PrivateRoute from './components/PrivateRoute';
import './App.css';
import Chatroom from './components/Dashboard/children/chatroom';
import io from "socket.io-client"
const socket = io("http://localhost:5000")

function App() {
  const [chatbox,set_chatbox] = useState([])
 useEffect(()=>{
    socket.on('server-message', message=>{
      console.log(message)
    })
    socket.on('private-message', message => {
      console.log(message)
    })
 },[])
  return (
    <div className="App">
      <Router>
        <Switch>
          <Context.Provider value={{socket,chatbox,set_chatbox}}> 
              <Route  exact path="/" component={Login}/>
              <Route  path="/register" component={Register}/>
              <PrivateRoute path="/dashboard" component={Dashboard}/>
              <PrivateRoute  path="/chatroom" component={Chatroom}/>
          </Context.Provider>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
