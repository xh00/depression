$("#hateOutput").hide();

var unmotivationdict = [
    "If you think about it you're useless as a human",
    'Nobody cares',
    "You're a useless human being",
    "Life has no true meaning, you live to die",
    "When you think about it there was no point in this project what-so-ever",
    "Samuel's code... sorry that was too depressing",
    "Matthew's Search History",
    "Pi-1",
    "Pi-2",
    "Pi-3",
    "Pi-4",
    "Nintendo's Servers",
    "mist.gq",
    "The Wii U",
    "Tor... sorry",
    "Matthews.ga has a list of people's IPs called DDoS These Idiots.",
    "Firefox cache",
    "The \"Professionals\" are no longer \"on the job\"",
    "samuelthomas.xyz fancybox error",
    "ssl handshake error",
    "A cold day at TWS using the Pi",
    "Ronaldi",
    "Scratch",
    "Apple's price range",
    "1% Battery",
    "EU Privacy Laws (ip)",
    "lenin",
    "stalin",
    "The Fancy Scrolling on Chrome",
    "Just... JavaScript",
    '<video autoplay style="width: 100%;"><source src="media/harry-enfields-patreon.mp4"></video>',
    "Pink PSP",
    '<img src="media/great.png" onhover="awful()" width="200%">',
    
    // @David
    "HMS London",
    
    "Please install Adobe Flash Player to continue<br /><br /><a href=\"javascript:alert('OOPS YOUR SYSTEM HACKED')\"><img src=\"media/get-adobe-flash-player-icon.png\" /></a>",
    "Your BT bill arrived",
    "<s>Mike the depressed giaffe</s>",
    "Your system crashed",
    "\"The wind took it\"",
    "Restart to install updates",
    "Discord's uptime",
    "*<i>Opens Discord</i>* Your system has ran out of memory",
    "Never mind",
    '<video autoplay style="width: 100%;"><source src="media/youre-nothing.mp4"></video>',
    "Windows + Chromium + JS =",
    "depresswi7wy6jbu.onion"
];
function awful() {
    while(true) {
        alert("delete it [tor]");
    }
}
function hateSpeech() {
    $("#hateDialog").fadeOut(500);
    $("#hateOutput").delay(500).fadeIn(500);
    var randomHate = Math.floor(Math.random() * unmotivationdict.length);
    document.getElementById("hateOutput").innerHTML = unmotivationdict[randomHate];
    if (unmotivationdict[randomHate] === 'Windows + Chromium + JS =') throw bsod();
}

var $bsod = $('#bsod'),
    fullscreen = $bsod.parent()[0];
    
function bsod(event) {
    if (fullscreen.webkitRequestFullScreen) fullscreen.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
    else if (fullscreen.mozRequestFullScreen) fullscreen.mozRequestFullScreen();
    else fullscreen.requestFullScreen();
    
    window.addEventListener('keydown', event => event.preventDefault());
}
