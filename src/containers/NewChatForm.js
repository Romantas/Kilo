import React, { useState } from 'react';

//Redux
import { useDispatch } from 'react-redux';
import { postNewChatAction } from '../services/chat/actions';

//Material ui
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

//Custom hooks
import useInputValue from '../hooks/useInputValue';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    width: '60%',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  title: {
    fontWeight: 300,
    [theme.breakpoints.down('sm')]: {
      fontSize: '1rem',
    },
  },
  input: {
    width: '50%',
    marginLeft: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      width: '90%',
      marginLeft: theme.spacing(1),
    },
  },
}));
//form validation function

const validateForm = (chatName, setError) => {
  if (!chatName) {
    setError('Hey! Please fill the chat name');
    return false;
  }
  return true;
};
export default function NewChatForm() {
  const chatName = useInputValue();
  const [errorText, setErrorText] = useState();

  //redux dispatch
  const dispatch = useDispatch();

  //Clear error after focus
  const clearError = () => {
    setErrorText(null);
  };

  //functions to post new chat
  const submitNewChat = (e) => {
    e.preventDefault();
    if (validateForm(chatName.value, setErrorText)) {
      chatName.onChange();
      dispatch(postNewChatAction(chatName.value));
    }
  };

  //styles
  const classes = useStyles();
  return (
    <form className={classes.container} onSubmit={submitNewChat}>
      <Typography variant="h5" className={classes.title}>
        Create new chat:
      </Typography>
      <TextField
        className={classes.input}
        placeholder="Type the name of group..."
        {...chatName}
        error={!!errorText}
        helperText={errorText}
        onFocus={clearError}
      />
      <Button type="submit" style={{ display: 'none' }}>
        Create
      </Button>
    </form>
  );
}
