let express = require('express')
let app = express()

require('./routes/beerRoute')(app)

let APP_PORT = process.env.APP_PORT || 3000

app.listen(APP_PORT, () => console.log(`App listening on port ${APP_PORT}!`))