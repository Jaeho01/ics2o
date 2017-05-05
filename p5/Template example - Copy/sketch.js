function setup() {
  createCanvas(400, 400);
}

function addLoadEvent(func) {
	var oldonload = window.onload;
	if (typeof window.onload != 'function') {
		window.onload = func;
	} else {
		window.onload = function() {
			oldonload();
			func();
		}
	}
}

function trafficLightsAuto(nu,redLight,amberLight,greenLight) {
 var args=trafficLightsAuto.arguments,cnt=args[0];
 if (trafficLightsAuto.lst){
  trafficLightsAuto.lst.style.backgroundColor = 'black';
 }
 if (args[cnt]){
  args[cnt].style.backgroundColor = cnt==1?'red':cnt==2?'orange':'green';
  trafficLightsAuto.lst=args[cnt];
  cnt++;
  trafficLightsAuto.to=setTimeout(function(){  trafficLightsAuto(cnt,redLight,amberLight,greenLight); },1000);
 }
}

function trafficLightsController() {
	if (!document.getElementById) return false;
	var greenLight = document.getElementById("green-light");
	var amberLight = document.getElementById("amber-light");
	var redLight = document.getElementById("red-light");
	var greenControlOn = document.getElementById("green");
	var amberControlOn = document.getElementById("amber");
	var redControlOn = document.getElementById("red");

	greenLight.style.height = "20px";
	greenLight.style.width = "20px";
	greenLight.style.margin = "1px 0";
	greenLight.style.backgroundColor = "black";

	amberLight.style.height = "20px";
	amberLight.style.width = "20px";
	amberLight.style.margin = "1px 0";
	amberLight.style.backgroundColor = "black";

	redLight.style.height = "20px";
	redLight.style.width = "20px";
	redLight.style.margin = "1px 0";
	redLight.style.backgroundColor = "black";

	greenControlOn.onclick = function() {
        clearTimeout(trafficLightsAuto.to);
		greenLight.style.backgroundColor = "green";
		amberLight.style.backgroundColor = "black";
		redLight.style.backgroundColor = "black";
	}

	amberControlOn.onclick = function() {
        clearTimeout(trafficLightsAuto.to);
		greenLight.style.backgroundColor = "black";
		amberLight.style.backgroundColor = "orange";
		redLight.style.backgroundColor = "black";
	}

	redControlOn.onclick = function() {
        clearTimeout(trafficLightsAuto.to);
		greenLight.style.backgroundColor = "black";
		amberLight.style.backgroundColor = "black";
		redLight.style.backgroundColor = "red";
	}
 trafficLightsAuto(1,redLight,amberLight,greenLight)
}

addLoadEvent(trafficLightsController);
addLoadEvent(trafficLightsController);addLoadEvent(trafficLightsController);addLoadEvent(trafficLightsController);



