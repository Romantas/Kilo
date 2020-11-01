import React, { useState } from 'react';

//Redux
import { useSelector, useDispatch } from 'react-redux';
import { postChatAction } from '../services/chat/actions';

//Material ui
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

//Custom hooks
import useInputValue from '../hooks/useInputValue';

const useStyles = makeStyles((theme) => ({
  sendContainer: {
    display: 'flex',
    justifyContent: 'space-evenly',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(0, 1),
    },
  },
  input: {
    width: '90%',
  },
  button: {
    color: '#6EF2CA',
  },
}));

//message validation function

const validateMessage = (message, setError) => {
  if (!message) {
    setError('Hey! Please fill the message');
    return false;
  }
  return true;
};

export default function MessageForm() {
  const messageInput = useInputValue();
  const [errorText, setErrorText] = useState();

  //redux
  const email = useSelector((state) => state.user.email);
  const dispatch = useDispatch();

  //Clear error after focus
  const clearError = () => {
    setErrorText(null);
  };

  //message submit to redux
  const onSubmit = (e) => {
    e.preventDefault();
    if (validateMessage(messageInput.value, setErrorText)) {
      messageInput.onChange();
      dispatch(postChatAction(email, messageInput.value));
    }
  };

  //styles
  const classes = useStyles();
  return (
    <>
      <form className={classes.sendContainer} onSubmit={onSubmit}>
        <TextField
          placeholder="Type a message"
          className={classes.input}
          {...messageInput}
          error={!!errorText}
          helperText={errorText}
          onFocus={clearError}
        />
        <Button type="submit" className={classes.button}>
          Send
        </Button>
      </form>
    </>
  );
}
