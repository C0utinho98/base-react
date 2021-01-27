import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { IState } from '../store';

interface Props extends RouteProps {
  component: React.ComponentType;
  isPrivate: boolean;
}

const RouteWrapper: React.FC<Props> = ({
  component: Component,
  isPrivate,
  ...rest
}) => {
  const signed = useSelector<IState>(state => state.auth.signed);

  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }

  if (signed && !isPrivate) {
    return <Redirect to="/main" />;
  }

  return (
    <Route {...rest} render={() => (signed ? <Component /> : <Component />)} />
  );
};

export default RouteWrapper;
