import './CustomerSignUp.css';
import React, { useState } from 'react';

const CustomerSignUp = ({ onBackToSignUpChoice, onCreateAccount, onBackToLogin }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNo: '',
    address: '',
    email: '',
    password: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    // التحقق من أن جميع الحقول مملوءة
    if (formData.firstName && formData.lastName && formData.phoneNo && 
        formData.address && formData.email && formData.password) {
      onCreateAccount(formData);
    } else {
      alert('Please fill in all fields');
    }
  };

  const handleLoginClick = () => {
    // استخدام onBackToLogin بدلاً من onBackToSignUpChoice
    if (onBackToLogin) {
      onBackToLogin();
    } else {
      onBackToSignUpChoice();
    }
  };

  return (
    <div className="customer-signup-container">
      <div className="customer-signup-card">
        <h1 className="app-title">Fixora</h1>
        <h2 className="page-title">Create Account</h2>

        <div className="form-container">
          <div className="input-row">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleInputChange}
              className="input-field"
            />
            
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleInputChange}
              className="input-field"
            />
          </div>

          <div className="input-row">
            <input
              type="tel"
              name="phoneNo"
              placeholder="Phone No"
              value={formData.phoneNo}
              onChange={handleInputChange}
              className="input-field"
            />
            
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleInputChange}
              className="input-field"
            />
          </div>

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            className="input-field input-full-width"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
            className="input-field input-full-width"
          />

          <button
            type="button"
            onClick={handleSubmit}
            className="create-account-btn"
          >
            Create Account
          </button>
        </div>

        <p className="login-link">
          Already have an account?{' '}
          <span onClick={handleLoginClick} className="login-text">
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default CustomerSignUp;