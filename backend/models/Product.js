import db from '../db.js';

class Product {
  static async create({ name, image, old_price, new_price, currency, category, description }) {
    const [result] = await db.execute(`
      INSERT INTO products (name, image, old_price, new_price, currency, category, description)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `, [name, image, old_price, new_price, currency, category, description]);

    return result.insertId;
  }

  static async findAll() {
    const [rows] = await db.execute(`SELECT * FROM products`);
    return rows;
  }

  static async findById(id) {
    const [rows] = await db.execute(`SELECT * FROM products WHERE id = ?`, [id]);
    return rows[0];
  }

  static async delete(id) {
    await db.execute(`DELETE FROM products WHERE id = ?`, [id]);
  }
}

export default Product;
