const express = require('express')
const app = express()
var game = require('./controllers/gameController');

app.use("/public",express.static(__dirname + '/public'))



app.get('/',   function   (req,   res)   {
  res.sendFile('views/index.html',   {root:   __dirname   })


});







app.get('/mainmenu',   function   (req,   res)   {
  res.sendFile('views/mainmenu.html',   {root:   __dirname   })


});



app.get('/topten',   function   (req,   res)   {
  res.sendFile('views/topten.html',   {root:   __dirname   })


});


app.get('/game',   function   (req,   res)   {
  res.sendFile('views/game.html',   {root:   __dirname   })


});

app.route("/game/getSettings")
  .get(game.getSettings)
  app.route("/game/getNewGameScreen/:screenId").get(game.getNewGameScreen);

app.route("/game/saveProfession/:profession").post(game.saveProfession);
app.route("/game/savePlayerName/:playerId/:playerName").post(game.savePlayerName);
app.route("/game/saveStartMonth/:startMonth").post(game.saveStartMonth);



app.listen(1337, function () {
  console.log('Example app listening on port 1337!')
})
