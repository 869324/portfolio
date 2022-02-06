import React from 'react';
import styles from './Contacts.module.css';

class Contacts extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles.contacts} style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "/images/background1.jpg"})` }}>
                <h2>Contacts</h2>
            </div>
        );
    }
}

export default Contacts;