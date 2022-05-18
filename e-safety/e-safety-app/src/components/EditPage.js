import axios from 'axios';
import React from 'react';
import { Link} from "react-router-dom";

export default function EditPage(props) {

  const submitForm = (event) => {
    let newUserInfo = {};
    if (document.getElementById("name").value !== "") {
      newUserInfo.name = document.getElementById("name").value;
    } else {
      newUserInfo.name = props.user.name;
    }

    if (document.getElementById("email").value !== "") {
      newUserInfo.email = document.getElementById("email").value;
    } else {
      newUserInfo.email = props.user.email;
    }

    if (document.getElementById("bio").value !== "") {
      newUserInfo.bio = document.getElementById("bio").value;
    } else {
      newUserInfo.bio = props.user.bio;
    }
    props.handleUserData(newUserInfo);
  }
 

return(
  <div class = "report">
  <h1>Profile Edit Page</h1>
  <img src="../img/user.png" alt="Profile Building Error screen" height="200"></img>
  <p>*Our app does not require user to upload their profile picture!*</p>
    <div class="name">
    <h3>Name:</h3>
    <form>
        <label>
          <input
          id="name"
          name="name"
          type="text"
        />
        </label>
      </form>
    </div>
    <div class="address">
      <h3>Email Address: </h3>
      <form>
        <label>
          <input
          id="email"
          type="text"
        />
        </label>
      </form>
    </div>
    <div class="bio">
      <h3>Bio: </h3>
      <form>
        <label>
          <input
          id="bio"
          type="text"
        />
        </label>
      </form>
    </div>
    <div class = "submit">
        <Link to='/profile'>
        <button onClick={submitForm}>Save Changes</button>
        </Link>
      </div>
</div>
);
}