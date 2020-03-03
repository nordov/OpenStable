/********** IMAGE MUTATIONS ************
    DONE:
        - Add new Horse image
        - Add new Tour image
        = Add new Stable image

    TO BE DONW:
        - Remove Horse image
        - Remove Tour image
        - Remove Stable image

/********** TOUR MUTATIONS ************/

const graphql = require("graphql");
const { GraphQLString, 
        GraphQLInt,
        GraphQLFloat,
        GraphQLNonNull, 
        GraphQLID } = graphql;
const mongoose = require("mongoose");
const ImageType = require("../types/image_type");
const Image = mongoose.model("images");

//Stable model to add stable image
const StableType = require("../types/stable_type");
const Stable = mongoose.model("stables");

//Horse model to add horse image
const HorseType = require("../types/horse_type");
const Horse = mongoose.model("horses");

//Tour model to add horse image
const TourType = require("../types/tour_type");
const Tour = mongoose.model("tours");

const imageMutations = new Object({
    newHorseImage: {
        // creating a Horse type
        type: ImageType,
        args: {
            horse: { type: new GraphQLNonNull(GraphQLID) },
            image_url: { type: new GraphQLNonNull(GraphQLString) },
            image_text: { type: new GraphQLNonNull(GraphQLString) },
        },
        resolve(parentValue, args) {
            
            return Horse.findById(args.horse)
                .then(horse => {
                    return newImage = new Image(args)
                        .save()
                        .then(image => {
                            console.log(image);
                            console.log(horse);
                            horse.images.push(image.id);
                            horse.save();
                            return image;
                        })
                })
                .catch(err => err);
        }
    },
    newTourImage: {
        // creating a Horse type
        type: ImageType,
        args: {
            tour: { type: new GraphQLNonNull(GraphQLID) },
            image_url: { type: new GraphQLNonNull(GraphQLString) },
            image_text: { type: new GraphQLNonNull(GraphQLString) },
        },
        resolve(parentValue, args) {
            
            return Tour.findById(args.tour)
                .then(tour => {
                    return newImage = new Image(args)
                        .save()
                        .then(image => {
                            tour.images.push(image.id);
                            tour.save();
                            return image;
                        })
                })
                .catch(err => err);
        }
    },
    newStableImage: {
        // creating a Horse type
        type: ImageType,
        args: {
            stable: { type: new GraphQLNonNull(GraphQLID) },
            image_url: { type: new GraphQLNonNull(GraphQLString) },
            image_text: { type: new GraphQLNonNull(GraphQLString) },
        },
        resolve(parentValue, args) {
            
            return Stable.findById(args.stable)
                .then(stable => {
                    return newImage = new Image(args)
                        .save()
                        .then(image => {
                            stable.images.push(image.id);
                            stable.save();
                            return image;
                        })
                })
                .catch(err => err);
        }
    },      
});

module.exports = imageMutations;