const APIKEY = require("../config/keys").googleAPIKey;
const NodeGeocoder = require('node-geocoder');
 
const options = {
  provider: 'google',
 
  // Optional depending on the providers
  httpAdapter: 'https', // Default
  apiKey: APIKEY, // for Mapquest, OpenCage, Google Premier
  formatter: null // 'gpx', 'string', ...
};
 
const geocoder = NodeGeocoder(options);
 
const getGeoData = async(fullAddress, fn) => {
    const response = await geocoder.geocode(fullAddress, function(err, res){ fn(res[0])})
    return response    
}

// Using callback
// geocoder.geocode(fullAdress, function(err, res) {
//   return(res);
// });
 
// Or using Promise
// geocoder.geocode('29 champs elysée paris')
//   .then(function(res) {
//     console.log(res);
//   })
//   .catch(function(err) {
//     console.log(err);
//   });

module.exports = getGeoData
