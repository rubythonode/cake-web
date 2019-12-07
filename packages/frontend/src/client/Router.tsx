import * as React from 'react';
import { Route } from 'react-router-dom';

import { Home, Login } from '../pages';

class Router extends React.Component {
  public render() {
    return (
      <div>
        <Route exact={true} path="/" component={Home} />
        <Route path="/login" component={Login} />
      </div>
    );
  }
}

export default Router;
