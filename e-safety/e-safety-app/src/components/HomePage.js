import axios from 'axios';
import React, { useEffect } from 'react';
// import firebase from 'firebase/compat/app';
// import { getAuth, signOut } from "firebase/auth";

export default function HomePage(props) {
  // I HAVE THE VARIABLES: props.token, props.users

  useEffect(() => {
    if (props.token) {
      fetchData(props.token);
    }
  }, [props.token]);

  const fetchData = async (token) => {
    console.log("hello inside fetchData of HomePage.js")
    const res = await axios.get("http://localhost:8000/user", {
      headers: {
        Authorization: "Bearer " + token,
      }
    });
    console.log("################ THIS IS THE RES.DATA ################")
    console.log(res.data);
    if (!res.data.success) {
      console.log("create new user")
      await createNewUser(res.data.id, token);
    }
  }

  // THIS IS AN EXAMPLE FUNCTION ON CALLING A POST METHOD TO THE BACKEND
  async function createNewUser (id, token) {
    const data = {body: id}
    await axios.post(`http://localhost:8000/user`, data ,{
      headers: {
        Authorization: "Bearer " + token,
      }
    });

  }

  return ( 
    <div>
      <h1>HOME</h1>
      <p>Hello {props.userId}</p>
      <button onClick={props.logOutOfAccount}>Log Out</button>
    </div>
  );
}