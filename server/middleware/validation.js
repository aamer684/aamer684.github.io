const { body, validationResult } = require('express-validator');

// Validation rules for the contact form
const contactValidationRules = [
  body('name')
    .trim()
    .notEmpty()
    .withMessage('Name is required'),

  body('email')
    .isEmail()
    .withMessage('Valid email is required'),

  body('phone')
    .optional()
    .matches(/^\+?[0-9\s\-()]{7,20}$/)
    .withMessage('Invalid phone number'),

  body('company')
    .optional()
    .isString()
    .trim(),

  body('inquiryType')
    .optional()
    .isIn(['web', 'mobile', 'marketing', 'other'])
    .withMessage('Invalid inquiry type'),

  body('contactMethod')
    .optional()
    .isIn(['email', 'phone'])
    .withMessage('Invalid contact method'),

  body('referral')
    .optional()
    .isString()
    .trim(),

  body('message')
    .trim()
    .notEmpty()
    .withMessage('Message is required'),

  body('consent')
    .equals('true')
    .withMessage('You must agree to the privacy policy')
];

// Middleware to handle validation result
const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

module.exports = {
  contactValidationRules,
  validate
};
