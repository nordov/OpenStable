const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ImageSchema = new Schema({
    stable: { 
        type: Schema.Types.ObjectId, ref: 'Stable',
    },
    horse: { 
        type: Schema.Types.ObjectId, ref: 'Horse',
    },
    tour: { 
        type: Schema.Types.ObjectId, ref: 'Tour',
    },
    user: { 
        type: Schema.Types.ObjectId, ref: 'User',
    },            
    image_url: {
        type: String,
    },    
    image_text: {
        type: String,
    },
}, { timestamps: true }
);

module.exports = mongoose.model("images", ImageSchema);