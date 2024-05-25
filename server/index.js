const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const path = require("path");

const app = express();
const PORT = process.env.PORT || 4000;
const MONGO_URL = process.env.MONGO_URL;

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../client/dist')));


// Middleware
app.use(cors());
app.use(express.json());

// Connecting to MongoDb database
   mongoose
   .connect(MONGO_URL).then(() => console.log("[MONGO_DB] Connected successfully!"))
   .catch((error) =>
     console.error(`[MONGO_DB] Connecting failed! ERROR:`, error)
   );

// Routes
app.get("/test", (req, res) => {
  res.send("Hello world from backend!");
});


// The "catchall" handler: for any request that doesn't match one above, send back React's index.html file.
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});



app.listen(PORT, () => {
  console.log(`[SERVER] Running on PORT ${PORT}`);
//  console.log(`[test]env var mongo_url = ${MONGO_URL} `);

});


