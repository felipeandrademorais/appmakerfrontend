import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import {isAuthenticated} from './services/auth';

import Dashboard from './pages/dashboard';
import Questions from './pages/questions';
import Login from './pages/login';
import Senai from './pages/dashboard/senai';
import Sesi from './pages/dashboard/sesi';


const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route 
    {...rest}
    render={props => isAuthenticated() ? ( <Component {...props} /> ) : ( <Redirect to={{ pathname: "/", state: { from: props.location } }} />)}
  />
);

const Routes = () => (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/questions" component={Questions} />

          <PrivateRoute path="/dashboard" component={Dashboard} />
          <PrivateRoute path="/senai" component={Senai} />
          <PrivateRoute path="/sesi" component={Sesi} />
        </Switch>
     </BrowserRouter>
);

export default Routes;