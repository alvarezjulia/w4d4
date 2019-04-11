const express = require('express')
const app = express()

app.set('views', __dirname + '/views')
app.set('view engine', 'hbs')

app.get('/', (req, res) => {
    res.render('index', {
        name: 'Sylvie',
        // greeting: '<h1>Hello Sylvie</h1>',
        bool: Math.round(Math.random())
    })
})

app.get('/games', (req, res) => {
    res.render('games', {
        gamesList: ['Counter-Strike', 'BF3', 'Sims', 'Street Fighter'].map(el => el.toUpperCase()),
        consoleObj: {
            Sony: 'PS4',
            Nintendo: 'Switch',
            Microsoft: 'Xbox One'
        },
        country: {
            name: 'Japan'
        }
    })
})

app.listen(3000)
