import React from "react";

export default function BookCard({ book }) {
  return (
    <div className="book-card">
      <img src={book.img} alt={book.title} />
      <h3>{book.title}</h3>
      <p className="price">{book.price}</p>
      <button className="buy-btn">Add to Cart</button>
    </div>
  );
}
