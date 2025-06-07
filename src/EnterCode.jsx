import React, { useState } from 'react';


const EnterCode = ({ onVerifyCode, onBackToLogin }) => {
  const [code, setCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleCodeChange = (e) => {
    setCode(e.target.value);
    setError(''); // Clear error when user types
  };

  const handleVerify = async () => {
    if (code.trim() === '') {
      setError('Please enter the verification code');
      return;
    }

    if (code.length < 4) {
      setError('Please enter a valid code');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Call the parent function
      onVerifyCode(code);
      
      // You can add success handling here
      console.log('Code verified successfully');
      
    } catch (error) {
      setError('Invalid verification code. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !isLoading) {
      handleVerify();
    }
  };

  return (
    <div className="enter-code-container">
      <div className="enter-code-content">
        <h1 className="enter-code-title">Fixora</h1>
        
        <div className="code-input-section">
          {error && (
            <div className="alert alert-error">
              {error}
            </div>
          )}
          
          <input
            type="text"
            className="code-input"
            placeholder="Please enter the code"
            value={code}
            onChange={handleCodeChange}
            onKeyPress={handleKeyPress}
            disabled={isLoading}
            maxLength={6}
          />
          
          <button 
            className="verify-button"
            onClick={handleVerify}
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <span className="loading-spinner"></span>
                Verifying...
              </>
            ) : (
              'Verify'
            )}
          </button>

          <button 
            className="btn-secondary"
            onClick={onBackToLogin}
            style={{ marginTop: '20px', fontSize: '14px', padding: '10px 20px' }}
          >
            Back to Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default EnterCode;