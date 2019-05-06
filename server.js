const express = require('express')
const path = require('path')
const app = express()

//import method override
const methodOverride = require('method-override')

//membuat middleware method Override
app.use(methodOverride("_method"))

app.use(express.urlencoded({ extended: true }))

// include router /admin
app.use('/admin', require('./routes/adminRouter'))

// include router /pemateri

app.listen(3000, function () {
    console.log("server running")
})