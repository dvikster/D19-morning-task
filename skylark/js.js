var x1=0;
var count = 0;
var myImg=[];

document.querySelector('#rotate').onmousemove = function(event){
	event = event || window.event; 
	var x2 = event.offsetX;
	myImg[count].style.display = 'none';
	if (x2>x1) { //вправо
		count++;
		if (count==69) count = 0;
	}
	else if (x2<x1) {//влево
		count--;
		if (count==-1) count = 68;
	}
	myImg[count].style.display = 'block';

	x1=x2;
}

function init(){
	var myblock = document.createElement('div');
	for (var i=1; i<=69; i++){
		var img = document.createElement('img');
		img.className='skylark';
		img.src='images/'+i+'.jpg';
		myblock.appendChild(img);
	}
	document.querySelector('#rotate').appendChild(myblock);
	myImg = document.querySelectorAll('.skylark');
	myImg[count].style.display='block';
}

init();

