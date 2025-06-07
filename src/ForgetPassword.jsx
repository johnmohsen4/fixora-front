import React, { useState } from 'react';
import './ForgetPassword.css';

const ForgetPassword = ({ onBackToLogin, onPasswordReset }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSendCode = () => {
    if (!phoneNumber.trim()) {
      alert('Please enter your phone number');
      return;
    }
    
    setIsLoading(true);
    console.log('Sending code to:', phoneNumber);
    
    // محاكاة إرسال الكود
    setTimeout(() => {
      setIsLoading(false);
      alert('Code sent successfully to ' + phoneNumber);
      
      // بعد إرسال الكود، ننقل المستخدم لصفحة EnterCode
      if (onPasswordReset) {
        onPasswordReset(phoneNumber);
      }
    }, 2000);
  };

  const handleBackToLogin = () => {
    if (onBackToLogin) {
      onBackToLogin();
    }
  };

  return (
    <div className="forget-password-container">
      <div className="forget-password-card">
        <div className="forget-password-content">
          {/* Logo */}
          <h1 className="forget-logo">Fixora</h1>
          
          {/* Instructions */}
          <div className="instructions">
            <p className="instruction-text">
              Enter your Phone number and we will send you a code to reset your password
            </p>
          </div>
          
          {/* Phone Number Input */}
          <div className="input-section">
            <input
              type="tel"
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="phone-input"
              dir="ltr"
            />
            
            {/* Send Code Button */}
            <button
              onClick={handleSendCode}
              disabled={isLoading}
              className={`send-code-btn ${isLoading ? 'loading' : ''}`}
            >
              {isLoading ? 'Sending...' : 'Send Code'}
            </button>
          </div>
          
          {/* Back to Login */}
          <div className="back-to-login">
            <button onClick={handleBackToLogin} className="back-link">
              ← Back to Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;