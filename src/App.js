import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from './components/authPage/login';
import Register from './components/authPage/register';
import {Context} from './components/Context'
import PrivateRoute from './components/PrivateRoute';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Context.Provider>
              <Route  exact path="/" component={Login}/>
              <Route  path="/register" component={Register}/>
              <PrivateRoute path="/dashboard" component={Dashboard}/>
          </Context.Provider>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
