import './App.css';
import React, {useEffect, useState} from 'react';
import { Route, Redirect, Switch } from "react-router-dom";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

import HomePage from './components/HomePage';
import SignInPage from './components/SignInPage';
import ProfilePage from './components/ProfilePage';
import ReportPage from './components/ReportPage';
import NavBar from './components/NavBar';

function App() {
  const [auth, setAuth] = useState(false || window.localStorage.getItem("auth")==="true");
  const [token, setToken] = useState('');
  const [userId, setUserId] = useState('');

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
    console.log("inside login with google")
    firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(
      async (userCred) => {
        setAuth(true);
        window.localStorage.setItem('auth', true);
    });
  }

  const logOutOfAccount = () => {
    firebase.auth().signOut();
    setAuth(false);
    window.localStorage.setItem('auth', false);
  }

  function setId (id) {
    setId = id;
  }

  return (
      <div className="App">
        {auth ? (<div>
          <NavBar logOutOfAccount={logOutOfAccount}/>
          <Switch>
            <Route path="/home"><HomePage
            token={token}
            userId={userId}
            setId={setId}/></Route>
            <Route path="/profile"><ProfilePage /></Route>
            <Route path="/report"><ReportPage /></Route>
            <Redirect to="/home"/>
          </Switch>
        </div>
        ) : (<SignInPage loginWithGoogle={loginWithGoogle}/>)}
      </div>

  );
}

export default App;
