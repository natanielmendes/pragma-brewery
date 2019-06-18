# Pragma Brewery NodeJS Backend
This project was designed to have a backend generating random temperatures as no sensors exist to update temperatures for each truck in a database for this alpha (0.0.1) version.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install the software and how to install them

```
node v8.11.4 or higher
```

### Install the dependencies (NPM or YARN)

#### NPM V6.4.0 or higher

```
npm install
```

#### YARN V1.6.0 or higher

```
yarn
```

## Run project
### Run as one-liner script
```
npm run-script shell
```
### Run as web-server
```
npm start
```

## Test project
#### NPM V6.9.0 or higher
```
npm test
```
#### YARN V1.6.0 or higher
```
yarn run test
```

## Current features in alpha version
### Get all beers information with current **temperature**
* GET http://localhost:3000/beers (**have fun** pasting it in browser while web-server mode is running)

## Test case results for Pragma Brewery project
```
> pragma-brewery@0.0.1 test /home/nataniel/Projects/pragma-brewery
> jest

 PASS  test/beer-constraint-validations.test.js
  ✓ Empty beers array list warning (6ms)
  ✓ Empty beers string list warning
  ✓ Null beers string list warning (1ms)
  ✓ Empty string as temperature generator (1ms)
  ✓ Null temperature generator warning (1ms)

Test Suites: 1 passed, 1 total
Tests:       5 passed, 5 total
Snapshots:   0 total
Time:        1.247s
Ran all test suites.
```

## Upcoming features in version 2 (next version)
### Add truck with relevant information
* POST /truck
### Add beer box (container) with relevant information
* POST /beer-box
### Add beer box to truck
* POST /truck/:truckId/beer-box/
### Add new beer box with information (such as temperature and bottle quantity)
* POST /beer-box/
### Update beer box temperature 
* PUT /beer-box/:beerBoxId
### Get all information from truck (such as bottle boxes currently carried on it)
* GET /truck/:truckId/
### Get beer box information
* GET /beer-box/:beerBoxId

## FAQ
### How will beers be added to a truck in version 2.0?
* *Beer boxes* will contain *beers* from only one type. So, *beer boxes* will have a temperature and will be added to a truck

### Why temperature is on beers and not in beer boxes in version 2.0?
* This experimental version does not need all complexity regarding *beer boxes* and *trucks* as we don't have a database to relate our entities yet

### How can I change the port which web-server runs
* In version 2.0 here will be a config folder under api folder with database and API connection configuration. However, for this version just replace 3000 from **index.js** file or run the server using the command below (3001 as chosen port):
```
APP_PORT=3001 npm start
```

## Built With

* [Node.js](https://nodejs.org/en/) - JavaScript runtime built on Chrome's V8 JavaScript engine.
* [express](https://expressjs.com/) - Fast, unopinionated, minimalist web framework for Node.js
* [jest](https://jestjs.io/) - Jest is a delightful JavaScript Testing Framework with a focus on simplicity.

## Authors
* **Nataniel Carvalho** - (https://github.com/natanielmendes)