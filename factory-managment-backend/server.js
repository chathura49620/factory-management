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

const itemsRouter = require("./server/routes/items");
const usersRouter = require("./server/routes/users");
const codesRouter = require("./server/routes/codes");
const cateRouter = require("./server/routes/categories");
const wastedItemRouter = require("./server/routes/wasteditems");
const returnedProductRouter = require("./server/routes/returnedproducts");
const itemRequestsRouter = require("./server/routes/itemrequests");

//load routers
app.use("/items", itemsRouter);
app.use("/", require("./server/routes/router"));
// app.use("/items", require("./server/routes/router"));
app.use("/users", usersRouter);
app.use("/codes", codesRouter);
app.use("/category", cateRouter);
app.use("/wasted", wastedItemRouter);
app.use("/returned", returnedProductRouter);
app.use("/requests", itemRequestsRouter);

app.listen(port, () => {
  console.log(`Server is Running on port: ${port}`);
});
