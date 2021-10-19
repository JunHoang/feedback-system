import {
  Redirect,
  Route,
  BrowserRouter as Router,
  Switch
} from 'react-router-dom';

import Dashboard from './pages/dashboard';
import GuardRoute from './routes/GuardRoute';
import LoginPage from './pages/login';
import NavBar from './components/NavBar/navbar';
import React from 'react';
import { Store } from './redux';
import { useSelector } from 'react-redux';

function App() {
  const userIsLogged = useSelector(
    (state: Store) => state.authReducer.isSignedIn
  );

  return (
    <Router>
      <NavBar />

      <Switch>
        <Route exact path="/">
          <Redirect to="/dashboard" />
        </Route>

        <Route path="/login">
          {!userIsLogged ? <LoginPage /> : <Redirect to="/dashboard" />}
        </Route>

        <GuardRoute path="/dashboard" component={Dashboard} />
      </Switch>
    </Router>
  );
}

export default App;
