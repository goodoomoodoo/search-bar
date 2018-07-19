import React from 'react';
import styles from '../style/Message.css';

class Message extends React.Component
{
    render()
    {
        return (
            <div className={ styles.container }>
                <h1>&#x21e7; Please try the Search Bar &#x1F605; &#x21e7;</h1>
                <p>
                    The search bar isn't created by option tag nor some linear iteration 
                    algorithm in Javascript but a data structure created at the Server that stores the 
                    users in a tree of array. 
                </p>
            </div>
        );
    }
}

export default Message;