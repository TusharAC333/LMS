const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    bookId: { type: String},
    borrower: { type: String},
    issueDate: { type: Date,default: Date.now },
    returnDate: { type: Date },
});

module.exports = mongoose.model('Transaction', transactionSchema);
