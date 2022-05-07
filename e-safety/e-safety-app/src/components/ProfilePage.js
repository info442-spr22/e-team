import axios from 'axios';
import React, { useEffect } from 'react';
// import firebase from 'firebase/compat/app';
import { getAuth, signOut } from "firebase/auth";
import HomePage from './HomePage';

export default function ProfilePage({token}) {

    console.log()

    return (
    <div>
        <h1>Profile Page</h1>

        <div class="name">
            <h2>Name: </h2>
        </div>
        <div class="address">
            <h2>Address: </h2>
        </div>
        <div class="bio">
            <h2>Bio: </h2>
        </div>
            <button onClick={<editPage />}>Edit</button>
        <div class="note">
            <h3> Make a incident report on the map to secure night walk safer for UW students! </h3>
        </div>
        <div class="return" style={{display:'flex', justifyContent:'flex-end'}}>
            <button type="button" class="btn home" onClick={<HomePage />}>
                <p> Return to Map Page</p>
            </button>
        </div>
    </div>
    );
}