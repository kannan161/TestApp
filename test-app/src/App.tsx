import React, { useState } from 'react';
import './App.css';

const App: React.FC = () => {
  const [message, setMessage] = useState<string>('');

  const handleClick = () => {
    setMessage('Hello, welcome to my app!');
  };

  return (
    <div className="App">
      <h1>Welcome to My React App</h1>
      <button className="Button" onClick={handleClick}>
        Click Me
      </button>
      {message && <p className="Message">{message}</p>}
    </div>
  );
};

export default App;
