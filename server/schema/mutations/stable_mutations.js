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

const stableMutations = new Object({
    newStable: {
        // creating a User type
        type: StableType,
        args: {
            name: { type: new GraphQLNonNull(GraphQLString) },
            description: { type: new GraphQLNonNull(GraphQLString) },
            address: { type: new GraphQLNonNull(GraphQLString) },
            city: { type: new GraphQLNonNull(GraphQLString) },
            state: { type: new GraphQLNonNull(GraphQLString) },
        },
        resolve(parentValue, { name, description, address, city, state }) {
            newStable = new Stable({ name, description, address, city, state });
            return newStable.setLongitudeAndLatitude()
                .then(stable => stable.save());      
        }
    },
 
});

module.exports = stableMutations;