import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage from './components/homepage/Homepage';
import { Login } from './components/login/Login';
import Signup from './components/signup/Signup';




const App = () => {
  return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            {/* <Route exact path="/signin" component={SignIn} />
            <Route component={NotFound} /> */}
          </Switch>
        </div>
      </Router>
  )
};
export default App;