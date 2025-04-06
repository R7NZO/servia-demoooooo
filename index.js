import { useState } from 'react';

export default function ServiaChatbot() {
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Bonjour, ici ServIA. Êtes-vous restaurateur ? 🍽️' }
  ]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (!input.trim()) return;
    const newMessages = [...messages, { from: 'user', text: input }];
    setMessages(newMessages);

    const lower = input.toLowerCase();
    let botResponse = "Pouvez-vous préciser votre besoin ?";

    if (lower.includes('oui')) {
      botResponse = "Parfait ! Imaginez un assistant qui répond à vos clients 24/7, prend des réservations, présente votre carte, et vous fait gagner du temps ⏱️. Intéressé ? 🤖";
    } else if (lower.includes('non')) {
      botResponse = "Pas de souci ! Mais si un jour vous avez besoin d’un assistant IA ultra performant pour un business, pensez à nous 💡.";
    } else if (lower.includes('intéressé') || lower.includes('comment ça marche')) {
      botResponse = "Notre IA est installée en 24h sur votre site, personnalisée à votre restaurant, et augmente les conversions jusqu’à +30%. Souhaitez-vous une démo gratuite ? 🎯";
    }

    setTimeout(() => {
      setMessages(prev => [...prev, { from: 'bot', text: botResponse }]);
    }, 800);

    setInput('');
  };

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '2rem' }}>
      <h1>🤖 ServIA - Assistant de Vente IA</h1>
      <div style={{ background: '#f9f9f9', border: '1px solid #ccc', borderRadius: '8px', padding: '1rem', maxWidth: '600px' }}>
        {messages.map((msg, i) => (
          <div key={i} style={{ textAlign: msg.from === 'bot' ? 'left' : 'right', margin: '0.5rem 0' }}>
            <strong>{msg.from === 'bot' ? 'ServIA' : 'Vous'}:</strong> {msg.text}
          </div>
        ))}
        <div style={{ display: 'flex', marginTop: '1rem' }}>
          <input
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && sendMessage()}
            placeholder="Tapez votre message..."
            style={{ flex: 1, padding: '0.5rem' }}
          />
          <button onClick={sendMessage} style={{ marginLeft: '0.5rem' }}>Envoyer</button>
        </div>
      </div>
    </div>
  );
}
