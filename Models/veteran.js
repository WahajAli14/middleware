const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let veteranSchema = new Schema(
  {
    name: { type: "String" },
    id: { type: "String" },
    profession: { type: "String" },
    hobbies: [
      {
        _name: {
          type: "String",
        },
      },
    ],
    star_count: {
      type: "numeric",
    },
    friends: [
      {
        friendid: {
          type: "String",
        },
      },
    ],
  },
  {
    collection: "veteran_collection",
  }
);
