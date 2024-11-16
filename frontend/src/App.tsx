import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
// import Topbar from './components/navbar/Topbar';
import Home from './pages/Home/home';
// import Reserve from './pages/reserve/Reserve';
import SignInPage  from './pages/authentication/Login/index';
import SignUpPage from './pages/authentication/Register/index';
// import 'bootstrap/dist/css/bootstrap.min.css';
import LoadingComponent from './components/loading/LoadingComponent'; // Import the loading component
// import UserInfo  from './components/profile/Profile';
// import UserEdit from './pages/users/edit';
// import ReserveDashboard from './pages/reserve/reserveDashboard';
// import PaymentDashboard from './pages/payment/PaymentDashboard';
// import PaymentC from './pages/payment/PaymentC';
// import Payments from './pages/payment/Payments';

function App() {
  const [loading, setLoading] = useState(false);
  const location = useLocation();



  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 500); // ปรับดีเลย์ตรงนี้ๆ

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      {/* <Topbar /> */}
      {loading ? (
        <LoadingComponent />
      ) : (
        <Routes>
          <Route path="/home" element={<Home />} />
          {/* <Route path="/reserve" element={<Reserve />} /> */}
          <Route path="/" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          {/* <Route path="/profile" element={<UserInfo />} />
          <Route path="/edit-profile" element={<UserEdit />} />
          <Route path="/reserve_dashboard" element={<ReserveDashboard />} />
          <Route path="/Payments" element={<Payments />} />
          <Route path="/PaymentC" element={<PaymentC />} />
          <Route path="/payment_dashboard" element={<PaymentDashboard />} /> */}

        </Routes>
      )}
    </>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
 