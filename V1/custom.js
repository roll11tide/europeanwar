// John's Code Starts Here

function setGif() {
var x = Math.floor((Math.random() * 10) + 1);

if (x === 1) {
     document.getElementById("upperBlock").style.backgroundImage = "url(memes/splashgifs/beaker.gif)";
} else if (x === 2) {
	document.getElementById("upperBlock").style.backgroundImage = "url(memes/splashgifs/trollFace.gif)";
} else if (x === 3) {
	document.getElementById("upperBlock").style.backgroundImage = "url(memes/splashgifs/spongebob.gif)";
} else if (x === 4) {
	document.getElementById("upperBlock").style.backgroundImage = "url(memes/splashgifs/nyancat.gif)";
} else if (x === 5) {
	document.getElementById("upperBlock").style.backgroundImage = "url(memes/splashgifs/dancememe.gif)";
} else if (x === 6) {
	document.getElementById("upperBlock").style.backgroundImage = "url(memes/splashgifs/idk.gif)";
} else if (x === 7) {
	document.getElementById("upperBlock").style.backgroundImage = "url(memes/splashgifs/teeth.gif)";
} else if (x === 8) {
	document.getElementById("upperBlock").style.backgroundImage = "url(memes/splashgifs/lol.gif)";
} else if (x === 9) {
	document.getElementById("upperBlock").style.backgroundImage = "url(memes/splashgifs/happy.gif)";
} else {
	document.getElementById("upperBlock").style.backgroundImage = "url(memes/splashgifs/dancing.gif)";
}
}

window.onload = setGif();
