const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 6000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

const accountRouter = require("./routes/accountFeatures");
const billingRouter = require("./routes/billing");
const reservationRouter = require("./routes/reservationRoute");

app.use("/account", accountRouter);
app.use("/billing", billingRouter);
app.use("/reservation", reservationRouter);

app.listen(port, () => {
  console.log("Server is running on port: " + port);
});
