let score1 = 0
let score2 = 0
document.getElementById("home_score").textContent = "Score: " + score1
document.getElementById("away_score").textContent = "Score: " + score2

function addScore(team, points) {
    if (team) {
        score2 += points
        document.getElementById("away_score").textContent = "Score: " + score2
    }
    else {
        score1 += points
        document.getElementById("home_score").textContent = "Score: " + score1

    }
}

function reset(){
    score1 = 0
    score2 = 0
    document.getElementById("home_score").textContent = "Score: " + score1
    document.getElementById("away_score").textContent = "Score: " + score2
    document.getElementById("winner").textContent = ""
}


function winner(){
    let winner = ""
    if (score1 > score2) {
        winner = "Home"
    }
    else if (score1 == score2) {
        winner = "Tie"
        document.getElementById("winner").textContent = "The game is a tie"
    }
    else {
        winner = "Away"
    }
    document.getElementById("winner").textContent = "The winner is " + winner
}