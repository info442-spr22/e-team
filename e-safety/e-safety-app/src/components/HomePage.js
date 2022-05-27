import axios from 'axios';
import React, { useEffect } from 'react';
import {Link} from "react-router-dom";
import HomeMap from './HomeMap'

export default function HomePage(props) {
  useEffect(() => {
    if (props.token) {
      fetchData(props.token);
    }
  });

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
    props.handleUserData(res.data.user);
  }

  async function createNewUser (id, token) {
    const data = {body: id}
    await axios.post(`http://localhost:8000/user`, data ,{
      headers: {
        Authorization: "Bearer " + token,
      }
    });
  }

  return (
    <div className="zoom">
    <h1>Welcome to Secure U District</h1>
      <h5>
         Please press on + and - on your keyboard to zoom in and out the map!
          </h5>
      <div id = "map">
        <HomeMap />
      </div>
      <div className="boxes">
        <div className="boxes-column col-a">
          <h2>About Secure U District</h2>
          <h4>
          As students at the University of Washington start to live off campus due to the pandemic and limited dorm capacity, safety with students walking home becomes a crucial issue. Many off-campus UW students have little access to resources that can help them secure a route home that shows no threat to their safety, especially during night time.
          This web map application helps UW students identify possible dangerous routes and sites ahead of any potential crimes or factors that people may want to avoid. 
          </h4>
        </div>
        <div className="report" style={{display:'flex', justifyContent:'flex-end'}}>
          <Link to="/report">
            <button onClick={props.logOutOfAccount}>Report an Incident</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
