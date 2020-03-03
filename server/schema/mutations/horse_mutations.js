/********** HORSE MUTATIONS ************
    DONE:
        - Add new Horse
        - aadd horse image (Via Imagee mutations)

    TO BE DONE:
        - Remove horse
        - Edit horse

/********** TOUR MUTATIONS ************/

const graphql = require("graphql");
const { GraphQLString, 
        GraphQLInt,
        GraphQLFloat,
        GraphQLNonNull, 
        GraphQLID } = graphql;
const mongoose = require("mongoose");
const HorseType = require("../types/horse_type");
const Horse = mongoose.model("horses");

//Stable model to add horse to stable
const StableType = require("../types/stable_type");
const Stable = mongoose.model("stables");

// Tom - The consts below are for AWS image connectivity.
const { singleFileUpload } = require("../s3")
const { GraphQLUpload } = require('graphql-upload');

const horseMutations = new Object({
    newHorse: {
        // creating a Horse type
        type: HorseType,

        // Tom - Image is added to the args for AWS.
        args: {
            name: { type: new GraphQLNonNull(GraphQLString) },
            description: { type: new GraphQLNonNull(GraphQLString) },
            breed: { type: new GraphQLNonNull(GraphQLString) },
            color: { type: new GraphQLNonNull(GraphQLString) },
            height: { type: new GraphQLNonNull(GraphQLFloat) },
            stable: { type: new GraphQLNonNull(GraphQLID) },
            image: { type: GraphQLUpload }
        },

        // Tom - Async is added before resolve presumably to wait for image to upload.
        async resolve(parentValue, args) {
            
            // Tom - Created this update object based on a/A AWS instructions.
            const updateObj = {};
            if (args.name) updateObj.name = args.name;
            if (args.breed) updateObj.breed = args.breed;
            if (args.color) updateObj.color = args.color;
            if (args.height) updateObj.height = args.height;
            if (args.stable) updateObj.stable = args.stable;
            if (args.description) updateObj.description = args.description;
            if (args.image) {
                updateObj.image = await singleFileUpload(args.image);
            }

            // Tom - Passed updateObj into new Horse instead of args, the only difference being the image.
            return Stable.findById(args.stable)
                .then(stable => {
                    return newHorse = new Horse(updateObj)
                        .save()
                        .then(horse => {
                            stable.horses.push(horse.id);
                            stable.save();
                            return horse;
                        })
                })
                .catch(err => err);

        }
    },
 
});

module.exports = horseMutations;