
var topTen = [
  {
    "full_name": "Timmy Smith",
    "date": " 10/10/17",
    "score": "1090"

  },

  {
    "full_name": "Luke Motts",
    "date": " 10/02/17",
    "score": "90"

  },


  {
    "full_name": "Carly Albani",
    "date": " 10/14/17",
    "score": "777"

  },

  {
    "full_name": "Alberto Juaroz",
    "date": " 02/01/17",
    "score": "132"

  },

  {
    "full_name": "Vladimir Mugashov",
    "date": " 02/03/2017",
    "score": "3290"

  },
  {
    "full_name": "Tyshawn Carter",
    "date": " 08/20/17",
    "score": "450"

  },
  {
    "full_name": "Tim Lee",
    "date": " 10/10/15",
    "score": "422"

  },
  {
    "full_name": "Muhammad Abdul-Rahman",
    "date": " 12/05/16",
    "score": "419"

  },
  {
    "full_name": "Diana Clottey",
    "date": " 01/31/17",
    "score": "424"

  },
  {
    "full_name": "Bobby Cardan",
    "date": " 02/11/17",
    "score": "516"

  }

];



topTen.sort(function(a, b) {
  return b.score - a.score;
});



  $(document).ready(function(){



$("#topten tbody");
for(var i=0; i<topTen.length; i++){
    $("#topten tbody").append("<tr>");
      $("#topten tbody").append( "<td>" + topTen[i].full_name + "</td>" );
        $("#topten tbody").append( "<td>" + topTen[i].score + "</td>" );
        $("#topten tbody").append( "<td>" + topTen[i].date + "</td>" );
      $("#topten tbody").append("</tr>");

  


  
 

}
  

  });
