import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get('https://lms-gwtg.onrender.com/books/available')
      .then(response => setBooks(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Available Books</h1>
      <ul className="list-group">
        {books.map(book => (
          <li key={book.ISBN} className="list-group-item">
            <strong>{book.title}</strong> by {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
