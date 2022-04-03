import { lazy, useEffect, Suspense } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Switch } from 'react-router-dom';

import { Container } from './components/Container';
import { AppBar } from 'components/AppBar';
import { authOperations, authSelectors } from 'redux/auth';
import { PublicRoute } from 'components/PublicRoute';
import { PrivateRoute } from 'components/PrivateRoute';

const HomeView = lazy(() =>
  import('./views/HomeView' /* webpackChunkName: "home-view" */)
);
const RegisterView = lazy(() =>
  import('views/RegisterView' /* webpackChunkName: "register-view" */)
);
const LoginView = lazy(() =>
  import('views/LoginView' /* webpackChunkName: "login-view" */)
);
const ContactsView = lazy(() =>
  import('views/ContactsView' /* webpackChunkName: "contacts-view" */)
);

const App = () => {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => dispatch(authOperations.fetchCurrentUser()), [dispatch]);

  return (
    <Container>
      <AppBar />

      {!isFetchingCurrentUser && (
        <Switch>
          <Suspense fallback={<p>Loading...</p>}>
            <PublicRoute exact path="/" restricted redirectTo="/contacts">
              <HomeView />
            </PublicRoute>

            <PublicRoute path="/register" restricted redirectTo="/">
              <RegisterView />
            </PublicRoute>

            <PublicRoute path="/login" restricted redirectTo="/contacts">
              <LoginView />
            </PublicRoute>

            <PrivateRoute path="/contacts" redirectTo="/login">
              <ContactsView />
            </PrivateRoute>
          </Suspense>
        </Switch>
      )}
    </Container>
  );
};

export default App;
