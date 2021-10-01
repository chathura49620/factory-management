const express = require("express");
const cors = require("cors");
const connectDB = require("./server/database/connection");

//get env file configarations
require("dotenv").config();

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

//connect mongo db database
connectDB();


//load routers
app.use("/", require("./server/routes/router"));



app.listen(port, () => {
  console.log(`Server is Running on port: ${port}`);
});
