import React, { use } from 'react'
import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();


function AuthProvider({ children }) {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
          setUser(JSON.parse(storedUser));
        }
        setLoading(false);
      }, []);

      const login = async (email, password) => {
        try {
          const response = await axios.post('/api/user/login', { email, password });
          const userData = response.data;
          setUser(userData);
          localStorage.setItem('user', JSON.stringify(userData));
          console.log("user data>>>",user);
        } catch (error) {
          console.error('Login failed:', error);
        }
      };

      const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
      };
    
  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider };
