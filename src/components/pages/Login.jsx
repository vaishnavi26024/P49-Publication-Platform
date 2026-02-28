import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import Logo from "../common/Logo";
import "../../styles/auth.css";

export default function BrandHome() {
  const navigate = useNavigate();

  return (
    <div className="auth-wrapper brand-only">
      
      <div className="bg-particle p1"></div>
      <div className="bg-particle p2"></div>

      {/* LEFT PANEL - BRAND */}
      
      <motion.div 
  className="panel brand-panel"
  layout
  transition={{ duration: 0.8 }}
>
  <div className="brand-overlay"></div>

  {/* Floating Publication Images */}

<motion.img
  src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=800&q=80"
  className="floating-img img1"
  animate={{ y: [0, -25, 0] }}
  transition={{ duration: 8, repeat: Infinity }}
/>

<motion.img
  src="https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80"
  className="floating-img img2"
  animate={{ y: [0, 20, 0] }}
  transition={{ duration: 9, repeat: Infinity }}
/>

<motion.img
  src="https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80"
  className="floating-img img3"
  animate={{ y: [0, -18, 0] }}
  transition={{ duration: 7, repeat: Infinity }}
/>

<motion.img
  src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=800&q=80"
  className="floating-img img4"
  animate={{ y: [0, 22, 0] }}
  transition={{ duration: 10, repeat: Infinity }}
/>

<motion.img
  src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=800&q=80"
  className="floating-img img5"
  animate={{ y: [0, -15, 0] }}
  transition={{ duration: 11, repeat: Infinity }}
/>
<div className="glow-shape shape1"></div>
<div className="glow-shape shape2"></div>
<div className="glow-shape shape3"></div>


  <div className="brand-content">
    <Logo />
  </div>
</motion.div>
    
      {/* RIGHT PANEL - CONTENT AREA */}
      <motion.div 
        className="panel form-panel brand-action-panel"
        layout
        transition={{ duration: 0.8 }}
      >
        <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} glareEnable={true} glareMaxOpacity={0.1}>
          <div className="brand-action-card">
            <motion.div 
              className="books-hover-container"
              initial="initial"
              whileHover="hover"
            >
              <div className="books-pair">
                {/* BACK BOOK - Book 1 */}
                <motion.div 
                  className="book-item back-book"
                  variants={{
                    initial: { zIndex: 4, x: -20, rotate: -6 },
                    hover: { zIndex: 5, x: 20, rotate: 6 }
                  }}
                  animate={{
                    y: [0, -8, 0],
                  }}
                  transition={{
                    y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                    default: { type: "spring", stiffness: 200, damping: 25 }
                  }}
                >
                  <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/book%205%20%281%29-5JMhZ96vgiMKWSEYmIbiDm6TTesisB.png" alt="Book 1" />
                </motion.div>

                {/* FRONT BOOK - Book 2 */}
                <motion.div 
                  className="book-item front-book"
                  variants={{
                    initial: { zIndex: 5, x: 20, rotate: 6 },
                    hover: { zIndex: 4, x: -20, rotate: -6 }
                  }}
                  animate={{
                    y: [0, 8, 0],
                  }}
                  transition={{
                    y: { duration: 4.5, repeat: Infinity, ease: "easeInOut" },
                    default: { type: "spring", stiffness: 200, damping: 25 }
                  }}
                >
                  <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/book%205-BMFuGatO0sr4OtEBszyk43SnAb7JFo.png" alt="Book 2" />
                </motion.div>
              </div>
              <div className="animation-glow"></div>
            </motion.div>

            <div className="action-content">
              <h2 className="action-title">Your Masterpiece Deserves to be Read</h2>
              <p className="action-desc">
                Join thousands of authors who have published their dreams with us.
              </p>
              <button 
                className="start-publishing-btn"
                onClick={() => navigate("/login")}
              >
                Start Publishing
              </button>
            </div>
          </div>
        </Tilt>
      </motion.div>
    </div>
  );
}
