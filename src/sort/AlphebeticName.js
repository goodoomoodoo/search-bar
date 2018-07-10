export const SortNameByAlphebet = ( data ) => {
    for( let i = 1; i < data.length; i++ )
    {
        let j = i; 
        let temp = data[ i ];

        while( j > 0 && temp.name < data[ j - 1 ].name )
        {
            data[ j ] = data[ j - 1 ];
            j--;
        }

        data[ j ] = temp;
    }
}