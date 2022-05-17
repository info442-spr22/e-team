import React from 'react';
import { Link} from "react-router-dom";

export default function EditPage({token}) {
  async function submitForm() {
    // Insert form data into the database
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