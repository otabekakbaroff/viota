import Login from "./login/login";
import Register from "./register/register";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'



function AuthPage(){
    return(
        <Router>
            <Switch>
                <Route exact path="/" id="container" component={Login}/>
                <Route path="/register" id="container" component={Register}/>
            </Switch>
        </Router>
    )
}



export default AuthPage