import axios from 'axios';
import React, { useEffect ,useLocation, useState} from 'react';
import {Link, withRouter} from "react-router-dom";
import HomeMap from './HomeMap'

function HomePage(props) {
  const forms = JSON.parse(localStorage.getItem('form') || "[]");
  if (props.location.state != undefined){
    forms.push({"Lat": props.location.state.Lat, "Long": props.location.state.Long, "Date": props.location.state.Date, "Type":props.location.state.Type, "Text": props.location.state.Text});
    window.localStorage.setItem('form', JSON.stringify(forms))
  }
  const markerinfo = JSON.parse(window.localStorage.getItem('form'));
  //const [todos, setTodos] = useState([]);
  //const todosCopy = [];
  //useEffect(() => {
    //if (props.location.state != undefined) {
      //todosCopy.push({"Lat": props.location.state.Lat, "Long": props.location.state.Long, "Date": props.location.state.Date, "Type":props.location.state.Type, "Text": props.location.state.Text});
      //setTodos(todosCopy);
    //}
  //}, [props.location.state]);

  useEffect(() => {
    console.log(markerinfo);
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
      <div id = "intro">
      <h1 id= "welcome">Welcome to Secure U District</h1>
          <div id = "purpose">
            <p id = "summary">
            As students at the University of Washington start to live off campus due to the pandemic and limited dorm capacity, safety with students walking home becomes a crucial issue. Many off-campus UW students have little access to resources that can help them secure a route home that shows no threat to their safety, especially during night time.
            This web map application helps UW students identify possible dangerous routes and sites ahead of any potential crimes or factors that people may want to avoid.
            </p>
          </div>
          <h5>
             (Please press on + and - on your keyboard to zoom in and out the map!)
          </h5>
      </div>
        <div id = "map">
          <HomeMap markerinfo = {markerinfo}/>
        </div>
        <div>
          <Link to="/report">
            <button onClick={props.logOutOfAccount} className="report-btn">Report an Incident</button>
          </Link>
        </div>
    </div>
  );
}
export default withRouter(HomePage)
