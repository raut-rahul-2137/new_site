import React, { useState } from 'react';

const Broker: React.FC = () => {
  const [mt5Login, setMt5Login] = useState('');
  const [mt5Password, setMt5Password] = useState('');
  const [mt5Server, setMt5Server] = useState('');
  const [brokerName, setBrokerName] = useState('');
  const [msg, setMsg] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMsg(null);
    setError(null);
    setLoading(true);
    try {
      const user = JSON.parse(localStorage.getItem('user') || '{}');
      if (!user.id) {
        setError('User not found. Please login again.');
        setLoading(false);
        return;
      }
      const res = await fetch('http://127.0.0.1:8000/api/broker/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          user: user.id,
          mt5_login: mt5Login,
          mt5_password: mt5Password,
          mt5_server: mt5Server,
          broker_name: brokerName,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        setMsg('Broker data saved successfully!');
        setMt5Login('');
        setMt5Password('');
        setMt5Server('');
        setBrokerName('');
      } else {
        setError(data.error || 'Failed to save broker data.');
      }
    } catch (err: any) {
      setError('Failed to save broker data.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      margin: 0,
      backgroundColor: '#0a0a0a',
      fontFamily: 'Arial, sans-serif',
      color: 'white',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      minHeight: '100vh',
    }}>
      <form
        onSubmit={handleSubmit}
        style={{
          backgroundColor: '#1c1c1c',
          padding: 30,
          borderRadius: 8,
          boxShadow: '0 0 10px #00ff00',
          width: 320,
        }}
      >
        <h2 style={{
          textAlign: 'center',
          color: '#00ff00',
          marginBottom: 20,
        }}>
          Connect Your Broker
        </h2>
        <input
          type="text"
          placeholder="Enter MT5 Login"
          value={mt5Login}
          onChange={e => setMt5Login(e.target.value)}
          style={{
            width: '100%',
            padding: 10,
            margin: '10px 0',
            border: 'none',
            borderRadius: 4,
            backgroundColor: '#333',
            color: 'white',
          }}
          required
        />
        <input
          type="password"
          placeholder="Enter MT5 Password"
          value={mt5Password}
          onChange={e => setMt5Password(e.target.value)}
          style={{
            width: '100%',
            padding: 10,
            margin: '10px 0',
            border: 'none',
            borderRadius: 4,
            backgroundColor: '#333',
            color: 'white',
          }}
          required
        />
        <input
          type="text"
          placeholder="Enter MT5 Server"
          value={mt5Server}
          onChange={e => setMt5Server(e.target.value)}
          style={{
            width: '100%',
            padding: 10,
            margin: '10px 0',
            border: 'none',
            borderRadius: 4,
            backgroundColor: '#333',
            color: 'white',
          }}
          required
        />
        <select
          value={brokerName}
          onChange={e => setBrokerName(e.target.value)}
          style={{
            width: '100%',
            padding: 10,
            margin: '10px 0',
            border: 'none',
            borderRadius: 4,
            backgroundColor: '#333',
            color: 'white',
          }}
          required
        >
          <option value="" disabled>
            -- Select a Broker --
          </option>
          <option>Exness</option>
          <option>MultiBankFX</option>
          <option>OctaFX</option>
          <option>Pepperstone</option>
          <option>XM Global</option>
        </select>
        <button
          type="submit"
          style={{
            width: '100%',
            padding: 12,
            backgroundColor: '#00c100',
            border: 'none',
            borderRadius: 4,
            color: 'white',
            fontWeight: 'bold',
            cursor: 'pointer',
            marginTop: 10,
          }}
          onMouseOver={e => (e.currentTarget.style.backgroundColor = '#00e600')}
          onMouseOut={e => (e.currentTarget.style.backgroundColor = '#00c100')}
          disabled={loading}
        >
          {loading ? 'Saving...' : 'Connect'}
        </button>
        {msg && <div style={{ color: '#00ff00', marginTop: 12, textAlign: 'center' }}>{msg}</div>}
        {error && <div style={{ color: 'red', marginTop: 12, textAlign: 'center' }}>{error}</div>}
      </form>
    </div>
  );
};

export default Broker; 