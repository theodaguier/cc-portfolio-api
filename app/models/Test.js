const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TestSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

// Le premier argument de mongoose.model est le nom que l'on souhaite donner à la collection
module.exports = Test = mongoose.model("tests", TestSchema);
