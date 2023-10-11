const mongoose = require("mongoose");
require("dotenv").config();

// const connection = mongoose.connect(process.env.mongoURL);

const connection = mongoose.connect(
  "mongodb+srv://mental:vishal@cluster0.dex7ovl.mongodb.net/Skill-Ventage-Hub?retryWrites=true&w=majority"
);

module.exports = {
  connection,
};
