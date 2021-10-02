import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/authPage/login/login.jsx';
import Register from './components/authPage/register/register.jsx';
import GeneralStyles from './components/generalStyles'
import './App.css'
import PrivateRoute from './components/PrivateRoute.jsx';
import Dashboard from './components/dashboard/dashboard'


function App() {
  const classes = GeneralStyles()

  return (
    <div className={classes.general} id="container">
      <Router>
        <Switch>
          <Route exact path='/' component={Login}/>
          <Route path="/register" component={Register}/>
          <PrivateRoute path="/dashboard" component={Dashboard}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
