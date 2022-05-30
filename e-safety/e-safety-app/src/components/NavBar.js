import React from 'react';
import { Link} from "react-router-dom";

export default function NavBar(props)  {
  return (
    <div>
      <div className="titlebar" style={{display:'flex', justifyContent:'center'}}>
        <div className="title" style={{display: 'flex', justifyContent:'center'}}>
          <h1>Secure U District </h1>
        </div>
      </div>
      <div className="profile" style={{display:'flex', justifyContent:'space-between'}}>
        <div className="nav-link" style={{display: 'flex', justifyContent:'left'}}>
          <ul>
            <Link to="/home" className = "link">
            <p>Home</p>
            </Link>
          </ul>
          <ul>
            <Link to="/profile" className = "link">
            <p>Profile</p>
              </Link>
          </ul>
        </div>
        <div className="nav-link" id = "logout" style={{display: 'flex', justifyContent:'right'}}>
          <ul>
            <Link onClick={props.logOutOfAccount} className = "link"> <p>Logout </p> </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
