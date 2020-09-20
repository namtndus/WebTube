const express = require('express');
const app = express();
const PORT = 4000;

function handleListening() {
    console.log(`Listeninig on: http://localhost:${PORT}`);
}

function handleHone(req, res) {
    res.send("hello from home")
}

function handleProfile(req, res) {
    res.send("You are on my profile");
}

app.get("/", handleHone);
app.get("/profile", handleProfile);

app.listen(PORT, handleListening);