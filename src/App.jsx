import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router';
import Home from './Home';
import Login from './Login';
import Layout from './layouts/Layout';
import LoginLayout from './layouts/LoginLayout';
import { useAuth } from './AuthenticationProvider';
import { useNavigate } from 'react-router';

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
      <Route path="login" element={<LoginLayout />}>
        <Route index element={<Login />} />
      </Route>

      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        {/* <Route path="about" element={<About />} /> */}

        {/* <Route path="items">
            <Route index element={<ConcertsHome />} />
            <Route path=":itemId" element={<City />} />
            <Route path="trending" element={<Trending />} />
          </Route> */}
      </Route>
    </Routes>
  );
};

export default App;
