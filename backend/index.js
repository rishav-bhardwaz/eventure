// mongodb+srv://rishavbhardwaz32:<db_password>@eventrue.g2og6.mongodb.net/?retryWrites=true&w=majority&appName=Eventrue

const express = require("express");
const ConnectDB = require("./db");
const cors = require('cors');

const app = express();

ConnectDB();

app.use(cors());
app.use(express.json());

const eventRoutes = require('./routes/eventRoutes');
app.use('/api/events', eventRoutes);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});