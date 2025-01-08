import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-blue-600">
          MyE-Learning
        </Link>

        <nav className="space-x-4">
          <Link 
            to="/courses" 
            className="text-gray-600 hover:text-blue-600 transition"
          >
            Cours
          </Link>
          <Link 
            to="/login" 
            className="text-gray-600 hover:text-blue-600 transition"
          >
            Login
          </Link>
          <Link 
            to="/signup" 
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Sign Up
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
