// Static arrays for seeding horses, tours and stables are below. ----------------------------------------------------------

const HORSE_COLOR = [
  "Bay",
  "Chestnut",
  "Black",
  "Seal Brown",
  "Dun",
  "Buckskin",
  "Palomino",
  "Gray",
  "Roan",
  "Appaloosa",
  "Pinto"
];

const HORSE_NAMES = [
  "Aspen",
  "Charlie",
  "Ralph",
  "Medley",
  "Bonny",
  "Elijah",
  "Ginger",
  "Comet",
  "Orlando",
  "Victoria",
  "Rupert",
  "Marley",
  "Sonny",
  "Cedric",
  "Sandie",
  "Cricket",
  "Massie",
  "Bailey"
];

const HORSE_NAMES = [
  "Aspen",
  "Charlie",
  "Ralph",
  "Medley",
  "Bonny",
  "Elijah",
  "Ginger",
  "Comet",
  "Orlando",
  "Victoria",
  "Rupert",
  "Marley",
  "Sonny",
  "Cedric",
  "Sandie",
  "Cricket",
  "Massie",
  "Bailey",
  "Andy",
  "Trevor",
  "Garon",
  "Mikey"
];

const TOUR_TERRAIN = [
  "Inland Lakes",
  "Beach Fronts",
  "Low Canyons",
  "Dry River Beds",
  "Estuaries",
  "Farmlands",
  "Coniferous Forest",
  "Deciduous Forest",
  "Redwood Forest",
  "Grasslands",
  "Coastal Hills",
  "Marshes",
  "Meadows",
  "Mountains",
  "Orchards",
  "Pastures",
  "River Delta",
  "Sand Dunes",
  "Seaside",
  "Tide Pools",
  "Vallies",
  "Vineyards",
  "Waterfalls",
  "Wetlands"
];

const HORSE_BREEDS = [
  "Nangchen",
  "Camargue",
  "Austrian Warmblood",
  "Campeiro",
  "Holsteiner",
  "Hispano-Bretón",
  "Pleven",
  "Persano",
  "Latvian",
  "Bavarian Warmblood",
  "Purosangue Orientale",
  "Mustang",
  "American Quarter",
  "Coldblood Trotter",
  "Albanian"
];

const TOUR_NAMES = [
  "Bay Area Ridge Trail",
  "Skyline Ridge Preserve",
  "Windy Hill Open Space Trail",
  "Purisima Creek Redwoods Path",
  "Pillar Point Bluff",
  "Glen Canyon Park",
  "Sunol Regional Wilderness",
  "Anthony Chabot Regional Park",
  "Joaquin Miller Park",
  "Claremont Canyon Regional Preserve",
  "Sibley Volcanic Regional Preserve",
  "Pinnacle Gulch Trail",
  "Coastal Prarie Trail",
  "Rockville Hills Regional Park",
  "Moore Creek Fire Trail"
];

const TOUR_DESCRIPTIONS = [
  "The trail is rated as moderate and offers a number of activity options. Dogs are also able to use this trail but must be kept on leash.",
  "Features beautiful wild flowers and is good for all skill levels. The trail offers a number of activity options and is best used from September until May.",
  "Heavily trafficked loop trail located near San Francisco, California that features a great forest setting and is rated as moderate. The trail offers a number of activity options.",
  "Moderately trafficked loop trail located near San Francisco, California that features beautiful wild flowers and is good for all skill levels. The trail offers a number of activity options and is accessible year-round.",
  "Located near Brisbane, California this trail features beautiful wild flowers and is rated as moderate. The trail offers a number of activity options and is accessible year-round.",
  "offers the chance to see wildlife and is good for all skill levels. The trail is primarily used for hiking, walking, running, and bird watching."
];

const HORSE_DESCRIPTIONS = [
  "A reserved 11 year old with an interrupted blaze marking on her face, and her four leg markings consist of nothing on her right front leg, a half stocking on her left front leg.",
  "An excitable 4 year old with a faint star marking on his face, and his four leg markings consist of a sock on his right front leg, a coronet on his left front leg.",
  "A reserved 5 year old with a stripe marking on her face, and her four leg markings consist of nothing on her right front leg, nothing on her left front leg.",
  "A brave 5 year old with a star and snip marking on his face, and his four leg markings consist of a sock on his right front leg, a coronet on his left front leg.",
  "A sweet 8 year old with a stripe and snip marking on her face, and her four leg markings consist of a half stocking on her right front leg, a half stocking on her left front leg.",
  "A lovable 6 year old with a stripe marking on his face, and his four leg markings consist of nothing on his right front leg, a half pastern on his left front leg.",
  "A is an intelligent 2 year old with a faint star marking on her face, and her four leg markings consist of a sock on her right front leg, nothing on her left front leg.",
  "A calm 5 year old with a star and stripe marking on his face, and his four leg markings consist of nothing on his right front leg, a heel on his left front leg.",
  "A brave 7 year old with a star marking on his face, and his four leg markings consist of nothing on his right front leg, nothing on his left front leg, a sock on his right hind leg.",
  "A beautiful 7 year old with a star and stripe marking on her face, and her four leg markings consist of nothing on her right front leg, a fetlock on her left front leg.",
  "A sweet 5 year old with a star and snip marking on his face, and his four leg markings consist of nothing on his right front leg, a sock on his left front leg.",
  "A brave 8 year old with a star and snip marking on her face, and her four leg markings consist of a coronet on her right front leg, a sock on her left front leg."
];




// Static arrays of valid AWS urls are below for horses, tours and stables. ----------------------------------------------------------

const TOUR_IMAGES = [
  "https://open-stable-app-dev.s3-us-west-1.amazonaws.com/tour_0.png",
  "https://open-stable-app-dev.s3-us-west-1.amazonaws.com/tour_1.png",
  "https://open-stable-app-dev.s3-us-west-1.amazonaws.com/tour_2.png",
  "https://open-stable-app-dev.s3-us-west-1.amazonaws.com/tour_3.png",
  "https://open-stable-app-dev.s3-us-west-1.amazonaws.com/tour_4.png",
  "https://open-stable-app-dev.s3-us-west-1.amazonaws.com/tour_5.png",
  "https://open-stable-app-dev.s3-us-west-1.amazonaws.com/tour_6.png",
  "https://open-stable-app-dev.s3-us-west-1.amazonaws.com/tour_7.png",
  "https://open-stable-app-dev.s3-us-west-1.amazonaws.com/tour_8.png",
  "https://open-stable-app-dev.s3-us-west-1.amazonaws.com/tour_9.png",
  "https://open-stable-app-dev.s3-us-west-1.amazonaws.com/tour_10.png",
  "https://open-stable-app-dev.s3-us-west-1.amazonaws.com/tour_11.png",
  "https://open-stable-app-dev.s3-us-west-1.amazonaws.com/tour_12.png",
  "https://open-stable-app-dev.s3-us-west-1.amazonaws.com/tour_13.png",
  "https://open-stable-app-dev.s3-us-west-1.amazonaws.com/tour_14.png",
  "https://open-stable-app-dev.s3-us-west-1.amazonaws.com/tour_15.png",
  "https://open-stable-app-dev.s3-us-west-1.amazonaws.com/tour_16.png",
  "https://open-stable-app-dev.s3-us-west-1.amazonaws.com/tour_17.png"
];

const TOUR = [
  "https://open-stable-app-dev.s3-us-west-1.amazonaws.com/tour_0.png",
  "https://open-stable-app-dev.s3-us-west-1.amazonaws.com/tour_1.png",
  "https://open-stable-app-dev.s3-us-west-1.amazonaws.com/tour_2.png",
  "https://open-stable-app-dev.s3-us-west-1.amazonaws.com/tour_3.png",
  "https://open-stable-app-dev.s3-us-west-1.amazonaws.com/tour_4.png",
  "https://open-stable-app-dev.s3-us-west-1.amazonaws.com/tour_5.png",
  "https://open-stable-app-dev.s3-us-west-1.amazonaws.com/tour_6.png",
  "https://open-stable-app-dev.s3-us-west-1.amazonaws.com/tour_7.png",
  "https://open-stable-app-dev.s3-us-west-1.amazonaws.com/tour_8.png",
  "https://open-stable-app-dev.s3-us-west-1.amazonaws.com/tour_9.png",
  "https://open-stable-app-dev.s3-us-west-1.amazonaws.com/tour_10.png",
  "https://open-stable-app-dev.s3-us-west-1.amazonaws.com/tour_11.png",
  "https://open-stable-app-dev.s3-us-west-1.amazonaws.com/tour_12.png",
  "https://open-stable-app-dev.s3-us-west-1.amazonaws.com/tour_13.png",
  "https://open-stable-app-dev.s3-us-west-1.amazonaws.com/tour_14.png",
  "https://open-stable-app-dev.s3-us-west-1.amazonaws.com/tour_15.png",
  "https://open-stable-app-dev.s3-us-west-1.amazonaws.com/tour_16.png",
  "https://open-stable-app-dev.s3-us-west-1.amazonaws.com/tour_17.png"
];

const STABLE_IMAGES = [
  "https://open-stable-app-dev.s3-us-west-1.amazonaws.com/stable_0.png",
  "https://open-stable-app-dev.s3-us-west-1.amazonaws.com/stable_1.png",
  "https://open-stable-app-dev.s3-us-west-1.amazonaws.com/stable_2.png",
  "https://open-stable-app-dev.s3-us-west-1.amazonaws.com/stable_3.png",
  "https://open-stable-app-dev.s3-us-west-1.amazonaws.com/stable_4.png",
  "https://open-stable-app-dev.s3-us-west-1.amazonaws.com/stable_5.png",
  "https://open-stable-app-dev.s3-us-west-1.amazonaws.com/stable_6.png",
  "https://open-stable-app-dev.s3-us-west-1.amazonaws.com/stable_7.png",
  "https://open-stable-app-dev.s3-us-west-1.amazonaws.com/stable_8.png",
  "https://open-stable-app-dev.s3-us-west-1.amazonaws.com/stable_9.png",
  "https://open-stable-app-dev.s3-us-west-1.amazonaws.com/stable_10.png",
  "https://open-stable-app-dev.s3-us-west-1.amazonaws.com/stable_11.png",
  "https://open-stable-app-dev.s3-us-west-1.amazonaws.com/stable_12.png",
  "https://open-stable-app-dev.s3-us-west-1.amazonaws.com/stable_13.png",
  "https://open-stable-app-dev.s3-us-west-1.amazonaws.com/stable_14.png",
  "https://open-stable-app-dev.s3-us-west-1.amazonaws.com/stable_15.png",
  "https://open-stable-app-dev.s3-us-west-1.amazonaws.com/stable_16.png",
  "https://open-stable-app-dev.s3-us-west-1.amazonaws.com/stable_17.png",
  "https://open-stable-app-dev.s3-us-west-1.amazonaws.com/stable_18.png",
  "https://open-stable-app-dev.s3-us-west-1.amazonaws.com/stable_19.png",
  "https://open-stable-app-dev.s3-us-west-1.amazonaws.com/stable_20.png",
  "https://open-stable-app-dev.s3-us-west-1.amazonaws.com/stable_21.png",
  "https://open-stable-app-dev.s3-us-west-1.amazonaws.com/stable_22.png",
  "https://open-stable-app-dev.s3-us-west-1.amazonaws.com/stable_23.png",
  "https://open-stable-app-dev.s3-us-west-1.amazonaws.com/stable_24.png",
  "https://open-stable-app-dev.s3-us-west-1.amazonaws.com/stable_25.png",
  "https://open-stable-app-dev.s3-us-west-1.amazonaws.com/stable_26.png"
];




// Static arrays of duplicated associated images and names etc are below. ----------------------------------------------------------

const TOUR_STARTERS = [
  {
    name: "Bay Area Ridge Trail",
    image: "https://open-stable-app-dev.s3-us-west-1.amazonaws.com/tour_0.png",
  },{
    name: "Skyline Ridge Preserve",
    image: "https://open-stable-app-dev.s3-us-west-1.amazonaws.com/tour_1.png",
  },{
    name: "Windy Hill Open Space Trail",
    image: "https://open-stable-app-dev.s3-us-west-1.amazonaws.com/tour_2.png",
  },{
    name: "Purisima Creek Redwoods Path",
    image: "https://open-stable-app-dev.s3-us-west-1.amazonaws.com/tour_3.png",
  },{
    name: "Pillar Point Bluff",
    image: "https://open-stable-app-dev.s3-us-west-1.amazonaws.com/tour_4.png",
  },{
    name: "Glen Canyon Park",
    image: "https://open-stable-app-dev.s3-us-west-1.amazonaws.com/tour_5.png",
  },{
    name: "Sunol Regional Wilderness",
    image: "https://open-stable-app-dev.s3-us-west-1.amazonaws.com/tour_6.png",
  },{
    name: "Anthony Chabot Regional Park",
    image: "https://open-stable-app-dev.s3-us-west-1.amazonaws.com/tour_7.png",
  },{
    name: "Joaquin Miller Park",
    image: "https://open-stable-app-dev.s3-us-west-1.amazonaws.com/tour_8.png",
  },{
    name: "Claremont Canyon Regional Preserve",
    image: "https://open-stable-app-dev.s3-us-west-1.amazonaws.com/tour_9.png",
  },{
    name: "Sibley Volcanic Regional Preserve",
    image: "https://open-stable-app-dev.s3-us-west-1.amazonaws.com/tour_10.png",
  },{
    name: "Pinnacle Gulch Trail",
    image: "https://open-stable-app-dev.s3-us-west-1.amazonaws.com/tour_11.png",
  },{
    name: "Coastal Prarie Trail",
    image: "https://open-stable-app-dev.s3-us-west-1.amazonaws.com/tour_12.png",
  },{
    name: "Rockville Hills Regional Park",
    image: "https://open-stable-app-dev.s3-us-west-1.amazonaws.com/tour_13.png",
  },{
    name: "Moore Creek Fire Trail",
    image: "https://open-stable-app-dev.s3-us-west-1.amazonaws.com/tour_14.png",
  },{
    name: "Long Tunnel Trail",
    image: "https://open-stable-app-dev.s3-us-west-1.amazonaws.com/tour_15.png",
  },{
    name: "Mike Powell State Park",
    image: "https://open-stable-app-dev.s3-us-west-1.amazonaws.com/tour_16.png",
  },{
    name: "Hock Fire Trail",
    image: "https://open-stable-app-dev.s3-us-west-1.amazonaws.com/tour_17.png"
  },
];

const HORSE_STARTERS = [
  {
    name: "Aspen",
    image: "https://open-stable-app-dev.s3-us-west-1.amazonaws.com/horse_0.png",
  }, {
    name: "Charlie",
    image: "https://open-stable-app-dev.s3-us-west-1.amazonaws.com/horse_1.png",
  }, {
    name: "Ralph",
    image: "https://open-stable-app-dev.s3-us-west-1.amazonaws.com/horse_2.png",
  }, {
    name: "Medley",
    image: "https://open-stable-app-dev.s3-us-west-1.amazonaws.com/horse_3.png",
  }, {
    name: "Bonny",
    image: "https://open-stable-app-dev.s3-us-west-1.amazonaws.com/horse_4.png",
  }, {
    name: "Elijah",
    image: "https://open-stable-app-dev.s3-us-west-1.amazonaws.com/horse_5.png",
  }, {
    name: "Ginger",
    image: "https://open-stable-app-dev.s3-us-west-1.amazonaws.com/horse_6.png",
  }, {
    name: "Comet",
    image: "https://open-stable-app-dev.s3-us-west-1.amazonaws.com/horse_7.png",
  }, {
    name: "Orlando",
    image: "https://open-stable-app-dev.s3-us-west-1.amazonaws.com/horse_8.png",
  }, {
    name: "Victoria",
    image: "https://open-stable-app-dev.s3-us-west-1.amazonaws.com/horse_9.png",
  }, {
    name: "Rupert",
    image: "https://open-stable-app-dev.s3-us-west-1.amazonaws.com/horse_10.png",
  }, {
    name: "Marley",
    image: "https://open-stable-app-dev.s3-us-west-1.amazonaws.com/horse_11.png",
  }, {
    name: "Sonny",
    image: "https://open-stable-app-dev.s3-us-west-1.amazonaws.com/horse_12.png",
  }, {
    name: "Cedric",
    image: "https://open-stable-app-dev.s3-us-west-1.amazonaws.com/horse_13.png",
  }, {
    name: "Sandie",
    image: "https://open-stable-app-dev.s3-us-west-1.amazonaws.com/horse_14.png",
  }, {
    name: "Cricket",
    image: "https://open-stable-app-dev.s3-us-west-1.amazonaws.com/horse_15.png",
  }, {
    name: "Massie",
    image: "https://open-stable-app-dev.s3-us-west-1.amazonaws.com/horse_16.png",
  }, {
    name: "Bailey",
    image: "https://open-stable-app-dev.s3-us-west-1.amazonaws.com/horse_17.png",
  }, {
    name: "Andy",
    image: "https://open-stable-app-dev.s3-us-west-1.amazonaws.com/horse_18.png",
  }, {
    name: "Trevor",
    image: "https://open-stable-app-dev.s3-us-west-1.amazonaws.com/horse_19.png",
  }, {
    name: "Garon",
    image: "https://open-stable-app-dev.s3-us-west-1.amazonaws.com/horse_20.png",
  }, {
    name: "Mikey",
    image: "https://open-stable-app-dev.s3-us-west-1.amazonaws.com/horse_21.png",
  }
];

const STABLE_STARTERS = [
  {
    name: "California Riding Academy",
    address: "650 Cape Breton Dr",
    description: "The business runs riding lessons, and its horse trainer has trained for disciplines including Reining, Western, Working Cow Horse, and Halter.",
    city: "San Francisco",
    state: "CA",
    image: "https://open-stable-app-dev.s3-us-west-1.amazonaws.com/stable_0.png",
  },
  {
    name: "Patrick Seaton Stables",
    address: "1500 Butterfield Rd",
    description: "A facility with a covered and lighted arena, two outdoor arenas, a round arena with pea gravel footing, a dirt and gravel riding path, trail obstacles, and on-site owners.",
    city: "San Francisco",
    state: "CA",
    image: "https://open-stable-app-dev.s3-us-west-1.amazonaws.com/stable_1.png",
  },
  {
    name: "Five Star Equestrian",
    address: "7220 Johnston Rd",
    description: "A family-run horse boarding facility with 50 indoor stalls that are cleaned every day. Staff feed horses alfalfa, grass hay, or a combination twice a day and stores its hay in a Butler barn that protects against rain damage.",
    city: "San Francisco",
    state: "CA",
    image: "https://open-stable-app-dev.s3-us-west-1.amazonaws.com/stable_2.png",
  },
  {
    name: "Palo-Mar Stables",
    address: "2116 Skyline Blvd",
    description: "The business has three riding arenas, including one covered arena for year-round riding. Clients say that Beach Lake Stables has patient and passionate horse trainers.",
    city: "Daly City",
    state: "CA",
    image: "https://open-stable-app-dev.s3-us-west-1.amazonaws.com/stable_3.png"
  },
  {
    name: "Mar Vista Stable",
    address: "2152 Skyline Blvd",
    description: "The company's boarding space includes single paddocks with shelter, a shared pasture with shelter, barn stalls, free trailer parking, wash racks, and private tack rooms.",
    city: "Daly City",
    state: "CA",
    image: "https://open-stable-app-dev.s3-us-west-1.amazonaws.com/stable_4.png"
  },
  {
    name: "Miwok Livery Stables",
    address: "701 Tennessee Valley Rd",
    description: "The horse boarding facility provides hay twice a day, fresh water 24 hours a day, cleaning once a day, and space to exercise horses.",
    city: "Mill Valley",
    state: "CA",
    image: "https://open-stable-app-dev.s3-us-west-1.amazonaws.com/stable_5.png"
  },
  {
    name: "Green Gulch Farm Zen Center",
    address: "1601 Shoreline Hwy",
    description: "Has been serving the area since 2002 and includes a lighted outdoor arena with sand and shredded rubber footing, a 60-foot round pen, and a deluxe wash rack.",
    city: "San Francisco",
    state: "CA",
    image: "https://open-stable-app-dev.s3-us-west-1.amazonaws.com/stable_6.png"
  },
  {
    name: "Millwood Ranch",
    address: "1 Picardo Ranch Rd",
    description: "The company's boarding space includes single paddocks with shelter, a shared pasture with shelter, barn stalls, free trailer parking, wash racks, and private tack rooms.",
    city: "Mill Valley",
    state: "CA",
    image: "https://open-stable-app-dev.s3-us-west-1.amazonaws.com/stable_7.png"
  },
  {
    name: "Left Coast Tours",
    address: "121 7th St",
    description: "A facility with a covered and lighted arena, two outdoor arenas, a round arena with pea gravel footing, a dirt and gravel riding path, trail obstacles, and on-site owners.",
    city: "San Francisco",
    state: "CA",
    image: "https://open-stable-app-dev.s3-us-west-1.amazonaws.com/stable_8.png"
  },
];





// Placeholder arrays to keep track of ids are below. ----------------------------------------------------------

let HORSE_IDS = [];
let STABLE_IDS = [];
let TOUR_IDS = [];





// Functions for creating random integer data are below. ----------------------------------------------------------

const HORSE_HEIGHT = () => {
  return (Math.floor(Math.random() * 24) + 48);
}

const TOUR_START_TIMES = () => {
  // Ranges from 6 AM to 4 PM military time and is given in single integers with no 15 minute or 30 minute increments.
  return Math.floor((Math.random() * 10) + 6);
}

const TOUR_DURATION = () => {
  // Ranges from 2 to 10 miles in integers.
  return (Math.random() * 8) + 2;
}

const TOUR_DIFFICULTY = () => {
  // Ranges from 1 to 5 in integers.
  return (Math.floor(Math.random() * 4) + 1);
}





// Seeding function definitions are below. ----------------------------------------------------------

const createStables = (stables) => {
  for (let i = 0; i < stables.length; i++) {
    new Stable({
      name: stables[i].name,
      address: stables[i].address,
      description: stables[i].description,
      image: stables[i].image,
      state: stables[i].state,
      city: stables[i].city,
    }).save().then(stable => {
      STABLE_IDS.push(stable.id);
      console.log(`${stable.name} stable added.`);
    })
}

const createTours = (tours) => {
  for (let i = 0; i < tours.length; i++) {
    new Tour({
      name: tours[i].name,
      image: tours[i].image,
      stable: TOUR_IDS[Math.floor(Math.random() * TOUR_IDS.length)],
      terrain: `${TOUR_TERRAIN[Math.floor(Math.random() * TOUR_TERRAIN.length)]} / ${TOUR_TERRAIN[Math.floor(Math.random() * TOUR_TERRAIN.length)]}`,
      description: TOUR_DESCRIPTIONS[Math.floor(Math.random() * TOUR_DESCRIPTIONS.length)],
      start_time: TOUR_START_TIMES(),
      difficulty: TOUR_DIFFICULTY(),
      duration: TOUR_DURATION(),
    }).save().then(tour => {
      TOUR_IDS.push(tour.id);
      console.log(`${tour.name} tour added.`)
    })
  }
}

const createHorses = (horses) => {
  for (let i = 0; i < horses.length; i++) {
    let tourId = TOUR_IDS[Math.floor(Math.random() * TOUR_IDS.length)];
    let stableId = Tours.find(tourId).stable; // <---------------------------- Is this valid Mongoose syntax?
    new Horse({
      name: horses[i].name,
      image: horses[i].image,
      description: HORSE_DESCRIPTIONS[Math.floor(Math.random() * HORSE_DESCRIPTIONS.length)],
      breed: HORSE_BREEDS[Math.floor(Math.random() * HORSE_BREEDS.length)],
      color: HORSE_COLOR[Math.floor(Math.random() * HORSE_COLOR.length)],
      height: HORSE_HEIGHT(),
      stable: stableId,
      tours: tourId,
    }).save().then(horse => {
      HORSE_IDS.push(horse.id);
      console.log(`${horse.name} horse added.`)
    })
  }
}






// Seeding functions are envoked below with starter arrays. ----------------------------------------------------------

createStables(STABLE_STARTERS);
createHorses(HORSE_STARTERS);
createTours(TOUR_STARTERS);








// Sample seeding code from Suhaib is below. ----------------------------------------------------------

// const in_n_out_handyman_service_hours = {
//   mon: "9:00 am - 5:00 pm",
//   tue: "9:00 am - 5:00 pm",
//   wed: "9:00 am - 5:00 pm",
//   thurs: "9:00 am - 5:00 pm",
//   fri: "9:00 am - 5:00 pm",
//   sat: "9:00 am - 5:00 pm",
//   sun: "Closed"
// }

// new Horse({
//   name: "Aspen",
//   description: "A reserved 11 year old with an interrupted blaze marking on her face, and her four leg markings consist of nothing on her right front leg, a half stocking on her left front leg.",
//   breed: "Nangchen",
//   color: "Bay",
//   height: (),
//   stable: {},
//   tours: {},
//   image: {}
// }).save();

// new User({ // Don't create a new user though since it'll save password to db instead of pw hash, just an example to show how the function works
//   username: 'new_user',
//   email: 'guy@gmail.com',
//   password: 'hunter12'
// }).save(function (err, user) {
//   console.log(user.id)
// });


// --Proper way of doing references with seeds file--
// new Group({
//   title: "absolutely utmost newest Seed",
//   desc: "seed desc",
//   location: "online",
//   organizer: "Seed master"
// }).save()
//   .then(group => {
//     new Event({
//       title: "seed event",
//       desc: "seed event description",
//       location: "soil",
//       group_id: group._id,
//       event_start: "2020-03-01",
//       event_end: new Date("December 15, 2021")
//     }).save()
//       .then(event => {
//         group.events.push(event._id)
//         group.save()
//       })
//   }).then(console.log("done seeding"))




// new Group({...})
//   .save()
//   .then(group => { 
//     new Event({...})
//     .save()
//     .then(event => {}) 
//   })
//   .then(console.log("done"))