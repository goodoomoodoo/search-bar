import React from 'react';
import '../style/SearchBar.css';
import { dataPromise } from '../fetch/data';
import DataTree from '../make/DataTree';

class SearchBar extends React.Component
{
    constructor( props )
    {
        super( props );

        this.state ={
            searchTerm: '',
            user: {}
        }

        this.handleSearchTerm = this.handleSearchTerm.bind( this );
        this.filterSearch = this.filterSearch.bind( this );
    }

    componentDidMount()
    {
        dataPromise
            .then( json => {
                let userTree = new DataTree();
                userTree.initialize( json );

                this.setState({
                    user: userTree.rootArr
                });
            })
            .catch( e => {
                console.log( e );
            });
    }

    handleSearchTerm( e )
    {
        this.setState({
            searchTerm: e.target.value
        });
    }

    // this algorithm sucks. need revision
    filterSearch()
    {
        let keyword = this.state.searchTerm;
        let currentState = this.state.user;
        let lastNameList = [
            {
                name: ''
            }
        ];
        let termsCheck = false;
        let i = 0

        // iterate through the tree with char of the keyword
        for( ; i < keyword.length ; i++ )
        {
            let firstChar = keyword.substring( i, i + 1 );

            if( !currentState[ firstChar ] )
                break;
            else    
            {
                lastNameList = currentState[ firstChar ].list ;
                currentState = currentState[ firstChar ].nextRoot;
            }
        }

        // final check when the list is narrowed down
        for( let n in lastNameList )
        {
            termsCheck = termsCheck || lastNameList[ n ].name.includes( keyword );
        }

        // return names if the keyword matches 
        if( i === 0 || !termsCheck )
            return [{name: 'No matches'}];
        else
            return lastNameList;
    }

    render()
    {
        let nameList = this.filterSearch();

        return (
            <div>
                <form>
                    <input type='text' name='keyword' value={ this.state.searchTerm } onChange={ this.handleSearchTerm } />

                    {
                        this.state.searchTerm !== '' &&
                        nameList.map( ( user, index ) => (
                            <li key={ index }>{ user.name }</li>
                        ))
                    }
                </form>

            </div>
        );
    }
}

export default SearchBar;