import React, { useState } from 'react';
import './FeedbackPopup.css';

const FeedbackPopup = ({ isOpen, onClose, workerName, onSubmitFeedback }) => {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleStarClick = (starValue) => {
    setRating(starValue);
  };

  const handleStarHover = (starValue) => {
    setHoveredRating(starValue);
  };

  const handleSubmitFeedback = () => {
    if (rating === 0) {
      alert('يرجى اختيار تقييم بالنجوم');
      return;
    }

    const feedbackData = {
      rating: rating,
      comment: comment,
      workerName: workerName,
      date: new Date().toISOString()
    };

    console.log('Feedback submitted:', feedbackData);
    
    if (onSubmitFeedback) {
      onSubmitFeedback(feedbackData);
    }

    // Reset form
    setRating(0);
    setHoveredRating(0);
    setComment('');
    
    alert('شكراً لك! تم إرسال تقييمك بنجاح');
    onClose();
  };

  const handleSkip = () => {
    // Reset form
    setRating(0);
    setHoveredRating(0);
    setComment('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="feedback-overlay">
      <div className="feedback-popup">
        <div className="feedback-header">
          <h3>تقييم الخدمة</h3>
          <button className="close-button" onClick={onClose}>×</button>
        </div>
        
        <div className="feedback-content">
          <p className="feedback-text">
            كيف كانت تجربتك مع <strong>{workerName}</strong>؟
          </p>
          
          {/* Star Rating */}
          <div className="star-rating">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                className={`star ${
                  star <= (hoveredRating || rating) ? 'star-filled' : 'star-empty'
                }`}
                onClick={() => handleStarClick(star)}
                onMouseEnter={() => handleStarHover(star)}
                onMouseLeave={() => setHoveredRating(0)}
              >
                ★
              </button>
            ))}
          </div>
          
          {/* Comment Box */}
          <div className="comment-section">
            <textarea
              className="comment-textbox"
              placeholder="شاركنا رأيك في الخدمة... (اختياري)"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              rows={4}
            />
          </div>
          
          {/* Action Buttons */}
          <div className="feedback-actions">
            <button className="skip-button" onClick={handleSkip}>
              تخطي
            </button>
            <button className="submit-button" onClick={handleSubmitFeedback}>
              إرسال التقييم
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackPopup;