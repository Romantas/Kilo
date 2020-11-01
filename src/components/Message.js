import React from 'react';

//Material ui
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  messageContainer: {
    display: 'flex',
    margin: theme.spacing(2, 1),
  },
  message: {
    background: theme.palette.grey[100],
    borderRadius: 10,
    padding: theme.spacing(1),
  },
  image: {
    borderRadius: '50%',
  },
}));

export default function Message({ currentUser, user, children }) {
  //styles
  const classes = useStyles();
  return (
    <div
      className={classes.messageContainer}
      style={{
        flexDirection: user === currentUser ? 'row-reverse' : 'row',
      }}
    >
      <img
        className={classes.image}
        width="32"
        height="32"
        src={`https://avatars.dicebear.com/api/avataaars/${user}.svg`}
        alt="avatar"
      />
      <div className={classes.message}>{children}</div>
    </div>
  );
}
