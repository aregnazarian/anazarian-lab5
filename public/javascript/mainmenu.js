var audio = new Audio('/public/music/song.mp3');
function toggleSound() {
	var currentSound = sessionStorage.getItem('soundStatus');
	if(currentSound == "true") {
		currentSound = "false";
	}
	else {
		currentSound = "true";
	}
	sessionStorage.setItem('soundStatus', currentSound)

    var myElement = document.getElementById("soundMenuItem");
    myElement.innerHTML = "Turn Sound " + (currentSound ? "Off" : "On &nbsp;&nbsp;");

	//(window["isSoundOn"]) ? isSoundOn = true : isSoundOn = false;
	checkSound();

}




function checkSound() {

	var currentSound = sessionStorage.getItem('soundStatus');

	if (currentSound == "true") {
		// start music
		audio.play();
	} else {
	    // Stop the music
	    audio.pause();
	}

}





$(document).ready(function(){

  checkSound();


  $("#soundMenuItem").click(function(){
    toggleSound();

  });

$("#game").click(function(){
  window.location.href ="/game";




});


$("#topten").click(function(){
  window.location.href ="/topten";



});

// music

// function checkSound() {
//
//     var currentSound = sessionStorage.getItem('soundStatus');
//
//     console.log(currentSound);
//     if (currentSound == "true") {
//         // start music
//         audio.play();
//     } else {
//         // Stop the music
//         audio.pause();
//     }
//
// }

// function toggleSound() {
//     var currentSound = sessionStorage.getItem('soundStatus');
//     if(currentSound == "true") {
//         currentSound = "false";
//     }
//     else {
//         currentSound = "true";
//     }
//     console.log(currentSound);
//     sessionStorage.setItem('soundStatus', currentSound)
//
//     var myElement = document.getElementById("soundMenuItem");
//     myElement.innerHTML = "Turn Sound " + (currentSound ? "Off" : "On &nbsp;&nbsp;");
//
//     //(window["isSoundOn"]) ? isSoundOn = true : isSoundOn = false;
//     checkSound();
//
// }


});
