import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Home from '../routes/Home';
import Detail from '../routes/Detail';

export default () => {
  return (
    <Router>
      <Route exact path="/" component={Home}></Route>
      <Route path="/:id" component={Detail}></Route>
    </Router>
  );
};
