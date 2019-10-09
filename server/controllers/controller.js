const Player = require('../models/model');

exports.add = (req, res) => {
  // curl -X POST http://localhost:3000/'
  const { email } = req.body;
  // const email = {'email': 'fake@SpeechGrammarList.com'};
  let newPlayer = new Player({email})
  newPlayer.save((err) => {
    if (err) {
      res.status(400).send(err)
    } else {
      res.status(200).send('done');
    }
  });
}
