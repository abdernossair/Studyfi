import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-6 mt-10">
      <div className="container mx-auto px-4 text-center">
        <p>© {new Date().getFullYear()} MyE-Learning. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
