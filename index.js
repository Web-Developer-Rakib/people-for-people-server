const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
//Middlewares
app.use(cors());
app.use(express.json());
//Main function
const run = () => {
  try {
  } finally {
    //Connection continue
  }
  run().console.dir();
};
app.listen(port, () => console.log("Listning to port", port));
