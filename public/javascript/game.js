
$(document).ready(function(){
  gameScreen(0);
  var playerCount = 0;

    $(window).keypress(function (e) {
    if (e.keyCode === 0 || e.keyCode === 32) {
      window.location.href = "/mainmenu"
    }
  })

  function gameScreen(screenNumber) {

    var gameContainer = document.getElementById("gameContainer");
    // make async call to server to get requested gameScreen html
    fetch('/game/getNewGameScreen/' + screenNumber).then(function(response) {
      if (response.status !== 200) {
        console.log('problem with ajax call! ' + response.status + " msg: " +
        response.value);
        return;
      }
      response.text().then(function(data) {
        // send the html returned back to the
        //console.log("received back: " + data);
        gameContainer.innerHTML = data;
      })
    });
  }



  function savePlayerName(playerName, playerId){
    $.ajax({
      type: "POST",
      url: '/game/savePlayerName/' + playerId + "/"+playerName,
      success: function(){

      }
    });

  }

  function saveStartMonth(month){
    $.ajax({
      type: "POST",
      url: '/game/saveStartMonth/' + month,
      success: function(){

      },
    });







  }


  function saveProfession(profession){
    $.ajax({
      type: "POST",
      url: '/game/saveProfession/' + profession,
      success: function(){

      },
    });


  }

$("body").on("click", "#next2", function(){
  gameScreen(2);
var name =   $("#wagonLeader").val();
  savePlayerName(name, playerCount++);

});


$("body").on("click", "#bankerMenuItem", function(){
  gameScreen(1);
  saveProfession("banker");

})



$("body").on("click", "#carpenterMenuItem", function(){
  gameScreen(1);
  saveProfession("carpenter");

})


$("body").on("click", "#farmerMenuItem", function(){
  gameScreen(1);
  saveProfession("farmer");

})




$("body").on("click", "#march", function(){
  saveStartMonth("march");
  getSettings();

});

$("body").on("click", "#april", function(){
  saveStartMonth("april");
  getSettings();

});

$("body").on("click", "#may", function(){
  saveStartMonth("may");
  getSettings();

});
$("body").on("click", "#june", function(){
  saveStartMonth("june");
  getSettings();

});
$("body").on("click", "#july", function(){
  saveStartMonth("july");
  getSettings();

});


$("body").on("click", "#next3", function(){

  $("input").each(function(){
    var playerName = $(this).val();

    savePlayerName(playerName, playerCount++);


  });
  gameScreen(3);

})






});




  function getSettings() {

    // make async call to server to get requested gameScreen html
    fetch('/game/getSettings/').then(function(response) {
      if (response.status !== 200) {
        console.log('problem with ajax call! ' + response.status + " msg: " +
        response.value);
        return;
      }
      response.text().then(function(data) {
        gameContainer.innerHTML = data;

      })
    });
  }
