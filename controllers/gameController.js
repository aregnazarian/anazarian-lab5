var exports = module.exports = {};
var leader = {};
exports.playerNames= [];
exports.settings = [];
// Create an empty array to contain our screens
exports.startGameScreens = [];
// create a string that will contain the first screen HTML
var startGame1 = "<p>Many kinds of people made the trip trip to Oregon.</p>"
+ "<p>You may:</p>"
+ "<ol id=\"setupQuestions1\" >"
+ "<li id=\"bankerMenuItem\">Be a banker from Boston</li>"
+ "<li id=\"carpenterMenuItem\">Be a carpenter from Ohio</li>"
+ "<li id=\"farmerMenuItem\">Be a farmer from Illinois</li>"
+ "<li id=\"differencesMenuItem\">Find out the differences between the choices</li>"
+ "</ol>"
+ "<div id=\"selectedOption\">What is your choice?</div>";
// add our screen to the exports so it is available
exports.startGameScreens.push(startGame1);

var startGame2  = '  <label>What is the name of your wagon leader? </label>' +
    '<input id="wagonLeader" type="text" placeholder="Leader Name">'+
    '<button id="next2"> Next </button>';
    exports.startGameScreens.push(startGame2);
var startGame3 = `
<form>
<ul>
<li>
<label>
Player Name:
</label>
<input type="text" placeholder="Player Name">
</li>
<li>
<label>
Player Name:
</label>
<input type="text" placeholder="Player Name">
</li>
<li>
<label>
Player Name:
</label>
<input type="text" placeholder="Player Name">
</li>
<li>
<label>
Player Name:
</label>
<input type="text" placeholder="Player Name">
</li>
<li>
<label>
Player Name:
</label>
<input type="text" placeholder="Player Name">
</li>
 <button type="button" id="next3"> Next </button>
 </ul>

 </form>
`;
exports.startGameScreens.push(startGame3);
var startGame4 =  `
<ol>
<li id = 'march'> March </li>
<li id = 'april'> April </li>
<li id= 'may'> May </li>
<li id='june'> June </li>
<li id = 'july'> July </li>




</ol>

`;


exports.startGameScreens.push(startGame4);





exports.getNewGameScreen = function (req,res){
  var gameScreen = exports.startGameScreens[req.params.screenId];
  res.setHeader('Content-Type', 'application/json');
   res.send(gameScreen);
}


exports.saveProfession = function (req,res){
  leader["profession"] = req.params.profession;
  res.send(200);
}

exports.savePlayerName = function(req, res){
var stuff = {};
  if(req.params.playerId == 0){

    leader["wagonLeader"] = req.params.playerName;
    leader["bank"] = 1500;
    leader["playerId"] = req.params.playerId;
    exports.settings.push(leader);


  }
  else{
    stuff["Member"] = req.params.playerName;
    stuff["playerId"] = req.params.playerId;
    exports.settings.push(stuff);




  }
  res.sendStatus(200);

}

exports.saveStartMonth = function(req,res){
  exports.settings[0]["startMonth"] = req.params.startMonth;
  res.send(200);

}
//
exports.getSettings = function (req,res){
  res.setHeader('Content-Type', 'text/html');


  var code =  `<p> Wagon Leader:` + exports.settings[0].wagonLeader;
  for(var i=1; i<exports.settings.length; i++){
    code += `<br/>Member:` + exports.settings[i].Member;
  }
  code+= `<br/> Your profession:` + exports.settings[0].profession

  code+= `<br/> Current bank account:` + exports.settings[0].bank
code+=  `<br/>Month Leaving:` + exports.settings[0].startMonth;

  res.send(code);

}
