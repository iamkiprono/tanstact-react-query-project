require("dotenv").config();
const express = require("express");
const cors = require("cors");
const ItemRoutes = require("./routes/ItemRoutes");

const connectDb = require("./config/db");

const app = express();

connectDb();

app.use(express.json());
app.use(cors());

app.use("/items", ItemRoutes);

app.listen(process.env.PORT, () => {
  console.group(`Listening on ${process.env.PORT}`);
});
