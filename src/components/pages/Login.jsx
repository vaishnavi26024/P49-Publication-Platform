import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import Input from "../common/Input";
import "../../styles/auth.css";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className={`auth-wrapper ${!isLogin ? "swap" : ""} transition={{ duration: 0.8 }}`}>
      
      <div className="bg-particle p1"></div>
      <div className="bg-particle p2"></div>

      {/* BRAND PANEL */}
      
      <motion.div 
  className="panel brand-panel"
  layout
  transition={{ duration: 0.8 }}
>
  <div className="brand-overlay"></div>

  {/* Floating Book */}
  <motion.img
    src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=600&q=80"
    alt="Books"
    style={{
      position: "absolute",
      width: "180px",
      top: "10%",
      left: "15%",
      borderRadius: "12px",
      opacity: 0.15
    }}
    animate={{ y: [0, -20, 0] }}
    transition={{ duration: 6, repeat: Infinity }}
  />

  {/* Floating Desk */}
  <motion.img
    src="https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=600&q=80"
    alt="Writing Desk"
    style={{
      position: "absolute",
      width: "200px",
      bottom: "10%",
      right: "15%",
      borderRadius: "12px",
      opacity: 0.15
    }}
    animate={{ y: [0, 20, 0] }}
    transition={{ duration: 7, repeat: Infinity }}
  />
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
    <motion.h1
      className="brand-title"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      Word Lane Publication Pvt. Ltd.
    </motion.h1>

    <motion.div
      className="brand-divider"
      initial={{ width: 0 }}
      animate={{ width: 60 }}
      transition={{ delay: 0.6 }}
    />

    <motion.p
      className="brand-tagline"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
    >
      Publish. Promote. Prosper.
    </motion.p>
  </div>
</motion.div>
    
      {/* FORM PANEL */}
      <motion.div 
        className="panel form-panel"
        layout
        transition={{ duration: 0.8 }}
      >
        <Tilt tiltMaxAngleX={8} tiltMaxAngleY={8} glareEnable={true}>
          <div className="auth-card">

            <AnimatePresence mode="wait">
              {isLogin ? (
                <motion.div
                  key="login"
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -100, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="auth-title">Welcome Back</h2>
                  <Input type="email" placeholder="Email" icon={FaEnvelope} />
                  <Input type="password" placeholder="Password" icon={FaLock} />
                  <button className="auth-btn">Login</button>
                  <p className="switch-link">
                    Don’t have an account?{" "}
                    <span onClick={() => setIsLogin(false)}>Sign Up</span>
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key="signup"
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 100, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="auth-title">Create Account</h2>
                  <Input type="text" placeholder="Full Name" icon={FaUser} />
                  <Input type="email" placeholder="Email" icon={FaEnvelope} />
                  <Input type="password" placeholder="Password" icon={FaLock} />
                  <Input type="password" placeholder="Confirm Password" icon={FaLock} />
                  <button className="auth-btn">Sign Up</button>
                  <p className="switch-link">
                    Already have an account?{" "}
                    <span onClick={() => setIsLogin(true)}>Login</span>
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </Tilt>
      </motion.div>
    </div>
  );
}
