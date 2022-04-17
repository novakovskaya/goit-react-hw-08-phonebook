import React from 'react';
import { Link } from 'react-router-dom';
import styles from './AuthNav.module.scss';

export const AuthNav = () => {
  return (
    <nav>
      <ul className={styles.AuthList}>
        <li className={styles.AuthItem}>
          <Link exact to="/register" className={styles.AuthLink}>
            Sign Up
          </Link>
        </li>
        <li className={styles.AuthItem}>
          <Link exact to="/login" className={styles.AuthLink}>
            Log In
          </Link>
        </li>
      </ul>
    </nav>
  );
};
