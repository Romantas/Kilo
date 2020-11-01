/*
This component is in containers folder, because it should have server logic, but task says different :(
*/
import React from 'react';

//redux
import { useSelector } from 'react-redux';

//Material ui
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  profile: {
    display: 'flex',
    alignItems: 'center',
  },
  title: {
    color: '#6EF2CA',
    marginLeft: theme.spacing(5),
  },
  profileForm: {
    marginTop: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
  },
  image: {
    borderRadius: '50%',
  },
  label: {
    display: 'inline-block',
    width: '40%',
    marginBottom: theme.spacing(5),
  },
  textField: {
    display: 'inline-block',
    width: '60%',
    marginTop: '-10px',
  },
  button: {
    marginLeft: '40%',
    width: '60%',
    textAlign: 'center',
  },
}));

export default function ProfileForm() {
  //redux selectors
  const email = useSelector((state) => state.user.email);

  //styles
  const classes = useStyles();
  return (
    <>
      <div className={classes.profile}>
        <img
          className={classes.image}
          width={180}
          height={180}
          src={`https://avatars.dicebear.com/api/avataaars/${email}.svg`}
          alt="avatar"
        />
        <Typography variant="h4" className={classes.title}>
          Name Surname
        </Typography>
      </div>
      <form className={classes.profileForm}>
        <div>
          <Typography className={classes.label}>Email:</Typography>
          <TextField fullWidth value={email} className={classes.textField} />
        </div>
        <div>
          <Typography className={classes.label}>Birth date:</Typography>
          <TextField
            fullWidth
            value="1997-05-20"
            className={classes.textField}
          />
        </div>
        <div>
          <Typography className={classes.label}>Phone number:</Typography>
          <TextField
            fullWidth
            value="+370000025"
            className={classes.textField}
          />
        </div>
        <div>
          <Typography className={classes.label}>Location:</Typography>
          <TextField
            fullWidth
            value="Vilnius, Lithuania"
            className={classes.textField}
          />
        </div>
        <div className={classes.button}>
          <Button variant="contained" color="secondary">
            SAVE
          </Button>
        </div>
      </form>
    </>
  );
}
