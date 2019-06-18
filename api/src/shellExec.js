let fs = require('fs')

let beerModel = require('./models/beerModel')
let beerController = require('./controllers/beerController')
let randomTemperature = require('./util/randomTemperature')

let beersList = JSON.parse(fs.readFileSync(__dirname + '/mocks/beersMock.json', 'utf8'))
let beers = beersList.map((d) => new beerModel(d))
let builder = beerController.build(beers, randomTemperature)

setInterval(() => {
    console.log('---------------------------------------------------')
    builder.statusStrings().forEach((beerGroup) => console.log(beerGroup))
}, 3000)
