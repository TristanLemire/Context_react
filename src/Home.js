import React from 'react';
import IsAuthContext from './IsAuthContext';
import Connexion from './Connexion';
export default () => (
  <IsAuthContext.Provider value="[{ isAuth }]">
    <Connexion />
  </IsAuthContext.Provider>
);