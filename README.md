# Pragma Brewery NodeJS Backend

This project was designed to have only a backend which generates random temperatures as no sensors exist at this time to update temperatures for each truck in a database for this alpha version.

## To Run
### Install the dependencies

#### NPM V6.9.0
```
npm install
```
#### YARN V1.6.0
```
yarn
```

### Run locally

It is possible to run the backend layer in two ways: 

The first is a simple `log` system that prints the current temperature of the beers on the console. You can run this system with the command below:

```
npm start
```

### Upcoming features in version 2 (next version)

- /api root folder with contents from src and routes to following resources:
    ### Add truck with relevant information
    -> POST /truck
    ### Add beer to truck
    -> POST /truck/:truckId/beer/
    ### Add new beer with information
    -> POST /beer/
    ### Update temperature regarding beer in the truck
    -> POST /truck/:truckId/beer/:beerId/temperature
    ### Get all beers from truck id
    -> GET /truck/:truckId/beers
    ### Get beer information
    -> GET /beers/:beerId

- /src/util/RandomTemperature.js needs to be removed as it only currently exists to replace data which should be modeled in a database with trucks, beer boxes, beers and so on.