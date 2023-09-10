var randomBomb = Math.floor(Math.random()*9)

var randomTreasure = Math.floor(Math.random()*9)
  
  const treasure = (location) => {
    return alert(location)
  }
const changeToEmoji=(location) => {
    if(location === randomTreasure) {
        document.getElementById(location).innerHTML = "&#x1f308"
        alert("Great job, you've won the game!")
        
      
    }
    else if(location === randomBomb) {
        document.getElementById(location).innerHTML = "&#x2620"
        alert("Game is over, try again!")
    }
    else {
        document.getElementById(location).innerHTML =  "🌴"
    }
}
   