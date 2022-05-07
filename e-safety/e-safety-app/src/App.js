import './App.css';
import React, {useEffect, useState} from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import HomePage from './components/HomePage';
import ProfilePage from './components/ProfilePage';

function App() {
  const [auth, setAuth] = useState(false || window.localStorage.getItem("auth")==="true");
  const [token, setToken] = useState('');

  useEffect(()=> {
    firebase.auth().onAuthStateChanged((userCred)=> {
      if (userCred) {
        setAuth(true);
        window.localStorage.setItem('auth', true);
        userCred.getIdToken().then((token) => {
          setToken(token);
        });
      }
    })
  }, [])

  const loginWithGoogle = () => {
    firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(
      (userCred)=>{
        setAuth(true);
        window.localStorage.setItem('auth', true);
    })
  }

  const logOutOfAccount = () => {
    firebase.auth().signOut();
    setAuth(false);
    window.localStorage.setItem('auth', false);
  }

  return (
    <div className="App">
      {auth ? (<div>
        <HomePage token={token}/>
        <button onClick={logOutOfAccount}>Log Out</button>
      </div>
      ) : (
      <button onClick={loginWithGoogle}>Login With Google</button>
      )}
    </div>
  );
}


export default App;
