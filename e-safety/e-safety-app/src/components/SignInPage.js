import React from 'react';

export default function SignInPage(props) {
  return ( 
    <div>
      <h1>E-Safety</h1>
      <h2>Sign in to secure your travel or report an incident to make night walking safer for the Dawg Pack!</h2>
      <button onClick={props.loginWithGoogle}>Login With Google</button> 
    </div>
  );
}