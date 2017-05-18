var leftX = 140;
var topY = 140;
var d;
var bug = document.querySelector('#bug');
var timer;

function randomInteger(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    // console.log(rand);
    return Math.abs(rand);
 }

function calculate () {
	// var d = randomInteger(0,3);
	

	if (d == 0) {topY=topY - 10;}
	else if (d == 1 ) leftX = leftX + 10;
	else if (d == 2 ) topY=topY+10;
	else if (d == 3 ) leftX = leftX - 10;
	if (leftX<=0 || leftX>=290 || topY<=0 || topY>=290){
		clearInterval(timer);
		move2();
		//return;
	}
}

function move(){
	calculate();
	bug.style.top = topY +'px';
	bug.style.left = leftX +'px';
}



function move2() {
	var n = randomInteger(0,10);//колво шагов
	d = randomInteger(0,3); // направление
	timer = setInterval(move, 50);
}
move2();