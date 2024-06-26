// App.tsx

import React from 'react';
import './App.css';
import Logo from './assets/logo.png'; // Import your logo image file

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={Logo} className="App-logo" alt="Finlet Logo" />
        <h1>Welcome to Finlet</h1>
        <p>Your go-to platform for financial services.</p>
      </header>
    </div>
  );
}

export default App;
