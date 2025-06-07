import React from 'react';
import './SignUpChoice.css';
import fixoraLogo from './fixora-logo.png'; // تأكد من المسار الصحيح للصورة

const SignUpPage = ({ onBackToLogin, onCustomerSignUp, onWorkerSignUp }) => {
  return (
    <div className="signup-container">
      <div className="signup-left">
        <h1 className="logo-text">Fixora</h1>
        <button className="signup-button" onClick={onCustomerSignUp}>
          Sign up as a customer
        </button>
        <div className="divider">
          <span>Or</span>
        </div>
        <button className="signup-button" onClick={onWorkerSignUp}>
          Sign up as a worker
        </button>
        <button className="back-button" onClick={onBackToLogin}>
          Back to Login
        </button>
      </div>
      <div className="signup-right">
        <div className="signup-image-container">
          <div className="fixora-logo">
            <img 
              src={fixoraLogo} 
              alt="Fixora - Craftsmen Management" 
              className="fixora-logo-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;