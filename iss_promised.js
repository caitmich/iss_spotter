const request = require('request-promise-native');

/*
 * Requests user's ip address from https://www.ipify.org/
 * Input: None
 * Returns: Promise of request for ip data, returned as JSON string
 */

const fetchMyIP = function() {
return request('https://api.ipify.org/?format=json')};

const fetchCoordsByIP = function(body) {
  const ip = JSON.parse(body).ip;
  return request(`https://freegeoip.app/json/${ip}`)
};

const fetchIssFlyOverTimes = function(body) {
  const {latitude, longitude} = JSON.parse(body);
  return request(`http://api.open-notify.org/iss-pass.json?lat=${latitude}&lon=${longitude}`)
};

const nextIssTimesForMyLocation = function(){
  return fetchMyIP()
  .then(fetchCoordsByIP)
  .then(fetchIssFlyOverTimes)
  .then((data) => {
    const {response} = JSON.parse(data);
    return response;
  })
};

module.exports = {nextIssTimesForMyLocation};