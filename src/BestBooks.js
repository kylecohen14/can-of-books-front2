import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './BestBooks.css';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';

class MyFavoriteBooks extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bookstorage: []
    }
  }

  componentDidMount() {
    // axios.get('INSERT NETLIFYURL', {name: this.state.name})
    axios.get('http://localhost:3001/books')
    .then(books => {
      this.setState({ bookstorage: books.data })
      console.log('_STATE_', this.state.books)
    })
  }
  render() {
    const { user } = this.props.auth0;
    return(
      this.state.bookstorage.map((book, idx) => {
      <Jumbotron>
        <h1>Books {book.name}</h1>
        <p>
          {book.description}
          {/* This is a collection of my favorite books { user.name } */}
        </p>
        <p>
          {book.status}
        </p>
      </Jumbotron>
      }))
  }
}

export default withAuth0(MyFavoriteBooks);
