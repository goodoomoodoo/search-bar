import React from 'react';
import '../style/SearchBar.css';
import { dataPromise } from '../fetch/data';
import { createUserTree } from '../make/CreateUserTree';

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
    }

    componentDidMount()
    {
        dataPromise
            .then( json => {
                let userTree = createUserTree( json );

                this.setState({
                    user: userTree
                });

                console.log( userTree );
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

    render()
    {
        const filterResult = () => {
            let keyword = this.state.searchTerm.substring( 0, 1 );

            if( this.state.user[ keyword ] )
            {
                return (
                    <ul>
                        { 
                            this.state.user[ keyword ].term.map( ( user, index ) => 
                                <li key={ index }>{ user }</li>
                            )
                        }
                    </ul>
                )
            }

            return (
                <ul>
                    <li>No matches</li>
                </ul>
            )
        }

        // React component cannot take a function but an element, which is why this declaration is here
        const NewComp = filterResult();

        return(
            <div>
                <form>
                    <input type='text' name='keyword' onChange={ this.handleSearchTerm } value={ this.state.searchTerm } />
                    
                    {
                        this.state.searchTerm !== '' &&
                        NewComp
                    }
                </form>
            </div>
        );
    }
}

export default SearchBar;