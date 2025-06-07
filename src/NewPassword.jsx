import React, { useState } from 'react';

const NewPassword = ({ onPasswordReset, onBackToLogin }) => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handlePasswordChange = (e) => {
    setNewPassword(e.target.value);
    setError('');
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setError('');
  };

  const handleSubmit = async () => {
    if (!newPassword.trim()) {
      setError('Please enter a new password');
      return;
    }

    if (newPassword.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    if (newPassword !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Call the parent function
      if (onPasswordReset) {
        onPasswordReset(newPassword);
      }
      
      alert('Password reset successfully!');
      
      // Navigate back to login
      if (onBackToLogin) {
        onBackToLogin();
      }
      
    } catch (error) {
      setError('Failed to reset password. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !isLoading) {
      handleSubmit();
    }
  };

  return (
    <div className="new-password-container">
      <div className="new-password-content">
        <h1 className="enter-code-title">Fixora</h1>
        
        <div className="new-password-section">
          <h2 className="new-password-title">New Password</h2>
          
          {error && (
            <div className="alert alert-error">
              {error}
            </div>
          )}
          
          <div className="password-inputs">
            <input
              type="password"
              className="code-input"
              placeholder="Enter New Password"
              value={newPassword}
              onChange={handlePasswordChange}
              onKeyPress={handleKeyPress}
              disabled={isLoading}
            />
            
            <input
              type="password"
              className="code-input"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              onKeyPress={handleKeyPress}
              disabled={isLoading}
            />
          </div>
          
          <button 
            className="verify-button submit-button"
            onClick={handleSubmit}
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <span className="loading-spinner"></span>
                Submitting...
              </>
            ) : (
              'Submit'
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewPassword;