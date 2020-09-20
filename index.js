import express from "express";
import morgan from "morgan";
import helmet from "helmet";
const app = express();

const PORT = 4000;

const handleListening = () => console.log(`Listeninig on: http://localhost:${PORT}`);
const handleHone = (req, res) => res.send("hello from home")

const handleProfile = (req, res) => res.send("You are on my profile");

app.use(morgan("tiny"));
app.use(helmet());

app.get("/", handleHone);

app.get("/profile", handleProfile);

app.listen(PORT, handleListening);