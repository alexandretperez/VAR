import React, { Component } from 'react';
import styles from './About.css';

export class About extends Component {
    render() {
        return (
            <div>
                <div className='ui top left attached label'>About</div>
                <p className={styles.p}>
                    Hi there! <strong className={styles.strong}>React</strong> here.
                </p>
            </div>
        );
    }
}
