import { BrowserRouter as Router, Switch,Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute.jsx';
import Dashboard from './components/dashboard/dashboard'
import AuthPage from './components/authPage/authPage';
import Login from './components/authPage/login/login.jsx';
import './App.css'



function App() {
  return (
      <Router>
        <Switch>
          <Route>
            <AuthPage/>
            <PrivateRoute path="/dashboard" component={Dashboard}/>
            <Route  component={Login}/> {/* This should be error route (404) not found component */}
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
