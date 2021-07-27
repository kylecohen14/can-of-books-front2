import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function LogoutButton() {
  const { isAuthenticated, logoutWithRedirect } = useAuth0();

  return isAuthenticated && (
    <button onClick={logoutwithRedirect}>Log In</button>
  )
}

export default LogoutButton;

// import React from "react";
// import { useAuth0 } from "@auth0/auth0-react";

// const LogoutButton = () => {
//   const { logout } = useAuth0();

//   return (
//     <button onClick={() => logout({ returnTo: window.location.origin })}>
//       Log Out
//     </button>
//   );
// };

// export default LogoutButton;