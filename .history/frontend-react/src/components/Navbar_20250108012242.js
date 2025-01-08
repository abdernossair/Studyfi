import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <Link to="/" style={styles.link}>Accueil</Link>
      <Link to="/courses" style={styles.link}>Cours</Link>
      <Link to="/login" style={styles.link}>Login</Link>
      <Link to="/signup" style={styles.link}>Signup</Link>
    </nav>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    gap: '20px',
    background: '#f5f5f5',
    padding: '10px'
  },
  link: {
    textDecoration: 'none',
    color: 'blue'
  }
};

export default Navbar;
