import { SortNameByAlphebet } from '../sort/AlphebeticName';

export default class DataTree 
{
    constructor()
    {
        this.rootArr = {};
    }

    get userList()
    {
        return this.rootArr;
    }

    initialize( data )
    {
        SortNameByAlphebet( data );

        this.createTree( this.rootArr, data, 0 );
    }

    /**
     * 
     * @param {*} root the root object where data are inserted: object
     * @param {*} data the data to be inserted: array of objects
     * @param {*} index the index of the char of the string: int
     */
    createTree( root, data, index )
    {
        let tempLst = [];
        let currentData = this.removeSpace( data[ 0 ].name );
        let firstChar = index < currentData.length ? currentData.charAt( index ) : '0';

        if( firstChar !== '0')
        {
            for( let i = 0; i < data.length - 1; i++ )
            {
                let nextData = this.removeSpace( data[ i + 1 ].name );
                let nextChar = index < nextData.length ? nextData.charAt( index ) : '0';

                if( firstChar === nextChar )
                {
                    tempLst.push( data[ i ] );

                    if( i + 1 === data.length - 1 )
                    {
                        tempLst.push( data[ i + 1 ] );
                        root[ firstChar ] = {};
                        root[ firstChar ].nextRoot = {};
                        root[ firstChar ].list = tempLst;
                    }
                }
                else
                {
                    tempLst.push( data[ i ] );
                    root[ firstChar ] = {};
                    root[ firstChar ].nextRoot = {};
                    root[ firstChar ].list = tempLst;
                    tempLst = [];                           // Clear the tempLst 
                    firstChar = nextChar;

                    if( i + 1 === data.length - 1 )
                    {
                        tempLst.push( data[ i + 1 ] );
                        root[ firstChar ] = {};
                        root[ firstChar ].nextRoot = {};
                        root[ firstChar ].list = tempLst;
                    }
                }
            }
        }

        for( let n in root )
        {
            if( root[ n ].list )
                this.createTree( root[ n ].nextRoot, root[ n ].list, index + 1 );
        }
    }

    /**
     * Trim all whitespace from the string
     * @param {*} name 
     * @returns {*} A new string of name
     */
    removeSpace( name )
    {
        let trimmedName = '';

        for( let i = 0; i < name.length; i++ )
        {
            let currChar = name.substring( i, i + 1 );

            if( currChar !== ' ')
                trimmedName += currChar;
        }

        return trimmedName;
    }
}