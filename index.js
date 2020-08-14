const express = require('express')
const mongoose = require('mongoose')

const port = process.env.port || 3000;

const app = express();

async function start() {
    try {
        await mongoose.connect('', {
            useNewUrlParser: true,
            useFindAndModify: false
        })

        app.listen(port, () => console.log(`server has been started on ${port} port`))

    } catch(e) {
        console.log(e)
    }
}

start()

