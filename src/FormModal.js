import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class FormModal extends React.Component {
  helper = (e) => {
    this.props.handleSubmit(e)
    this.props.close()
  }
  render() {
    return(
      <Modal show={this.props.display} onHide={this.props.close}>
      <Modal.Header closeButton>
        <Modal.Title>Add or update a Book</Modal.Title>
      </Modal.Header>


      <Form onSubmit= {this.helper} >
        <Form.Group controlId="name">
          <Form.Label>Book Name</Form.Label>
          <Form.Control type="text" placeholder= "Name of book"/>
        </Form.Group>

        <Form.Group controlId="description">
          <Form.Label>Book description</Form.Label>
          <Form.Control type="text" placeholder= "Description" />
        </Form.Group>
        
        <Form.Group controlId="status">
          <Form.Label>Status</Form.Label>
          <Form.Control type="text" placeholder="Status: Read, Not read"/>
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Control type="hidden" value={this.props.email}/>
        </Form.Group>

        <Button type="submit" variant="primary">
          Add book
        </Button>
      </Form>


      <Modal.Footer>
        <Button variant="secondary" onClick={this.props.close}>
          Close
        </Button>
        
      </Modal.Footer>
    </Modal>
    )
  }
}

export default FormModal;