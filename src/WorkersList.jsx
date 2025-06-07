import React from 'react';
import './WorkersList.css';

const WorkersList = ({ selectedService, onBack, onGoToConfirmOrder }) => {
  // بيانات العمال لكل خدمة مع تقييمات مختلفة
  const workersData = {
    'Plumber': [
      { id: 1, name: 'أحمد محمد', rate: 95, experience: '5 سنوات', phone: '01234567890' },
      { id: 2, name: 'محمود علي', rate: 88, experience: '3 سنوات', phone: '01234567891' },
      { id: 3, name: 'سامح حسن', rate: 92, experience: '7 سنوات', phone: '01234567892' },
      { id: 4, name: 'كريم أحمد', rate: 85, experience: '4 سنوات', phone: '01234567893' },
      { id: 5, name: 'يوسف محمد', rate: 90, experience: '6 سنوات', phone: '01234567894' },
      { id: 6, name: 'عمر سعد', rate: 87, experience: '2 سنوات', phone: '01234567895' },
      { id: 7, name: 'حسام فتحي', rate: 83, experience: '3 سنوات', phone: '01234567896' },
      { id: 8, name: 'طارق عبدالله', rate: 89, experience: '5 سنوات', phone: '01234567897' }
    ],
    'Carpenter': [
      { id: 9, name: 'مصطفى جمال', rate: 93, experience: '8 سنوات', phone: '01234567898' },
      { id: 10, name: 'إبراهيم سليم', rate: 87, experience: '4 سنوات', phone: '01234567899' },
      { id: 11, name: 'خالد نور', rate: 91, experience: '6 سنوات', phone: '01234567800' },
      { id: 12, name: 'وليد صبري', rate: 86, experience: '3 سنوات', phone: '01234567801' },
      { id: 13, name: 'عاصم فؤاد', rate: 89, experience: '5 سنوات', phone: '01234567802' },
      { id: 14, name: 'هشام علي', rate: 84, experience: '2 سنوات', phone: '01234567803' },
      { id: 15, name: 'رامي محمد', rate: 88, experience: '4 سنوات', phone: '01234567804' },
      { id: 16, name: 'فادي حسن', rate: 92, experience: '7 سنوات', phone: '01234567805' }
    ],
    'Electrician': [
      { id: 17, name: 'أيمن صالح', rate: 96, experience: '9 سنوات', phone: '01234567806' },
      { id: 18, name: 'شريف عادل', rate: 89, experience: '4 سنوات', phone: '01234567807' },
      { id: 19, name: 'باسم نبيل', rate: 94, experience: '8 سنوات', phone: '01234567808' },
      { id: 20, name: 'مينا جرجس', rate: 87, experience: '3 سنوات', phone: '01234567809' },
      { id: 21, name: 'تامر محمود', rate: 91, experience: '6 سنوات', phone: '01234567810' },
      { id: 22, name: 'عبدالرحمن أحمد', rate: 85, experience: '2 سنوات', phone: '01234567811' },
      { id: 23, name: 'مؤمن سمير', rate: 88, experience: '4 سنوات', phone: '01234567812' },
      { id: 24, name: 'حازم فاروق', rate: 93, experience: '7 سنوات', phone: '01234567813' }
    ],
    'Tile Setter': [
      { id: 25, name: 'جمال عبدالعزيز', rate: 90, experience: '6 سنوات', phone: '01234567814' },
      { id: 26, name: 'سيد محمد', rate: 84, experience: '3 سنوات', phone: '01234567815' },
      { id: 27, name: 'ماجد إسماعيل', rate: 87, experience: '4 سنوات', phone: '01234567816' },
      { id: 28, name: 'نادر حلمي', rate: 91, experience: '7 سنوات', phone: '01234567817' },
      { id: 29, name: 'علاء الدين', rate: 86, experience: '2 سنوات', phone: '01234567818' },
      { id: 30, name: 'أسامة رشاد', rate: 89, experience: '5 سنوات', phone: '01234567819' },
      { id: 31, name: 'صلاح أبو زيد', rate: 83, experience: '3 سنوات', phone: '01234567820' },
      { id: 32, name: 'محمد رضا', rate: 88, experience: '4 سنوات', phone: '01234567821' }
    ],
    'Glazier': [
      { id: 33, name: 'عصام جابر', rate: 85, experience: '4 سنوات', phone: '01234567822' },
      { id: 34, name: 'فيصل عمر', rate: 90, experience: '6 سنوات', phone: '01234567823' },
      { id: 35, name: 'ياسر منصور', rate: 87, experience: '3 سنوات', phone: '01234567824' },
      { id: 36, name: 'وائل السيد', rate: 82, experience: '2 سنوات', phone: '01234567825' },
      { id: 37, name: 'أدهم رفعت', rate: 89, experience: '5 سنوات', phone: '01234567826' },
      { id: 38, name: 'مدحت فتحي', rate: 86, experience: '4 سنوات', phone: '01234567827' },
      { id: 39, name: 'حمدي صبحي', rate: 88, experience: '5 سنوات', phone: '01234567828' },
      { id: 40, name: 'كامل نصر', rate: 84, experience: '3 سنوات', phone: '01234567829' }
    ],
    'Gypsum Board': [
      { id: 41, name: 'ربيع محمد', rate: 92, experience: '7 سنوات', phone: '01234567830' },
      { id: 42, name: 'زياد حامد', rate: 86, experience: '3 سنوات', phone: '01234567831' },
      { id: 43, name: 'نصر الله', rate: 89, experience: '5 سنوات', phone: '01234567832' },
      { id: 44, name: 'حسني عطية', rate: 87, experience: '4 سنوات', phone: '01234567833' },
      { id: 45, name: 'رشدي سالم', rate: 91, experience: '6 سنوات', phone: '01234567834' },
      { id: 46, name: 'فهد عبدالله', rate: 84, experience: '2 سنوات', phone: '01234567835' },
      { id: 47, name: 'سالم أحمد', rate: 88, experience: '4 سنوات', phone: '01234567836' },
      { id: 48, name: 'بدر الدين', rate: 85, experience: '3 سنوات', phone: '01234567837' }
    ],
    'Isolation Works': [
      { id: 49, name: 'طلعت محمود', rate: 88, experience: '5 سنوات', phone: '01234567838' },
      { id: 50, name: 'عماد فاروق', rate: 91, experience: '7 سنوات', phone: '01234567839' },
      { id: 51, name: 'جهاد سمير', rate: 86, experience: '3 سنوات', phone: '01234567840' },
      { id: 52, name: 'نبيل حسن', rate: 89, experience: '6 سنوات', phone: '01234567841' },
      { id: 53, name: 'فاضل عبدالعال', rate: 84, experience: '2 سنوات', phone: '01234567842' },
      { id: 54, name: 'منير صادق', rate: 87, experience: '4 سنوات', phone: '01234567843' },
      { id: 55, name: 'عادل رمضان', rate: 90, experience: '5 سنوات', phone: '01234567844' },
      { id: 56, name: 'شوقي علي', rate: 85, experience: '3 سنوات', phone: '01234567845' }
    ],
    'Remodeling Contractor': [
      { id: 57, name: 'رفيق ناصر', rate: 94, experience: '8 سنوات', phone: '01234567846' },
      { id: 58, name: 'عزت حبيب', rate: 88, experience: '4 سنوات', phone: '01234567847' },
      { id: 59, name: 'شكري محمد', rate: 91, experience: '6 سنوات', phone: '01234567848' },
      { id: 60, name: 'لطفي سليم', rate: 87, experience: '3 سنوات', phone: '01234567849' },
      { id: 61, name: 'فؤاد عمر', rate: 89, experience: '5 سنوات', phone: '01234567850' },
      { id: 62, name: 'حمادة رشدي', rate: 86, experience: '4 سنوات', phone: '01234567851' },
      { id: 63, name: 'صفوت أحمد', rate: 92, experience: '7 سنوات', phone: '01234567852' },
      { id: 64, name: 'حليم عبدالله', rate: 85, experience: '2 سنوات', phone: '01234567853' }
    ],
    'Painter': [
      { id: 65, name: 'سعد محمد', rate: 89, experience: '5 سنوات', phone: '01234567854' },
      { id: 66, name: 'فتحي علي', rate: 86, experience: '3 سنوات', phone: '01234567855' },
      { id: 67, name: 'حمد السيد', rate: 91, experience: '6 سنوات', phone: '01234567856' },
      { id: 68, name: 'زكريا أحمد', rate: 84, experience: '2 سنوات', phone: '01234567857' },
      { id: 69, name: 'مجدي حسن', rate: 88, experience: '4 سنوات', phone: '01234567858' },
      { id: 70, name: 'فاروق عطا', rate: 87, experience: '4 سنوات', phone: '01234567859' },
      { id: 71, name: 'صابر نور', rate: 90, experience: '5 سنوات', phone: '01234567860' },
      { id: 72, name: 'حمزة رضوان', rate: 85, experience: '3 سنوات', phone: '01234567861' }
    ]
  };

  const serviceNames = {
    'Plumber': 'سباك',
    'Carpenter': 'نجار',
    'Electrician': 'كهربائي',
    'Tile Setter': 'بلاط',
    'Glazier': 'زجاج',
    'Gypsum Board': 'جبس بورد',
    'Isolation Works': 'عزل',
    'Remodeling Contractor': 'مقاولات تجديد',
    'Painter': 'نقاش'
  };

  const workers = workersData[selectedService] || [];

  const handleReservation = (worker) => {
    // الانتقال لصفحة تأكيد الطلب
    if (onGoToConfirmOrder) {
      onGoToConfirmOrder(worker, selectedService);
    }
  };

  return (
    <div className="workers-list-container">
      <div className="workers-header">
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
        <h2 className="service-title">
          {serviceNames[selectedService] || selectedService}
        </h2>
      </div>

      <div className="workers-grid">
        {workers.map((worker) => (
          <div key={worker.id} className="worker-card">
            <div className="worker-info">
              <div className="worker-avatar">
                <i className="fas fa-user"></i>
              </div>
              <div className="worker-details">
                <h3 className="worker-name">{worker.name}</h3>
                <p className="worker-rate">Rate: {worker.rate}%</p>
                <p className="worker-experience">خبرة: {worker.experience}</p>
                <p className="worker-phone">📞 {worker.phone}</p>
              </div>
            </div>
            <button 
              className="reservation-button"
              onClick={() => handleReservation(worker)}
            >
              Reservation
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkersList;