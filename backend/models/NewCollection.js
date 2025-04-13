import { DataTypes } from 'sequelize';
import db from '../db.js';



export const getAllNewCollections = async () => {
    const [rows] = await db.query('SELECT * FROM new_collections');
    return rows;
  };