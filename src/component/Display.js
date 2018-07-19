import React from 'react';
import { connect } from 'react-redux';
import { storeUser } from '../redux/action';
import styles from '../style/Display.css';

class Display extends React.Component
{
    constructor( props )
    {
        super( props );

        this.dispatchUser = this.dispatchUser.bind( this );
        this.clearUser    = this.clearUser.bind( this );
    }

    dispatchUser( e )
    {
        this.props.storeUser( JSON.parse( e.target.id ) );
    }

    clearUser()
    {
        this.props.storeUser( {} );
    }

    render()
    {
        let user = this.props.currentUser;
        let userArray = createList( this.props.userData );
        return (
            <div className={ styles.container }>
                {
                    user.name
                    && userGrid( user, this.clearUser )
                    || userList( userArray, this.dispatchUser )
                }
            </div>
        );
    }
}

const userGrid = ( user, callback ) => {
    return (
        <div>
            <div className={ styles.close } onClick={ callback }>&#x2715;</div>
            <h1 className={ styles.title }>{ user.name }</h1>
            <span>{ `@${ user.username }` }</span>

            <div className={ styles.grid_container }>
                <div className={ styles.grid_header }>
                    Address
                </div>
                <div className={ styles.grid_street }>
                    <strong className={ styles.caption }>Street</strong>
                    <div className={ styles.content }>{ user.address.street }</div>
                </div>
                <div className={ styles.grid_suite }>
                    <strong className={ styles.caption }>Suite</strong>
                    <div className={ styles.content }>{ user.address.suite }</div>
                </div>
                <div className={ styles.grid_city }>
                    <strong className={ styles.caption }>City</strong>
                    <div className={ styles.content }>{ user.address.city }</div>
                </div>
                <div className={ styles.grid_zipcode }>
                    <strong className={ styles.caption }>Zip Code</strong>
                    <div className={ styles.content }>{ user.address.zipcode }</div>
                </div>

                <div className={ styles.grid_header }>
                    Contact
                </div>
                <div className={ styles.grid_contact }>
                    <strong className={ styles.caption }>Phone</strong>
                    <div className={ styles.content }>{ user.phone }</div>
                </div>
                <div className={ styles.grid_contact }>
                    <strong className={ styles.caption }>Email</strong>
                    <div className={ styles.content }>{ user.email }</div>
                </div>
                <div className={ styles.grid_contact }>
                    <strong className={ styles.caption }>Website</strong>
                    <div className={ styles.content }>{ user.website }</div>
                </div>
            </div>
        </div>
    );
};

const userList = ( list, callback ) => {
    return (
        <div>
            <div className={ styles.slogan }>
                <h1>A Search Bar for fake data...</h1>
            </div>
            
            <ul className={ styles.menu }>
                <h2>All fake users</h2>
                {
                    list.map( ( user, index ) => (
                        <li id={ JSON.stringify( user ) } onClick={ callback } 
                          className={ styles.user_item } key={ index }>
                            <h3 id={ JSON.stringify( user ) }>{ user.name }</h3>
                            <h5 id={ JSON.stringify( user ) }>{ `@${ user.username}` }</h5>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

// create a user list
const createList = tree => {
    let result = [];

    for( let key in tree )
    {
        result.push( ...tree[ key ].list );
    }

    return result;
}

const mapStateToProps = state => ({
    userData: state.userData,
    currentUser: state.currentUser
});

const mapDispatchToProps = dispatch =>({
    storeUser: user => dispatch( storeUser( user ) )
})

export default connect( mapStateToProps, mapDispatchToProps )( Display );