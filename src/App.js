import React, { useState } from 'react';
import './App.css';
import LoginPage from './LoginPage';
import ForgetPassword from './ForgetPassword';
import EnterCode from './EnterCode';
import NewPassword from './NewPassword';
import SignUpPage from './SignUpChoice';
import CustomerSignUp from './CustomerSignUp';
import WorkerSignUp from './WorkerSignUp';
import CustomerHomepage from './CustomerHomepage'; // صفحة العميل الرئيسية
import WorkerHomepage from './WorkerHomepage'; // صفحة العامل الرئيسية
import ConfirmOrder from './ConfirmOrder'; // صفحة تأكيد الطلب
import FeedbackPopup from './FeedbackPopup'; // نافذة التقييم
function App() {
  const [currentPage, setCurrentPage] = useState('login');
  const [currentUser, setCurrentUser] = useState(null); // معلومات المستخدم الحالي
  const [selectedWorker, setSelectedWorker] = useState(null); // العامل المحدد للحجز
  const [selectedService, setSelectedService] = useState(null); // الخدمة المحددة
  const [showFeedbackPopup, setShowFeedbackPopup] = useState(false); // حالة عرض نافذة التقييم
  const [completedOrder, setCompletedOrder] = useState(null); // الطلب المكتمل للتقييم
  
  // قاعدة بيانات مؤقتة للمستخدمين
  const [users, setUsers] = useState([
    // بيانات تجريبية للتجربة
    {
      id: 1,
      email: 'customer@test.com',
      password: '123456',
      type: 'customer',
      firstName: 'أحمد',
      lastName: 'محمد',
      phone: '01234567890',
      address: 'القاهرة، مصر'
    },
    {
      id: 2,
      email: 'worker@test.com',
      password: '123456',
      type: 'worker',
      fullName: 'محمد أحمد علي',
      phone: '01234567891',
      address: 'الجيزة، مصر',
      typeOfService: 'كهربائي',
      nationalId: '29801012345678',
      profilePicture: null
    }
  ]);

  // قاعدة بيانات مؤقتة للطلبات مع إضافة المعلومات الجديدة
  const [orders, setOrders] = useState([
    // بيانات تجريبية للطلبات
    {
      id: 1,
      customerId: 1,
      customerName: 'أحمد محمد',
      customerPhone: '01234567890',
      customerAddress: 'القاهرة، مصر',
      workerId: 2,
      workerName: 'محمد أحمد علي',
      serviceType: 'كهربائي',
      problemDescription: 'مشكلة في الكهرباء، انقطاع متكرر في الكهرباء وحاجة لفحص اللوحة الكهربائية',
      orderDate: '2025-06-07',
      executionDate: '2025-06-10',
      status: 'pending',
      createdAt: '2025-06-07T10:00:00Z'
    },
    {
      id: 2,
      customerId: 1,
      customerName: 'أحمد محمد',
      customerPhone: '01234567890',
      customerAddress: 'القاهرة، مصر',
      workerId: 2,
      workerName: 'محمد أحمد علي',
      serviceType: 'كهربائي',
      problemDescription: 'تركيب مروحة سقف جديدة في غرفة المعيشة مع توصيل الكهرباء',
      orderDate: '2025-06-05',
      executionDate: '2025-06-08',
      status: 'accepted',
      createdAt: '2025-06-05T14:30:00Z'
    }
  ]);

  // قاعدة بيانات مؤقتة للتقييمات
  const [feedbacks, setFeedbacks] = useState([]);

  const handleForgotPassword = () => {
    setCurrentPage('forgot');
  };

  const handleBackToLogin = () => {
    setCurrentPage('login');
    setCurrentUser(null);
  };

  const handleGoToNewPassword = () => {
    setCurrentPage('newpassword');
  };

  const handleSignUp = () => {
    console.log('Navigate to Sign Up page');
    setCurrentPage('signup');
  };

  // دالة التحقق من تسجيل الدخول
  const handleLogin = (email, password) => {
    console.log('Login attempt with:', { email, password });
    
    // البحث عن المستخدم في قاعدة البيانات
    const foundUser = users.find(user => 
      user.email === email && user.password === password
    );

    if (foundUser) {
      console.log('Login successful for:', foundUser);
      setCurrentUser(foundUser);
      
      // توجيه المستخدم حسب نوعه
      if (foundUser.type === 'customer') {
        setCurrentPage('customer-homepage');
      } else if (foundUser.type === 'worker') {
        setCurrentPage('worker-homepage');
      }
    } else {
      // في حالة فشل تسجيل الدخول
      alert('البريد الإلكتروني أو كلمة المرور غير صحيحة');
      console.log('Login failed: Invalid credentials');
    }
  };

  const handlePasswordReset = (email) => {
    console.log('Password reset for:', email);
    setCurrentPage('entercode');
  };

  const handleVerifyCode = (code) => {
    console.log('Verifying code:', code);
    setCurrentPage('newpassword');
  };

  const handleNewPasswordSubmit = (password) => {
    console.log('New password set:', password);
    setCurrentPage('login');
  };

  const handleCustomerSignUp = () => {
    console.log('Customer sign up selected');
    setCurrentPage('customer-signup');
  };

  const handleWorkerSignUp = () => {
    console.log('Worker sign up selected');
    setCurrentPage('worker-signup');
  };

  const handleBackToSignUpChoice = () => {
    setCurrentPage('signup');
  };

  // دالة إنشاء حساب عميل جديد
  const handleCreateCustomerAccount = (customerData) => {
    console.log('Creating customer account:', customerData);
    
    // إنشاء ID جديد
    const newId = users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1;
    
    // إنشاء المستخدم الجديد
    const newCustomer = {
      id: newId,
      email: customerData.email,
      password: customerData.password,
      type: 'customer',
      firstName: customerData.firstName,
      lastName: customerData.lastName,
      phone: customerData.phoneNo, // تغيير من phone إلى phoneNo
      address: customerData.address
    };

    // إضافة المستخدم الجديد لقاعدة البيانات
    setUsers(prevUsers => [...prevUsers, newCustomer]);
    
    alert('تم إنشاء الحساب بنجاح! يمكنك الآن تسجيل الدخول');
    setCurrentPage('login');
  };

  // دالة إنشاء حساب عامل جديد
  const handleCreateWorkerAccount = (workerData) => {
    console.log('Creating worker account:', workerData);
    
    const newId = users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1;
    
    const newWorker = {
      id: newId,
      email: workerData.email,
      password: workerData.password,
      type: 'worker',
      fullName: workerData.fullName,
      phone: workerData.phone,
      address: workerData.address,
      typeOfService: workerData.typeOfService,
      nationalId: workerData.nationalId,
      profilePicture: workerData.profilePicture || null
    };

    setUsers(prevUsers => [...prevUsers, newWorker]);
    
    alert('تم إنشاء الحساب بنجاح! يمكنك الآن تسجيل الدخول');
    setCurrentPage('login');
  };

  // دالة تسجيل الخروج
  const handleLogout = () => {
    setCurrentUser(null);
    setCurrentPage('login');
  };

  // دالة الانتقال إلى صفحة تأكيد الطلب
  const handleGoToConfirmOrder = (worker, service) => {
    setSelectedWorker(worker);
    setSelectedService(service);
    setCurrentPage('confirm-order');
  };

  // دالة الرجوع من صفحة تأكيد الطلب
  const handleBackFromConfirmOrder = () => {
    setCurrentPage('customer-homepage');
    setSelectedWorker(null);
    setSelectedService(null);
  };

  // دالة تأكيد الطلب مع البيانات الجديدة المحسنة
  const handleConfirmOrder = (orderData) => {
    console.log('Order confirmed:', orderData);
    
    // إنشاء ID جديد للطلب
    const newOrderId = orders.length > 0 ? Math.max(...orders.map(o => o.id)) + 1 : 1;
    
    // إنشاء الطلب الجديد مع جميع البيانات المطلوبة
    const newOrder = {
      id: newOrderId,
      customerId: currentUser.id,
      customerName: `${currentUser.firstName} ${currentUser.lastName}`,
      customerPhone: currentUser.phone,
      customerAddress: currentUser.address,
      workerId: selectedWorker?.id,
      workerName: selectedWorker?.name,
      serviceType: selectedService?.type,
      problemDescription: orderData.problemDescription || orderData.description || 'لم يتم تحديد وصف للمشكلة',
      orderDate: new Date().toISOString().split('T')[0], // تاريخ اليوم
      executionDate: orderData.executionDate || orderData.preferredDate,
      status: 'pending',
      createdAt: new Date().toISOString(),
      ...orderData
    };

    // إضافة الطلب لقاعدة البيانات
    setOrders(prevOrders => [...prevOrders, newOrder]);
    
    // حفظ بيانات الطلب المكتمل لعرض التقييم
    setCompletedOrder(newOrder);
    
    // العودة للصفحة الرئيسية
    setCurrentPage('customer-homepage');
    setSelectedWorker(null);
    setSelectedService(null);
    
    // عرض نافذة التقييم بعد ثانية واحدة
    setTimeout(() => {
      setShowFeedbackPopup(true);
    }, 1000);
  };

  // دالة إغلاق نافذة التقييم
  const handleCloseFeedbackPopup = () => {
    setShowFeedbackPopup(false);
    setCompletedOrder(null);
  };

  // دالة إرسال التقييم
  const handleSubmitFeedback = (feedbackData) => {
    console.log('Feedback submitted:', feedbackData);
    
    // إنشاء ID جديد للتقييم
    const newFeedbackId = feedbacks.length > 0 ? Math.max(...feedbacks.map(f => f.id)) + 1 : 1;
    
    // إنشاء التقييم الجديد
    const newFeedback = {
      id: newFeedbackId,
      orderId: completedOrder?.id,
      customerId: currentUser?.id,
      customerName: `${currentUser?.firstName} ${currentUser?.lastName}`,
      createdAt: new Date().toISOString(),
      ...feedbackData
    };

    // إضافة التقييم لقاعدة البيانات
    setFeedbacks(prevFeedbacks => [...prevFeedbacks, newFeedback]);
    
    console.log('Feedback saved:', newFeedback);
  };

  // دالة تحديث حالة الطلب (للعامل) - محدثة مع إمكانية التراجع
  const handleUpdateOrderStatus = (orderId, newStatus) => {
    setOrders(prevOrders =>
      prevOrders.map(order =>
        order.id === orderId
          ? { ...order, status: newStatus }
          : order
      )
    );
    
    // رسالة تأكيد حسب الحالة الجديدة
    if (newStatus === 'accepted') {
      console.log(`Order ${orderId} accepted`);
    } else if (newStatus === 'denied') {
      console.log(`Order ${orderId} denied`);
    } else if (newStatus === 'pending') {
      console.log(`Order ${orderId} reset to pending`);
    }
  };

  // دالة الحصول على طلبات العامل
  const getWorkerOrders = (workerId) => {
    return orders.filter(order => order.workerId === workerId);
  };

  return (
    <div className="App">
      {currentPage === 'login' && (
        <LoginPage 
          onForgotPassword={handleForgotPassword}
          onSignUp={handleSignUp}
          onLogin={handleLogin}
        />
      )}
      
      {currentPage === 'signup' && (
        <SignUpPage 
          onCustomerSignUp={handleCustomerSignUp}
          onWorkerSignUp={handleWorkerSignUp}
          onBackToLogin={handleBackToLogin}
        />
      )}

      {currentPage === 'customer-signup' && (
        <CustomerSignUp 
          onBackToSignUpChoice={handleBackToSignUpChoice}
          onCreateAccount={handleCreateCustomerAccount}
          onBackToLogin={handleBackToLogin}
        />
      )}

      {currentPage === 'worker-signup' && (
        <WorkerSignUp 
          onBackToSignUpChoice={handleBackToSignUpChoice}
          onCreateWorkerAccount={handleCreateWorkerAccount}
          onBackToLogin={handleBackToLogin}
        />
      )}

      {currentPage === 'customer-homepage' && currentUser && (
        <CustomerHomepage 
          user={currentUser}
          onLogout={handleLogout}
          onGoToConfirmOrder={handleGoToConfirmOrder}
        />
      )}

      {currentPage === 'worker-homepage' && currentUser && (
        <WorkerHomepage 
          user={currentUser}
          onLogout={handleLogout}
          orders={getWorkerOrders(currentUser.id)}
          onUpdateOrderStatus={handleUpdateOrderStatus}
        />
      )}

      {currentPage === 'confirm-order' && (
        <ConfirmOrder 
          selectedWorker={selectedWorker}
          selectedService={selectedService}
          onBack={handleBackFromConfirmOrder}
          onConfirm={handleConfirmOrder}
        />
      )}
      
      {currentPage === 'forgot' && (
        <ForgetPassword 
          onBackToLogin={handleBackToLogin}
          onPasswordReset={handlePasswordReset}
        />
      )}

      {currentPage === 'entercode' && (
        <EnterCode 
          onVerifyCode={handleVerifyCode}
          onBackToLogin={handleBackToLogin}
        />
      )}

      {currentPage === 'newpassword' && (
        <NewPassword 
          onPasswordReset={handleNewPasswordSubmit}
          onBackToLogin={handleBackToLogin}
        />
      )}

      {/* نافذة التقييم */}
      <FeedbackPopup 
        isOpen={showFeedbackPopup}
        onClose={handleCloseFeedbackPopup}
        workerName={completedOrder?.workerName}
        onSubmitFeedback={handleSubmitFeedback}
      />
    </div>
  );
}

export default App;