$(document).ready(function () {

setTimeout(instructions, 500)

function instructions() {
  alert("Welcome to Super Smash Bros Bootcamp RPG Edition!  To play, first select your chracter and your first opponent by clicking on them.  Once the fight begins, click the attack button in order to attack; your enemy will counter also!  Select your opponents in the right order to win.  Once you defeat the first opponent, you'll be able to select who to fight next by clicking on their image!");
}
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
    hP: 270,
    source: "./assets/images/link.png",
}
var foxChar = {
    aP: 19,
    hP: 265,
    source: "./assets/images/fox.png",
}
var bowserChar = {
  aP: 13,
  hP: 280,
  source: "./assets/images/Bowser.png",
}
var warioChar = {
  aP: 18,
  hP: 240,
  source: "./assets/images/Wario.png",
}
var waluigiChar = {
  aP: 16,
  hP: 220,
  source: "./assets/images/Waluigi.png",
}

//write stats to selection DOM.  Could do statically but eh why not
$("#marioSelectAP").text(marioChar.aP)
$("#marioSelectHP").text(marioChar.hP)
$("#linkSelectAP").text(linkChar.aP)
$("#linkSelectHP").text(linkChar.hP)
$("#foxSelectAP").text(foxChar.aP)
$("#foxSelectHP").text(foxChar.hP)
$("#bowserSelectAP").text(bowserChar.aP)
$("#bowserSelectHP").text(bowserChar.hP)
$("#warioSelectAP").text(warioChar.aP)
$("#warioSelectHP").text(warioChar.hP)
$("#waluigiSelectAP").text(waluigiChar.aP)
$("#waluigiSelectHP").text(waluigiChar.hP)


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

//easy reset function
$("#resetBtn").on("click", function(resetGame) {
  location.reload();
})


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
  preBattleTime()
  }
  else if (enemyLeft == 2) {
    $(".upNextImg").on("click", function (){
      if ($(this).attr("id") === "upNextImgOne") {
        $("#upNextImgOne").appendTo("#opponent");
        $("#opponentImg").remove();
        $("#nextText").empty();
        statMakerOne()
      }
      else if ($(this).attr("id") === "upNextImgTwo") {
        $("#upNextImgTwo").appendTo("#opponent");
        $("#opponentImg").remove();
        $("#nextText").empty();
        statMakerTwo()
      }
    })
  }
  else if (enemyLeft == 1) {
      $(".upNextImg").on("click", function (){
        if ($(this).attr("id") === "upNextImgOne") {
          $("#upNextImgOne").appendTo("#opponent");
          $("#upNextImgTwo").remove();
          $("#nextText").empty();
          statMakerOne()
        }
        else if ($(this).attr("id") === "upNextImgTwo") {
          $("#upNextImgTwo").appendTo("#opponent");
          $("#upNextImgOne").remove();
          $("#nextText").empty();
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
  }
  else if ($("#upNextImgOne").attr("class") == "battlePageImg upNextImg warioChecker") {
    $("#opponentHP").text(warioChar.hP);
    $("#opponentAP").text(warioChar.aP);
    enemyAP = warioChar.aP;
    enemyHP = warioChar.hP;
  }
  else if ($("#upNextImgOne").attr("class") == "battlePageImg upNextImg waluigiChecker") {
    $("#opponentHP").text(waluigiChar.hP);
    $("#opponentAP").text(waluigiChar.aP);
    enemyAP = waluigiChar.aP;
    enemyHP = waluigiChar.hP;
  }
  preBattleTime()
  test++;
}
var test = 0;

function statMakerTwo(){
  if ($("#upNextImgTwo").attr("class") == "battlePageImg upNextImg bowserChecker") {
    $("#opponentHP").text(bowserChar.hP);
    $("#opponentAP").text(bowserChar.aP);
    enemyAP = bowserChar.aP;
    enemyHP = bowserChar.hP;
  }
  else if ($("#upNextImgTwo").attr("class") == "battlePageImg upNextImg warioChecker") {
    $("#opponentHP").text(warioChar.hP);
    $("#opponentAP").text(warioChar.aP);
    enemyAP = warioChar.aP;
    enemyHP = warioChar.hP;
  }
  else if ($("#upNextImgTwo").attr("class") == "battlePageImg upNextImg waluigiChecker") {
    $("#opponentHP").text(waluigiChar.hP);
    $("#opponentAP").text(waluigiChar.aP);
    enemyAP = waluigiChar.aP;
    enemyHP = waluigiChar.hP;
  }
  preBattleTime()
  test++;
}
//battle function

function preBattleTime() {
  console.log("you made it to pre battle time")
  var songTime = document.getElementById("gameMusicSource");
  songTime.src = "assets/audio/gameSounds.wav";
  $("#playerHP").text(playerHP);
  $("#opponentHP").text(enemyHP);
  $("#playerAP").text(playerAP);
  $("#opponentAP").text(enemyAP);
  if (test < 2) {
    battleTimeFoReal()
}


function battleTimeFoReal() {
  $("#attackBtn").on("click", function battlin() {
  if (enemyHP > 0) {
      $("#player" ).animate({ "left": "+=13%" }, "slow" );
      $("#player" ).animate({ "left": "-=13%" }, "slow" );
      $("#opponent" ).animate({ "left": "-=13%" }, "slow" );
      $("#opponent" ).animate({ "left": "+=13%" }, "slow" );
      enemyHP = enemyHP - playerAP;
      $("#opponentHP").text(enemyHP);
      playerHP = playerHP - enemyAP;
      $("#playerHP").text(playerHP);
      playerAP = playerAP + 3;
      $("#playerAP").text(playerAP);
      battlerChecker();
  }
  })
}

function battlerChecker() {
  if (enemyLeft > 1 && enemyHP <= 0) {
    enemyLeft--
    enemyHP = 1
    chooseNext();
    }
  else if (enemyLeft === 1 && enemyHP <= 0) {
    console.log(enemyHP)
    $("#selectionPage").hide();
    $("#battlePage").hide();
    $("#losePage").hide();
    $("#winPage").show();
  }
  else if (playerHP <= 0) {
    $("#selectionPage").hide();
    $("#battlePage").hide();
    $("#losePage").show();
    $("#winPage").hide();
  }
  else if (enemyLeft === 1 && enemyHP > 0) {
        console.log("ya here")
        console.log(enemyHP)
        dummyFunk();
  }
}

//function to choose next iterating in the battle function

function chooseNext() {
  console.log("you made it to choose next");
  $("#attackBtn").unbind("click") 
  $("#nextText").text("Choose Next Opponent")
  $("#opponentAP").text("0");
  $("#opponentHP").text("0");
  oppoDefiner()
}

// function dummyFunk
function dummyFunk() {
  preBattleTime();
}

}

})