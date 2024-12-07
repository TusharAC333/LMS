import React, { useState } from "react";
import axios from "axios";
import { Button, Form } from "react-bootstrap";

const ReturnBook = () => {
  const [isbn, setIsbn] = useState("");

  const handleReturn = (e) => {
    e.preventDefault();
    axios
      .post(`https://lms-gwtg.onrender.com/books/return/${isbn}`)
      .then((response) => alert(response.data.message))
      .catch((error) => console.error(error));
  };

  return (
    <div className="container mt-4">
      <h2>Return Book</h2>
      <Form onSubmit={handleReturn}>
        <Form.Group className="mt-3">
          <Form.Label>ISBN</Form.Label>
          <Form.Control
            type="text"
            placeholder="ISBN"
            value={isbn}
            onChange={(e) => setIsbn(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-3">Return</Button>
      </Form>
    </div>
  );
};

export default ReturnBook;
