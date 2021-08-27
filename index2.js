const {nextIssTimesForMyLocation} = require('./iss_promised');
const {printPassTimes} = require('./index.js');

// fetchMyIP()
// .then(fetchCoordsByIP)
// .then(fetchIssFlyOverTimes)
// .then((body) => console.log(body))

nextIssTimesForMyLocation()
.then((printPassTimes))
.catch((error) => {
  console.log('there was an error', error.message);
});

//^print pass times from function in index.js