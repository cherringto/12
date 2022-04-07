function run() {
    let w = document.getElementById("paragraph")
    randomNum() // run() is linked to the paragraph and its onclick property, so including randomNum() in run() will run randomNum() when you click the paragraph
    userNumber() // usernumber() will get the value of the text box and return it as an alert when you click on the run() text
    compareNumbers() // compareNumbers() will compare the random computer number and the user input number when the run() text is clicked
}

function randomNum() {
    let ran = Math.floor(Math.random() * 10) // let is the same thing as var
    let x =  document.getElementById("random") // variable x is created for the repetitive document.getElementById("random")
   x.innerHTML = ran
   x.style.backgroundColor = "#2fb570"
   x.style.color = "lightgray"
   x.style.padding = "20px"
   x.style.textAlign = "center" // aligns random number to the center
   x.style.width = "80%"
   x.style.height = "10vh"
   x.style.fontSize = "xx-large"
   x.style.display = "flex"
   x.style.alignItems = "center"
   x.style.justifyContent = "center"
   return ran // returns random number
}

// random number will show up below paragraph as an h1

// every time you click the paragraph without refreshing, a new random number will generate

function userNumber() {
    let user = document.getElementById("getNumber").value // value means the sequence gets the value of the script with the getNumber id
    let y = document.getElementById("userNumber")
    y.innerHTML = user // When the function runs, the h1 with "userNumber" id will be replaced with the user input number
    y.style.color = "white"
    y.style.backgroundColor = "#25e69f"
    y.style.padding = "20px"
    y.style.textAlign = "center"
    y.style.width = "80%"
    y.style.height = "10vh"
    y.style.display = "flex"
    y.style.alignItems = "center"
    y.style.justifyContent = "center"
    y.style.fontSize = "xx-large"
    return user // returns user input number
}

function compareNumbers() {
    let a = userNumber()
    let b = randomNum()
    let z = document.getElementById("compare")

    if (a != b) {
        z.innerHTML = `The numbers are not the same; The computer got ${b} and the user got ${a}.`
    } else if (a == b) {
        z.innerHTML = `The numbers are the same; The computer got ${b} and the user got ${a}.`
    }
}