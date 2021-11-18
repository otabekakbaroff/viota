import { BrowserRouter as Router, Switch,Route } from 'react-router-dom';
// import PrivateRoute from './components/PrivateRoute.jsx';
import Dashboard from './components/dashboard/dashboard'
import AuthPage from './components/authPage/authPage';
import Login from './components/authPage/login/login.jsx';
import './App.css';



function App() {
  //All unknown routes will redirect to login page which is located at "/" path
  const checkPathLocation = () =>{
    const all_paths = new Set(['/','/register','/dashboard'])
    if(all_paths.has(window.location.pathname)){
      return `/${Math.random()*99}`
    }else{
      window.history.back()
      return window.location.pathname
    }
  }


  return (
      <Router>
        <Switch>
          <Route>
            <AuthPage/>
            {/* <PrivateRoute strict path="/dashboard" component={Dashboard}/> */}
            <Route path="/dashboard" component={Dashboard}/>
            <Route path={checkPathLocation()} component={Login}/> {/* This should be error route (404) not found component */}
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
