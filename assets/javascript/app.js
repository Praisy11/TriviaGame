$(document).ready(function(){

  var totalQue=5
  answers=["Riverdale","Old Betsy ","Jughead","Reggie","Pop Tates"],
  data=$("input"),
  correctAns=0,
  incorrectAns=0,
  blank=0,
  counter=30;

  function scoreCount(){
    for (var i=0; i<data.length; i++){
      if (data[i].checked){
        if(answers.indexOf(data[i].value) !== -1){
          incorrectAns++;
        }
        else{
          correctAns ++;
        }

        }
      }
 
      var totalAns=correctAns+incorrectAns;
      console.log(totalAns);
      if(totalAns!==totalQue){
        blank=totalQue - totalAns;
      }
      $("#correct").html("" + correctAns);
      $("#incorrect").html("" + incorrectAns);
      $("#blank").html("" + blank);

    }
    $("#play").click(function() {
      $("#start").show("slow");
      $("#quiz").show("slow");

      
      var startTimer = setInterval(function() {
          counter--;
          $("#countdown").html(counter);
         

          if (counter === 0) {
              clearInterval(timer);
              $("#quiz, #timer").show("slow");
              $("#results").show("slow");
              scoreCount();
          }
      }, 1000);

  });

  //done button 
  $("#done").click(function() {
      $("#quiz, #timer").hide("slow");
      $("#results").show("slow");
      clearInterval(timer);
      scoreCount();
  });

  //restart button 

  $("#restart").click(function() {
      location.reload();
  });

});