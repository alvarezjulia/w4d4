const express = require('express')
const app = express()

app.set('views', __dirname + '/views')
app.set('view engine', 'hbs')

hbs.registerPartials(__dirname + '/views/partials')
