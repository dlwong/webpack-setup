const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const controller = require('./controllers'); //access db
const db = require('./db'); //connect to db

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '/../client/public')));

let port = process.env.PORT;

if (port == null || port == "") {
  port = 3000;
}

app.post('/', controller.add);

app.listen(port, () => console.log(`Server started on port ${port}`));