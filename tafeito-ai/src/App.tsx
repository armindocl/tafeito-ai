import './App.css';
import React, { ReactNode } from 'react';
import AuthProvider from './provider/authProvider';
import Routes from './routes';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </div>
  );
}

export default App;
