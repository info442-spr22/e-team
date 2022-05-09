import axios from 'axios';
import React, { useEffect } from 'react';
import ProfilePage from './ProfilePage';
import Map from 'react-map-gl';
import ReportPage from './ReportPage';
import HomeMap from './HomeMap';
// import firebase from 'firebase/compat/app';
import { getAuth, signOut } from "firebase/auth";


export default function HomePage(props) {

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
      <div id = "map">
        <HomeMap />
      </div>
      <div className="boxes">
        <div className="boxes-column col-a">
          <h2>Type in your Trip Details</h2>
          <p className='homeText'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="report">
            <button type="button" className="btn incident" onClick={<ReportPage />}>Report an Incident</button>
        </div>
      </div>
    </div>
  );
}
