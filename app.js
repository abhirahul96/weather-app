const request = require('request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
const { argv } = require('process')

const address = process.argv[2]
if (address) {
    geocode(address, (error, { latitude, longitude, location }={}) => {
        if (error) {
            return console.log(error)
        }
        // console.log('Error', error)
        // console.log('Data', data)
        forecast(longitude, latitude, (error, forecastData) => {
            if (error) {
                return console.log(error)
            }
            // console.log('Error', error)
            // console.log('Data', data)

            console.log(location)
            console.log(forecastData)
        })
    })

} else {
    console.log("Provide location!")
}





































































// const url = 'http://api.weatherstack.com/current?access_key=489b72c9da66e4ebaab3e92651db10d9&query=37.8267,-122.4233&units=f'

// request({ url: url, json: true }, (error, response) => {
//     // console.log(response)
//     // const data = JSON.parse(response.body)
//     // console.log(data.current)
//     // console.log(response.body.current)
//     if(error){
//         console.log("Unable to connect to weather service!")
//     }else if(response.body.error){
//         console.log("Unable to find location!")
//     }else{
//         const data = response.body.current
//         console.log(`${data.weather_descriptions}. It is currently ${data.temperature} degree out. It feels like ${data.feelslike} degree out.`)    
//     }
//   })

// const geocodeUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/india.json?access_token=pk.eyJ1IjoiYWJoaTQ5OTQiLCJhIjoiY2tjd2JmMmN3MDJwZjJybXk1ZzlyYjU4cSJ9.ZNMCOnWKyfojWgHDiQEKSA&limit=1"
// request({ url: geocodeUrl, json: true }, (error, response) => {
//     // console.log(response.body)
//     if (error) {
//         console.log("Unable to reach mapbox services")
//     } else if (response.body.message || response.body.features.length===0) {
//         console.log("Unable to find location")
//     }
//     else {
//         const data = response.body.features[0]
//         console.log(data.center[0], data.center[1])
//     }
// })






















// console.log('Starting')


// setTimeout(() => {
//     console.log('2sec timer')
// }, 2000);

// setTimeout(() => {
//     console.log('0sec timer')
// }, 0);


// console.log('Stopping')




















