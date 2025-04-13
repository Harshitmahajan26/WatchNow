import React, { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));  // Load user data from localStorage
    }
  }, []);

  const login = (userData) => {
    setUser(userData);  // Set user data
    localStorage.setItem('user', JSON.stringify(userData));  // Save to localStorage
  };

  const logout = () => {
    setUser(null);  // Set user to null (logout)
    localStorage.removeItem('user');  // Remove from localStorage
  };

  return (
    <UserContext.Provider value={{ user, setUser, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
