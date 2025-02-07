import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

// const logout = () => {
//   auth0.logout({
//     returnTo: window.location.origin
//   });
// };
function LogoutButton() {
  const { isAuthenticated, logout } = useAuth0();
  return isAuthenticated && (
    <button onClick={ () => logout({ returnTo: window.location.origin }) }>Log Out</button>
  )
}
export default LogoutButton;