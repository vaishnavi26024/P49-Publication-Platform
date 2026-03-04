import { useState, useEffect } from 'react';
import '../../styles/Bestsellers.css';
import melancholyImg from '../../assets/books/melancholy.jpeg';
import lessonsMaskImg from '../../assets/books/lessons-mask.jpeg';
import aadivichayImg from '../../assets/books/aadivichay.jpeg';
import thelikeImg from '../../assets/books/thelike.jpeg';

const initialBooks = [
  { id: 1, title: 'Melancholy', author: 'Deepa Sharma', image: melancholyImg, price: 299, link: 'https://amzn.in/d/03zAHFoL' },
  { id: 2, title: 'Lessons Behind The Mask', author: 'Ambalika Bharadwaj', image: lessonsMaskImg, price: 349, link: 'https://amzn.in/d/09Doy9kP' },
  { id: 3, title: 'आदिवोच्य', author: 'अदिति सिन्हा', image: aadivichayImg, price: 399, link: 'https://amzn.in/d/0cV8HXYD' },
  { id: 4, title: 'The Like', author: 'Unknown Author', image: thelikeImg, price: 279, link: 'https://amzn.in/d/0dU1zj55' },
];

export default function Bestsellers() {
  const [books, setBooks] = useState(initialBooks);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingBook, setEditingBook] = useState(null);
  const [formData, setFormData] = useState({ title: '', author: '', image: '', price: '', link: '' });
  const [selectedBook, setSelectedBook] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const adminStatus = localStorage.getItem('isAdmin') === 'true';
    setIsAdmin(adminStatus);
  }, []);

  const openAddModal = () => {
    setEditingBook(null);
    setFormData({ title: '', author: '', image: '', price: '', link: '' });
    setIsModalOpen(true);
  };

  const openEditModal = (book, e) => {
    e.stopPropagation();
    setEditingBook(book);
    setFormData({ title: book.title, author: book.author, image: book.image, price: book.price, link: book.link || '' });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingBook(null);
    setFormData({ title: '', author: '', image: '', price: '', link: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingBook) {
      setBooks(books.map(book => book.id === editingBook.id ? { ...book, ...formData } : book));
    } else {
      setBooks([...books, { id: Date.now(), ...formData }]);
    }
    closeModal();
  };

  const handleDelete = (id, e) => {
    e.stopPropagation();
    if (window.confirm('Are you sure you want to delete this book?')) {
      setBooks(books.filter(book => book.id !== id));
    }
  };

  const handleBookClick = (book) => {
    if (book.link) {
      window.open(book.link, '_blank');
    }
  };

  const closeTicket = () => {
    setSelectedBook(null);
  };

  return (
    <div className="bestsellers-page">
      <div className="bestsellers-header">
        <h1>Bestsellers</h1>
        {isAdmin && <button className="add-book-btn" onClick={openAddModal}>+ Add New Book</button>}
      </div>

      <div className="books-horizontal">
        {books.map(book => (
          <div key={book.id} className="book-card" onClick={() => handleBookClick(book)}>
            <div className="book-image-wrapper">
              <img src={book.image} alt={book.title} className="book-image" />
              {isAdmin && (
                <div className="book-actions">
                  <button className="edit-btn" onClick={(e) => openEditModal(book, e)}>Edit</button>
                  <button className="delete-btn" onClick={(e) => handleDelete(book.id, e)}>Delete</button>
                </div>
              )}
            </div>
            <div className="book-info">
              <h3 className="book-title">{book.title}</h3>
              <p className="book-author">by {book.author}</p>
              <div className="book-price">₹{book.price}</div>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{editingBook ? 'Edit Book' : 'Add New Book'}</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Book Title</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label>Author Name</label>
                <input
                  type="text"
                  value={formData.author}
                  onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label>Image URL</label>
                <input
                  type="url"
                  value={formData.image}
                  onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label>Amazon Link</label>
                <input
                  type="url"
                  value={formData.link}
                  onChange={(e) => setFormData({ ...formData, link: e.target.value })}
                  placeholder="https://amzn.in/d/..."
                />
              </div>
              <div className="form-group">
                <label>Price (₹)</label>
                <input
                  type="number"
                  value={formData.price}
                  onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                  required
                />
              </div>
              <div className="modal-actions">
                <button type="button" className="cancel-btn" onClick={closeModal}>Cancel</button>
                <button type="submit" className="submit-btn">{editingBook ? 'Update' : 'Add'}</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {selectedBook && (
        <div className="ticket-overlay" onClick={closeTicket}>
          <div className="ticket" onClick={(e) => e.stopPropagation()}>
            <button className="ticket-close" onClick={closeTicket}>×</button>
            <div className="ticket-header">Book Ticket</div>
            <img src={selectedBook.image} alt={selectedBook.title} className="ticket-image" />
            <h2 className="ticket-title">{selectedBook.title}</h2>
            <p className="ticket-author">by {selectedBook.author}</p>
            <div className="ticket-price">₹{selectedBook.price}</div>
            <div className="ticket-barcode">|||||| |||| ||||| ||||||</div>
            <p className="ticket-id">ID: {selectedBook.id}-{Date.now()}</p>
          </div>
        </div>
      )}
    </div>
  );
}