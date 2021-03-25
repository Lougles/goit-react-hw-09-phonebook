import React, { Component, Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import AppBar from './Components/AppBar';
import Container from './Components/Container';
import { authOperations } from './redux/auth';
import { connect } from 'react-redux';
import PrivateRoute from './Components/PrivateRoute';
import PublicRoute from './Components/PublicRoute';

const HomeView = lazy(() => import('./views/HomeView'));
const RegisterView = lazy(() => import('./views/RegisterView'));
const LoginView = lazy(() => import('./views/LoginView'));
const ContactView = lazy(() => import('./views/ContactView'));

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }
  render() {
    return (
      <Container>
        <AppBar />
        <Suspense fallback={<p>...Loading...</p>}>
          <Switch>
            <PublicRoute exact path="/" component={HomeView} />
            <PublicRoute 
              path="/register"
              restricted
              // redirectTo="/contacts"
            component={RegisterView} 
            />
            <PublicRoute 
              path="/login"
              restricted
              redirectTo="/contacts"
            component={LoginView} 
            />
            <PrivateRoute 
              path="/contacts"
              redirectTo="/login"  
              component={ContactView} 
            />
            </Switch>
          </Suspense>
      </Container>
    );
  }
}
const { getCurrentUser } = authOperations;
const mapDispatchToProps = {
  onGetCurrentUser: getCurrentUser,
};
export default connect(null, mapDispatchToProps)(App);
