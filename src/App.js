import React from 'react';
import './App.css';
import isAuthContext from './IsAuthContext';
import Connexion from './Connexion';

function App() {
  const [ isAuth, setAuth] = React.useState(false)
  return (
    <isAuthContext.Provider value={ {isAuth, setAuth} }>
      <Connexion/>
    </isAuthContext.Provider>
  );
}

export default App;
