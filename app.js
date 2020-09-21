import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { userRouter } from "./router"
const app = express();

const handleHone = (req, res) => res.send("hello from home")

const handleProfile = (req, res) => res.send("You are on my profile");

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extendend: true }));
app.use(helmet());
app.use(morgan("tiny"));


app.get("/", handleHone);

app.get("/profile", handleProfile);

app.use("/user", userRouter);

export default app;