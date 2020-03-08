const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const getGeoData = require("../../util/geo-decoder");

const StableSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
    },
    address: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    longitude: {
        type: Number,
        //required: true
    },
    latitude: {
        type: Number,
        //required: true
    },
    
    // Tom - New versions for image/images, treats image urls like strings for AWS. Do we want to implement this?
    // image: { type: String },
    // images: { type: Array },

    // Tom - Different syntax from older version, kept it commented out just in case.
    // tours:[{ type: Schema.Types.ObjectId, ref: 'Tour'}],
    // horses:[{ type: Schema.Types.ObjectId, ref: 'Horse'}],

    // Tom - Old image version, kept it around just in case.
    // images:[{ type: Schema.Types.ObjectId, ref: 'Image'}],

    images:[{ type: Schema.Types.ObjectId, ref: 'images'}],           
    tours:[{ type: Schema.Types.ObjectId, ref: 'tours'}],
    horses:[{ type: Schema.Types.ObjectId, ref: 'horses'}]
}, { timestamps: true }
);

StableSchema.methods.setLongitudeAndLatitude = async function() {
    const fullAddress = this.address+" "+this.city+" "+this.state;

    await getGeoData(fullAddress, geoData => {
        this.longitude = geoData.longitude;
        this.latitude = geoData.latitude;
        return this;
    });
    
    return this;
};

// StableSchema.methods.addHorseToStable = function(stable horse) {
//     stable.horses.push(horse.id);
//     stable.save();
// }

module.exports = mongoose.model("stables", StableSchema);