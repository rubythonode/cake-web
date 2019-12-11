import * as React from 'react';
import { Route } from 'react-router-dom';

import { Apply, Home, Login, Teacher } from '../pages';

class Router extends React.Component {
  public render() {
    return (
      <div>
        <Route exact={true} path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/apply" component={Apply} />
        <Route path="/teacher" component={Teacher} />
      </div>
    );
  }
}

export default Router;
