import React from 'react';
import './App.css';
import isAuthContext from './IsAuthContext';
import Connexion from './Connexion';

function App() {
  return (
    <isAuthContext.Provider value="{ isAuth: false }">
      <Connexion/>
    </isAuthContext.Provider>
  );
}

export default App;
