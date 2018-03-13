$(document).ready(function () {

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

//selction js

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
    if ($(".selectionImg").attr("id") === "marioImg") {
      playerAP = 15;
      playerHP = 280;
      console.log(playerAP);
      $("#playerImg").attr("src", "./assets/images/Mario.png")
    }
    else if ($(".selectionImg").attr("id") === "linkImg") {
      playerAP = 20;
      playerHP = 250;
      $("#playerImg").attr("src", "./assets/images/Link.png")
      console.log(playerAP);
    }
    else if ($(".selectionImg").attr("id") === "foxImg") {
      playerAP = 18;
      playerHP = 230;
      console.log(playerAP);
      $("#playerImg").attr("src", "./assets/images/Fox.png")
    }
    if ($(".selectionEnemyImg").attr("id") === "bowserImg") {
      enemyAP = 10;
      enemyHP = 280;
      console.log(enemyAP);
      $("#opponentImg").attr("src", "./assets/images/Bowser.png")
      $("#upNextImgOne").attr("src", "./assets/images/Wario.png")
      $("#upNextImgTwo").attr("src", "./assets/images/Waluigi.png")
    }
    else if ($(".selectionEnemyImg").attr("id") === "warioImg") {
      enemyAP = 18;
      enemyHP = 240;
      console.log(enemyAP);
      $("#opponentImg").attr("src", "./assets/images/Wario.png")
      $("#upNextImgOne").attr("src", "./assets/images/Bowser.png")
      $("#upNextImgTwo").attr("src", "./assets/images/Waluigi.png")
    }
    else if ($(".selectionEnemyImg").attr("id") === "waluigiImg") {
      enemyAP = 15;
      enemyHP = 200;
      console.log(enemyAP);
      $("#opponentImg").attr("src", "./assets/images/Waluigi.png")
      $("#upNextImgOne").attr("src", "./assets/images/Bowser.png")
      $("#upNextImgTwo").attr("src", "./assets/images/Wario.png")
    }
    battleTime()
  }
  else {
    alert("Select your characters first!")
  }
})

//battle attack and counter mega function world sorry will

function battleTime() {
  console.log("you made it to battle time")
  $("#playerHP").text(playerHP);
  $("#opponentHP").text(enemyHP);
  $("#playerAP").text(playerAP);
  $("#opponentAP").text(enemyAP);
  if (enemyHP > 0) {
    $("#attackBtn").on("click", function battlin() {
      enemyHP = enemyHP - playerAP;
      $("#opponentHP").text(enemyHP);
      $("#opponentAP").text(enemyAP);
      console.log(enemyHP);
      playerAP = playerAP + 3;
      $("#playerAP").text(playerAP);
      if (enemyHP > 0 && playerHP > 0) {
        playerHP = playerHP - enemyAP;
        $("#playerHP").text(playerHP);
        if (playerHP <= 0) {
          $("#selectionPage").hide();
          $("#battlePage").hide();
          $("#losePage").show();
          $("#winPage").hide();
        }
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

function chooseNext() {
  console.log("you made it to choose next");
  $("#attackBtn").unbind("click") 
  $("#nextText").text("Choose Next Opponent")
  $("#upNextImgOne").on("click", function() {
    if ($(".selectionEnemyImg").attr("id") === "bowserImg") {
      enemyAP = 10;
      enemyHP = 280;
      $("#opponentHP").text(enemyHP);
      $("#opponentAP").text(enemyAP);
      console.log("heyyy");
      console.log(enemyAP);
      $("#upNextImgOne").appendTo("#opponent");
      $("#opponentImg").hide();
    }
    else if ($(".selectionEnemyImg").attr("id") === "warioImg") {
      enemyAP = 18;
      enemyHP = 240;
      console.log("heyyy");
      console.log(enemyAP);
      $("#opponentHP").text(enemyHP);
      $("#opponentAP").text(enemyAP);
      $("#upNextImgOne").appendTo("#opponent");
      $("#opponentImg").hide();
    }
    else if ($(".selectionEnemyImg").attr("id") === "waluigiImg") {
      enemyAP = 15;
      enemyHP = 200;
      $("#opponentHP").text(enemyHP);
      $("#opponentAP").text(enemyAP);
      console.log("heyyy");
      console.log(enemyAP);

      $("#upNextImgOne").appendTo("#opponent");
      $("#opponentImg").hide();
    }
  $("#nextText").text("");
  battleTime()
  })
  $("#upNextImgTwo").on("click", function() {
    if ($(".selectionEnemyImg").attr("id") === "bowserImg") {
      enemyAP = 10;
      enemyHP = 280;
      $("#opponentHP").text(enemyHP);
      $("#opponentAP").text(enemyAP);
      console.log("heyyy");
      console.log(enemyAP);

      $("#upNextImgTwo").appendTo("#opponent");
      $("#opponentImg").hide();
    }
    else if ($(".selectionEnemyImg").attr("id") === "warioImg") {
      enemyAP = 18;
      enemyHP = 240;
      $("#opponentHP").text(enemyHP);
      $("#opponentAP").text(enemyAP);
      console.log("heyyy");
      console.log(enemyAP);

      $("#upNextImgTwo").appendTo("#opponent");
      $("#opponentImg").hide();
    }
    else if ($(".selectionEnemyImg").attr("id") === "waluigiImg") {
      enemyAP = 15;
      enemyHP = 200;
      $("#opponentHP").text(enemyHP);
      $("#opponentAP").text(enemyAP);
      console.log("heyyy");
      console.log(enemyAP);

      $("#upNextImgTwo").appendTo("#opponent");
      $("#opponentImg").hide();
    }
  $("#nextText").text("");
  battleTime();
  })
}
})