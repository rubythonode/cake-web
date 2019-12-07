import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from './Router';

const Root: React.FC = () => (
  <BrowserRouter>
    <Router/>
  </BrowserRouter>
);

export default Root;
