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

// const itemsRouter = require("./server/routes/items");
// const usersRouter = require("./server/routes/users");
// const codesRouter = require("./server/routes/codes");
// const cateRouter = require("./server/routes/categories");


// //load routers
// app.use("/", require("./server/routes/router"));
// app.use("/items", itemsRouter);
// app.use("/users", usersRouter);
// app.use("/codes", codesRouter);
// app.use("/category", cateRouter);



app.listen(port, () => {
  console.log(`Server is Running on port: ${port}`);
});
