const request = require("postman-request");

const forecast = (longitude, latitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=e84129bc20b99e3b1452c36379b4e3ff&query=" +
    latitude +
    "," +
    longitude;

  request({ url, json: true }, function (error, { body }) {
    if (error) {
      callback("Unable To connect To Weather Service!", undefined);
    } else if (body.error) {
      callback("unable to Find Location", undefined);
    } else {
      callback(
        undefined,
        body.current.weather_descriptions[0] +
          ". It is currently " +
          body.current.temperature +
          " degrees out. It feels like " +
          body.current.feelslike +
          " degrees Out."
      );
    }
  });
};

module.exports = forecast;
