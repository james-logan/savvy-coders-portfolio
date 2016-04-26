//   <p id="also_second_paragraph">This is the second paragraph. It's only here for demonstration
//  </p>
// <span class="italics_guy" style="color: black">new web developer in the Nashville area</span>

var randomSentenceGrabber = function () {
  var randomNumber = Math.random()

  if (randomNumber <= .32) {
    return $("#also_second_paragraph")
  } else if ( randomNumber <= .65) {
    return $("span.italics_guy")
  } else {
    return $(".section h1")
  }
}

// $("whatever").append/.prepend
// $("whatever").css("propertyname", "value")
// $("whatever").show()/.hide()
// $("whatever").text()


var sentenceAdder = function () {
  var randomSentence  = randomSentenceGrabber().text()
  $("body").append("<p>" + randomSentence + "</p>")
}
var i = 1;

while (i <= 5) {
  sentenceAdder()
  i++
}
