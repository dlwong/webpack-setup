const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
  email: String
});

// the model Player is for the players collection in the database.
const Player = mongoose.model('Player', playerSchema);

module.exports = Player;
