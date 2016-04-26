//  document
// querySelector
// querySelectorAll
// textContent
//
// innerHTML
// prompt
//
//
// As a user, when I come to the greeting page, I would like for the site to greet me by name, so that it feels more personal and welcoming.
//   - When a user arrives on the webpage we ask what his name is
//   - When the user inputs his name, we greet him personally in the blue greeting box on the page.
//  - If the user doesn't give us their name, give them a different greeting. "Hey there stranger, welcome to the site!"

var name = prompt("Hey, what is your name?")

console.log(typeof true)

var greetingDiv = document.querySelector("div")

console.log(greetingDiv)
//name = "....."
// name = ""


if (name) {
  var greetingString = "<p class='greeting-text'>Hey " + name + ", welcome to the page!</p>"
} else {
  var greetingString = "<p class='greeting-text'>Hey there stranger, welcome to the site!</p>"
}

greetingDiv.innerHTML = greetingString

// var innerHTMLofGreeting = greetingDiv.innerHTML
//
// console.log(innerHTMLofGreeting)
// "Hey [BLANK], welcome to the page!"
