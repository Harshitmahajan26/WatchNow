import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import User from '../models/User.js';

// Use process.env.JWT_SECRET directly
const JWT_SECRET = process.env.JWT_SECRET;

export async function register(req, res) {
  try {
    const { name, email, password } = req.body;
    const userId = await User.create({ name, email, password });
    
    const token = jwt.sign({ id: userId }, JWT_SECRET, { expiresIn: '1h' });

    res.status(201).json({ 
      message: 'User registered successfully',
      token
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export async function login(req, res) {
  try {
    const { email, password } = req.body;
    const user = await User.findByEmail(email);
    
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    
    const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: '1h' });

    res.json({ 
      message: 'Login successful',
      token
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export async function getProfile(req, res) {
  try {
    const user = await User.findById(req.user.id);  // Fixed: Fetch user by ID instead of email
    if (!user) return res.status(404).json({ error: 'User not found' });
    
    res.json({ user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export async function updateProfile(req, res) {
  try {
    const { name, email } = req.body;
    await User.update(req.user.id, { name, email });
    
    res.json({ message: 'Profile updated successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}