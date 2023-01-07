const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Name = new Schema(
  {
    id: ObjectId,
    Name: {
      type: String,
      required: true,
    },
    MobileNo: {
      type: String,
      required: true,
    },
  },
  { timestamps: true, strictQuery: true }
);

module.exports = mongoose.model("Name", Name);
