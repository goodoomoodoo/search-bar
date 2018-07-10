import { SortNameByAlphebet } from '../sort/AlphebeticName';

/**
 * 
 * @param {*} data the user data: Array of Objects
 */
export const createUserTree = data => {
    // Sort the data in alphebetic order first
    SortNameByAlphebet( data );

    return crawlTree( data );    
}

/**
 * The function crawl through the tree recursively and assign user name
 * @param {*} data the user data: Array of Objects
 */
const crawlTree = ( data ) => {
    let result = {};
    let firstChar = data[ 0 ].name.substring( 0, 1 ).toLowerCase();
    let userArray = [];

    for( let i = 0; i < data.length - 1; i++ )
    {
        let currUser = data[ i ].name;
        let nextUser = data[ i + 1 ].name;

        if( nextUser.substring( 0, 1 ).toLowerCase() === firstChar )
        {
            userArray.push( currUser );
        }
        else
        {
            userArray.push( currUser );
            result[ firstChar ] = {};
            result[ firstChar ].term = userArray;
            userArray = [];
            firstChar = nextUser.substring( 0, 1 ).toLowerCase();
        }
    }

    return result;
}