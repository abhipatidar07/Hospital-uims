// const User = require('../models/userModel');
// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcryptjs');

// // const JWT_SECRET = 'your_secret_key'; // Replace with an environment variable for production
// const dotenv = require("dotenv");
// dotenv.config();

// // Signup Controller
// const signup = async (req, res) => {
//   const { name, email, password, role } = req.body;

//   try {
//     if (!['Hospital Manager', 'Inner Pantry Staff', 'Delivery Personnel'].includes(role)) {
//       return res.status(400).json({ message: 'Invalid role selected' });
//     }

//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ message: 'User already exists' });
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);

//     const user = new User({ name, email, password: hashedPassword, role });
//     await user.save();

//     res.status(201).json({ message: 'User created successfully' });
//   } catch (error) {
//     res.status(500).json({ message: 'Error signing up', error: error.message });
//   }
// };

// // Login Controller
// const login = async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(404).json({ message: 'User not found' });
//     }

//     const isPasswordValid = await bcrypt.compare(password, user.password);
//     if (!isPasswordValid) {
//       return res.status(401).json({ message: 'Invalid email or password' });
//     }

//     const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });

//     res.status(200).json({
//       message: 'Login successful',
//       token,
//       user: {
//         id: user._id,
//         name: user.name,
//         email: user.email,
//         role: user.role,
//       },
//     });
//   } catch (error) {
//     res.status(500).json({ message: 'Error logging in', error: error.message });
//   }
// };

// module.exports = { signup, login };


const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs'); // Replaced bcrypt with bcryptjs

const dotenv = require("dotenv");
dotenv.config();

// Signup Controller
const signup = async (req, res) => {
  const { name, email, password, role } = req.body;

  try {
    if (!['Hospital Manager', 'Inner Pantry Staff', 'Delivery Personnel'].includes(role)) {
      return res.status(400).json({ message: 'Invalid role selected' });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash password using bcryptjs
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({ name, email, password: hashedPassword, role });
    await user.save();

    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error signing up', error: error.message });
  }
};

// Login Controller
const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Compare password using bcryptjs
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Generate JWT token
    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({
      message: 'Login successful',
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    res.status(500).json({ message: 'Error logging in', error: error.message });
  }
};

module.exports = { signup, login };
