// AppContent.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header/Header'; 
import Home from './pages/Home'; 
import About from './pages/About'; 
import SignUp from './pages/SignUp'; 
import { Users } from './components/Users';
import { UserDetails } from './components/UserDetails';
import { Admin } from './components/Admin';
import logo from './assets/logo2.png';


const AppContent = () => {
  const location = useLocation();

  const showAlert = () => {
    alert('Button clicked!');
  };

  const showButton = location.pathname === '/home' || location.pathname === '/about';

  const data = [
    { image: logo, name: 'John', age: 25, description: 'Software Developer' },
    // بقية البيانات
  ];
  
  

  return (
    <div style={{ position: 'relative', height: '100vh' }}>
      {showButton && (
        <button
          onClick={showAlert}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 1000,
          }}
        >
          Click Me
        </button>
      )}
      <Header />
      <main>
        <Routes>
          {/* تمرير البيانات إلى مكون Home */}
          <Route path="/home" element={<Home data={data} />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/:userId" element={<UserDetails />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </main>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
