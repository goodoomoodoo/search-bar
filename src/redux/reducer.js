import { STORE_DATA, STORE_USER } from './action';

export const rootReducer = ( state = {}, action ) => {
    switch( action.type )
    {
        case STORE_DATA:
            return { userData: action.payload, currentUser: state.currentUser };
        case STORE_USER:
            return { userData: state.userData, currentUser: action.payload };
        default:
            return state;
    }
}