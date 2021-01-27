import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './routes';

import SignIn from '../pages/signIn';
import Main from '../pages/main';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} isPrivate={false} />
    <Route path="/main" exact component={Main} isPrivate />
  </Switch>
);

export default Routes;
