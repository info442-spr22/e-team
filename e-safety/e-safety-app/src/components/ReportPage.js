import React from 'react';
import FORM_MODEL from './Forms';
import { Link } from 'react-router-dom';

export default function ReportPage({token}) {

  return (
    <div class = "report">
      <h1>Report an Incident</h1>
      <div id = "map">
        <FORM_MODEL />
      </div>
    </div>

  );
}
