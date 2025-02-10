import React from 'react';
import Heading from './Heading';
import { useAuth } from './AuthenticationProvider';

const Home = () => {
  return (
    <>
      <Heading />
      <p>
        Welcome to React App thats build using Webpack and Babel separately.
      </p>
      <LogoutButton />
    </>
  );
};

const LogoutButton = () => {
  const { logout } = useAuth();
  return <button onClick={() => logout()}>Log out</button>;
};

export default Home;
