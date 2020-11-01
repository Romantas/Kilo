import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import configureStore from './utils/configureStore';
import theme from './utils/theme';
import history from './utils/history';
import App from './App';

// Create redux store
const initialState = {};
const store = configureStore(initialState);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </MuiThemeProvider>
    </Router>
  </Provider>,
  document.getElementById('root'),
);
