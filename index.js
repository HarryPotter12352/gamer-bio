const express = require("express");
const mongoose = require("mongoose");
const user_router = require("./routes/user");
const display_router = require("./routes/display");
const api_router = require("./routes/api");
const {
    mongo_url,
    port
} = require("./config.json");


const app = express();
app.set("view engine", "ejs");
app.use('/user', user_router);
app.use("/display", display_router);
app.use("/api", api_router);
app.use(express.json());

mongoose.connect(mongo_url).catch(console.error);


app.get("/", async (req, res) => {
    res.send("This is the gamer bio's homepage!")
})

app.listen(port, () => {
    console.log(`App is listening at http://localhost:${port}`);
})