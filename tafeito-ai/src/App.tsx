import './App.css';
import React, { ReactNode } from 'react';
import Login from './pages/Login';

function App(props:{children:ReactNode}) {
  return (
    <div className="App">
      {props.children}
    </div>
  );
}

export default App;
