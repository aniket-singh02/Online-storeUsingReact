import React from 'react';

const books = [
  { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', price: 9.99 },
  { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', price: 12.99 },
  { id: 3, title: '1984', author: 'George Orwell', price: 8.99 },
];

function BookList({ addToCart }) {
  return (
    <div>
      <h2>Available Books</h2>
      <ul>
        {books.map(book => (
          <li key={book.id}>
            <h3>{book.title}</h3>
            <p>by {book.author}</p>
            <p>Price: ${book.price}</p>
            <button onClick={() => addToCart(book)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookList;
