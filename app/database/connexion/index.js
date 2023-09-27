const mongoose = require("mongoose");

async function mongoConnexion() {
  try {
    await mongoose.connect(`${process.env.MONGO_URL}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    mongoose.connection.on("error", (err) => {
      throw err;
    });

    return "Mongoose connected ! 🔥";
  } catch (error) {
    console.log(error.message);

    process.exit(1);
  }
}

module.exports = mongoConnexion;
