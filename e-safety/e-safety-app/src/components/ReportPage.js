import React from 'react';
import { Link} from "react-router-dom";

export default function ReportPage(props) {
  
  async function submitForm() {
    
  }

  return (
    <div>
      <h1>Report an Incident</h1>
      <form>
        <div>
          <label for="location">Location</label>
          <input type="text" id="location" name="location"/>
        </div>
        <div>
          <label for="incident-type">Select Incident Type:</label>
          <br />

          <input type="radio" id="crime" name="incident" value="crime" />
          <label for="crime">Crime</label>
          <br />
          <input type="radio" id="dim-light" name="incident" value="dim-light" />
          <label for="dim-light">Dim Light</label>
          <br />
          <input type="radio" id="drug-smell" name="incident" value="drug-smell" />
          <label for="drug-smell">Smell of Drugs</label>
          <br />
          <input type="radio" id="placeholder-1" name="incident" value="placeholder-1" />
          <label for="placeholder-1">Placeholder</label>
          <br />
          <input type="radio" id="placeholder-2" name="incident" value="placeholder-2" />
          <label for="placeholder-2">Placeholder</label>
          <br />
          <input type="radio" id="other" name="incident" value="other" />
          <label for="other">Other</label>
          <br />
        </div>
        <div>
          <label for="time">Time of Encounter</label>
          <input type="text" id="time" name="time"/>
        </div>
        <div>
          <label for="description">Description</label>
          <input type="text" id="description" name="description"/>
        </div>
      </form>
      <Link to="/home">
        <button>Back</button>
      </Link>
      <Link to="/home">
        <button onClick={submitForm}>Submit</button>
      </Link>
    </div>
  );
}