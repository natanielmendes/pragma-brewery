const fs = require('fs')

let beerController = require('./controllers/BeerController')
let beerModel = require('./models/Beer')
let randomTemperature = require('./util/RandomTemperature')

let beersList = JSON.parse(fs.readFileSync('./src/mocks/beers.json', 'utf8'))

let beers = beersList.map((d) => new beerModel(d))
let manager = beerController.init(beers, randomTemperature)

setInterval(() => {
    manager.run().forEach((beerGroup) => console.log(beerGroup))
    console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@')
}, 3000)
