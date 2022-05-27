import React from 'react';
import { Link} from "react-router-dom";

export default function ProfilePage(props) {

  return (
  <div>
    <h1>Profile Page</h1>
    <img src="../img/user.png" alt="Profile Building Error screen" height="200"></img>

    <div class="name">
      <h2>Name: {props.user.name}</h2>
    </div>
    <div class="address">
      <h2>Email address: {props.user.email}</h2>
    </div>
    <div class="bio">
      <h2>Bio: {props.user.bio}</h2>
    </div>
    <div className="edit">
          <Link to="/edit">
            <button type="button" className="btn edit">Edit</button>
          </Link>
        </div>
    <div class="note">
      <h3> If you are a first-time user, there wouldn't be any information displayed on your profile.</h3>
      <h5> Please click on edit button to update your profile!</h5>
    </div>
    <div class="return" style={{display:'flex', justifyContent:'flex-end'}}>
      <Link to='/home'>
        <button type="button" class="btn home">
          <p>Return to Map Page</p>
        </button>
      </Link>
    </div>
  </div>
  );
}