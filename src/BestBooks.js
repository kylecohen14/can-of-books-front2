import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './BestBooks.css';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
// import { throwStatement } from '@babel/types';
// import { Carousel, Card } from 'react-bootstrap';

class MyFavoriteBooks extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bookstorage: []
    }
  }
  // componentDidMount() {
  //   if(this.props.auth0.isAuthenticated) {
  //     this.props.auth0.getIdTokenClaims()
  //     .then(res => {
  //       const jwt = res.__raw;

  //       const config = {
  //         method: 'get',
  //         headers: {'Authorization': `Bearer ${jwt}`},
  //         baseURL: 'http://localhost:3000',
  //         url: '/books',
  //         // Need '/' on base uri???
  //       }
  //       axios(config)
  //         .then(results => console.log('from /auth-test route backend', results))
  //         .catch(err => console.error(err))
  //     })
  //   }
  // }
  componentDidMount() {
    // axios.get('INSERT NETLIFYURL', {name: this.state.name})
    axios.get('http://localhost:3333/books')
    .then(books => {
      this.setState({ bookstorage: books.data })
      console.log('_STATE_', this.state.bookstorage)
    })
  }
  render() {
    // const { user } = this.props.auth0;
    console.log(this.state.bookstorage)
    return(
      this.state.bookstorage.map((bookstorage, idx) => {
        return <Jumbotron key={idx}>
       {bookstorage.books.map((book, idx) => {
         return(
         <div key={idx}>
          <h1>{book.name}</h1>
          <p>
          {book.description}
          </p>
          <p>
          {book.status}
          </p>
        </div>)
       })}   
    </Jumbotron>
  }))
}
}



export default withAuth0(MyFavoriteBooks);
