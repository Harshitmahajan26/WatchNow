// src/axios.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5000/api', // backend running on this port
});

export default instance;
