import React from 'react';

//Material-ui
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  itemContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    cursor: 'pointer',
    padding: theme.spacing(2, 2, 2, 5),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(2, 0),
      justifyContent: 'center',
    },
  },
  title: {
    color: '#ffffff',
    marginLeft: theme.spacing(2),
    height: 32,
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  image: {
    borderRadius: '50%',
  },
}));

export default function ChatSideItem({ title, current, ...props }) {
  //Styles
  const classes = useStyles();
  return (
    <div
      className={classes.itemContainer}
      style={{ background: current ? 'rgba(52, 52, 52, 0.7)' : null }}
      {...props}
    >
      <img
        className={classes.image}
        width="42"
        height="42"
        src={`https://avatars.dicebear.com/api/avataaars/${title}.svg`}
        alt="avatar"
      />
      <Typography variant={'h5'} className={classes.title}>
        {/* truncate name to fit content box */}
        {title.length > 14 ? title.substring(0, 14 - 3) + '...' : title}
      </Typography>
    </div>
  );
}
