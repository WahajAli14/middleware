const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let communitySchema = new Schema(
  {
    id: { type: "String" },
    community_type: {
      type: "String",
    },
    hobbies: [
      {
        _name: { type: "String" },
      },
    ],
    followers: [
      {
        vet_name: { type: "Strings" },
      },
    ],
  },
  { collection: "veteran_collection" }
);
