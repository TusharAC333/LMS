import React, { useState } from 'react';
import axios from 'axios';
import { Button, Form } from "react-bootstrap";


const DeleteBook = () => {
  const [isbn, setIsbn] = useState('');

  const handleDelete = (e) => {
    e.preventDefault();
    axios.delete(`https://lms-gwtg.onrender.com/books/delete/${isbn}`)
      .then(response => alert(response.data.message))
      .catch(error => console.error(error));
  };

  return (
    <div className='container mt-4'>
      <h2>Delete Book</h2>
      <Form onSubmit={handleDelete}>
        <Form.Group className="mt-3">
          <Form.Label>ISBN</Form.Label>
          <Form.Control
          type="text"
          placeholder="ISBN"
          value={isbn}
          onChange={(e) => setIsbn(e.target.value)}
        />
       </Form.Group>
        <Button variant="primary" type="submit" className="mt-3">Delete</Button>
      </Form>
    </div>
  );
};

export default DeleteBook;
