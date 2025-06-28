let gamePattern = [];
let userClickedPattern = [];
let buttonColours = ["red", "blue", "green", "yellow"];
let sound, currentIndex = 0, level = 0, continueGame = true;

$(document).keydown(function (event) { 
    if (gamePattern.length <= 0) {
        nextSequence();
    }
});

$(document).click(function (event) { 
    if (buttonColours.includes(event.target.id)) {
        let userChosenColour = event.target.id;
        userClickedPattern.push(userChosenColour);

        
        checkSequence();

        switch (userChosenColour) {
            case "green":
                
                playSound("green");
                animatePress(userChosenColour);
                break;

            case "red":
                playSound("red");
                animatePress(userChosenColour);
                break;

            case "yellow":
                playSound("yellow");
                animatePress(userChosenColour);
                break;

            case "blue":
                playSound("blue");
                animatePress(userChosenColour);
                break;

            default:
                break;
        }
    }
});

function nextSequence() {
    randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    setTimeout(() => {
        $("#"+randomChosenColour).fadeOut(100).fadeIn(100); 
    playSound(randomChosenColour);
    
    }, 500);
    level+= 1;
    $("h1").first().text("Level " + level);
    $(".retry").hide();
    userClickedPattern = [];
    continueGame = true;
    currentIndex = 0;
}

function playSound(name) {
    sound = new Audio("./sounds/" + name + ".mp3");
    sound.play();
}

function gameOver() {
    $("h1").first().html("Game Over!");
    $(".retry").toggle();
    sound = new Audio("./sounds/wrong.mp3");
    sound.play();

    gamePattern = [];
    userClickedPattern = [];
    level = 0;

    $(".btn").effect("shake", { distance: 10, times: 3 }, 300);

}

function animatePress(currentColour) {
    $("#"+currentColour).addClass("pressed");
    setTimeout(() => {
        $("#"+currentColour).removeClass("pressed");
    }, 100);
}

function checkSequence() {
    if (continueGame) {
        if (gamePattern[currentIndex] === userClickedPattern[currentIndex]) {
            currentIndex++;
        } else {
            continueGame = false;
            gameOver();
        }
    }
    if (currentIndex === gamePattern.length && continueGame == true) {
        nextSequence();
    }
}