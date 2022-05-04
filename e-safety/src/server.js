const mongoose = require("mongoose");
const express = require("express");
const cors = require('cors')
const middleware = require('./middleware')

const app = express();
const PORT = 8000;

app.use(cors());
app.use(middleware.decodeToken);

// Connect to mongooseDB
dbConnect().catch(err => console.log(err));

let User;

async function dbConnect() {
  await mongoose.connect('mongodb+srv://szhang79:eSafety442@cluster0.mgsy7.mongodb.net/eSafety?retryWrites=true&w=majority');
  console.log("connected to the database");

  const userSchema = new mongoose.Schema({
    name: String,
    email: String
  });

  User = mongoose.model('User', userSchema);
}

app.get('/api/todos', (req, res) => {
  return res.json({
    todos: [
      {
        title: 'task 1'
      },
      {
        title: 'task 2'
      },
      {
        title: 'task 3'
      }
    ]
  });
});


app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});