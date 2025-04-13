import React, { useState, useContext } from 'react';
import './CSS/LoginSignup.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../Context/UserContext';  // Ensure correct import

const LoginSignup = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [isLogin, setIsLogin] = useState(false);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useContext(UserContext);  // Use the login function from UserContext
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const { name, email, password } = formData;

    if (!email || !password || (!isLogin && !name)) {
      return setMessage("Please fill in all fields");
    }

    setLoading(true);
    setMessage("");

    try {
      const endpoint = isLogin ? 'login' : 'register';
      const { data, status } = await axios.post(`http://localhost:5000/api/auth/${endpoint}`, formData);

      if (status === 200) {
        // On success, store user data in UserContext and localStorage
        login(data.user);
        setMessage(data.message);
        navigate('/');  // Redirect to home page after login
      } else {
        setMessage(data.message || "Something went wrong");
      }

    } catch (err) {
      setMessage(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>

        {/* Show message */}
        {message && (
          <p style={{ 
            margin: '10px 0', 
            color: message.toLowerCase().includes("success") ? "green" : "red",
            fontWeight: 500
          }}>
            {message}
          </p>
        )}

        <div className="loginsignup-fields">
          {!isLogin && (
            <input
              type="text"
              name="name"
              placeholder='Your Name'
              onChange={handleChange}
              value={formData.name}
              required
            />
          )}
          <input
            type="email"
            name="email"
            placeholder='Email Address'
            onChange={handleChange}
            value={formData.email}
            required
          />
          <input
            type="password"
            name="password"
            placeholder='Password'
            onChange={handleChange}
            value={formData.password}
            required
          />
        </div>

        <button onClick={handleSubmit} disabled={loading}>
          {loading ? "Processing..." : "Continue"}
        </button>

        <p className="loginsignup-login">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <span
            onClick={() => {
              setIsLogin(!isLogin);
              setMessage("");
              setFormData({ name: '', email: '', password: '' });
            }}
            style={{ cursor: 'pointer', color: 'blue', marginLeft: '5px' }}
          >
            {isLogin ? "Sign up here" : "Login here"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginSignup;
