function run() {
document.getElementById("paragraph").innerHTML = "Hello world"
document.getElementById("paragraph").style.backgroundColor = "blue"
document.getElementById("paragraph").style.color = "red"
document.getElementById("paragraph").style.padding = "20px"
randomNum() // run() is linked to the paragraph and its onclick property, so including randomNum() in run() will run randomNum() when you click the paragraph
}

function randomNum() {
    let ran = Math.floor(Math.random() * 10) // let is the same thing as var
    let x =  document.getElementById("random") // variable x is created for the repetitive document.getElementById("random")
   x.innerHTML = ran
   x.style.backgroundColor = "black"
   x.style.color = "green"
   x.style.padding = "50px"
   x.style.textAlign = "center" // aligns random number to the center
}

// random number will show up below paragraph as an h1

// every time you click the paragraph without refreshing, a new random number will generate