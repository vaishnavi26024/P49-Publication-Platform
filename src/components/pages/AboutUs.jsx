import "./AboutUs.css";

function AboutUs() {
  return (
    <div className="about-page">
      <h1 className="about-heading">
        About Us
      </h1>

      {/* HERO SECTION */}
      <section className="about-hero">
        <div className="about-left">

          <h1>
            Taking Stories <span>Beyond</span> Your Limits
          </h1>

          <p className="subtitle">
            Empowering writers since 2019 with professional publishing,
            global distribution, and modern digital marketing solutions.
          </p>

          <button className="cta-btn">Start Your Publishing Journey</button>
        </div>

        <div className="about-right">

        </div>
      </section>

      {/* ABOUT CONTENT */}
      <section className="about-content">
        <h2>Who We Are</h2>

        <p>
          Wordlane Publications is a forward-thinking publishing house
          dedicated to transforming ideas into impactful books. We specialize
          in fiction, non-fiction, academic writing, poetry, and children’s
          literature across multiple languages.
        </p>

        <p>
          Our mission is simple — bridge the gap between passionate writers
          and global readers. From manuscript evaluation to editing, design,
          publishing, and marketing, we provide end-to-end publishing support.
        </p>

        <div className="stats-container">
          <div className="stat-card">
            <h3>1500+</h3>
            <p>Books Published</p>
          </div>

          <div className="stat-card">
            <h3>20,000+</h3>
            <p>Happy Authors</p>
          </div>

          <div className="stat-card">
            <h3>25+</h3>
            <p>Global Distribution Channels</p>
          </div>
        </div>
      </section>

    </div>
  );
}

export default AboutUs;
