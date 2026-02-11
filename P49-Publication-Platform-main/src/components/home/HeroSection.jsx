import { useState } from "react";
import heroImg from "../../assets/images/hero1.png";
import step1 from "../../assets/images/step_1.png";
import step2 from "../../assets/images/step_2.png";
import step3 from "../../assets/images/step_3.png";

import book1 from "../../assets/images/book1.png";
import book2 from "../../assets/images/book2.png";
import book3 from "../../assets/images/book3.png";
import book4 from "../../assets/images/book4.png";

import t1 from "../../assets/images/t1.png";
import t2 from "../../assets/images/t2.png";
import t3 from "../../assets/images/t3.png";
import t4 from "../../assets/images/t4.png";

const faqData = [
  {
    q: "What is Notion Press?",
    a: "Notion Press is a publishing platform for authors worldwide that helps you create, publish and distribute books."
  },
  { q: "Who owns the rights to my book?", a: "You retain full ownership of your book." },
  { q: "What is an ISBN and will my book get one?", a: "Yes, ISBN support is provided." },
  { q: "Can I track how many books I've sold?", a: "Yes, sales tracking is available." },
  { q: "How do I set the selling price?", a: "You control your pricing." },
  { q: "How many copies will you print?", a: "Print-on-demand based on orders." },
  { q: "Will I receive post-publishing support?", a: "Yes, ongoing support is provided." },
  { q: "How are author earnings calculated?", a: "Based on pricing and distribution." },
  { q: "How often will I receive earnings?", a: "Periodic payout schedule." },
  { q: "Anything else?", a: "Contact support for more help." }
];

function HeroSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <>
      {/* HERO SECTION */}
      <section className="hero">

        <div className="hero-left">
          <img src={heroImg} alt="hero" />
        </div>

        <div className="hero-right">
          <h1>
            Publish your book with <br />
            <span>Notion Press</span>
          </h1>

          <div className="form-grid">
            <input placeholder="Name" />
            <input placeholder="Email" />
            <input type="password" placeholder="Password" />

            <div className="phone">
              <span className="code">+91</span>
              <input placeholder="Phone Number" />
            </div>
          </div>

          <label className="whatsapp">
            <input type="checkbox" /> Get publishing updates on WhatsApp
          </label>

          <button className="cta">
            PUBLISH MY BOOK
          </button>

          <div className="features">
            <span>✔ Publish Print & eBook</span>
            <span>✔ Worldwide Distribution</span>
            <span>✔ 100% Rights</span>
            <span>✔ Earn More on Every Sale</span>
          </div>
        </div>

      </section>

      {/* FAQ SECTION */}
      <section className="faq">
        <h2>Frequently asked questions</h2>

        {faqData.map((item, i) => (
          <div key={i} className="faq-item">

            <div
              className="faq-question"
              onClick={() =>
                setOpenIndex(openIndex === i ? null : i)
              }
            >
              {openIndex === i ? "−" : "+"} {item.q}
            </div>

            {openIndex === i && (
              <div className="faq-answer">
                {item.a}
              </div>
            )}

          </div>
        ))}
      </section>
      {/* ===== MISSION SECTION ===== */}

<section className="mission">

<div className="mission-text">
  <h2>Our Mission</h2>

  <p>
    Our mission is to put the power of publishing into everyone’s hands.
  </p>

  <p>
    We're building a new way for writers and readers to connect online and
    offline, and help authors achieve their dreams with the freedom and
    flexibility they deserve.
  </p>
</div>

<div className="mission-cards">

  <div className="mission-card">
    <img src="/card1.png" alt="" />
    <p>Publish as Paperback and eBook</p>
  </div>

  <div className="mission-card">
    <img src="/card2.png" alt="" />
    <p>Get an ISBN to sell across 30,000 stores worldwide</p>
  </div>

  <div className="mission-card">
    <img src="/card3.png" alt="" />
    <p>Get complete control of your rights and pricing</p>
  </div>

  <div className="mission-card">
    <img src="/card4.png" alt="" />
    <p>Get feedback and update books anytime</p>
  </div>

</div>

</section>
{/* ===== AUTHOR SLIDER ===== */}

<section className="author-section">

  <h3 className="author-sub">
    Join an amazing community of authors creating history
  </h3>

  <h2 className="author-title">
    Our <span>40,000+</span> authors have sold books worth
    over INR <span>50+ crores</span>
  </h2>

  <div className="slider-wrapper">

    <button
      className="slider-btn"
      onClick={() =>
        document.getElementById("authorSlider")
          .scrollBy({ left: -300, behavior: "smooth" })
      }
    >
      ←
    </button>

    <div id="authorSlider" className="author-slider">

      {[...Array(11)].map((_, i) => (
        <div key={i} className="author-card">

          <p className="author-text">
            This is author testimonial #{i + 1}. Replace with real content.
          </p>

          <img
            src={`https://picsum.photos/200?random=${i}`}
            alt=""
          />

          <h4>Author {i + 1}</h4>
          <span>Role / Description</span>

        </div>
      ))}

    </div>

    <button
      className="slider-btn"
      onClick={() =>
        document.getElementById("authorSlider")
          .scrollBy({ left: 300, behavior: "smooth" })
      }
    >
      →
    </button>

  </div>

</section>
{/* ===== READY CTA SECTION ===== */}

<section className="ready">

  <div className="ready-left">
    <h2>
      Ready to start <br />
      your Journey?
    </h2>

    <p>
      We help writers publish their book.
    </p>
  </div>

  <div className="ready-form">

    <div className="form-grid">
      <input placeholder="Name" />
      <input placeholder="Email" />
      <input type="password" placeholder="Password" />

      <div className="phone">
        <span className="code">+91</span>
        <input placeholder="Phone Number" />
      </div>
    </div>

    <label className="whatsapp">
      <input type="checkbox" /> Get publishing updates on WhatsApp
    </label>

    <button className="cta">
      PUBLISH MY BOOK
    </button>

  </div>

</section>
{/* ===== 3 STEPS SECTION ===== */}

<section className="steps">

  <h2 className="steps-title">
    Go from writer to author in <br />
    just 3 easy steps
  </h2>

  <div className="steps-grid">

    <div className="step-card">
    <img src={step1} alt="" />
      <h3>Design your book</h3>
      <p>
        Design your book cover and interiors in just minutes with our
        easy-to-use design tools and templates.
      </p>
    </div>

    <div className="step-card">
    <img src={step2} alt="" />
      <h3>Publish as Paperback and eBook</h3>
      <p>
        Publish your book in both eBook and paperback formats to reach a
        wider audience and gain more visibility.
      </p>
    </div>

    <div className="step-card">
    <img src={step3} alt="" />
      <h3>Distribute your book worldwide</h3>
      <p>
        Sell your book in over 30,000 stores across 150+ countries with our
        expanded distribution network.
      </p>
    </div>

  </div>

</section>
{/* ===== PREMIUM SECTION ===== */}

<section className="premium">

  <div className="premium-left">

    <h2>Go Premium and Outpublish</h2>

    <p>
      Outpublish is a hybrid publishing program for writers serious about
      creating an impact with their book. Writers get the best of both
      worlds — professional guidance plus the freedom of self-publishing.
      This unique program helps writers build a successful product and
      reach millions of readers.
    </p>

    <button className="premium-btn">
      LEARN MORE
    </button>

  </div>

  <div className="premium-grid">

    <div className="premium-card">
      <img src={book1} alt="" />
      <span>National Best-Seller in Business & Finance</span>
    </div>

    <div className="premium-card">
      <img src={book2} alt="" />
      <span>Ranked in top marketing books for 3+ years</span>
    </div>

    <div className="premium-card">
      <img src={book3} alt="" />
      <span>India’s highest crowdfunded book</span>
    </div>

    <div className="premium-card">
      <img src={book4} alt="" />
      <span>Sold 1,000+ copies in 7 days</span>
    </div>

  </div>

</section>
<section className="ready">

  <div className="ready-left">
    <h2>
      Ready to start <br />
      your Journey?
    </h2>

    <p>
      We help writers publish their book.
    </p>
  </div>

  <div className="ready-form">

    <div className="form-grid">
      <input placeholder="Name" />
      <input placeholder="Email" />
      <input type="password" placeholder="Password" />

      <div className="phone">
        <span className="code">+91</span>
        <input placeholder="Phone Number" />
      </div>
    </div>

    <label className="whatsapp">
      <input type="checkbox" />
      Get publishing updates on WhatsApp
    </label>

    <button className="cta">
      PUBLISH MY BOOK
    </button>

  </div>

</section>


{/* ===== TESTIMONIAL SECTION ===== */}

<section className="testimonials">

  <h2 className="testimonials-title">
    Loved by authors worldwide
  </h2>

  <div className="testimonial-grid">

    <div className="testimonial-card">
      <img src={t1} alt="" />
      <div>
        <p>
          Notion Press: The name itself is a brand for trust,
          cooperation and efficiency. Publishing my debut novel
          was smooth and easy!
        </p>
        <h4>Khushi Mohunta</h4>
        <span>Author of Waist Number 42</span>
      </div>
    </div>

    <div className="testimonial-card">
      <img src={t2} alt="" />
      <div>
        <p>
          It was a wonderful experience interacting with the team.
          Everything was executed within timelines.
        </p>
        <h4>Subrat Saurabh</h4>
        <span>Author of Kuch Woh Pal</span>
      </div>
    </div>

    <div className="testimonial-card">
      <img src={t3} alt="" />
      <div>
        <p>
          Thank you for your professionalism. I loved how my book
          turned out and I am happy to use your services again.
        </p>
        <h4>Chitra Govindraj</h4>
        <span>Author of Sillage and Other Poems</span>
      </div>
    </div>

    <div className="testimonial-card">
      <img src={t4} alt="" />
      <div>
        <p>
          The team kept me protected and supported throughout the
          publishing journey. Kudos to Notion Press!
        </p>
        <h4>Rakhi Kapoor</h4>
        <span>Author of Decimus</span>
      </div>
    </div>

  </div>

</section>



<section className="ready">

  <div className="ready-left">
    <h2>
      Ready to start <br />
      your Journey?
    </h2>

    <p>
      We help writers publish their book.
    </p>
  </div>

  <div className="ready-form">

    <div className="form-grid">
      <input placeholder="Name" />
      <input placeholder="Email" />
      <input type="password" placeholder="Password" />

      <div className="phone">
        <span className="code">+91</span>
        <input placeholder="Phone Number" />
      </div>
    </div>

    <label className="whatsapp">
      <input type="checkbox" />
      Get publishing updates on WhatsApp
    </label>

    <button className="cta">
      PUBLISH MY BOOK
    </button>

  </div>

</section>

    </>
  );
}

export default HeroSection;
