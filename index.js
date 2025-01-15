



function loadGame(){
    var random1 = Math.floor(Math.random() * 6) + 1;

    if (random1 === 1){
        document.querySelector(".player1").innerHTML = "<div class='dot center'></div>";
    } else if (random1 === 2){
        document.querySelector(".player1").innerHTML = "<div class='dot top-left'></div> <div class='dot bottom-right'></div>";

    } else if (random1 === 3){
        document.querySelector(".player1").innerHTML = "<div class='dot top-left'></div> <div class='dot center'></div> <div class='dot bottom-right'></div>";

    } else if (random1 === 4){
        document.querySelector(".player1").innerHTML = "<div class='dot top-left'></div> <div class='dot top-right'></div> <div class='dot bottom-left'></div> <div class='dot bottom-right'></div>";

    } else if (random1 === 5){
        document.querySelector(".player1").innerHTML = "<div class='dot top-left'></div> <div class='dot top-right'></div> <div class='dot center'></div> <div class='dot bottom-left'></div> <div class='dot bottom-right'></div>";

    } else if (random1 === 6){
        document.querySelector(".player1").innerHTML = "<div class='dot top-left'></div> <div class='dot top-right'></div> <div class='dot center-left'></div> <div class='dot center-right'></div> <div class='dot bottom-left'></div> <div class='dot bottom-right'></div>";

    }


    var random2 = Math.floor(Math.random() * 6) + 1;
        if (random2 === 1){
            document.querySelector(".player2").innerHTML = "<div class='dot center'></div>";
        } else if (random2 === 2){
            document.querySelector(".player2").innerHTML = "<div class='dot top-left'></div> <div class='dot bottom-right'></div>";

        } else if (random2 === 3){
            document.querySelector(".player2").innerHTML = "<div class='dot top-left'></div> <div class='dot center'></div> <div class='dot bottom-right'></div>";

        } else if (random2 === 4){
            document.querySelector(".player2").innerHTML = "<div class='dot top-left'></div> <div class='dot top-right'></div> <div class='dot bottom-left'></div> <div class='dot bottom-right'></div>";

        } else if (random2 === 5){
            document.querySelector(".player2").innerHTML = "<div class='dot top-left'></div> <div class='dot top-right'></div> <div class='dot center'></div> <div class='dot bottom-left'></div> <div class='dot bottom-right'></div>";

        } else if (random2 === 6){
            document.querySelector(".player2").innerHTML = "<div class='dot top-left'></div> <div class='dot top-right'></div> <div class='dot center-left'></div> <div class='dot center-right'></div> <div class='dot bottom-left'></div> <div class='dot bottom-right'></div>";

        }


    if (random1 > random2){
        document.querySelector("h1").textContent = "Player 1 Wins!";
    } else if (random2 > random1){
        document.querySelector("h1").textContent = "Player 2 Wins!";

    } else if (random1 === random2){
        document.querySelector("h1").textContent = "Draw!";

    }

}

function refreshPage(){
    document.querySelector("h1").textContent = "Dice Game";
}

var reset = document.querySelector(".reset");
reset.addEventListener("click", refreshPage);
var play = document.querySelector(".play");
play.addEventListener("click", loadGame);