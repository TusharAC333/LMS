const express = require('express');
const Member = require('../models/Member');
const router = express.Router();


router.get('/available', async (req, res) => {
    try {
      const members = await Member.find();
      res.status(200).json(members);
    } catch (error) {
      res.status(500).json({ error: 'Unable to fetch books.' });
    }
  });


// Add a member
router.post('/add', async (req, res) => {
  try {
    const member = new Member(req.body);
    await member.save();
    res.status(201).json(member);
  } catch (error) {
    res.status(500).json({ error: 'Unable to add member.' });
  }
});

// Update member details
router.put('/update/:id', async (req, res) => {
  try { 
    const member = await Member.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!member) return res.status(404).json({ error: 'Member not found.' });
    res.status(200).json(member);
  } catch (error) {
    res.status(500).json({ error: 'Unable to update member details.' });
  }
});

// Delete a member
router.delete('/delete/:id', async (req, res) => {
  try {
    await Member.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Member deleted successfully.' });
  } catch (error) {
    res.status(500).json({ error: 'Unable to delete member.' });
  }
});

module.exports = router;
