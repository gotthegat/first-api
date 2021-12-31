require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Database"));

//middleware
app.use(express.json());

//routes
const subscribersRouter = require("./routes/subscribers");
app.use("/subscribers", subscribersRouter);
//used by localhost:3000/subscribers

app.listen(3000, () => console.log("Server has started"));
