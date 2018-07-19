import { rootReducer } from './reducer';
import { createStore } from 'redux';

export const configureStore = initialState => {
    return createStore( rootReducer, initialState );
};