import React from 'react'
import { connect } from 'react-redux';
import { storeUser } from '../redux/action';
import styles from '../style/HeadBar.css';

class HeadBar extends React.Component
{
    constructor( props )
    {
        super( props );

        this.state ={
            searchTerm: '',
        }

        this.handleSearchTerm = this.handleSearchTerm.bind( this );
        this.filterSearch     = this.filterSearch.bind( this );
        this.clearSearchBar   = this.clearSearchBar.bind( this );
        this.dispatchUser     = this.dispatchUser.bind( this );
    }

    clearSearchBar()
    {
        this.setState({
            searchTerm: ''
        });
    }

    handleSearchTerm( e )
    {
        this.setState({
            searchTerm: e.target.value
        });
    }

    dispatchUser( e )
    {
        this.props.storeUser( JSON.parse( e.target.id ) );
        this.clearSearchBar();
    }

    // this algorithm sucks. need revision
    filterSearch()
    {
        let keyword = this.state.searchTerm;
        let currentState = this.props.userData;
        let lastNameList = [
            {
                name: ''
            }
        ];
        let termsCheck = false;
        let i = 0;

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
            return [{}];
        else
            return lastNameList;
    }

    render()
    {
        let nameList = this.filterSearch();

        return (
            <div className={ styles.container }>
                <form>
                    <input type='text' name='keyword' placeholder='Search...' value={ this.state.searchTerm } onChange={ this.handleSearchTerm } />

                    <div className={ styles.menu }>
                        <ul>
                        {
                            this.state.searchTerm !== '' &&
                            nameList.map( ( user, index ) => (
                                user.name ?
                                <a id={ JSON.stringify( user ) } onClick={ this.dispatchUser } key={ index }>{ user.name }</a>:
                                <a key={ index }>No matches</a>
                            ))
                        }
                        </ul>
                    </div>

                </form>

            </div>
        );
    }
}

const mapStateToProps = state => ({
    userData: state.userData
});

const mapDispatchToProps = dispatch => ({
    storeUser: user => dispatch( storeUser( user ) )
});

export default connect( mapStateToProps, mapDispatchToProps )( HeadBar );