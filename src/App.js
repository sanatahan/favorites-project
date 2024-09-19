import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header/Header'; 
import Home from './pages/Home'; 
import About from './pages/About'; 
import SignUp from './pages/SignUp'; 

const AppContent = () => {
  const location = useLocation();

  const showAlert = () => {
    alert('Button clicked!');
  };

 
  const showButton = location.pathname === '/' || location.pathname === '/about';

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
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<SignUp />} /> 
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
