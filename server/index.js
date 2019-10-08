const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');
const cors = require('cors');

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.static(path.join(__dirname, '/../client/public')));

let port = process.env.PORT;

if (port == null || port == "") {
  port = 3000;
}

app.post('/upload',function(req, res) {
});

app.get('/update',function(req, res) {
});

app.listen(port, () => console.log(`Server started on port ${port}`));