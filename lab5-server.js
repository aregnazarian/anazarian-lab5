const express = require('express')
const app = express()


app.listen(1337, function () {
  console.log('Example app listening on port 1337!')
})


app.get('/',   function   (req,   res)   {
res.sendFile('views/index.html',   {root:   __dirname   }) })


app.use(express.static('public'))
