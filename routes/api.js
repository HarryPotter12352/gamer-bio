const express = require("express");
const gamerModel = require("./../models/gamerModel");


const router = express.Router();

router.get("/", async (req, res) => {
    res.send("This is the API's homepage!");
});

router.get("/get/:username", async (req, res) => {
    const query = await gamerModel.findOne({username: req.params.username}, async (err, doc) => {
        if(!doc){
            res.send("Such a profile does not exist!");
        }        
        else{
            const object_to_send = {
                username: doc.username,
                games: doc.games,
                best_game: doc.best_game,
                ign: doc.ign
            }
            res.send(object_to_send);
        }
    })
})


module.exports = router;