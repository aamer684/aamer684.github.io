const express = require('express');
const { contactValidationRules, validate } = require('../middleware/validation');
const { sendContactEmail } = require('../config/mailer');

const router = express.Router();

// POST /api/contact
router.post('/', contactValidationRules, validate, async (req, res) => {
  try {
    await sendContactEmail(req.body);
    res.status(200).json({ message: 'Message sent successfully!' });
  } catch (error) {
    console.error('❌ Email sending error:', error);
    res.status(500).json({ message: 'Failed to send message.' });
  }
});

module.exports = router;
