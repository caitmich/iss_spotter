// index.js
// const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss');
const { nextISSTimesForMyLocation } = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned IP:' , ip);
// });

/////////////////////////

// fetchCoordsByIP("149.248.176.163", (error, data) => {
//   if (error) {
//     console.log('error:', error);
//     return;
//   }

//   console.log(data);
// });

//////////////////////

// fetchISSFlyOverTimes({ latitude: 43.6591, longitude: -79.4626 }, (error, data) => {
//   if (error) {
//     console.log('error:', error);
//     return;
//   }
    
//   console.log('Here are your fly over times:', data);
// });

///////////////////////

const printPassTimes = function(passTimes) {
  for(const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds`)
  }
}

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  printPassTimes(passTimes);
});