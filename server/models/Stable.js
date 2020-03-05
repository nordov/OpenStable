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
    
    // Tom - Old image version, kept it around just in case.
    // images:[{ type: Schema.Types.ObjectId, ref: 'Image'}],

    // Tom - New version, treats image like strings for AWS.
    image: { type: String },

    tours:[{ type: Schema.Types.ObjectId, ref: 'Tour'}],
    horses:[{ type: Schema.Types.ObjectId, ref: 'Horse'}]
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