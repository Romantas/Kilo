import React from 'react';

//Redux
import { useDispatch } from 'react-redux';
import { openNewChatFormAction } from '../services/chat/actions';

//Material ui
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  button: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  mobileButton: {
    color: '#ffffff',
    fontSize: '2rem',
    fontWeight: 300,
    marginBottom: theme.spacing(3),
    cursor: 'pointer',
    '&:hover': {
      textDecoration: 'underline',
    },
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  menuIcon: {
    fill: '#6EF2CA',
  },
}));

export default function NewChatButton({ drawer }) {
  //redux dispatch
  const dispatch = useDispatch();

  //function that opens new chat form
  const openNewChat = () => {
    dispatch(openNewChatFormAction());
  };

  //styles
  const classes = useStyles();
  return (
    <>
      {!drawer && (
        <IconButton
          edge="start"
          aria-label="menu"
          className={classes.button}
          onClick={openNewChat}
        >
          <AddIcon className={classes.menuIcon} />
        </IconButton>
      )}
      {drawer && (
        <Typography
          variant="h5"
          class={classes.mobileButton}
          onClick={openNewChat}
        >
          Create chat
        </Typography>
      )}
    </>
  );
}
