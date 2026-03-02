import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { FaUser, FaLock, FaEnvelope, FaPhone, FaKey } from "react-icons/fa";
import Input from "../common/Input";
import "../../styles/auth.css";

export default function Login() {
  const [view, setView] = useState("login"); // login, signup, forgot-step1, forgot-step2, forgot-step3, otp-verify
  const [identifier, setIdentifier] = useState("");

  const handleNextForgot = (nextView) => setView(nextView);

  return (
    <div className="login-page-container">
      <div className="bg-particle p1"></div>
      <div className="bg-particle p2"></div>

      <div className="centered-card-wrapper">
        <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} glareEnable={true} glareMaxOpacity={0.1}>
          <div className="auth-card">
            <AnimatePresence mode="wait">
              {view === "login" && (
                <motion.div
                  key="login"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                >
                  <h2 className="auth-title">Welcome Back</h2>
                  <Input 
                    type="text" 
                    placeholder="Email or Mobile Number" 
                    icon={FaEnvelope} 
                    value={identifier}
                    onChange={(e) => setIdentifier(e.target.value)}
                  />
                  <Input type="password" placeholder="Password" icon={FaLock} />
                  <p className="forgot-link" onClick={() => setView("forgot-step1")}>
                    Forgot Password?
                  </p>
                  <button className="auth-btn">Login</button>
                  <p className="switch-link">
                    Don’t have an account?{" "}
                    <span onClick={() => setView("signup")}>Sign Up</span>
                  </p>
                </motion.div>
              )}

              {view === "signup" && (
                <motion.div
                  key="signup"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                >
                  <h2 className="auth-title">Create Account</h2>
                  <Input type="text" placeholder="Full Name" icon={FaUser} />
                  <Input type="email" placeholder="Email Address" icon={FaEnvelope} />
                  <Input type="tel" placeholder="Mobile Number" icon={FaPhone} />
                  <Input type="password" placeholder="Password" icon={FaLock} />
                  <Input type="password" placeholder="Confirm Password" icon={FaLock} />
                  <button className="auth-btn" onClick={() => setView("otp-verify")}>Next</button>
                  <p className="switch-link">
                    Already have an account?{" "}
                    <span onClick={() => setView("login")}>Login</span>
                  </p>
                </motion.div>
              )}

              {view === "otp-verify" && (
                <motion.div
                  key="otp"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <h2 className="auth-title">Verify OTP</h2>
                  <p className="view-desc">Enter the 6-digit code sent to your device.</p>
                  <Input type="text" placeholder="6-Digit OTP" icon={FaKey} />
                  <button className="auth-btn">Verify & Register</button>
                  <p className="switch-link" onClick={() => setView("signup")}>Back to Signup</p>
                </motion.div>
              )}

              {view === "forgot-step1" && (
                <motion.div
                  key="f1"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  <h2 className="auth-title">Reset Password</h2>
                  <p className="view-desc">Enter your registered email or phone.</p>
                  <Input type="text" placeholder="Email or Mobile Number" icon={FaEnvelope} />
                  <button className="auth-btn" onClick={() => handleNextForgot("forgot-step2")}>Send OTP</button>
                  <p className="switch-link" onClick={() => setView("login")}>Back to Login</p>
                </motion.div>
              )}

              {view === "forgot-step2" && (
                <motion.div
                  key="f2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  <h2 className="auth-title">Enter OTP</h2>
                  <p className="view-desc">6-digit code sent for verification.</p>
                  <Input type="text" placeholder="OTP Code" icon={FaKey} />
                  <button className="auth-btn" onClick={() => handleNextForgot("forgot-step3")}>Verify OTP</button>
                  <p className="switch-link" onClick={() => setView("forgot-step1")}>Resend OTP</p>
                </motion.div>
              )}

              {view === "forgot-step3" && (
                <motion.div
                  key="f3"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  <h2 className="auth-title">New Password</h2>
                  <Input type="password" placeholder="New Password" icon={FaLock} />
                  <Input type="password" placeholder="Confirm New Password" icon={FaLock} />
                  <button className="auth-btn" onClick={() => setView("login")}>Reset & Login</button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </Tilt>
      </div>
    </div>
  );
}
