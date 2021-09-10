const express = require("express");
const gamerModel = require("./../models/gamerModel");



const router = express.Router();

router.get("/", async (req, res) => {
    res.send("This is the users homepage, belonging to my owner!");
});

router.get("/:username", async (req, res) => {
    const query = await gamerModel.findOne({username: req.params.username}, async (err, doc) => {
        if(!doc){
            res.send("Such a user does not exist!");
        }
        else{
            res.render("display.ejs", {data: {username: doc.username, games: doc.games, best_game: doc.best_game, ign: doc.ign}})
        }
    })
})

module.exports = router;