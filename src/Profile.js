import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import { Card, ListGroupItem, ListGroup } from 'react-bootstrap';
// import axios from 'axios';

class Profile extends React.Component {
  // componentDidMount() {
  //   console.log(this.props.auth0.isAuthenticated);
  //   if(this.props.auth0.isAuthenticated) {
  //     this.props.auth0.getIdTokenClaims()
  //     .then(res => {
  //       console.log(res);
  //       const jwt = res.__raw;

  //       const config = {
  //         method: 'get',
  //         headers: {'Authorization': `Bearer ${jwt}`},
  //         baseURL: 'https://can-of-books-kyle.netlify.app',
  //         url: '/auth-test' // Probably going to have to change this
  //       }

  //       axios(config)
  //         .then(results => console.log('came from my /auth-test route on the backend', results))
  //         .catch(err => console.error(err))
  //     });
  //   }
  // }
  render() {
    const { user } = this.props.auth0;
    return (
    <div>
      <Card style={{width: '14rem' }}>
        <Card.Img Variant='top' src={user.picture} alt="nothing" />
        <Card.Body>
          <Card.Title> Hi {user.name}.</Card.Title>
        </Card.Body>
        <ListGroup className='list-group-flush'>
        <ListGroupItem>Email: {user.email}</ListGroupItem>
      </ListGroup>
      </Card>
      </div>
    )
}
}

export default withAuth0(Profile);

// {user.profile_image} {user.email}