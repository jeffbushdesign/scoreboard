// <button onclick="onePoint()">+1</button>
// <button onclick="twoPoint()">+2</button>
// <button onclick="threePoint()">+3</button>

// A variable homeScore is assigned which allows us to dynamically change the text that shows the home score
let homeScoreDisplay = document.getElementById("home-score")
let guestScoreDisplay = document.getElementById("guest-score")
// The score starts at 0
let homeScore = 0
let guestScore = 0

// Functions for buttons: 
// 1 point, 
// 2 points, 
// 3 points, 
// Reset score to 0

function addPointsHome(points) {
    // console.log("Add {points} to score")
    homeScore += points
    homeScoreDisplay.textContent = homeScore
}
function addPointsGuest(points) {
    // console.log("Add {points} to score")
    guestScore += points
    guestScoreDisplay.textContent = guestScore
}

// function reset() {
//     console.log("New game started. Score has been reset to 0.")
//     homeScore = 0
//     homeScoreDisplay.textContent = homeScore
    
//     guestScore = 0
//     guestScoreDisplay.textContent = guestScore
// }
