import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';

class Profile extends React.Component {
  render() {
    const { user } = this.props.auth0;
    return <div>This is a test, {user.name} {user.profile_image} {user.email} </div>
  }
}

export default withAuth0(Profile);