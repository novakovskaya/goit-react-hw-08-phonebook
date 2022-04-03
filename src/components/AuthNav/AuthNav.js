import React from 'react';
import { Link } from 'react-router-dom';
import styles from './AuthNav.module.scss';

export const AuthNav = () => {
  return (
    <div>
      <ul className={styles.AuthList}>
        <li className={styles.AuthItem}>
          <Link to="/register" className={styles.AuthLink}>
            Sign Up
          </Link>
        </li>
        <li className={styles.AuthItem}>
          <Link to="/login" className={styles.AuthLink}>
            Log In
          </Link>
        </li>
      </ul>
    </div>
  );
};
