import './WorkerSignUp.css';
import React, { useState } from 'react';

const WorkerSignUp = ({ onBackToSignUpChoice, onCreateWorkerAccount, onBackToLogin }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    address: '',
    typeOfService: '',
    nationalId: '',
    email: '',
    password: '',
    profilePicture: null
  });

  const [profilePreview, setProfilePreview] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prevState => ({
        ...prevState,
        profilePicture: file
      }));
      
      // إنشاء معاينة للصورة
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfilePreview(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    // التحقق من أن جميع الحقول مملوءة
    if (formData.fullName && formData.phone && formData.address && 
        formData.typeOfService && formData.nationalId && formData.email && formData.password) {
      onCreateWorkerAccount(formData);
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
    <div className="worker-signup-container">
      <div className="worker-signup-form">
        <div className="header">
          <h1 className="logo">Fixora</h1>
          <h2 className="subtitle">Create Account</h2>
        </div>

        <div className="profile-picture-section">
          <div className="profile-picture-placeholder">
            <input
              type="file"
              id="profile-picture"
              className="file-input"
              accept="image/*"
              onChange={handleFileChange}
            />
            <label htmlFor="profile-picture" className="file-label">
              {profilePreview ? (
                <img 
                  src={profilePreview} 
                  alt="Profile Preview" 
                  className="profile-preview-image"
                />
              ) : (
                <span className="plus-icon">+</span>
              )}
            </label>
          </div>
          <p className="profile-text">Profile Picture</p>
        </div>

        <div className="form-group">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleInputChange}
            className="form-input"
          />
        </div>

        <div className="form-group">
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleInputChange}
            className="form-input"
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleInputChange}
            className="form-input"
          />
        </div>

        <div className="form-group">
          <select
            name="typeOfService"
            value={formData.typeOfService}
            onChange={handleInputChange}
            className="form-input"
          >
            <option value="">Select Service Type</option>
            <option value="كهربائي">كهربائي</option>
            <option value="سباك">سباك</option>
            <option value="نجار">نجار</option>
            <option value="دهان">دهان</option>
            <option value="مكيفات">مكيفات</option>
            <option value="أخرى">أخرى</option>
          </select>
        </div>

        <div className="form-group">
          <input
            type="text"
            name="nationalId"
            placeholder="National ID"
            value={formData.nationalId}
            onChange={handleInputChange}
            className="form-input"
          />
        </div>

        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            className="form-input"
          />
        </div>

        <div className="form-group">
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
            className="form-input"
          />
        </div>

        <button
          type="button"
          onClick={handleSubmit}
          className="create-account-btn"
        >
          Create Account
        </button>

        <p className="login-link">
          Already have an account?
          <span onClick={handleLoginClick} className="login-text">
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default WorkerSignUp;