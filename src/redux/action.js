export const STORE_DATA = 'STORE_DATA';

// dispatch action: store user data( useless )
export const storeData = data => ({
    type: STORE_DATA,
    payload: data
});

export const STORE_USER = 'STORE_USER';

// dispatch action: store the selected user
export const storeUser = data => ({
    type: STORE_USER,
    payload: data
});