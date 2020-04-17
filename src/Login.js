import React from 'react';
import isAuthContext from './IsAuthContext';

export default () => {
    const { isAuth, setAuth} = React.useContext( isAuthContext );
    return(
        <div>
            { isAuth ? "connecter" : "non connecter"}
            <button onClick={e => setAuth(! isAuth)} >Connexion</button>
        </div>
    )
}