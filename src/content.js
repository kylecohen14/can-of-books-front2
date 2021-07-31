import React from 'react';
// import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';
class Content extends React.Component {
  // componentDidMount() {
  //   if(this.props.auth0.isAuthenticated) {
  //     this.props.auth0.getIdTokenClaims()
  //     .then(res => {
  //       const jwt = res.__raw;

  //       const config = {
  //         method: 'get',
  //         headers: {'Authorization': `Bearer ${jwt}`},
  //         baseURL: 'https://can-of-books-kyle.netlify.app',
  //         url: '/profile',
  //         // Need '/' on base uri???
  //       }
  //       axios(config)
  //         .then(results => console.log('from /auth-test route backend', results))
  //         .catch(err => console.error(err))
  //     })
  //   }
  // }

 
  // addBook = (e) => {
  //   e.preventDefault();
  //   axios.post('http://localhost:3001/books', {name: this.state.name})
  //   .then(book => {
  //     console.log(book.data.name);
  //     this.setState({ books: [...this.state.books, {name: book.data.name}] })
  //   } )
  // }


  // updateBookName = (e) => {
  //   console.log(e.target.value);
  //   this.setState({ name: e.target.value})
  // }

  // deleteBook = (e, id) => {
  //   e.preventDefault();
  //   axios.delete(`http://localhost:3001/books/${id}`)
  //   // axios.delete(`insert Netlify links/${id}`)
  //     .then(result => {
  //       console.log(result);
  //     })
  // }
  render() {
    return (
      <div>
      <h1>Our data is in a console.log...</h1>
        {/* <form>
          <input type='text' name='title' onChange={this.updateBookName} placeholder='title' />
          <input type='text' description='' onChange={this.updateBookName} />
          <input type='submit' />
          <button onClick={this.deleteBook{   }}>Delete a book<button/>

        </form> */}
      </div>
    )
  }
}




export default withAuth0(Content);
