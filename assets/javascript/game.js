$(document).ready(function () {

//start music and set page
var player = document.getElementById("gameMusicSource");
player.loop = false;
player.play();
$("#selectionPage").show();
$("#battlePage").hide();
$("#losePage").hide();
$("#winPage").hide();


//set variables for game
var playerAP = 0;
var playerHP = 0;
var enemyHP = 0;
var enemyAP = 0;
var playerChoice = false ;
var enemyChoice = false;
var resetPlayerAP = 0;
var resetPlayerHP = 0;
var resetEnemyAP = 0;
var resetEnemyHP = 0;
var enemyLeft = 3;

//character objects
var marioChar = {
    aP: 15,
    hP: 280,
    source: "./assets/images/mario.png",
}
var linkChar = {
    aP: 20,
    hP: 250,
    source: "./assets/images/link.png",
}
var foxChar = {
    aP: 18,
    hP: 230,
    source: "./assets/images/fox.png",
}
var bowserChar = {
  aP: 10,
  hP: 280,
  source: "./assets/images/Bowser.png",
}
var warioChar = {
  aP: 18,
  hP: 240,
  source: "./assets/images/Wario.png",
}
var waluigiChar = {
  aP: 15,
  hP: 200,
  source: "./assets/images/Waluigi.png",
}

//click events, first select character, then opponent 
$(".selectionImg").on("click", function(playerSelection){
  if (playerChoice === false) {
    $(this).appendTo("#playerSelectionImg");
    playerChoice = true;
  }
  else {
  }
});

$(".selectionEnemyImg").on("click", function(enemySelection){
  if (enemyChoice === false) {
    $(this).appendTo("#enemyImg");
    enemyChoice = true;
  }
  else {
  }
});

//start game button function
$("#startBtn").on("click", function(startGame) {
  if (playerChoice === true && enemyChoice === true) {
    $("#selectionPage").hide();
    $("#battlePage").show();
    $("#losePage").hide();
    $("#winPage").hide();
    var player = document.getElementById("gameMusicSource2");
    player.loop = false;
    player.play();
    charDefiner();
  }
  else {
    alert("Select your characters first!")
  }
})

function charDefiner() {
  if ($(".selectionImg").attr("id") === "marioImg") {
    playerAP = marioChar.aP;
    playerHP = marioChar.hP;
    $("#playerImg").attr("src", marioChar.source)
    oppoDefiner();
  }
  else if ($(".selectionImg").attr("id") === "linkImg") {
    playerAP = linkChar.aP;
    playerHP = linkChar.hP;
    $("#playerImg").attr("src", linkChar.source);
    oppoDefiner();
  }
  else if ($(".selectionImg").attr("id") === "foxImg") {
    playerAP = foxChar.aP;
    playerHP = foxChar.hP;
    $("#playerImg").attr("src", foxChar.source)
    oppoDefiner();
  }
}

function oppoDefiner() {
  if (enemyLeft == 3) {
    if ($(".selectionEnemyImg").attr("id") === "bowserImg") {
      enemyAP = bowserChar.aP;
      enemyHP = bowserChar.hP;
      $("#opponentImg").attr("src", bowserChar.source)
      $("#opponentImg").addClass("bowserChecker")
      $("#upNextImgOne").attr("src", warioChar.source)
      $("#upNextImgOne").addClass("warioChecker")
      $("#upNextImgTwo").attr("src", waluigiChar.source)
      $("#upNextImgTwo").addClass("waluigiChecker")
    }
    else if ($(".selectionEnemyImg").attr("id") === "warioImg") {
      enemyAP = warioChar.aP;
      enemyHP = warioChar.hP;
      $("#opponentImg").attr("src", warioChar.source)
      $("#opponentImg").addClass("warioChecker")
      $("#upNextImgOne").attr("src", bowserChar.source)
      $("#upNextImgOne").addClass("bowserChecker")
      $("#upNextImgTwo").attr("src", waluigiChar.source)
      $("#upNextImgTwo").addClass("waluigiChecker")
    }
    else if ($(".selectionEnemyImg").attr("id") === "waluigiImg") {
      enemyAP = waluigiChar.aP;
      enemyHP = waluigiChar.hP;
      $("#opponentImg").attr("src", waluigiChar.source)
      $("#opponentImg").addClass("waluigiChecker")
      $("#upNextImgOne").attr("src", bowserChar.source)
      $("#upNextImgOne").addClass("bowserChecker")
      $("#upNextImgTwo").attr("src", warioChar.source)
      $("#upNextImgTwo").addClass("warioChecker")
    }
  battleTime()
  }
  else if (enemyLeft == 2) {
    $(".upNextImg").on("click", function (){
      if ($(this).attr("id") === "upNextImgOne") {
        $("#upNextImgOne").appendTo("#opponent");
        $("#opponentImg").hide();
        $("#nextText").empty();
        statMakerOne()
      }
      else if ($(this).attr("id") === "upNextImgTwo") {
        $("#upNextImgTwo").appendTo("#opponent");
        $("#opponentImg").hide();
        $("#nextText").empty();
        statMakerTwo()
      }
    })
  }
  else if (enemyLeft == 1) {
      $(".upNextImg").on("click", function (){
        if ($(this).attr("id") === "upNextImgOne") {
          $("#opponentHP").text(enemyHP);
          $("#opponentAP").text(enemyAP);
          $("#upNextImgOne").appendTo("#opponent");
          $("#opponentImg").hide();
          $("#upNextImgTwo").hide();
          $("#nextText").empty();
          enemyAP = bowserChar.aP;
          enemyHP = bowserChar.hP;
          var statTown = this
          statMakerOne()
        }
        else if ($(this).attr("id") === "upNextImgTwo") {
          $("#opponentHP").text(enemyHP);
          $("#opponentAP").text(enemyAP);
          $("#upNextImgTwo").appendTo("#opponent");
          $("#opponentImg").hide();
          $("#upNextImgOne").hide();
          $("#nextText").empty();
          enemyAP = bowserChar.aP;
          enemyHP = bowserChar.hP;
          var statTown = this
          statMakerTwo()
        }
      })
  }
}

//function for mapping hp and ap throughout gameplay

function statMakerOne(){
  if ($("#upNextImgOne").attr("class") == "battlePageImg upNextImg bowserChecker") {
    $("#opponentHP").text(bowserChar.hP);
    $("#opponentAP").text(bowserChar.aP);
    enemyAP = bowserChar.aP;
    enemyHP = bowserChar.hP;
    battleTime()
  }
  else if ($("#upNextImgOne").attr("class") == "battlePageImg upNextImg warioChecker") {
    $("#opponentHP").text(warioChar.hP);
    $("#opponentAP").text(warioChar.aP);
    enemyAP = warioChar.aP;
    enemyHP = warioChar.hP;
    battleTime()
  }
  else if ($("#upNextImgOne").attr("class") == "battlePageImg upNextImg waluigiChecker") {
    $("#opponentHP").text(waluigiChar.hP);
    $("#opponentAP").text(waluigiChar.aP);
    enemyAP = waluigiChar.aP;
    enemyHP = waluigiChar.hP;
    battleTime()
  }
}

function statMakerTwo(){
  if ($("#upNextImgTwo").attr("class") == "battlePageImg upNextImg bowserChecker") {
    $("#opponentHP").text(bowserChar.hP);
    $("#opponentAP").text(bowserChar.aP);
    enemyAP = bowserChar.aP;
    enemyHP = bowserChar.hP;
    battleTime()
  }
  else if ($("#upNextImgTwo").attr("class") == "battlePageImg upNextImg warioChecker") {
    $("#opponentHP").text(warioChar.hP);
    $("#opponentAP").text(warioChar.aP);
    enemyAP = warioChar.aP;
    enemyHP = warioChar.hP;
    battleTime()
  }
  else if ($("#upNextImgTwo").attr("class") == "battlePageImg upNextImg waluigiChecker") {
    $("#opponentHP").text(waluigiChar.hP);
    $("#opponentAP").text(waluigiChar.aP);
    enemyAP = waluigiChar.aP;
    enemyHP = waluigiChar.hP;
    battleTime()
  }
}
//battle function

function battleTime() {
  console.log("you made it to battle time")
  var songTime = document.getElementById("gameMusicSource");
  songTime.src = "assets/audio/gameSounds.wav";
  console.log("battle time still but also new music?")
  $("#playerHP").text(playerHP);
  $("#opponentHP").text(enemyHP);
  $("#playerAP").text(playerAP);
  $("#opponentAP").text(enemyAP);
  if (enemyHP > 0) {
    $("#attackBtn").on("click", function battlin() {
      enemyHP = enemyHP - playerAP;
      $("#opponentHP").text(enemyHP);
      $("#opponentAP").text(enemyAP);
      playerAP = playerAP + 3;
      $("#playerAP").text(playerAP);
      var checker = playerHP - enemyAP ;
      if (enemyHP > 0 && playerHP > checker) {
        playerHP = playerHP - enemyAP;
        $("#playerHP").text(playerHP);
      }
      else if (playerHP <= 0) {
          $("#selectionPage").hide();
          $("#battlePage").hide();
          $("#losePage").show();
          $("#winPage").hide();
      }
      else if (enemyLeft > 1 && enemyHP <= 0) {
        enemyLeft--
        enemyLeft = enemyLeft
        chooseNext();
      }
      else {
        $("#selectionPage").hide();
        $("#battlePage").hide();
        $("#losePage").hide();
        $("#winPage").show();
      }
    })
  }
}

//function to choose next iterating in the battle function

function chooseNext() {
  console.log("you made it to choose next");
  $("#attackBtn").unbind("click") 
  $("#nextText").text("Choose Next Opponent")
  $("#opponentHP").empty();
  $("#opponentAP").empty();
  oppoDefiner()
}


})