import React from 'react';
import { Link } from 'react-router-dom';

import phonebook from 'images/phone.png';
import styles from './HomeView.module.scss';

const HomeView = () => {
  return (
    <div className={styles.Container}>
      <img src={phonebook} alt="phonebook" height="600" width="310" />

      <div className={styles.Wraper}>
        <h1 className={styles.Title}>Phonebook</h1>

        <p className={styles.HomeText}>To start using our app, please</p>
        <Link exact to="/login" className={styles.HomeLink}>
          Log in
        </Link>
        <span className={styles.HomeSpan}>/</span>
        <Link exact to="/register" className={styles.HomeLink}>
          Sign up
        </Link>
      </div>
    </div>
  );
};

export default HomeView;
