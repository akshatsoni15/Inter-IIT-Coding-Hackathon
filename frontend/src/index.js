import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import * as Sentry from '@sentry/browser';

import AppRoutes from './AppRoutes.js';
import "assets/scss/material-kit-react.scss?v=1.8.0";

if (process.env.NODE_ENV === 'production') {
  Sentry.init({ dsn: 'https://af4cf60f9d3a44b889b90d21858c6f7f@sentry.io/1764560' });
}

const render = (Component) => {
  ReactDOM.render(
    <React.Fragment>
      <CssBaseline />
      <Component />
    </React.Fragment>,
    document.getElementById('root')
  );
};

render(AppRoutes);

if (module.hot) {
  module.hot.accept('./AppRoutes', () => {
    const App = require('./AppRoutes').default; // eslint-disable-line
    render(App);
  });
}