import React, { useState } from 'react';
import { signupUser } from '../services/api';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail]   = useState('');
  const [password, setPassword] = useState('');
  const [error, setError]   = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signupUser({ username, email, password });
      alert('Inscription réussie ! Vous pouvez maintenant vous connecter.');
    } catch (err) {
      setError(err.response?.data?.error || 'Erreur lors de l\'inscription');
    }
  };

  return (
    <div>
      <h2>Inscription</h2>
      <form onSubmit={handleSubmit}>
        <input 
          placeholder="Nom d'utilisateur"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input 
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input 
          placeholder="Mot de passe"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">S'inscrire</button>
      </form>
      {error && <p style={{color:'red'}}>{error}</p>}
    </div>
  );
};

export default Signup;
