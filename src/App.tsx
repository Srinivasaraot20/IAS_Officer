import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Profile from './pages/Profile';
import EducationHub from './pages/EducationHub';
import SubmitRequest from './pages/SubmitRequest';
import TrackRequest from './pages/TrackRequest';
import OfficerLogin from './pages/OfficerLogin';
import OfficerDashboard from './pages/OfficerDashboard';
import DepartmentLogin from './pages/DepartmentLogin';
import DepartmentDashboard from './pages/DepartmentDashboard';
import { RequestProvider } from './context/RequestContext';

function App() {
  return (
    <RequestProvider>
      <Router>
        <div className="min-h-screen bg-gray-50 flex flex-col">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/education-hub" element={<EducationHub />} />
              <Route path="/submit-request" element={<SubmitRequest />} />
              <Route path="/track-request" element={<TrackRequest />} />
              <Route path="/officer-login" element={<OfficerLogin />} />
              <Route path="/officer-dashboard" element={<OfficerDashboard />} />
              <Route path="/department-login" element={<DepartmentLogin />} />
              <Route path="/department-dashboard" element={<DepartmentDashboard />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </RequestProvider>
  );
}

export default App;