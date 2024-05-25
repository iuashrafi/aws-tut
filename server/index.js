const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 4000;
const MONGO_URL = process.env.MONGO_URL;

// Middleware
app.use(cors());
app.use(express.json());

// Connecting to MongoDb database
// mongoose
//   .connect(MONGO_URL)
//   .then(() => console.log("[MONGO_DB] Connected successfully!"))
//   .catch((error) =>
//     console.error(`[MONGO_DB] Connecting failed! ERROR:`, error)
//   );

// Routes
app.get("/test", (req, res) => {
  res.send("Hello world from backend!");
});

app.listen(PORT, () => {
  console.log(`[SERVER] Running on PORT ${PORT}`);
});
