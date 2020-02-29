const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    city: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        min: 6,
        max: 12
    },
    recently_viewed:[{ type: Schema.Types.ObjectId, ref: 'Tour'}],
    saved_stables:[{ type: Schema.Types.ObjectId, ref: 'Stable'}],
    saved_tours:[{ type: Schema.Types.ObjectId, ref: 'Tour'}],
    reserved_tours:[{ type: Schema.Types.ObjectId, ref: 'Tour'}],
},{ timestamps: true }
);

module.exports = mongoose.model("users", UserSchema);