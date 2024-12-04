const express = require('express');
const Book = require('../models/Book');
const Transaction = require('../models/Transaction');
const router = express.Router();

// List available books
router.get('/available', async (req, res) => {
  try {
    const books = await Book.find({ status: 'available' });
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ error: 'Unable to fetch books.' });
  }
});

router.post('/add',async(req,res)=>{
    try{
        const book=new Book(req.body);
        await book.save();
        res.status(201).json(book);
    }
    catch(error){
        res.status(500).json({error:'Unable to a add book'})
    }
})

// Get book details by ID
router.get('/:isbn', async (req, res) => {
  try {
    const book = await Book.findOne({ISBN:req.params.isbn});
    if (!book) return res.status(404).json({ error: 'Book not found.' });
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching book details.' });
  }
});

// Issue a book
router.post('/issue/:isbn', async (req, res) => {
  const { borrower, dueDate } = req.body;
  try {
    const book = await Book.findOne({ ISBN: req.params.isbn });    
    if (!book || book.status === 'issued')
      return res.status(400).json({ error: 'Book not available for issuing.' });

    book.status = 'issued';
    book.borrower = borrower;
    await book.save();

    const transaction = new Transaction({
      bookId: book.ISBN,
      borrower,
      returnDate: new Date(dueDate),
    });
    await transaction.save();

    res.status(200).json({ message: 'Book issued successfully.' });
  } catch (error) {
    res.status(500).json({ error: 'Unable to issue book.' });
  }
});

// Return a book
router.post('/return/:isbn', async (req, res) => {
  try {
    const book = await Book.findOne({ ISBN: req.params.isbn });
    if (!book || book.status === 'available')
      return res.status(400).json({ error: 'Book not issued.' });

    book.status = 'available';
    book.borrower = null;
    await book.save();

    await Transaction.findOneAndDelete({ bookId: book.ISBN });

    res.status(200).json({ message: 'Book returned successfully.' });
  } catch (error) {
    res.status(500).json({ error: 'Unable to return book.' });
  }
});

// Delete a book
router.delete('/delete/:isbn', async (req, res) => {
  try {
    const book = await Book.findOneAndDelete({ ISBN: req.params.isbn });
    res.status(200).json({ message: 'Book deleted successfully.' });
  } catch (error) {
    res.status(500).json({ error: 'Unable to delete book.' });
  }
});

module.exports = router;
