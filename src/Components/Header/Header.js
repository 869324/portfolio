import React from 'react';
import styles from './Header.module.css';

import { NavLink } from 'react-router-dom';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <header className={styles.header}>
                <div className={styles.container}>
                    <img id={styles.avatar} src="images/javan.png" />
                    <label id={styles.username}>Javan Kyalo</label>
                </div>
                <div className={styles.container}>
                    <nav className={styles.nav}>
                        <NavLink to="/" className={(navData) => (navData.isActive ? styles.active : styles.link)}>Home</NavLink>
                        <NavLink to="/Services" className={(navData) => (navData.isActive ? styles.active : styles.link)}>Services</NavLink>
                        <NavLink to="/Projects" className={(navData) => (navData.isActive ? styles.active : styles.link)}>Projects</NavLink>
                        <NavLink to="Contacts" className={(navData) => (navData.isActive ? styles.active : styles.link)}>Contacts</NavLink>
                    </nav>

                    <button id={styles.button} onClick={() => this.props.handleMessager(true)}>Contact Now</button>
                </div>
            </header>
        );
    }
}

export default Header;