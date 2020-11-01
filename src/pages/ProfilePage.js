import React from 'react';

//Material ui
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

//components
import ProfileHeader from '../containers/ProfileHeader';
import ProfileForm from '../containers/ProfileForm';

const useStyles = makeStyles((theme) => ({
  form: {
    marginTop: theme.spacing(8),
  },
}));

export default function ProfilePage() {
  //styles
  const classes = useStyles();
  return (
    <>
      <ProfileHeader />
      <Container>
        <Grid container justify="center" className={classes.form}>
          <Grid item md={5}>
            <ProfileForm />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
