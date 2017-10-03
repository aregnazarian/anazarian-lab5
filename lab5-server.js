const express = require('express')
const app = express()
app.use("/public",express.static(__dirname + '/public'))



app.get('/',   function   (req,   res)   {
res.sendFile('views/index.html',   {root:   __dirname   }) })






app.listen(1337, function () {
  console.log('Example app listening on port 1337!')
})
