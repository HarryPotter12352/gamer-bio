const mongoose = require("mongoose");


const gamerSchema = new mongoose.Schema({
    username: {type: String, required: true},
    games: {type: Array, required: true},
    best_game: {type: String, required: false},
    ign: {type: String, required: true},
})

const gamerModel = mongoose.model("gamerModel", gamerSchema)


module.exports = gamerModel;