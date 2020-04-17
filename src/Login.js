import React from 'react';
import isAuthContext from './IsAuthContext';

export default () => {
    return(
       <isAuthContext.Consumer>
           {
               value => 
               (
                   <div>
                       { value.isAuth ? "connecter" : "non connecter"}
                   </div>
               )
           }
       </isAuthContext.Consumer>
    )
}