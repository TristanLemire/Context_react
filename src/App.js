import React from 'react';
import './App.css';
import IsAuthContext from './IsAuthContext';
import isAuthContext from './IsAuthContext';

function App() {
  return (
    <isAuthContext.Provider value="{ isAuth: false }">

    </isAuthContext.Provider>
  );
}

export default App;
