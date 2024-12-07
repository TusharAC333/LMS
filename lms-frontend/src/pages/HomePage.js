// src/pages/Home.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';

const Home = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get('https://lms-gwtg.onrender.com/books/available')
      .then((response) => setBooks(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="container mt-4">
      <h2>Available Books</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ISBN</th>
            <th>Title</th>
            <th>Author</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.ISBN}>
              <td>{book.ISBN}</td>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.status}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Home;
