import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { contactsSelectors, contactsOperations } from 'redux/contacts';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import styles from './ContactList.module.scss';

const theme = createTheme({
  palette: {
    primary: {
      main: 'rgb(87, 115, 246)',
    },
  },
});

export const ContactList = () => {
  const onFilteredContacts = useSelector(contactsSelectors.getFilteredContacts);
  const dispatch = useDispatch();

  const onDeleteContact = id => dispatch(contactsOperations.deleteContact(id));

  return (
    <ul className={styles.List}>
      {onFilteredContacts.map(({ id, name, number }) => (
        <li key={id} className={styles.Item}>
          <p className={styles.Contact}>{name}:</p>
          <p className={styles.Number}>{number}</p>

          <ThemeProvider theme={theme}>
            <Button
              type="button"
              className={styles.Button}
              variant="contained"
              size="small"
              color="primary"
              onClick={() => onDeleteContact(id)}
            >
              Delete
              <DeleteIcon sx={{ fontSize: 20 }} />
            </Button>
          </ThemeProvider>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  filteredContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
