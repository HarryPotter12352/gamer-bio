const express = require("express");
const gamerModel = require("./../models/gamerModel");
const bodyParser = require("body-parser");


const router = express.Router();
const urlEncodedParser = bodyParser.urlencoded({extended: false});


router.get("/new", async (req, res) => {
    res.render("new.ejs", {data: {message: ""}})
})


router.post("/signedup", urlEncodedParser, async (req, res) => {
    const query = await gamerModel.findOne({username: req.body.username}, async (err, doc) => {
        if(!doc){
            const new_user = await gamerModel.create({username: req.body.username, games: req.body.games.split(","), best_game: req.body.best, ign: req.body.ign}).catch(console.error);
            res.send("Successfully signed up!")
        }
        else{
            res.send("Somebody already has this username!");
        }
    })
})


module.exports = router;