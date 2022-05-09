import React from 'react';
import { Link} from "react-router-dom";

export default function NavBar(props)  {
  return (
    <div className="titlebar" style={{display:'flex', backgroundColor:'#C4C4C4', justifyContent:'space-between'}}>
      <div className="title" style={{display: 'flex', justifyContent:'left'}}>
        <h1>Secure U District </h1>
      </div>
      <div className="profile" style={{display:'flex', justifyContent:'flex-end'}}>
        <ul>
          <li><Link to="/home">
              Home
            </Link></li>
          <li><Link to="/profile">
              Profile
            </Link>
          </li>
          <li><button onClick={props.logOutOfAccount}>Logout</button></li>
        </ul>
      </div>
    </div>
  );
}
