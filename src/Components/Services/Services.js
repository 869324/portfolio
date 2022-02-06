import React from 'react';
import styles from './Services.module.css';

import { FaUserGraduate, FaReact, FaNodeJs, FaJava } from 'react-icons/fa';
import { FcAndroidOs } from 'react-icons/fc';
import { DiJavascript, DiPython } from 'react-icons/di';
import { ImProfile } from 'react-icons/im';
import { GiSkills } from 'react-icons/gi';

class Services extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles.services} style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "/images/background1.jpg"})` }}>
                <div className={styles.main} >
                    <h1>Services</h1>
                    <div className={styles.skillsCont}>
                        <div className={styles.contHeader}>
                            <GiSkills id={styles.skillIcon} size={48} />
                            <h2 className={styles.heading}>Skills</h2>
                        </div>
                        <div className={styles.contMain}>
                            <div>
                                <div className={styles.skillCont}>
                                    <FaJava className={styles.skillImg} size={56} />
                                    <label className={styles.text}>Java</label>
                                </div>
                                <div className={styles.skillCont}>
                                    <DiPython className={styles.skillImg} size={56} />
                                    <label className={styles.text}>Python</label>
                                </div>
                                <div className={styles.skillCont}>
                                    <DiJavascript className={styles.skillImg} size={56} />
                                    <label className={styles.text}>JavaScript</label>
                                </div>
                            </div>

                            <div>
                                <div className={styles.skillCont}>
                                    <FaReact className={styles.skillImg} size={56} />
                                    <label className={styles.text}>React</label>
                                </div>
                                <div className={styles.skillCont}>
                                    <FaNodeJs className={styles.skillImg} size={56} />
                                    <label className={styles.text}>NodeJs</label>
                                </div>
                                <div className={styles.skillCont}>
                                    <FcAndroidOs className={styles.skillImg} size={56} />
                                    <label className={styles.text}>Android</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Services;