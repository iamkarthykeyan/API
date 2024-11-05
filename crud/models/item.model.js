import { model, Schema } from "mongoose";

const itemSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    desc: {
        type: String,
        required: true,
    },
})

const Item = model("crud-api-itemSchema", itemSchema);

export default Item;