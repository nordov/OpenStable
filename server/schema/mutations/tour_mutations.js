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
            image: { type: GraphQLUpload } // Tom - Are we going to want multiple image capability here?
        },

        // Tom - Async is added before resolve so that await can be used in if (image) conditional.
        async resolve(_parentValue, args) {

            const updateObj = {};
            if (args.name) updateObj.name = args.name;
            if (args.description) updateObj.description = args.description;
            if (args.duration) updateObj.duration = args.duration;
            if (args.difficulty) updateObj.difficulty = args.difficulty;
            if (args.terrain) updateObj.terrain = args.terrain;
            if (args.start_time) updateObj.start_time = args.start_time;
            if (args.stable) updateObj.stable = args.stable;
            if (args.image) {
                updateObj.image = await singleFileUpload(args.image);
            }

            //Check if Stable exist first

            return Stable.findById(args.stable)
                .then(stable => {
                    console.log(stable);
                    return newTour = new Tour(updateObj) // Tom - Passed updateObj into new Horse instead of args, the only difference being the image.
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