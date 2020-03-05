const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const HorseSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    breed: {
        type: String, //Number of minutes
        //required: true,
    },
    color: {
        type: String, //Novice, Intermediate, Experienced
        //required: true
    },
    height: {
        type: Number, //Any like Desert, Mountain, Beach
        //required: true
    },
    stable: { //Stable Tour belongs to
        type: Schema.Types.ObjectId, ref: 'Stable',
        //required: true
    },
    
    // Tom - Old image version, kept it around just in case.
    // images:[{ type: Schema.Types.ObjectId, ref: 'Image'}],
    
    // Tom - New version, treats image like strings for AWS.
    images: { type: String },

    tours:[{ type: Schema.Types.ObjectId, ref: 'Tour'}],
}, { timestamps: true }
);

HorseSchema.statics.findTours = function(tourId) {
    return this.findById(tourId)
      .populate("tours")
      .then(tour => tour.tours);
  };

module.exports = mongoose.model("horses", HorseSchema);