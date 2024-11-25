import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bell, Briefcase, Mail, User, MessageCircle, Menu, X } from 'lucide-react';

interface NavigationProps {
  showMobileMenu?: boolean;
  setShowMobileMenu?: (show: boolean) => void;
}

export function Navigation({ showMobileMenu, setShowMobileMenu }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>

            <Link to="/" className="flex-shrink-0 flex items-center">
              <Briefcase className="h-6 w-6 text-blue-600" />
              <span className="ml-2 text-xl font-semibold text-gray-900">Pedamelan</span>
            </Link>
            <div className="hidden lg:ml-6 lg:flex lg:space-x-8">
              <Link
                to="/"
                className={`${
                  location.pathname === '/'
                    ? 'border-blue-500 text-gray-900'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
              >
                <Briefcase className="h-4 w-4 mr-2" />
                Find work
              </Link>
              <Link
                to="/messages"
                className={`${
                  location.pathname === '/messages'
                    ? 'border-blue-500 text-gray-900'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                Message
              </Link>
              <Link
                to="/profile"
                className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                <User className="h-4 w-4 mr-2" />
                My Profile
              </Link>
              <Link
                to="/overview"
                className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                <Mail className="h-4 w-4 mr-2" />
                Overview
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <button type="button" className="p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none">
              <Bell className="h-6 w-6" />
            </button>
            <div className="ml-3 relative flex items-center">
              <img
                className="h-8 w-8 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=faces"
                alt=""
              />
              <div className="ml-3 hidden sm:block">
                <p className="text-sm font-medium text-gray-700">Andre Salmanan</p>
                <p className="text-xs text-gray-500">Andresalmanan@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="pt-2 pb-3 space-y-1">
          <Link
            to="/"
            className={`${
              location.pathname === '/'
                ? 'bg-blue-50 border-blue-500 text-blue-700'
                : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800'
            } block pl-3 pr-4 py-2 border-l-4 text-base font-medium`}
          >
            Find work
          </Link>
          <Link
            to="/messages"
            className={`${
              location.pathname === '/messages'
                ? 'bg-blue-50 border-blue-500 text-blue-700'
                : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800'
            } block pl-3 pr-4 py-2 border-l-4 text-base font-medium`}
          >
            Message
          </Link>
          <Link
            to="/profile"
            className="border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
          >
            My Profile
          </Link>
          <Link
            to="/overview"
            className="border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
          >
            Overview
          </Link>
        </div>
      </div>
    </nav>
  );
}