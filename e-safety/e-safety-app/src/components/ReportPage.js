

import React from 'react';
import MAP_MODEL from './Map';
import Date from './DatePicker';
import { Link } from 'react-router-dom';

export default function ReportPage({token}) {

  async function submitForm() {
    // TODO: 
    // insert form data into the database
  }

  return (
    <div class = "report">
      <h1>Report an Incident</h1>
      <div id = "map">
        <MAP_MODEL />
      </div>
      <div>
        <h3>Select Date</h3>
        <Date />
      </div>
      <div>
        <h3>Select Incident Type</h3>
        <div id = "incident type">
        <input
          type="checkbox"
          id="topping"
          name="topping"
          value="Paneer"
        />
        Crime
        </div>
        <div id = "incident type">
        <input
          type="checkbox"
          id="topping"
          name="topping"
          value="Paneer"
        />
        Dim Light
        </div>
        <div id = "incident type">
        <input
          type="checkbox"
          id="topping"
          name="topping"
          value="Paneer"
        />
        Drug Activity
        </div>
        <div id = "incident type">
        <input
          type="checkbox"
          id="topping"
          name="topping"
          value="Paneer"
        />
        Yelling/verbal aggression
        </div>
        <div id = "incident type">
        <input
          type="checkbox"
          id="topping"
          name="topping"
          value="Paneer"
        />
        Suspicious individuals
        </div>
        <div id = "incident type">
        <input
          type="checkbox"
          id="topping"
          name="topping"
          value="Paneer"
        />
        Other
        </div>
      </div>
      <h3>Select Incident Type</h3>
      <form>
        <label>
          <input
          type="text"
        />
        </label>
      </form>
      <div class = "submit">
        <Link to='/home'>
        <button onClick={submitForm}>Submit</button>
        </Link>
      </div>
      <div class = "back">
        <Link to='/home'>
        <button>Back</button>
        </Link>
      </div>
    </div>

  );
}
