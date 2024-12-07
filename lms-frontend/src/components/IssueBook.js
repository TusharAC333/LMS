import React, { useState } from "react";
import axios from "axios";
import { Form, Button } from "react-bootstrap";

const IssueBook = () => {
  const [isbn, setIsbn] = useState("");
  const [borrower, setBorrower] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleIssue = (e) => {
    e.preventDefault();
    axios
      .post(`https://lms-gwtg.onrender.com/books/issue/${isbn}`, {
        borrower,
        dueDate,
      })
      .then((response) => alert(response.data.message))
      .catch((error) => console.error(error));
  };

  return (
    <div className="container mt-4">
      <h2>Issue Book</h2>
      <Form onSubmit={handleIssue}>
        <Form.Group controlId='isbn'className="mt-3">
          <Form.Label>ISBN</Form.Label>
          <Form.Control
            type="text"
            placeholder="ISBN"
            value={isbn}
            onChange={(e) => setIsbn(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId='borrower'className="mt-3">
          <Form.Label>Borrower's Name</Form.Label>

          <Form.Control
            type="text"
            placeholder="Borrower's Name"
            value={borrower}
            onChange={(e) => setBorrower(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId='dueDate'className="mt-3">
          <Form.Label>Due Date</Form.Label>

          <Form.Control
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-3">
          Issue
        </Button>
      </Form>
    </div>
  );
};

export default IssueBook;
