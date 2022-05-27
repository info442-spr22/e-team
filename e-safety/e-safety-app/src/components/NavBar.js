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
          <Link to="/home">
          <button onClick={props.logOutOfAccount}>Home</button>
            </Link>
          <Link to="/profile">
          <button onClick={props.logOutOfAccount}>Profile</button>
            </Link>     
          <button onClick={props.logOutOfAccount}>Logout</button>
        </ul>
      </div>
    </div>
  );
}
