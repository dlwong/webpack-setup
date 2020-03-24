const Player = require('../models');

exports.add = (req, res) => {
  // curl -X POST http://localhost:3000/ -d '{"email":"value1"}' -H "Content-Type: application/json"
  const { email } = req.body;
  // const email = 'madeup@gmail.com';
  let newPlayer = new Player({ email })
  
  newPlayer.save((err) => {
    if (err) {
      res.status(400).send(err)
    } else {
      res.status(200).send('DONE');
    }
  });
}
