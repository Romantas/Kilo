import React from 'react';

//Material ui
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

//Components
import Header from '../components/Header';
import LoginForm from '../containers/LoginForm';

const useStyles = makeStyles((theme) => ({
  gridContainer: {
    paddingTop: theme.spacing(10),
    [theme.breakpoints.down('md')]: {
      paddingTop: theme.spacing(8),
    },
  },
  paperContainer: {
    padding: theme.spacing(6, 4, 5, 4),
  },
}));

export default function LoginPage() {
  //styles
  const classes = useStyles();
  return (
    <>
      <Header />
      <Container>
        <Grid container className={classes.gridContainer} justify="center">
          <Box className={classes.paperContainer}>
            <LoginForm />
          </Box>
        </Grid>
      </Container>
    </>
  );
}
