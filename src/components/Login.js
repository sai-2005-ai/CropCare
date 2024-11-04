import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Example list of registered users with hardcoded values for testing
  const registeredUsers = [
    { email: "test@example.com", password: "password123" },
    // Add more users here as needed
  ];

  const handleLogin = (e) => {
    e.preventDefault();

    // Check for valid credentials
    const userExists = registeredUsers.some(
      (user) => user.email === email && user.password === password
    );

    if (userExists) {
      // Successful login, navigate to the home page
      navigate('/home');
    } else {
      // Display error for invalid credentials
      setError('Invalid credentials');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </div>
  );
}

export default Login;