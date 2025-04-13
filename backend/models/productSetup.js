// models/productSetup.js
import db from '../db.js';

const createProductTable = async () => {
  try {
    await db.execute(`
      CREATE TABLE IF NOT EXISTS products (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        image VARCHAR(500) NOT NULL,
        old_price DECIMAL(10, 2),
        new_price DECIMAL(10, 2),
        currency VARCHAR(10) DEFAULT '₹',
        category ENUM('men', 'women') NOT NULL,
        description TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);
    console.log('✅ Product table created!');
  } catch (error) {
    console.error('❌ Error creating product table:', error.message);
  } finally {
    process.exit();
  }
};

createProductTable();
