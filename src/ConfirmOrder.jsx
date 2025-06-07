import React, { useState } from 'react';
import './ConfirmOrder.css';

const ConfirmOrder = ({ selectedWorker, selectedService, onBack, onConfirm }) => {
  const [formData, setFormData] = useState({
    phoneNumber: '',
    buildingNumber: '',
    street: '',
    district: '',
    fullAddress: '',
    paymentMethod: 'cash'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleConfirm = () => {
    // التحقق من ملء جميع البيانات المطلوبة
    if (!formData.phoneNumber || !formData.buildingNumber || !formData.street || 
        !formData.district || !formData.fullAddress) {
      alert('يرجى ملء جميع البيانات المطلوبة');
      return;
    }

    // إنشاء كائن الطلب
    const orderData = {
      worker: selectedWorker,
      service: selectedService,
      contact: formData.phoneNumber,
      address: {
        buildingNumber: formData.buildingNumber,
        street: formData.street,
        district: formData.district,
        fullAddress: formData.fullAddress
      },
      paymentMethod: formData.paymentMethod,
      orderDate: new Date().toLocaleDateString('ar-EG'),
      status: 'pending'
    };

    console.log('Order confirmed:', orderData);
    
    if (onConfirm) {
      onConfirm(orderData);
    }
    
    alert('تم تأكيد الطلب بنجاح! سيتم التواصل معك خلال 24 ساعة');
  };

  return (
    <div className="confirm-order-container">
      <div className="confirm-order-header">
        <button className="back-button" onClick={onBack}>
          ← رجوع
        </button>
        
        <div className="logo-section">
          <div className="logo-container">
            <div className="logo-circle">
              <div className="logo-tools">
                <span className="tool-icon">🔧</span>
                <span className="tool-icon">🔨</span>
                <span className="tool-icon">⚡</span>
              </div>
            </div>
            <div className="logo-text">
              <h1>FIXORA</h1>
              <p>CRAFTSMEN MANAGEMENT</p>
            </div>
          </div>
        </div>
      </div>

      <div className="confirm-order-content">
        <h2 className="page-title">Confirm Order</h2>
        
        {/* معلومات العامل المحجوز */}
        <div className="worker-summary">
          <h3>العامل المحجوز:</h3>
          <p><strong>{selectedWorker?.name}</strong> - {selectedService}</p>
          <p>التقييم: {selectedWorker?.rate}% | الخبرة: {selectedWorker?.experience}</p>
        </div>

        {/* بيانات الاتصال */}
        <div className="form-section">
          <h3 className="section-title">Contact</h3>
          <div className="form-group">
            <input
              type="tel"
              name="phoneNumber"
              placeholder="Phone No."
              className="form-input full-width"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        {/* بيانات العنوان */}
        <div className="form-section">
          <h3 className="section-title">Address</h3>
          <div className="form-row">
            <input
              type="text"
              name="buildingNumber"
              placeholder="Building number"
              className="form-input half-width"
              value={formData.buildingNumber}
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              name="street"
              placeholder="Street"
              className="form-input half-width"
              value={formData.street}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-row">
            <input
              type="text"
              name="district"
              placeholder="District"
              className="form-input half-width"
              value={formData.district}
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              name="fullAddress"
              placeholder="Full Address"
              className="form-input half-width"
              value={formData.fullAddress}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        {/* طريقة الدفع */}
        <div className="form-section">
          <h3 className="section-title">Payment</h3>
          <div className="payment-option">
            <label className="radio-label">
              <input
                type="radio"
                name="paymentMethod"
                value="cash"
                checked={formData.paymentMethod === 'cash'}
                onChange={handleInputChange}
              />
              <span className="radio-custom"></span>
              Cash On Delivery
            </label>
          </div>
        </div>

        {/* زر التأكيد */}
        <div className="confirm-section">
          <button className="confirm-button" onClick={handleConfirm}>
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmOrder;