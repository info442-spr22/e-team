import React from 'react';
import { Link} from "react-router-dom";


export default function ProfilePage(props) {

  return (
  <div>
    <h1>Profile Page</h1>

    <div class="name">
      <h2>Name: {props.user.name}</h2>
    </div>
    <div class="address">
      <h2>Address: {props.user.email}</h2>
    </div>
    <div class="bio">
      <h2>Bio: {props.user.bio}</h2>
    </div>
      {/* <button onClick={<editPage />}>Edit</button> */}
    <div class="note">
      <h3> Make a incident report on the map to secure night walk safer for UW students! </h3>
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