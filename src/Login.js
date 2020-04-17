import React from 'react';
import isAuthContext from './IsAuthContext';

export default () => {
    const { isAuth} = React.useContext( isAuthContext );
    return(
        <div>
            { isAuth ? "connecter" : "non connecter"}
            <button onClick={() => {isAuth = true}} >Connexion</button>
        </div>
    )
}