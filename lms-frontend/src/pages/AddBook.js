// src/pages/AddBook.js
import React, { useRef, useState } from 'react';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';


const AddBook = () => {
  // const [formData, setFormData] = useState({ title: '', author: '', ISBN: '' });
  const formRef = useRef(null);
  const alertRef = useRef(null);

  const showAlert = (message, type) => {
    const alertDiv = alertRef.current;
    alertDiv.innerHTML = `
      <div class="alert alert-${type} alert-dismissible fade show" role="alert">
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
    `;
  };

  const handleSubmit = (e) => { 
    e.preventDefault();

    const formData = new FormData(formRef.current);
    const bookData = Object.fromEntries(formData.entries());
    axios.post('https://lms-gwtg.onrender.com/books/add', bookData)
      .then(() => 
        showAlert('Book added successfully!', 'success'),
        formRef.current.reset()
    )
      .catch((error) => console.error(error));
  };

  

  return (
    <div className="container mt-4">
      <h2>Add New Book</h2>
      <div ref={alertRef}></div>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Form.Group controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter book title"
            // value={formData.title}
            // onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          />
        </Form.Group>
        <Form.Group controlId="author" className="mt-3">
          <Form.Label>Author</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter author name"
            // value={formData.author}
            // onChange={(e) => setFormData({ ...formData, author: e.target.value })}
          />
        </Form.Group>
        <Form.Group controlId="ISBN" className="mt-3">
          <Form.Label>ISBN</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter ISBN"
            // value={formData.ISBN}
            // onChange={(e) => setFormData({ ...formData, ISBN: e.target.value })}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-3">Add Book</Button>
      </Form>
    </div>
  );
};

export default AddBook;
