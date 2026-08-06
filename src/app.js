const express = require ("express");
const {adminAuth} = require("./middlewares/auth")
const connectDB = require("./config/db");
const User = require("./models/user")

const app = express();

app.use(express.json());

app.get("/signup", async (req, res) => {
    //creating a new instance of the User model
    const user = new User(req.body)

    try {
        await user.save();
        res.send("User added successfully");
    } catch (err) {
        res.status(400).send("Error saving the user:" + err.message);
    }
})


connectDB()
    .then(() => {
        console.log("database connection established...");
        app.listen(3000, () => {
            console.log("server is running on port 3000")
        });
    })
    .catch((err) => {
        console.error("Database cannot be connected");
    });