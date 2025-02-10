import React from 'react';
import { Outlet } from 'react-router';
import { useAuth } from './../AuthenticationProvider';

const Layout = () => {
  return (
    <>
      <LogoutButton />
      <Outlet />
    </>
  );
};

const LogoutButton = () => {
  const { logout } = useAuth();
  return <button onClick={() => logout()}>Log out</button>;
};

export default Layout;
