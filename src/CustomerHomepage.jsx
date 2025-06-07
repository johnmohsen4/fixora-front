import React, { useState } from 'react';
import WorkersList from './WorkersList';
import './CustomerHomepage.css';

const CustomerHomepage = ({ user, onLogout, onGoToConfirmOrder }) => {
  const [selectedService, setSelectedService] = useState(null);
  const [showWorkersList, setShowWorkersList] = useState(false);

  const services = [
    { 
      id: 'Plumber', 
      name: 'Plumber', 
      arabicName: 'سباك',
      icon: '🔧',
      description: 'إصلاح وصيانة الأنابيب والحنفيات'
    },
    { 
      id: 'Carpenter', 
      name: 'Carpenter', 
      arabicName: 'نجار',
      icon: '🔨',
      description: 'أعمال النجارة والأثاث'
    },
    { 
      id: 'Electrician', 
      name: 'Electrician', 
      arabicName: 'كهربائي',
      icon: '⚡',
      description: 'إصلاح وصيانة الكهرباء'
    },
    { 
      id: 'Tile Setter', 
      name: 'Tile Setter', 
      arabicName: 'بلاط',
      icon: '🔲',
      description: 'تركيب وإصلاح البلاط'
    },
    { 
      id: 'Glazier', 
      name: 'Glazier', 
      arabicName: 'زجاج',
      icon: '🪟',
      description: 'تركيب وإصلاح الزجاج'
    },
    { 
      id: 'Gypsum Board', 
      name: 'Gypsum Board', 
      arabicName: 'جبس بورد',
      icon: '📦',
      description: 'تركيب الجبس بورد والأسقف المعلقة'
    },
    { 
      id: 'Isolation Works', 
      name: 'Isolation Works', 
      arabicName: 'عزل',
      icon: '🛡️',
      description: 'أعمال العزل المائي والحراري'
    },
    { 
      id: 'Remodeling Contractor', 
      name: 'Remodeling Contractor', 
      arabicName: 'مقاولات تجديد',
      icon: '🏗️',
      description: 'مقاولات التجديد والتطوير'
    },
    { 
      id: 'Painter', 
      name: 'Painter', 
      arabicName: 'نقاش',
      icon: '🎨',
      description: 'أعمال الدهان والتشطيب'
    }
  ];

  const handleServiceClick = (serviceId) => {
    setSelectedService(serviceId);
    setShowWorkersList(true);
  };

  const handleBackToServices = () => {
    setShowWorkersList(false);
    setSelectedService(null);
  };

  if (showWorkersList) {
    return (
      <WorkersList 
        selectedService={selectedService}
        onBack={handleBackToServices}
        onGoToConfirmOrder={onGoToConfirmOrder}
      />
    );
  }

  return (
    <div className="customer-homepage">
      <div className="homepage-header">
        <div className="welcome-section">
          <span className="welcome-text">Welcome</span>
          <button className="logout-button" onClick={onLogout}>
            Logout
          </button>
        </div>
        
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

      <div className="services-section">
        <h2 className="services-title">Choose the service you need</h2>
        
        <div className="services-grid">
          {services.map((service) => (
            <div 
              key={service.id}
              className="service-card"
              onClick={() => handleServiceClick(service.id)}
            >
              <div className="service-icon">
                {service.icon}
              </div>
              <h3 className="service-name">{service.name}</h3>
              <p className="service-arabic">{service.arabicName}</p>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerHomepage;