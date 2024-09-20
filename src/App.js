import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header/Header'; 
import Home from './pages/Home'; 
import About from './pages/About'; 
import SignUp from './pages/SignUp'; 
import { Users } from './components/Users';
import { UserDetails } from './components/UserDetails';
import { Admin } from './components/Admin';

const AppContent = () => {
  const location = useLocation();

  return (
    <div style={{ position: 'relative', height: '100vh' }}>
      <Header />
      <main>
        <Routes>
          <Route path="/home" element={<Home />} />
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
