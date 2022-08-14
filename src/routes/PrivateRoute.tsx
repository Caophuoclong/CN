import {Route} from 'react-router-dom';
import React from 'react';
type props = {
  path: string;
  Component: JSX.Element;
};
const PrivateRoute: React.FC<props> = ({path, Component}) => {
  return <Route path={path} element={Component} />;
};
