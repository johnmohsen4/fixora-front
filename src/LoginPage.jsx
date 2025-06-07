import React, { useState } from 'react';
import './LoginPage.css';

const LoginPage = ({ onForgotPassword, onSignUp, onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      onLogin(email, password);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        {/* Left Side - Login Form */}
        <div className="login-form-section">
          <div className="form-wrapper">
            <h1 className="logo">Fixora</h1>
            <p className="subtitle">Please enter your details</p>
            
            <form onSubmit={handleLogin}>
              <div className="form-inputs">
                <input
                  type="email"
                  placeholder="Email"
                  className="input-field"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="input-field"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              
              <button type="submit" className="btn-primary">
                Log in
              </button>
            </form>
            
            <div className="forgot-password">
              <button 
                type="button" 
                className="forgot-link"
                onClick={onForgotPassword}
              >
                Forget Password?
              </button>
            </div>
            
            <div className="divider">
              <p>Don't have an account?</p>
            </div>
            
            <button 
              type="button" 
              className="btn-secondary"
              onClick={onSignUp}
            >
              Sign up
            </button>
          </div>
        </div>

        {/* Right Side - Illustration */}
        <div className="illustration-section">
          {/* Background Circle with Animation */}
          <div className="bg-circle animated-bg"></div>
          
          {/* Floating Elements */}
          <div className="floating-element float-1">🔧</div>
          <div className="floating-element float-2">🔨</div>
          <div className="floating-element float-3">⚒️</div>
          <div className="floating-element float-4">🪛</div>
          
          {/* Decorative Stars */}
          <div className="deco-star star-1">★</div>
          <div className="deco-star star-2">★</div>
          <div className="deco-star star-3">★</div>
          <div className="deco-star star-4">★</div>
          
          <div className="illustration-content">
            {/* Main Logo Image */}
            <div className="main-logo-container">
              <img 
                src="./fixora-logo.png"
                alt="Fixora Craftsmen Management" 
                className="main-logo-image"
              />
            </div>
            
            {/* Animated Welcome Text */}
            <div className="welcome-text">
              <h2 className="welcome-title">Welcome to FIXORA</h2>
              <p className="welcome-subtitle">Professional Craftsmen Management Platform</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;