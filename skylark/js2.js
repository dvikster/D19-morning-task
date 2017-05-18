var count = 1;
var img;

function init(){
	img = document.createElement('img');
	img.className = 'myTest';
	img.src='images/'+count+'.jpg';
	document.querySelector('#rotate').appendChild(img);
}

init();

var x1=0;
document.querySelector('#rotate').onmousemove = function(){
	var x2 = event.offsetX;
	if (x2>x1) { //вправо
		count++;
		if (count==70) count = 1;
	}
	else if (x2<x1) {//влево
		count--;
		if (count==0) count = 69;
	}
	img.src='images/'+count+'.jpg';
	x1=x2;
}
