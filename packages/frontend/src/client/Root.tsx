import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from './Router';

const Root: React.FC = () => (
  <BrowserRouter basename={window.location.pathname || ''}>
    <Router/>
  </BrowserRouter>
);

export default Root;
