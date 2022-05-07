import axios from 'axios';
import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
// import firebase from 'firebase/compat/app';
import { getAuth, signOut } from "firebase/auth";
import HomePage from './HomePage';

export default function ProfilePage({token}) {

    console.log()

    return (
    <div>
        <div class="name">
            <h2>Name: John Doe</h2>
        </div>
        <div class="dob">
            <h2>Birthday: </h2>
        </div>
        <div class="bio">
            <h2>Bio: Hi, I am John Doe...</h2>
        </div>
            <button>Edit</button>
        <div class="note">
            <h2> Make a incident report on the map to secure night walk safer for UW students! </h2>
        </div>
        <div class="profile" style={{display:'flex', justifyContent:'flex-end'}}>
            <button type="button" class="btn home" onClick={<HomePage />}>
                <p> <span>Return to Map Page</span> </p>
            </button>
        </div>
    </div>
    );
}