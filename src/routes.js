import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import {isAuthenticated} from './services/auth';

import Feiragera from './pages/feiragera';
import Dashboard from './pages/dashboard';
import Questions from './pages/questions';
import Login from './pages/login';
import Senai from './pages/dashboard/senai';


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
          <Route path="/gera" component={Feiragera} />

          <PrivateRoute path="/dashboard" component={Dashboard} />
          <PrivateRoute path="/senai" component={Senai} />
        </Switch>
     </BrowserRouter>
);

export default Routes;