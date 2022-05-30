import React from 'react';
import FORM_MODEL from './Forms';
import { Link } from 'react-router-dom';

export default function ReportPage({token}) {

  return (
    <div className = "report" >
      <h1>Report an Incident</h1>
      <h5>Please type in the address and click "confirm" button.
      </h5>
      <div id = "map">
        <FORM_MODEL />
      </div>
      </div>
  );
}
