import React, { useState } from 'react';
import BookList from './components/BookList';
import './App.css';

function App() {
  const [cart, setCart] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const addToCart = (book) => {
    setCart([...cart, book]);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (username.trim() && password.trim()) {
      setIsLoggedIn(true);
      setError('');
      setUsername('');
      setPassword('');
    } else {
      setError('Both fields are required');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    setPassword('');
    setCart([]);
  };

  return (
    <div className="App">
      {!isLoggedIn ? (
        <form onSubmit={handleLogin} className="login-form">
          <h2>Login</h2>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            required
            className="input-field"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
            className="input-field"
          />
          <button type="submit" className="login-button">Login</button>
          {error && <p className="error-message">{error}</p>}
        </form>
      ) : (
        <div>
          <header className="app-header">
            <h1>Welcome, {username}</h1>
            <button onClick={handleLogout} className="logout-button">Logout</button>
          </header>

          <BookList addToCart={addToCart} />
          <h2 className="cart-header">Shopping Cart ({cart.length} items)</h2>
          <ul className="cart-list">
            {cart.map((book, index) => (
              <li key={index} className="cart-item">
                {book.title} - ${book.price}
              </li>
            ))}
          </ul>

          {cart.length > 0 && (
            <button className="proceed-button">Proceed to Payment</button>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
