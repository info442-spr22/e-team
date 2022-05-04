import axios from 'axios';
import React, { useEffect } from 'react';
// import firebase from 'firebase/compat/app';
import { getAuth, signOut } from "firebase/auth";

export default function HomePage({token}) {

  useEffect(() => {
    if (token) {
      fetchData(token);
    }
  }, [token]);

  const fetchData = async (token) => {
    console.log("hello")
    const res = await axios.get("http://localhost:8000/api/todos", {
      headers: {
        Authorization: "Bearer " + token,
      }
    });
    console.log(res.data);
  }
  

  return ( 
    <div>
      <h1>HOME</h1>
    </div>
  );
}