import { BrowserRouter as Router, Switch,Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute.jsx';
import Dashboard from './components/dashboard/dashboard'
import AuthPage from './components/authPage/authPage';
import Login from './components/authPage/login/login.jsx';
import './App.css';
import io from "socket.io-client"
import { useEffect } from 'react';
const socket = io("http://localhost:5000")

function App() {
  useEffect(()=>{
    console.log("HIT")
    socket.on("message", (data) => {
      console.log(data); 
    });
  },[])

  return (
      <Router>
        <Switch>
          <Route>
            <AuthPage/>
            <Route exact path="/" component={Login}/> 
            <PrivateRoute strict path="/dashboard" component={Dashboard}/>
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
