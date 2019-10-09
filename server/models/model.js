const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
  email: String
});

const Player = mongoose.model('Player', playerSchema);

module.exports = Player;
