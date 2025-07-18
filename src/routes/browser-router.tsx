import React, { useState } from 'react';
import type { BrowserHistory, Action, Location } from 'history';
import { Router } from 'react-router-dom';

interface Props {
  basename?: string;
  children?: React.ReactNode;
  history: BrowserHistory;
}

type BrowserRouterState = {
  action: Action;
  location: Location;
};

export const BrowserRouter: React.FC<Props> = ({ history, children, basename }) => {
  const [state, setState] = useState<BrowserRouterState>({
    action: history.action,
    location: history.location,
  });

  React.useLayoutEffect(() => history.listen(setState), [history]);

  return (
    <Router basename={basename} location={state.location} navigationType={state.action} navigator={history}>
      {children}
    </Router>
  );
};
