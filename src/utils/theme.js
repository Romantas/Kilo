import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

const theme = createMuiTheme({
  typography: {
    fontFamily: 'Raleway, Roboto, Helvetica, Arial',
  },
  palette: {
    primary: {
      main: '#17d4b6',
    },
    secondary: {
      main: '#17d4b6',
      contrastText: '#ffffff',
    },
    background: {
      default: '#ffffff',
    },
  },
});

export default theme;
