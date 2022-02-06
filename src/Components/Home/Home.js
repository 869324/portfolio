import React from 'react';
import styles from './Home.module.css';

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles.home} style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "/images/background1.jpg"})` }}>
                <div className={styles.welcome}>
                    <div className={styles.desc}>
                        <h1><label id={styles.intro}>Hi, I am </label><label id={styles.introName}>Javan Kyalo</label></h1>
                        <label id={styles.occupation}>{"< A software developer />"}</label>
                        <label id={styles.field}>Majoring in <label className={styles.spec}>Full stack</label> and <label className={styles.spec}>Mobile</label> software developement</label>
                    </div>

                    <div className={styles.myDesc}>
                        <p className={styles.text}>
                            I have a passion for programming. I like the feeling of solving problems with technology and I aspire to be a great contribution to the
                            technology world. Programming is not only a profession for me, but also a part of my life. I spend everyday tyring to get better
                            and better in this field.
                            </p>

                        <p className={styles.text}>
                            I see technology as a gateway to a better and simpler life. My take is that technology is a tool at our disposal that we can use to
                            solve our problems and make our lives easier.
                            </p>

                        <p className={styles.text}><b>My goal</b>, as a software developer is to make life better with technology and excel at it</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;