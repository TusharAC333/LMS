// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navbar';
import Home from './pages/HomePage';
import AddBook from './pages/AddBook';
// import SearchBooks from './pages/SearchBooks';
import IssueBook from './components/IssueBook';
import ReturnBook from './components/ReturnBook';
import DeleteBook from './components/DeleteBook';
// import NotFound from './pages/NotFound';

const App = () => (
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add-book" element={<AddBook />} />
      {/* <Route path="/search-books" element={<SearchBooks />} /> */}
      <Route path="/issue-book" element={<IssueBook />} />
      <Route path="/return-book" element={<ReturnBook />} />
      <Route path="/delete-book" element={<DeleteBook />} />
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  </Router>
);

export default App;
