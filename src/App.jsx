import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/authPage/login/login.jsx';
import Register from './components/authPage/register/register.jsx';
import useStyles from './components/styles'
import './App.css'

function App() {
  const classes = useStyles()

  return (
    <div className={classes.general} >
      <Router>
        <Switch>
          <Route exact path='/' component={Login}/>
          <Route path="/register" component={Register}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
