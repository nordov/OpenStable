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

const HORSE_HEIGHT = () => {
  return (Math.random() * 24) + 48;
}

const STABLES = [
  {
    name: "California Riding Academy",
    address: "650 Cape Breton Dr",
    description: "The business runs riding lessons, and its horse trainer has trained for disciplines including Reining, Western, Working Cow Horse, and Halter.",
    city: "San Francisco Bay Area",
    state: "CA",
    image: ""
  },
  {
    name: "Patrick Seaton Stables",
    address: "1500 Butterfield Rd",
    description: "A facility with a covered and lighted arena, two outdoor arenas, a round arena with pea gravel footing, a dirt and gravel riding path, trail obstacles, and on-site owners.",
    city: "San Francisco Bay Area",
    state: "CA",
    image: ""
  },
  {
    name: "Five Star Equestrian",
    address: "7220 Johnston Rd",
    description: "A family-run horse boarding facility with 50 indoor stalls that are cleaned every day. Staff feed horses alfalfa, grass hay, or a combination twice a day and stores its hay in a Butler barn that protects against rain damage.",
    city: "San Francisco Bay Area",
    state: "CA",
    image: ""
  },
  {
    name: "Palo-Mar Stables",
    address: "2116 Skyline Blvd",
    description: "The business has three riding arenas, including one covered arena for year-round riding. Clients say that Beach Lake Stables has patient and passionate horse trainers.",
    city: "Daly City",
    state: "CA",
    image: ""
  },
  {
    name: "Mar Vista Stable",
    address: "2152 Skyline Blvd",
    description: "The company's boarding space includes single paddocks with shelter, a shared pasture with shelter, barn stalls, free trailer parking, wash racks, and private tack rooms.",
    city: "Daly City",
    state: "CA",
    image: ""
  },
  {
    name: "Miwok Livery Stables",
    address: "701 Tennessee Valley Rd",
    description: "The horse boarding facility provides hay twice a day, fresh water 24 hours a day, cleaning once a day, and space to exercise horses.",
    city: "San Francisco Bay Area",
    state: "CA",
    image: ""
  },
  {
    name: "Green Gulch Farm Zen Center",
    address: "1601 Shoreline Hwy",
    description: "Has been serving the area since 2002 and includes a lighted outdoor arena with sand and shredded rubber footing, a 60-foot round pen, and a deluxe wash rack.",
    city: "San Francisco Bay Area",
    state: "CA",
    image: ""
  },
  {
    name: "Millwood Ranch",
    address: "1 Picardo Ranch Rd",
    description: "The company's boarding space includes single paddocks with shelter, a shared pasture with shelter, barn stalls, free trailer parking, wash racks, and private tack rooms.",
    city: "San Francisco Bay Area",
    state: "CA",
    image: ""
  },
  {
    name: "Left Coast Tours",
    address: "121 7th St",
    description: "A facility with a covered and lighted arena, two outdoor arenas, a round arena with pea gravel footing, a dirt and gravel riding path, trail obstacles, and on-site owners.",
    city: "San Francisco Bay Area",
    state: "CA",
    image: ""
  },
]

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
]

const TOUR_TERRAIN = [
  
]

const TOUR_START_TIMES = () => {
  // ranges from 6 AM to 4 PM military time and is given in single integers with no 15 minute or 30 minute increments
  return Math.floor((Math.random() * 10) + 6);
}

const TOUR_DURATION = () => {
  return (Math.random() * 8) + 2;
}

const TOUR_DIFFICULTY = () => {
  return Math.floor(Math.random() * 10);
}

// https://open-stable-app-dev.s3-us-west-1.amazonaws.com/stable_23.png

// https://open-stable-app-dev.s3-us-west-1.amazonaws.com/horse_10.png

// https://open-stable-app-dev.s3-us-west-1.amazonaws.com/tour_17.png








const in_n_out_handyman_service_hours = {
  mon: "9:00 am - 5:00 pm",
  tue: "9:00 am - 5:00 pm",
  wed: "9:00 am - 5:00 pm",
  thurs: "9:00 am - 5:00 pm",
  fri: "9:00 am - 5:00 pm",
  sat: "9:00 am - 5:00 pm",
  sun: "Closed"
}

new Horse({
  name: "Aspen",
  description: "A reserved 11 year old with an interrupted blaze marking on her face, and her four leg markings consist of nothing on her right front leg, a half stocking on her left front leg.",
  breed: "Nangchen",
  color: "Bay",
  height: (),
  stable: {},
  tours: {},
  image: {}
}).save();


new User({ // Don't create a new user though since it'll save password to db instead of pw hash, just an example to show how the function works
  username: 'new_user',
  email: 'guy@gmail.com',
  password: 'hunter12'
}).save(function (err, user) {
  console.log(user.id)
});
--Proper way of doing references with seeds file--
new Group({
  title: "absolutely utmost newest Seed",
  desc: "seed desc",
  location: "online",
  organizer: "Seed master"
}).save()
  .then(group => {
    new Event({
      title: "seed event",
      desc: "seed event description",
      location: "soil",
      group_id: group._id,
      event_start: "2020-03-01",
      event_end: new Date("December 15, 2021")
    }).save()
      .then(event => {
        group.events.push(event._id)
        group.save()
      })
  }).then(console.log("done seeding"))