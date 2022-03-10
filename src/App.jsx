import { BrowserRouter as Router, Switch,Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute.jsx';
import Dashboard from './components/dashboard/dashboard'
import AuthPage from './components/authPage/authPage';
import './App.css';


function App() {

//test
  return (
      <Router>
        <Switch>
          <Route>
            <AuthPage/>
            <PrivateRoute strict path="/dashboard" component={Dashboard}/>
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
