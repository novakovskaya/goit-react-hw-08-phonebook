import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { authSelectors, authOperations } from 'redux/auth';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import styles from './UserMenu.module.scss';

const theme = createTheme({
  palette: {
    primary: {
      main: 'rgb(87, 115, 246)',
    },
  },
});

export const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);

  return (
    <div className={styles.Container}>
      <p className={styles.Text}>Welcome, {name}</p>

      <ThemeProvider theme={theme}>
        <Button
          type="button"
          variant="contained"
          size="large"
          color="primary"
          onClick={() => dispatch(authOperations.logOut())}
        >
          Log Out
        </Button>
      </ThemeProvider>
    </div>
  );
};
