import './App.css';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Route, Redirect, Switch } from "react-router-dom";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

import HomePage from './components/HomePage';
import SignInPage from './components/SignInPage';
import ProfilePage from './components/ProfilePage';
import ReportPage from './components/ReportPage';
import NavBar from './components/NavBar';
import EditPage from './components/EditPage';

function App() {
  const [auth, setAuth] = useState(false || window.localStorage.getItem("auth")==="true");
  const [token, setToken] = useState('');
  const [user, setUser] = useState('');


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

  const handleUserData = async (data) => {
    console.log("setting user data")
    console.log("handleUserData");
    console.log(data);
    setUser(data);

    // await axios.patch('http://localhost:8000/user', data, {
    //   headers: {
    //     Authorization: "Bearer " + token,
    //   }
    // });
  }

  return (
      <div className="App">
        {auth ? (<div>
          <NavBar logOutOfAccount={logOutOfAccount}/>
          <Switch>
            <Route path="/home"><HomePage 
              token={token} handleUserData={handleUserData}/></Route>
            <Route path="/profile"><ProfilePage 
              token={token} user={user}/></Route>
            <Route path="/edit"><EditPage token={token} user={user} handleUserData={handleUserData}/></Route>
            <Route path="/report"><ReportPage /></Route>
            <Redirect to="/home"/>
          </Switch>
        </div>
        ) : (<SignInPage loginWithGoogle={loginWithGoogle}/>)}
      </div>

  );
}

export default App;
