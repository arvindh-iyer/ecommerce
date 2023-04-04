const mongoose = require("mongoose");

/*const db_connect = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Connected");
  } catch (error) {
    console.log(error.message);
    process.exit();
  }
};
module.exports = db_connect;*/

const db_connect = async () => {
  await mongoose.connect("mongodb://127.0.0.1:27017/ecom");
  console.log("successfully connected to the database");
};

module.exports = db_connect;
