
import React from 'react';

export default function Home() {
  return (
    <div style={{ fontFamily: 'sans-serif', padding: '2rem' }}>
      <h1>🤖 ServIA - Assistant Virtuel Démo</h1>
      <p>Bienvenue sur la démonstration de ServIA.</p>
      <div style={{
        marginTop: '2rem',
        padding: '1rem',
        border: '1px solid #ccc',
        borderRadius: '8px',
        maxWidth: '400px',
        background: '#f9f9f9'
      }}>
        <strong>Bot :</strong> Bonjour ! Comment puis-je vous aider aujourd'hui ? 🍽️
      </div>
    </div>
  );
}
