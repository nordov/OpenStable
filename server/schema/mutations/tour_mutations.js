/********** TOUR MUTATIONS ************
    DONE    
        - Add new Tour

    TO BE DONE:
        = Remove Tour
        - Edit Tour
        - Add horse
        - Remove Horses
        
/********** TOUR MUTATIONS ************/
const graphql = require("graphql");
const { GraphQLString, 
        GraphQLNonNull, 
        GraphQLID, 
        GraphQLInt } = graphql;
const mongoose = require("mongoose");

const TourType = require("../types/tour_type");
const Tour = mongoose.model("tours");

const StableType = require("../types/stable_type");
const Stable = mongoose.model("stables");

// Tom - The consts below are for AWS image connectivity.
const { singleFileUpload } = require("../s3")
const { GraphQLUpload } = require('graphql-upload');

const tourMutations = new Object({
    newTour: {
        // creating a Tour type
        type: TourType,
        args: {
            name: { type: new GraphQLNonNull(GraphQLString) },
            description: { type: new GraphQLNonNull(GraphQLString) },
            //Duration in minutes
            duration: { type: new GraphQLNonNull(GraphQLInt) },
            //Difficulty: Novice, Experienced, Expert
            difficulty: { type: new GraphQLNonNull(GraphQLString) },
            //Terrain: Desert, Mountain, Beach 
            terrain: { type: new GraphQLNonNull(GraphQLString) },
            //Might have to revisit, not sure what type to use
            start_time: { type: new GraphQLNonNull(GraphQLString) },
            stable: { type: new GraphQLNonNull(GraphQLID) },
        },
        resolve(parentValue, args) {
            //Check if Stable exist first
            return Stable.findById(args.stable)
                .then(stable => {
                    console.log(stable);
                    return newTour = new Tour(args)
                        .save()
                        .then(tour => {
                            stable.tours.push(tour.id);//Record Tour on Stable
                            stable.save();
                            //Tour gets saved 
                            return tour;
                        })
                })
                .catch(err => err);//Throws error if Stable assigned does not exist

        }
    },  
 
});

module.exports = tourMutations;