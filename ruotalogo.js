function ruotalogo() {
	e = document.getElementById("geenologo");
	e.style.animationIterationCount=1;
	e.style.animationTimingFunction="ease-out";
	e.style.animationDuration="5s";
	var randomNum = Math.floor((Math.random() * 4));
	if (randomNum == 0) {
		e.style.setProperty("--fine-animazione", 160+Math.floor((Math.random() * 45))+"deg");
		setTimeout(function(){window.location= "comics/comics.html"}, 4000);
	} else if (randomNum == 1) { 
		e.style.setProperty("--fine-animazione", "270deg");
		setTimeout(function(){window.location= "illustrations/illustrations.html"}, 4000);
	} else if (randomNum == 2) {
		e.style.setProperty("--inizio-animazione", "180deg");
		e.style.setProperty("--fine-animazione", "360deg");
		setTimeout(function(){window.location= "concepts/concepts.html"}, 4000);
	} else { 
		e.style.setProperty("--fine-animazione", "90deg");
		setTimeout(function(){window.location= "graphics/graphics.html"}, 4000);
	}
}