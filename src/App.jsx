import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router';
import Home from './Home';
import Login from './Login';
import Layout from './layouts/Layout';
import LoginLayout from './layouts/LoginLayout';
import { useAuth } from './AuthenticationProvider';
import { useNavigate } from 'react-router';
import ItemsList from './ItemsList';
import ItemNote from './ItemNote';

const App = () => {
  return <AllRoutes />;
};

const AllRoutes = () => {
  const { token } = useAuth();
  let navigate = useNavigate();

  useEffect(() => {
    !token ? navigate('/login') : navigate('/');
  }, [token]);

  return (
    <Routes>
      {!token && (
        <Route path="login" element={<LoginLayout />}>
          <Route index element={<Login />} />
        </Route>
      )}

      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

        <Route path="items">
          <Route index element={<ItemsList />} />
          <Route path=":itemId" element={<ItemNote />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
