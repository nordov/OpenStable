/********** TOUR MUTATIONS ************
    DONE:       
        - Add new Stable
        - Add Horse (Via newHorse mutation)
        - Add Tours (Via newTour mutation)
        -Add images (Via newStableImage mutation)
    
    TO BE DONE:
        - Edit Stable
        - Remove Stable
        - Remove horses
        - Remove Tours

/********** TOUR MUTATIONS ************/

const graphql = require("graphql");
const { GraphQLString, GraphQLNonNull, GraphQLID } = graphql;
const mongoose = require("mongoose");
const StableType = require("../types/stable_type");
const Stable = mongoose.model("stables");

// Tom - The consts below are for AWS image connectivity.
const { singleFileUpload } = require("../s3")
const { GraphQLUpload } = require('graphql-upload');

const stableMutations = new Object({
    newStable: {
        // creating a User type
        type: StableType,

        // Tom - Image is added to the args for AWS.
        args: {
            name: { type: new GraphQLNonNull(GraphQLString) },
            description: { type: new GraphQLNonNull(GraphQLString) },
            address: { type: new GraphQLNonNull(GraphQLString) },
            city: { type: new GraphQLNonNull(GraphQLString) },
            state: { type: new GraphQLNonNull(GraphQLString) },
            image: { type: GraphQLUpload }
        },

        // Tom - Async is added before resolve so that await can be used in if (image) conditional.
        async resolve(_parentValue, { name, description, address, city, state, image }) {

            const updateObj = {};
            if (name) updateObj.name = name;
            if (description) updateObj.description = description;
            if (address) updateObj.address = address;
            if (city) updateObj.city = city;
            if (state) updateObj.state = state;
            if (image) {
                updateObj.image = await singleFileUpload(image);
            }

            // Tom - Passed updateObj into new Stable instead of args, the only difference being the image.
            // Tom - Old Version:
                // newStable = new Stable({ name, description, address, city, state });
            newStable = new Stable(updateObj);
            return newStable.setLongitudeAndLatitude()
                .then(stable => stable.save());
        }
    },
 
});

module.exports = stableMutations;