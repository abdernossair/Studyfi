import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <main>
      {/* Section Hero */}
      <section
        className="h-[80vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1581093588401-9f09b32383fa?auto=format&w=1350&q=80')`
        }}
      >
        <div className="text-center bg-black bg-opacity-50 p-6 rounded">
          <h1 className="text-4xl md:text-5xl text-white font-bold mb-4">Apprenez en ligne</h1>
          <p className="text-lg md:text-xl text-gray-200 mb-6">
            Des milliers de cours de qualité pour booster vos compétences.
          </p>
          <Link 
            to="/courses" 
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition"
          >
            Explorer les cours
          </Link>
        </div>
      </section>

      {/* Section Avantages / Features */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Pourquoi choisir MyE-Learning ?
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="text-center p-4 shadow rounded">
            <img 
              src="https://img.icons8.com/color/96/online-learning.png" 
              alt="icon" 
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Cours de qualité</h3>
            <p>Des instructeurs experts dans leurs domaines pour des contenus riches et à jour.</p>
          </div>
          <div className="text-center p-4 shadow rounded">
            <img 
              src="https://img.icons8.com/color/96/learning.png" 
              alt="icon" 
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Flexibilité</h3>
            <p>Suivez vos formations à votre rythme, où que vous soyez.</p>
          </div>
          <div className="text-center p-4 shadow rounded">
            <img 
              src="https://img.icons8.com/color/96/certificate.png" 
              alt="icon" 
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Certifications</h3>
            <p>Obtenez des attestations ou certificats reconnus pour valoriser vos compétences.</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
