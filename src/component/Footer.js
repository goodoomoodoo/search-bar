import React from 'react';
import styles from '../style/Footer.css';

class Footer extends React.Component
{
    render()
    {
        return (
            <div className={ styles.container }>
                <div className={ styles.link }>
                    <strong>Code by </strong><a href='http://arvinlin.link'>Arvin Lin</a><strong> at </strong>
                    <a href='https://github.com/goodoomoodoo/search-bar'>https://github.com/goodoomoodoo/search-bar</a>
                </div>
            </div>
        );
    }
}

export default Footer;