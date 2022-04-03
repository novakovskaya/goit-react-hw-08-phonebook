import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { UserMenu } from 'components/UserMenu';
import { AuthNav } from 'components/AuthNav';
import { authSelectors } from 'redux/auth';
import styles from './AppBar.module.scss';

export const AppBar = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <header className={styles.Header}>
      <Link to="/" className={styles.Navigation}>
        {!isLoggedIn ? 'Home' : 'Contacts'}
      </Link>

      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
