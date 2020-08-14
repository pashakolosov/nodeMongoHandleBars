const express = require('express')
const mongoose = require('mongoose')
const expresshbs = require('express-handlebars')

const port = process.env.port || 3000;

const app = express();
const hbs = expresshbs({
    defaultLayout: 'main', 
    extname: 'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')

async function start() {
    try {
        await mongoose.connect(
            'mongodb+srv://pasha:gerfley3256@cluster0-zogh1.mongodb.net/todo?retryWrites=true&w=majority', 
            {
                useNewUrlParser: true,
                useFindAndModify: false
            })

        app.listen(port, () => console.log(`server has been started on ${port} port`))

    } catch(e) {
        console.log(e)
    }
}

start()

