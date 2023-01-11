import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';

// Styled Components
import {ThemeProvider} from 'styled-components';
import theme from './theme/theme';

//React Router
import { BrowserRouter as Router } from 'react-router-dom';

// Redux Imports
import { Provider } from 'react-redux';
import { applyMiddleware, compose, legacy_createStore } from 'redux'
import thunk from 'redux-thunk'
import reducer from './store/root.reducer'

// Initiating Redux Dev Tools and store
const composeWithDevTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = legacy_createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <ThemeProvider theme = {theme}>
      <Provider store = {store}>
        <App />
      </Provider>
    </ThemeProvider>
  </Router>
);
