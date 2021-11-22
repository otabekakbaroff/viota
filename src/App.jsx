import { BrowserRouter as Router, Switch,Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute.jsx';
import Dashboard from './components/dashboard/dashboard'
import AuthPage from './components/authPage/authPage';
import Login from './components/authPage/login/login.jsx';
import './App.css';


function App() {

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
