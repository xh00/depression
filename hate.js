$("#hateOutput").hide();
$(document).ready(function() {
});
var unmotivationdict = [
    "If you think about it you're useless as a human",
    'Nobody cares',
    "You're a useless human being",
    "Life has no true meaning, you live to die",
    "When you think about it there was no point in this project what-so-ever",
    "Samuel's code... sorry that was too depressing",
    "Matthew's Search History",
    "The Fancy Scrolling on Chrome"
]
function hateSpeech() {
    $("#hateDialog").fadeOut(500);
    $("#hateOutput").delay(500).fadeIn(500);
    var randomHate = Math.floor(Math.random() * (unmotivationdict.length));
    document.getElementById("hateOutput").innerHTML = unmotivationdict[randomHate];
}