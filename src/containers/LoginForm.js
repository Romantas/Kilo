import React, { useState } from 'react';

//Redux
import { useDispatch } from 'react-redux';
import { loginAction } from '../services/user/actions';

//Material ui
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

//Custom hooks
import useInputValue from '../hooks/useInputValue';

const useStyles = makeStyles((theme) => ({
  form: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  title: {
    color: theme.palette.primary.main,
    marginBottom: theme.spacing(4),
  },
  inputContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: theme.spacing(0, 9, 0, 9),
    '& .MuiTextField-root': {
      marginBottom: theme.spacing(3),
    },
  },
  buttonContainer: {
    textAlign: 'center',
    marginTop: theme.spacing(2),
  },
}));

//Form validation function

const formValidation = (email, setError) => {
  if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
    setError('Hey! Invalid email format');
    return false;
  }
  return true;
};

export default function LoginForm() {
  //State
  const email = useInputValue();
  const password = useInputValue();
  const [errorText, setErrorText] = useState(null);

  //redux dispatch
  const dispatch = useDispatch();

  //Clear error after focus
  const clearError = () => {
    setErrorText(null);
  };

  //Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formValidation(email.value, setErrorText)) {
      dispatch(loginAction(email.value));
    }
  };

  //styles
  const classes = useStyles();
  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <Typography variant="h3" align="center" className={classes.title}>
        let's begin the madness
      </Typography>
      <div className={classes.inputContainer}>
        <TextField
          type="text"
          variant="outlined"
          color="primary"
          label="email"
          {...email}
          onFocus={clearError}
          error={!!errorText}
          helperText={errorText}
        />
        <TextField
          type="password"
          variant="outlined"
          label="password"
          {...password}
        />
        <div className={classes.buttonContainer}>
          <Button
            type="submit"
            variant="contained"
            color="secondary"
            size="large"
          >
            Login
          </Button>
        </div>
      </div>
    </form>
  );
}
