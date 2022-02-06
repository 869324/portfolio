import React from 'react';
import styles from './Projects.module.css';

class Projects extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles.projects} style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "/images/background1.jpg"})` }}>
                <div>
                    <h1>Projects</h1>
                </div>
            </div>
        );
    }
}

export default Projects;