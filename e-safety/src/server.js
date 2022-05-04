const express = require("express");
const cors = require('cors')
const middleware = require('./middleware')

const app = express();
const PORT = 8000;

app.use(cors());

app.use(middleware.decodeToken);

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