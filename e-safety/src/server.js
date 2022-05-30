const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const middleware = require('./middleware');

const app = express();
const PORT = 8000;

app.use(cors());
app.use(middleware.decodeToken);
app.use(express.json());

// Connect to mongooseDB
dbConnect().catch(err => console.log(err));

let db = {};

async function dbConnect() {
  await mongoose.connect('mongodb+srv://szhang79:eSafety442@cluster0.mgsy7.mongodb.net/eSafety?retryWrites=true&w=majority');
  console.log("connected to the database");

  const userSchema = new mongoose.Schema({
    uid: String,
    name: String,
    email: String,
    picture: String,
    bio: String,
    emergency_contacts: {type: Array, default: []} // this is their email address
  });

  const mapSchema = new mongoose.Schema({
    lat: Number,
    long: Number,
    date: Date,
    type: String,
    text: String
  })

  const emergencyContactSchema = new mongoose.Schema({
    ecid: String, // this will be the user's uid + ec's email
    name: String,
    relationship: String,
    email: String
  });

  db.User = mongoose.model('User', userSchema);
  db.Map = mongoose.model('Map', mapSchema);
  
  console.log("created the user schema");
}

// Addding the database into req parameter
app.use(function(req, res, next) { // takes db library from import, and sticks connection onto the param req.db
  req.db = db;
  console.log("marked db");
  next();
});


// Getting a specific user's information in the database
app.get('/user', async (req, res) => {
  try {
    console.log("HELLO INSIDE /USER");
    console.log(req.info.user_id);
    
    let user = await req.db.User.findOne({uid: req.info.user_id});
    if (!user) {
      console.log('entered here')
      res.json({sucess: false, id: req.info.user_id});
    } else {
      res.json({success: true, user});
    }
  } catch (e) {
    console.log(e);
    res.status(500).json({
      status: 'error',
      error: 'Unable to retrieve user from the database'
    });
  }
});

// Inserting user information into the database
app.post('/user', async (req, res) => {
  try {
    // first make sure that the user is not inside the database already
    console.log("I am inside app.post('/user'");
    console.log(req.info.user_id);
    console.log(req.db.User)
    console.log(req.body)
    let user = await req.db.User.findOne({uid: req.body.id});
    if (!user) {
      const newUser = new req.db.User({
        uid: req.info.user_id,
        name: req.info.name,
        email: req.info.email,
        picture: req.info.picture,
        bio: req.body.bio || null,
        emergency_contacts: []
      });
      await newUser.save();
    }
    res.json({status: 'success'});
  } catch(e) {
    console.log(e);
    res.status(500).json({
      status: 'error',
      error: 'Unable to insert user information into the database'
    });
  }
});

app.patch('/user', async (req, res) => {
  try {
    console.log("INSIDE PATCH");
    await req.db.User.findOneAndUpdate({username: req.info.user_id}, req.body);
    res.json({status: 'success'});    
  } catch(e) {
    console.log(e);
    res.status(500).json({
      status: 'error',
      error: 'Unable to update user information in the database'
    });
  }
})


app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});