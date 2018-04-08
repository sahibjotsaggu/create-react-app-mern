import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Layout from './Layout';

// Route Containers
import HomePage from './containers/HomePage/HomePage';

const Routes = () => (
  <BrowserRouter basename="/">
    <Switch>
      <Layout>
        <Route exact path="/" component={ HomePage } />
      </Layout>
    </Switch>
  </BrowserRouter>
);

export default Routes;

