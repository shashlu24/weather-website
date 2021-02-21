const request = require("postman-request");

const geocode = (address, callback) => {
  const url =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    encodeURIComponent(address) +
    ".json?access_token=pk.eyJ1Ijoic2luZ2hzaGFzaGFuazMyIiwiYSI6ImNra251YmNxMjB3cXIyb25zY29mNmxjNW4ifQ.y_ZrDWQmhCCukxlaM4NgBA&limit=1";
  request({ url, json: true }, function (error, { body }) {
    if (error) {
      callback("Unable To connect To location Service!", undefined);
    } else if (body.features.length === 0) {
      callback("unable to Find Location");
    } else {
      callback(undefined, {
        lattitude: body.features[0].center[0],
        longitude: body.features[0].center[0],
        location: body.features[0].place_name,
      });
    }
  });
};
module.exports = geocode;
