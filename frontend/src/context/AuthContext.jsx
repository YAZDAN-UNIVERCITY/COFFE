import { createContext, useState, useEffect } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
      // fetch user data from API using the token
      fetch('/api/user', {
        headers: {
          Authorization: `Bearer ${storedToken}`,
        },
      })
       .then(response => response.json())
       .then(data => setUser(data));
    }
  }, []);

  const login = (username, password) => {
    // implement login logic here
    fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })
     .then(response => response.json())
     .then(data => {
        setToken(data.token);
        setUser(data.user);
        localStorage.setItem('token', data.token);
      });
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };