// import pool from '../db.js';
// import crypto from 'crypto';

// //  Helper: Hash password using MD5
// const hashPassword = (password) => {
//   return crypto.createHash('md5').update(password).digest('hex');
// };

// // 🚀 Register User
// export const registerUser = async (req, res) => {
//   const { name, email, password } = req.body;

//   if (!name || !email || !password)
//     return res.status(400).json({ message: "Please fill in all fields" });

//   try {
//     const [existingUsers] = await pool.query(
//       "SELECT * FROM users WHERE email = ?",
//       [email]
//     );

//     if (existingUsers.length > 0) {
//       return res.status(409).json({ message: "Email already registered" });
//     }

//     const hashedPassword = hashPassword(password);

//     await pool.query(
//       "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
//       [name, email, hashedPassword]
//     );

//     // Optional: return user details (except password)
//     const [users] = await pool.query(
//       "SELECT id, name, email FROM users WHERE email = ?",
//       [email]
//     );

//     res.status(201).json({ message: "User registered successfully", user: users[0] });
//   } catch (err) {
//     console.error("Registration Error:", err);
//     res.status(500).json({ message: "Server error" });
//   }
// };

// // 🔐 Login User
// export const loginUser = async (req, res) => {
//   const { email, password } = req.body;

//   if (!email || !password)
//     return res.status(400).json({ message: "Please fill in all fields" });

//   try {
//     const hashedPassword = hashPassword(password);

//     const [users] = await pool.query(
//       "SELECT id, name, email FROM users WHERE email = ? AND password = ?",
//       [email, hashedPassword]
//     );

//     if (users.length === 0) {
//       return res.status(401).json({ message: "Invalid email or password" });
//     }

//     const user = users[0];
//     res.json({ message: "Login successful", user });
//   } catch (err) {
//     console.error("Login Error:", err);
//     res.status(500).json({ message: "Server error" });
//   }
// };



import pool from '../db.js';
import bcrypt from 'bcrypt';

// Helper: Hash password using bcrypt
const hashPassword = async (password) => {
  const saltRounds = 10; // You can increase this for more security
  return bcrypt.hash(password, saltRounds);
};

//  Register User
export const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password)
    return res.status(400).json({ message: "Please fill in all fields" });

  try {
    const [existingUsers] = await pool.query(
      "SELECT * FROM users WHERE email = ?",
      [email]
    );

    if (existingUsers.length > 0) {
      return res.status(409).json({ message: "Email already registered" });
    }

    const hashedPassword = await hashPassword(password); // Use bcrypt here

    await pool.query(
      "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
      [name, email, hashedPassword]
    );

    // Optional: return user details (except password)
    const [users] = await pool.query(
      "SELECT id, name, email FROM users WHERE email = ?",
      [email]
    );

    res.status(201).json({ message: "User registered successfully", user: users[0] });
  } catch (err) {
    console.error("Registration Error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

//  Login User
export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password)
    return res.status(400).json({ message: "Please fill in all fields" });

  try {
    const [users] = await pool.query(
      "SELECT id, name, email, password FROM users WHERE email = ?",
      [email]
    );

    if (users.length === 0) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const user = users[0];

    // Compare the stored bcrypt hash with the entered password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    res.json({ message: "Login successful", user });
  } catch (err) {
    console.error("Login Error:", err);
    res.status(500).json({ message: "Server error" });
  }
};
