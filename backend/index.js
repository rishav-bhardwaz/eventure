// mongodb+srv://rishavbhardwaz32:<db_password>@eventrue.g2og6.mongodb.net/?retryWrites=true&w=majority&appName=Eventrue

const express = require("express");
const ConnectDB = require("./db");

const app = express();

ConnectDB();

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});