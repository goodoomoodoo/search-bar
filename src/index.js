import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// redux store
import { configureStore } from './redux/store';
import { Provider } from 'react-redux';

const preloadedState = window.__INITIAL_STATE__;

delete window.__INITIAL_STATE__;

const store = configureStore( preloadedState );

ReactDOM.hydrate(
    <Provider store={ store }>
        <App />
    </Provider>,
    document.getElementById( 'root' )
);