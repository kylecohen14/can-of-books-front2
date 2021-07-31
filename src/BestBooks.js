import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './BestBooks.css';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import AddBook from './AddBook.js';
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
   this.handleGetBooks()
  }

  handleGetBooks() { 
    axios.get('https://can-of-books-front2.herokuapp.com')
    .then(books => {
      this.setState({ bookstorage: books.data })
      console.log('_STATE_', this.state.bookstorage)
  })}

  handleSubmit = async (e) => {
    e.preventDefault()
    console.log(e.target)
    const name = e.target.name.value;
    const description = e.target.description.value;
    const status = e.target.status.value;
    const email = e.target.email.value;
    await axios.post('https://can-of-books-front2.herokuapp.com', {name:name, description:description, status:status, email:email})
    this.handleGetBooks()
  }

  render() {
    // const { user } = this.props.auth0;
    console.log(this.props.auth0)
    return(
      <>
      <AddBook email = {this.props.auth0.user.email} handleSubmit={this.handleSubmit}/>
      {this.state.bookstorage.length > 0 ? this.state.bookstorage.map((bookstorage, idx) => {
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
  }): <h2>no books</h2>}
  </>
  ) 
}
}



export default withAuth0(MyFavoriteBooks);
