const mongoose = require('mongoose')
// const root = 'mongodb://'
// const host = 'localhost'
// const dbName = 'exampleDB'
// const connectionUrl = `${root}${host}${dbName}`
// mongoose.connect(connectionUrl)

//DATA EXAMPLE THINGY
// let data
// //this returns a promise
// mongoose.connect('mongodb://localhost/exampleDB', { userNewUrlParser: true }).then(connection => {
//     data = connection
// }).catch(err => {
//     console.error(err)
// })

mongoose.connect('mongodb://localhost/exampleDB', { userNewUrlParser: true })

mongoose.connection.on('connected', () => {
    console.log('connected')
})

const Cat = mongoose.model('Cat', {
    name: {
        type: String
    }
})

//Every time you run this with node, it will create a new cat
const kitty = new Cat({ name: 'pissy' })
kitty.save()

//This finds cats in the cat family
Cat.find(
    {}
        .then(data => {
            console.log(data)
        })
        .catch(err => {
            console.error(err)
        })
)
