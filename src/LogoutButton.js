import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function LogoutButton() {
  const { isAuthenticated, logoutWithRedirect } = useAuth0();

  return isAuthenticated && (
    <button onClick={logoutwithRedirect}>Log In</button>
  )
}

export default LogoutButton;