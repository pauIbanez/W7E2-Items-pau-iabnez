/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */

const { model, Schema } = require("mongoose");

const ItemSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      required: true,
    },
  },
  {
    timestamps: true,

    toJSON: {
      transform: (doc, ret) => {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
      },
    },
  }
);

const Item = model("Item", ItemSchema, "items");

module.exports = Item;
