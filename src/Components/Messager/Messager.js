import React from 'react';
import styles from './Messager.module.css';

class Messager extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            email: "",
            subject: "",
            message: ""
        }
    }

    send(event) {
        event.preventDefault();
    }

    render() {
        return (
            <div className={styles.messager}>
                <div className={styles.content}>
                    <button id={styles.closeBtn} onClick={() => this.props.handleMessager(false)}>+</button>
                    <h2 className={styles.heading}>Send a Message</h2>
                    <form className={styles.form} onSubmit={this.send}>
                        <input id={styles.name} className={styles.input} onChange={this.changeName} placeholder="Name" autoCapitalize="words" required />
                        <input id={styles.email} className={styles.input} type="email" onChange={this.changeEmail} placeholder="Email" required />
                        <input id={styles.subject} className={styles.input} onChange={this.changeSubject} placeholder="Subject" autoCapitalize="sentences" />
                        <textarea id={styles.message} className={styles.input} onChange={this.changeMessage} placeholder="Message" autoCapitalize="sentences" required />
                        <button type="submit" id={styles.sendBtn}>Send</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Messager;