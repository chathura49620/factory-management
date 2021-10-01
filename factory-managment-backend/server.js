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
const feedbackRouter = require("./server/routes/deletefeedbacks");

//load routers --need to improve performance  of routes
//app.use("/items", require("./server/routes/router"));
app.use("/items", itemsRouter);
app.use("/users", usersRouter);
app.use("/codes", codesRouter);
app.use("/wasted", wastedItemRouter);
app.use("/requests", itemRequestsRouter);
app.use("/returned", returnedProductRouter);
app.use("/category", cateRouter);
<<<<<<< HEAD
app.use("/feedbackForDelete", feedbackRouter);
app.use("/", require("./server/routes/router"));
=======
app.use("/api/calendar", require("./server/controller/CalendarController"));


>>>>>>> IT19189086

app.listen(port, () => {
  console.log(`Server is Running on port: ${port}`);
});
