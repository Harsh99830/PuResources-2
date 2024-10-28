const express = require('express');
const router = express.Router();
const user = require('./user');
require('dotenv').config();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const jwtSecret = process.env.JWT_SECRET;

router.post('/createuser', [
  body('email', 'Enter the valid Email Id').isEmail(),
  body('name').isLength({ min: 2 }),
  body('password', 'Enter the valid password').isLength({ min: 6 }),
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const salt = await bcrypt.genSalt(10);
  let securePassword = await bcrypt.hash(req.body.password, salt);

  try {
    let existingUser = await user.findOne({ email: req.body.email });
    if (existingUser) {
      return res.status(400).json({ success: false, message: 'Email id already exists' });
    }

    await user.create({
      name: req.body.name,
      password: securePassword,
      email: req.body.email,
      location: req.body.location,
    });
    res.json({ success: true });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
});

router.post('/loginuser', [
  body('email', 'Enter the valid Email Id').isEmail(),
  body('password', 'Enter the valid password').isLength({ min: 6 }),
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  let email = req.body.email;
  try {
    let userdata = await user.findOne({ email });
    if (!userdata) {
      return res.json({ errors: 'Email does not found' });
    }
    const passwordCompare = await bcrypt.compare(req.body.password, userdata.password);
    if (!passwordCompare) {
      return res.status(400).json({ errors: 'Incorrect password' });
    }
    const data = {
      user: {
        id: userdata.id,
      },
    };

    const authToken = jwt.sign(data, jwtSecret);
    return res.json({ success: true, authToken });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ success: false });
  }
});

module.exports = router;
