import React from 'react';
import { renderToString } from 'react-dom/server';
import express from 'express';
import { template } from './template';

// react redux
import { Provider } from 'react-redux';

// component
import App from './views/App';

// user data 
import fetch from 'node-fetch';
import DataTree from './views/server/structure/DataTree';

const initialState = {
    userData: [],
    currentUser: {}
};

fetch( 'https://jsonplaceholder.typicode.com/users' )
    .then( res => res.json() )
    .then( json => {
        let userTree = new DataTree();

        userTree.initialize( json );
        initialState[ 'userData' ] = userTree.rootArr;
    });

// field
const app  = express();
const PORT = process.env.PORT || 3000;

// setup store
import { configureStore } from './views/redux/store';

const store = configureStore( initialState );

// host static files
app.use( express.static( 'public' ) );

// response to request
app.get( '/*', ( req, res ) => {    
    const content = renderToString(
        <Provider store={ store }>
                <App />
        </Provider>
    );

    const indexHTML = template( content, initialState );

    res.send( indexHTML );
})

app.listen( PORT, () => {
    console.log( `Listening on port ${ PORT } ...` );
});