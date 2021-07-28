import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';


// TODO: wrap everything in Auth0 *****DONE****
ReactDOM.render(
  <Auth0Provider
    domain="dev-6xlimb1s.us.auth0.com"
    clientId="MmorsdSr0jC0Fa9bhLfdVg4CCmF0Rhsy"
    redirectUri={window.location.origin}
    // redirectUri='http://localhost:3000'
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);