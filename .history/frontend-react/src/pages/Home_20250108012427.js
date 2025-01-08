import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Bienvenue sur la plateforme E-Learning</h1>
      <p>Explorez nos cours, connectez-vous, etc.</p>
      <Link to="/courses" style={{ color: 'blue', textDecoration: 'underline' }}>
        Découvrir tous les cours
      </Link>
    </div>
  );
};

export default Home;
