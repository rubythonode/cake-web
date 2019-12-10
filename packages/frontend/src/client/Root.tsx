import * as React from 'react';
import { HashRouter } from 'react-router-dom';
import Router from './Router';

const Root: React.FC = () => (
  <HashRouter basename={window.location.pathname || ''}>
    <Router/>
  </HashRouter>
);

export default Root;
