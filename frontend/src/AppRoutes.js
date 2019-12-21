import React, { Component } from 'react';
import Loadable from 'react-loadable';
import { AppContainer, hot } from 'react-hot-loader';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

import theme from './colors/index';
import Loading from './boilerplates/Loading';

const AsyncHome = Loadable({
  loader: () => import('./containers/Home/index.js'),
  modules: ['./containers/Home/index.js'],
  loading: Loading,
});

const AsyncAuth = Loadable({
  loader: () => import('./containers/Auth/index.js'),
  modules: ['./containers/Auth/index.js'],
  loading: Loading,
});

const AsyncUpload = Loadable({
  loader: () => import('./containers/Upload/index.js'),
  modules: ['./containers/Upload/index.js'],
  loading: Loading,
});

const AsyncProject = Loadable({
  loader: () => import('./containers/Project/index.js'),
  modules: ['./containers/Project/index.js'],
  loading: Loading,
});

const AsyncMaintain = Loadable({
  loader: () => import('./containers/Maintainence/index.js'),
  modules: ['./containers/Maintainence/index.js'],
  loading: Loading,
});

class AppRoutes extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <AppContainer>
            <BrowserRouter>
              <Switch>
                <Route exact path="/" component={AsyncHome} />
                <Route path="/auth" component={AsyncAuth} />
                <Route path="/upload" component={AsyncUpload} />
                <Route path="/assigned" component={AsyncProject} />
                <Route path="/maintain" component={AsyncMaintain} />
              </Switch>
            </BrowserRouter>
        </AppContainer>
      </MuiThemeProvider>
    );
  }
}

export default hot(module)(AppRoutes);