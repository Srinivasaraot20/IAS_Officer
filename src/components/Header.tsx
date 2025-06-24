import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, User, FileText, Search, Shield, GraduationCap, Building } from 'lucide-react';
import MobileMenu from './MobileMenu';

const Header = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/profile', label: 'Officer Profile', icon: User },
    { path: '/education-hub', label: 'Education Hub', icon: GraduationCap },
    { path: '/submit-request', label: 'Submit Request', icon: FileText },
    { path: '/track-request', label: 'Track Request', icon: Search },
    { path: '/officer-login', label: 'Officer Login', icon: Shield },
    { path: '/department-login', label: 'Department Login', icon: Building },
  ];

  return (
    <header className="bg-blue-900 text-white shadow-lg sticky top-0 z-40">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="flex items-center space-x-4">
            <div className="bg-yellow-500 p-2 rounded-full">
              <Shield className="h-8 w-8 text-blue-900" />
            </div>
            <div>
              <h1 className="text-xl font-bold">IAS Officer Portal</h1>
              <p className="text-blue-200 text-sm">Dr. Raju Narayana Swamy</p>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {navItems.map(({ path, label, icon: Icon }) => (
              <Link
                key={path}
                to={path}
                className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-colors ${
                  location.pathname === path
                    ? 'bg-blue-800 text-yellow-300'
                    : 'hover:bg-blue-800 hover:text-yellow-300'
                }`}
              >
                <Icon className="h-4 w-4" />
                <span className="text-sm font-medium">{label}</span>
              </Link>
            ))}
          </nav>

          {/* Mobile Menu */}
          <MobileMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;