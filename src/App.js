import React, { Component, createContext, useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './scss/style.scss';

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse">Loading</div>
  </div>
)

// Containers
const TheLayout = React.lazy(() => import('./containers/TheLayout'));

// Pages
const Login = React.lazy(() => import('./admins/pages/login/Login'));
const Register = React.lazy(() => import('./admins/pages/register/Register'));
const Page404 = React.lazy(() => import('./admins/pages/page404/Page404'));
const Page500 = React.lazy(() => import('./admins/pages/page500/Page500'));
const Home = React.lazy(() => import('./Frontend/components/Home/Home'));
const ProtectedRoute = React.lazy(() => import('./Frontend/components/ProtectedRoute/ProtectedRoute'))

export const UserContext = createContext();

function App() {
  const [user, setUser] = useState({});

  return (
    <UserContext.Provider value={[user, setUser]}>
      <BrowserRouter>
        <React.Suspense fallback={loading}>
          <Switch>
            <Route exact path="/login" name="Login Page" render={props => <Login {...props} />} />
            <Route exact path="/register" name="Register Page" render={props => <Register {...props} />} />
            <Route exact path="/404" name="Page 404" render={props => <Page404 {...props} />} />
            <Route exact path="/500" name="Page 500" render={props => <Page500 {...props} />} />
            <Route exact path="/" name="Home" render={props => <Home {...props} />} />

            <ProtectedRoute path="/admin" name="Admin">
              <TheLayout />
            </ProtectedRoute>

            <Route path="*" name="Page 404" render={props => <Page404 {...props} />} />

          </Switch>
        </React.Suspense>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;