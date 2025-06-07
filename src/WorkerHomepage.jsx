import React, { useState } from 'react';

const WorkerHomepage = ({ user = { fullName: 'أحمد محمد', typeOfService: 'سباك' }, onLogout = () => console.log('Logout'), orders = [], onUpdateOrderStatus = () => {} }) => {
  // استخدام الطلبات من الـ props أو البيانات الوهمية
  const [requests, setRequests] = useState(orders.length > 0 ? orders : [
    {
      id: 1,
      customerName: 'أحمد علي',
      phone: '01011223344',
      address: '15 شارع النيل، الدقي، الجيزة',
      problemDescription: 'تسريب في الحنفية وانسداد في المجاري، المشكلة مستمرة منذ أسبوع ونحتاج حل عاجل',
      orderDate: '2025-06-20',
      executionDate: '2025-06-22',
      status: 'pending'
    },
    {
      id: 2,
      customerName: 'فاطمة محمد',
      phone: '01055667788',
      address: '33 شارع أحمد عرابي، المهندسين، الجيزة',
      problemDescription: 'عطل في التكييف لا يعمل التبريد بشكل جيد، يحتاج صيانة شاملة',
      orderDate: '2025-06-25',
      executionDate: '2025-06-30',
      status: 'pending'
    },
    {
      id: 3,
      customerName: 'محمد حسن',
      phone: '01099887766',
      address: '56 شارع البحر الأعظم، الجيزة',
      problemDescription: 'مشكلة في الكهرباء، انقطاع متكرر في الكهرباء وحاجة لفحص اللوحة الكهربائية',
      orderDate: '2025-06-28',
      executionDate: '2025-07-04',
      status: 'accepted'
    },
    {
      id: 4,
      customerName: 'سارة أحمد',
      phone: '01033445566',
      address: '15 شارع المساحة، الدقي، الجيزة',
      problemDescription: 'تركيب مروحة سقف جديدة في غرفة المعيشة مع توصيل الكهرباء',
      orderDate: '2025-07-01',
      executionDate: '2025-07-12',
      status: 'denied'
    }
  ]);

  // تحديث الطلبات عند تغيير الـ props
  React.useEffect(() => {
    if (orders.length > 0) {
      setRequests(orders);
    }
  }, [orders]);

  const handleAccept = (requestId) => {
    setRequests(prevRequests =>
      prevRequests.map(request =>
        request.id === requestId
          ? { ...request, status: 'accepted' }
          : request
      )
    );
    // استدعاء الدالة من الـ parent component
    onUpdateOrderStatus(requestId, 'accepted');
    console.log(`Request ${requestId} accepted`);
  };

  const handleDeny = (requestId) => {
    setRequests(prevRequests =>
      prevRequests.map(request =>
        request.id === requestId
          ? { ...request, status: 'denied' }
          : request
      )
    );
    // استدعاء الدالة من الـ parent component
    onUpdateOrderStatus(requestId, 'denied');
    console.log(`Request ${requestId} denied`);
  };

  // دالة جديدة لإرجاع الطلب لحالة الانتظار
  const handleResetToPending = (requestId) => {
    setRequests(prevRequests =>
      prevRequests.map(request =>
        request.id === requestId
          ? { ...request, status: 'pending' }
          : request
      )
    );
    // استدعاء الدالة من الـ parent component
    onUpdateOrderStatus(requestId, 'pending');
    console.log(`Request ${requestId} reset to pending`);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ar-EG', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      fontFamily: 'Arial, sans-serif',
      direction: 'rtl',
      textAlign: 'right'
    }}>
      {/* Header */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px 40px',
        background: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.2)'
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center'
        }}>
          <div style={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            marginBottom: '10px',
            background: '#fff',
            padding: '10px',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '2rem',
            color: '#667eea',
            fontWeight: 'bold'
          }}>
            F
          </div>
          <h1 style={{
            color: '#fff',
            fontSize: '2rem',
            fontWeight: 'bold',
            margin: '5px 0',
            textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'
          }}>FIXORA</h1>
          <p style={{
            color: '#e0e6ff',
            fontSize: '0.9rem',
            margin: '0',
            fontWeight: '500'
          }}>إدارة الحرفيين</p>
        </div>
        
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          gap: '15px'
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            gap: '5px'
          }}>
            <span style={{
              color: '#fff',
              fontSize: '1.2rem',
              fontWeight: '600'
            }}>مرحباً {user.fullName}</span>
            <span style={{
              color: '#e0e6ff',
              fontSize: '1rem',
              fontWeight: '400'
            }}>{user.typeOfService}</span>
          </div>
          <button onClick={onLogout} style={{
            background: 'rgba(255, 255, 255, 0.2)',
            color: '#fff',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            padding: '8px 16px',
            borderRadius: '20px',
            cursor: 'pointer',
            fontSize: '0.9rem',
            transition: 'all 0.3s ease',
            backdropFilter: 'blur(10px)'
          }}>
            تسجيل الخروج
          </button>
        </div>
      </div>

      {/* Requests Container */}
      <div style={{
        padding: '40px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <h2 style={{
          color: '#fff',
          textAlign: 'center',
          fontSize: '2.5rem',
          marginBottom: '40px',
          textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
          fontWeight: '300'
        }}>طلبات العملاء</h2>
        
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px'
        }}>
          {requests.map(request => (
            <div 
              key={request.id} 
              style={{
                background: 'rgba(255, 255, 255, 0.15)',
                borderRadius: '15px',
                padding: '25px',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                transition: 'all 0.3s ease',
                gap: '20px'
              }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '20px',
                flex: '1'
              }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.9)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#667eea',
                  flexShrink: '0'
                }}>
                  <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: '30px', height: '30px' }}>
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
                
                <div style={{ flex: '1' }}>
                  <h3 style={{
                    color: '#fff',
                    fontSize: '1.3rem',
                    fontWeight: '600',
                    margin: '0 0 8px 0',
                    textShadow: '0 1px 3px rgba(0, 0, 0, 0.3)'
                  }}>{request.customerName}</h3>
                  
                  <p style={{
                    color: '#e0e6ff',
                    margin: '4px 0',
                    fontSize: '0.95rem',
                    fontWeight: '500'
                  }}>رقم الهاتف: {request.phone}</p>
                  
                  <p style={{
                    color: '#e0e6ff',
                    margin: '4px 0',
                    fontSize: '0.9rem',
                    opacity: '0.9'
                  }}>العنوان: {request.address}</p>
                  
                  {/* وصف المشكلة */}
                  <div style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '8px',
                    padding: '12px',
                    margin: '10px 0',
                    border: '1px solid rgba(255, 255, 255, 0.2)'
                  }}>
                    <h4 style={{
                      color: '#fff',
                      fontSize: '0.95rem',
                      fontWeight: '600',
                      margin: '0 0 8px 0'
                    }}>وصف المشكلة:</h4>
                    <p style={{
                      color: '#e0e6ff',
                      fontSize: '0.9rem',
                      lineHeight: '1.5',
                      margin: '0'
                    }}>{request.problemDescription}</p>
                  </div>
                  
                  {/* التواريخ */}
                  <div style={{
                    display: 'flex',
                    gap: '20px',
                    marginTop: '12px',
                    flexWrap: 'wrap'
                  }}>
                    <div style={{
                      background: 'rgba(255, 255, 255, 0.1)',
                      borderRadius: '6px',
                      padding: '6px 12px',
                      border: '1px solid rgba(255, 255, 255, 0.2)'
                    }}>
                      <span style={{
                        color: '#b8c5ff',
                        fontSize: '0.8rem',
                        fontWeight: '500'
                      }}>تاريخ الطلب: </span>
                      <span style={{
                        color: '#fff',
                        fontSize: '0.85rem',
                        fontWeight: '600'
                      }}>{formatDate(request.orderDate)}</span>
                    </div>
                    
                    <div style={{
                      background: 'rgba(255, 255, 255, 0.1)',
                      borderRadius: '6px',
                      padding: '6px 12px',
                      border: '1px solid rgba(255, 255, 255, 0.2)'
                    }}>
                      <span style={{
                        color: '#b8c5ff',
                        fontSize: '0.8rem',
                        fontWeight: '500'
                      }}>تاريخ التنفيذ: </span>
                      <span style={{
                        color: '#fff',
                        fontSize: '0.85rem',
                        fontWeight: '600'
                      }}>{formatDate(request.executionDate)}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                alignItems: 'center',
                flexShrink: '0'
              }}>
                {request.status === 'pending' && (
                  <div style={{
                    display: 'flex',
                    gap: '10px'
                  }}>
                    <button 
                      onClick={() => handleAccept(request.id)}
                      style={{
                        padding: '10px 20px',
                        border: 'none',
                        borderRadius: '8px',
                        fontSize: '0.9rem',
                        fontWeight: '500',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        minWidth: '80px',
                        background: '#4CAF50',
                        color: 'white'
                      }}
                    >
                      قبول
                    </button>
                    <button 
                      onClick={() => handleDeny(request.id)}
                      style={{
                        padding: '10px 20px',
                        border: 'none',
                        borderRadius: '8px',
                        fontSize: '0.9rem',
                        fontWeight: '500',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        minWidth: '80px',
                        background: '#f44336',
                        color: 'white'
                      }}
                    >
                      رفض
                    </button>
                  </div>
                )}
                
                {request.status === 'accepted' && (
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px',
                    alignItems: 'center'
                  }}>
                    <span style={{
                      padding: '8px 16px',
                      borderRadius: '20px',
                      fontSize: '0.85rem',
                      fontWeight: '500',
                      textAlign: 'center',
                      minWidth: '120px',
                      background: 'rgba(76, 175, 80, 0.2)',
                      color: '#4CAF50',
                      border: '1px solid rgba(76, 175, 80, 0.3)'
                    }}>تم قبول الطلب</span>
                    
                    <button 
                      onClick={() => handleResetToPending(request.id)}
                      className="undo-btn"
                      style={{
                        padding: '6px 12px',
                        border: 'none',
                        borderRadius: '6px',
                        fontSize: '0.8rem',
                        fontWeight: '500',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        background: 'rgba(255, 193, 7, 0.8)',
                        color: '#fff',
                        minWidth: '100px'
                      }}
                    >
                      تراجع
                    </button>
                  </div>
                )}
                
                {request.status === 'denied' && (
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px',
                    alignItems: 'center'
                  }}>
                    <span style={{
                      padding: '8px 16px',
                      borderRadius: '20px',
                      fontSize: '0.85rem',
                      fontWeight: '500',
                      textAlign: 'center',
                      minWidth: '120px',
                      background: 'rgba(244, 67, 54, 0.2)',
                      color: '#f44336',
                      border: '1px solid rgba(244, 67, 54, 0.3)'
                    }}>تم رفض الطلب</span>
                    
                    <button 
                      onClick={() => handleResetToPending(request.id)}
                      className="undo-btn"
                      style={{
                        padding: '6px 12px',
                        border: 'none',
                        borderRadius: '6px',
                        fontSize: '0.8rem',
                        fontWeight: '500',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        background: 'rgba(255, 193, 7, 0.8)',
                        color: '#fff',
                        minWidth: '100px'
                      }}
                    >
                      تراجع
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {requests.length === 0 && (
          <div style={{
            textAlign: 'center',
            padding: '60px 20px',
            color: '#e0e6ff',
            fontSize: '1.2rem'
          }}>
            <p>لا توجد طلبات في الوقت الحالي</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default WorkerHomepage;