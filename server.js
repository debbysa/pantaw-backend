const express = require('express')
const app = express()

app.use(express.json())

// include router /admin
app.use('/admin', require('./routes/adminRouter'))

// include router /pemateri

app.listen(3000, function () {
    console.log("server running")
})