import React from 'react';

export default function SignInPage(props) {
  return ( 
    <div>
      <h1>Welcome to E-Safety</h1>
      <h3>Please sign in to secure your travel or report an incident to make night walking safer for the Dawg Pack!</h3>
      <img src="../img/Logo.jpg" alt="Profile Building 2 Error screen" height="400"></img>
      <div>
      <button onClick={props.loginWithGoogle}>Login With Google</button> 
      </div>
    </div>
  );
}