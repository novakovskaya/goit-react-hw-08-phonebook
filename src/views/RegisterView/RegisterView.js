import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from 'redux/auth';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import styles from './RegisterView.module.scss';

const theme = createTheme({
  palette: {
    primary: {
      main: 'rgb(87, 115, 246)',
    },
  },
});

const RegisterView = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const error = useSelector(authSelectors.getError);

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        return setName(value);
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

    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className={styles.Container}>
      <h1 className={styles.Title}>Sign Up</h1>

      <form autoComplete="off" onSubmit={handleSubmit} className={styles.Form}>
        <ThemeProvider theme={theme}>
          <TextField
            className={styles.Input}
            label="Your name"
            type="text"
            name="name"
            value={name}
            margin="dense"
            size="small"
            color="primary"
            variant="standard"
            onChange={handleChange}
          />

          <TextField
            className={styles.Input}
            label="Email"
            type="email"
            name="email"
            value={email}
            size="small"
            margin="dense"
            color="primary"
            variant="standard"
            onChange={handleChange}
          />

          <TextField
            className={styles.Input}
            label="Password"
            type="password"
            name="password"
            id="password"
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
            Sign Up
          </Button>
        </ThemeProvider>
        {error && (
          <Alert severity="error">
            This username is already taken, please choose a different one.
          </Alert>
        )}
      </form>
    </div>
  );
};

export default RegisterView;
