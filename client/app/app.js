import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import store, { history } from './store';
import { SET_AUTH } from './containers/Authentication/constants';
import Application from './containers/Application';
import ScrollToTop from './scrollToTop';
import setToken from './utils/token';

import './styles/style.scss';
import 'font-awesome/css/font-awesome.min.css';
import 'simple-line-icons/css/simple-line-icons.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'rc-slider/assets/index.css';
const token = localStorage.getItem('token');

if (token) {
  setToken(token);
  store.dispatch({ type: SET_AUTH });
}

const app = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <ScrollToTop>
        <Application />
      </ScrollToTop>
    </ConnectedRouter>
  </Provider>
);

export default app;
