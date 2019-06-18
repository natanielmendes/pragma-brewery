let fs = require('fs')


let Beer = (app) => {
    app.get('/beers/', (req, res) => {
        try {
            let beerModel = require('../models/beerModel')
            let beerController = require('../controllers/beerController')
            let randomTemperature = require('../util/randomTemperature')

            let beersList = JSON.parse(fs.readFileSync(__dirname + '/../mocks/beersMock.json', 'utf8'))
            let beers = beersList.map((d) => new beerModel(d))
            let builder = beerController.build(beers, randomTemperature)
            
            res.send(builder.statusJson())
        } catch (error) {
            res.status(503).send(`Please try again later: ${error}`)
        }
    })
}

module.exports = Beer
