// Connection
require("dotenv").config();
const mongoose = require("mongoose");
const { DB, URI } = process.env;

let url = `mongodb://${URI}/${DB}`;
let connectionObject = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  authSource: "admin",
  user: "acc",
  pass: "acc_rocks_2020",
};

const connection = () => {
  mongoose
  .connect(url, connectionObject)
  .then(() => {
    console.log(`Connected to the ${DB} database`);
  })
  .catch((err) =>
    console.log(`Issues connecting to the ${DB} database: `, err)
  );
}
// you are replacing the entire exported object
module.exports = connection
