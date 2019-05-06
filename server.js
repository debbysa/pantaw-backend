const express = require('express')
const path = require('path')
const app = express()

//import method override
const methodOverride = require('method-override')

//membuat middleware method Override
app.use(methodOverride("_method"))

// app.get('/', function (req, res) {
//     res.send('GET request to the homepage')
// })

app.use(express.urlencoded({ extended: true }))

// include router and routing
app.use('/admin', require('./routes/adminRouter'))

app.listen(3000, function () {
    console.log("server running")
})