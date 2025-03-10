var location1 = 4;
var location2 = 5;
var location3 = 6;



var guess;
var hits = 0;
var guesses = 0;

var isSunk = false;


while(isSunk == false){
    guess = prompt("Multiple Warships spotted prepare for battle! (enter number 0-6)");

    if (guess < 0 || guess > 6){
        alert("We require better alignment!");
    }else {
        guesses = guesses + 1;

        if (guess == location1 || guess == location2 || guess == location3) {
            hits = hits + 1
            
            if (hits = 3) {
                isSunk == true;
                alert("not even abaddon would come back from that capital is ship destroyed!")
            }
        } else {
            alert("You can do better than that!")
        }
    }


}

var stats = "Traitor warship has been reduced to ashes with " + guesses + "shells!!" + "Your total accuracy is" + (3/guesses)