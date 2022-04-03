import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from 'redux/auth';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import styles from './LoginView.module.scss';

const theme = createTheme({
  palette: {
    primary: {
      main: 'rgb(87, 115, 246)',
    },
  },
});

const LoginView = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const error = useSelector(authSelectors.getError);

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <div className={styles.Container}>
      <h1 className={styles.Title}>Log In</h1>

      <form autoComplete="off" onSubmit={handleSubmit} className={styles.Form}>
        <ThemeProvider theme={theme}>
          <TextField
            className={styles.Input}
            label="Email"
            type="email"
            name="email"
            value={email}
            margin="dense"
            size="small"
            color="primary"
            variant="standard"
            onChange={handleChange}
          />

          <TextField
            className={styles.Input}
            label="Password"
            type="password"
            name="password"
            value={password}
            margin="dense"
            size="small"
            color="primary"
            variant="standard"
            onChange={handleChange}
          />

          <Button
            type="submit"
            className={styles.Button}
            variant="contained"
            size="large"
            color="primary"
          >
            Log In
          </Button>
        </ThemeProvider>
        {error && <Alert severity="error">You aren't logged in</Alert>}
      </form>
    </div>
  );
};

export default LoginView;
