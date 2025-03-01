import React, { useState } from 'react';
import './App.css';

const App: React.FC = () => {
  const [response, setResponse] = useState<string>('');
  const [error, setError] = useState<string>('');

  const fetchData = async () => {
    try {
      const res = await fetch('/api/hello');
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      const data = await res.text();
      setResponse(data);
      setError('');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
      setResponse('');
    }
  };

  return (
      <div className="App">
        <header className="App-header">
          <button onClick={fetchData}>Fetch from Backend</button>
          {response && <p>Response: {response}</p>}
          {error && <p style={{ color: 'red' }}>Error: {error}</p>}
        </header>
      </div>
  );
}

export default App;