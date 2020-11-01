import { Switch } from 'react-router-dom';

//Custom routes
import PrivateRoute from './components/PrivateRoute';
import AuthRoute from './components/AuthRoute';

//Pages
import LoginPage from './pages/LoginPage';
import ChatPage from './pages/ChatPage';
import ProfilePage from './pages/ProfilePage';

//Snackbar for error popups
import Error from './components/Error';

function App() {
  return (
    <>
      <Error />
      <Switch>
        <AuthRoute exact path="/" component={LoginPage} />
        <PrivateRoute exact path="/chat" component={ChatPage} />
        <PrivateRoute exact path="/profile" component={ProfilePage} />
      </Switch>
    </>
  );
}

export default App;
