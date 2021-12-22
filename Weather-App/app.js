const request = require('postman-request');

const url = 'http://api.weatherstack.com/current?access_key=ef2f460d8a0382373a4c290a6a4720f1&query=37.8267,-122.4233&units=f'

request({ url:url, json: true }, (error, response) => {
    console.log(response.body.current.weather_descriptions[0] + `. It is currently `+ response.body.current.temperature + ` degrees out. It feels like ` + response.body.current.feelslike + ` degrees` )
})

//Geocoding
//Address -> Lat/Long -> weather






