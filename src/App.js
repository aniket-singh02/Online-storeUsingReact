import React, { useState } from 'react';
import BookList from './components/BookList';

function App() {
  const [cart, setCart] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const addToCart = (book) => {
    setCart([...cart, book]);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (username.trim()) {
      setIsLoggedIn(true);
    }
  };

  return (
    <div className="App">
      {/* Show login form if the user is not logged in */}
      {!isLoggedIn ? (
        <form onSubmit={handleLogin}>
          <h2>Login</h2>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
          />
          <button type="submit">Login</button>
        </form>
      ) : (
        // Show the bookstore and cart once the user is logged in
        <div>
          <h1>Welcome, {username}</h1>
          <BookList addToCart={addToCart} />
          <h2>Shopping Cart</h2>
          <ul>
            {cart.map((book, index) => (
              <li key={index}>{book.title} - ${book.price}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
