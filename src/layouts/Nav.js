import React from 'react';
import { NavLink } from 'react-router';
import { useAuth } from './../AuthenticationProvider';

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink exact to="/" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/items" activeClassName="active">
            Items
          </NavLink>
        </li>
        <li>
          <LogoutButton />
        </li>
      </ul>
    </nav>
  );
};

const LogoutButton = () => {
  const { logout } = useAuth();
  return <button onClick={() => logout()}>Log out</button>;
};

export default Nav;
