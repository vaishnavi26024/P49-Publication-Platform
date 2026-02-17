import "../../styles/Store.css";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const books = [
  { id: 1, title: "AI Revolution", price: 799, img: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c" },
  { id: 2, title: "Modern Web Dev", price: 899, img: "https://images.unsplash.com/photo-1512820790803-83ca734da794" },
  { id: 3, title: "Machine Learning Pro", price: 999, img: "https://images.unsplash.com/photo-1519682337058-a94d519337bc" },
  { id: 4, title: "Cyber Security Guide", price: 699, img: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d" },
  { id: 5, title: "Cloud Computing Essentials", price: 849, img: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f" },
  { id: 6, title: "Blockchain Basics", price: 899, img: "https://images.unsplash.com/photo-1518770660439-4636190af475" },
  { id: 7, title: "Python Mastery", price: 999, img: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4" },
  { id: 8, title: "DevOps Handbook", price: 950, img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c" },
  { id: 9, title: "Data Science Pro", price: 1099, img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71" },
  { id: 10, title: "UI UX Design", price: 699, img: "https://images.unsplash.com/photo-1559027615-cd4628902d4a" }
];

export default function Bookstore() {

  const [search, setSearch] = useState("");
  const [start, setStart] = useState(0);
  const [trendStart, setTrendStart] = useState(0);

  const isSearching = search.trim().length > 0;

  const filtered = books.filter(b =>
    b.title.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    setTrendStart(0);
  }, [search]);

  return (
    <div className="store-wrapper">

      {/* HERO */}
      <motion.section
        className="store-hero"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1>Discover Your Next Favorite Book</h1>
        <p>Curated tech knowledge from world-class authors</p>

        <input
          placeholder="Search books..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </motion.section>


      {/* AUTO SLIDER — hidden when searching */}
      {!isSearching && (
        <section className="marquee-section">
          <div className="marquee-track">
            {[...books, ...books].map((book, i) => (
              <div className="marquee-card" key={i}>
                <img src={book.img}/>
                <p>{book.title}</p>
              </div>
            ))}
          </div>
        </section>
      )}


      {/* INTERACTIVE PREVIEW — hidden when searching */}
      {!isSearching && (
        <section className="section-block">
          <h2>Interactive Book Preview</h2>

          <div className="flip-carousel">

            <button
              className="flip-nav left"
              onClick={() => setStart(prev => Math.max(prev - 5, 0))}
            >
              ‹
            </button>

            <div className="flip-book-row">
              {books.slice(start, start + 5).map(book => (
                <div className="flip-card" key={book.id}>
                  <div className="flip-inner">

                    <div className="flip-front">
                      <img src={book.img}/>
                      <h3>{book.title}</h3>
                    </div>

                    <div className="flip-back">
                      <h3>{book.title}</h3>
                      <p className="price">₹{book.price}</p>
                      <button className="buy-btn">Buy Now</button>
                    </div>

                  </div>
                </div>
              ))}
            </div>

            <button
              className="flip-nav right"
              onClick={() =>
                setStart(prev => Math.min(prev + 5, books.length - 5))
              }
            >
              ›
            </button>

          </div>
        </section>
      )}


      {/* TRENDING / SEARCH RESULTS */}
      <section className="section-block">
        <h2>{isSearching ? "We Found" : "Trending Now"}</h2>

        {isSearching && filtered.length === 0 && (
          <p style={{ marginBottom: "20px", opacity: 0.7 }}>
            No books found for your search.
          </p>
        )}

        <div className="trend-carousel">

          {!isSearching && (
            <button
              className="trend-nav left"
              onClick={() =>
                setTrendStart(prev => Math.max(prev - 5, 0))
              }
            >
              ‹
            </button>
          )}

          <div className="trend-row">
            {(isSearching
              ? filtered
              : books.slice(trendStart, trendStart + 5)
            ).map(book => (
              <motion.div
                key={book.id}
                className="book-card"
                whileHover={{ y: -6 }}
              >
                <div className="book-img">
                  <img src={book.img}/>
                </div>

                <div className="book-info">
                  <h3>{book.title}</h3>

                  <div className="book-bottom">
                    <span className="price">₹{book.price}</span>
                    <button className="buy-btn">Buy Now</button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {!isSearching && (
            <button
              className="trend-nav right"
              onClick={() =>
                setTrendStart(prev =>
                  Math.min(prev + 5, books.length - 5)
                )
              }
            >
              ›
            </button>
          )}

        </div>
      </section>


      {/* FEATURED AUTHORS — hidden when searching */}
      {!isSearching && (
        <section className="section-block">
          <h2>Featured Authors</h2>

          <div className="author-row">
            <div className="author-card">
              <img src="https://randomuser.me/api/portraits/men/32.jpg"/>
              <h4>Alex Johnson</h4>
              <p>AI Researcher</p>
            </div>

            <div className="author-card">
              <img src="https://randomuser.me/api/portraits/women/44.jpg"/>
              <h4>Sara Khan</h4>
              <p>Web Architect</p>
            </div>

            <div className="author-card">
              <img src="https://randomuser.me/api/portraits/men/76.jpg"/>
              <h4>David Kim</h4>
              <p>Security Expert</p>
            </div>

            <div className="author-card">
              <img src="https://randomuser.me/api/portraits/women/68.jpg"/>
              <h4>Riya Patel</h4>
              <p>Data Scientist</p>
            </div>
          </div>
        </section>
      )}

    </div>
  );
}
