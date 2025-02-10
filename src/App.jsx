import React from 'react';
import Home from './Home';
import Login from './Login';
import { useAuth } from './AuthenticationProvider';

const App = () => {
  const { token } = useAuth();
  return token ? <Home /> : <Login />;
};

export default App;
